import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllDataApi, getLiveDataDataApi } from '../utility/frappe-apis'

const doctypeFixtures = 'Flash All Events'
const fieldsFixtures = ["*"]

const doctypeSeries = 'Live Score Series'
const fieldsSeries = ["*"]

const initialState = {
  isFetching: false,
  error: null,
  series: [],
  fixtures: [],
  scorecard: {},
  highlights: {},
}

export const getSeries = createAsyncThunk(
  'score/getSeries',
  async (params, { rejectWithValue }) => {
    const response = await getAllDataApi({ doctype: doctypeSeries, fields: fieldsSeries, ...params })
    if (response.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)

export const getHomeFixtures = createAsyncThunk(
  'score/getHomeFixtures',
  async (params, { rejectWithValue }) => {
    const response = await getAllDataApi({ doctype: doctypeFixtures, fields: fieldsFixtures, filters: params.filters, orderBy: 'date asc', ...params })
    if (response.status === 'error') {
      return rejectWithValue(response.data)
    }
    for (let item of response.data) {
      item.tournament_details = item.tournament_details ? JSON.parse(item.tournament_details) : {}
      item.event_details = item.event_details ? JSON.parse(item.event_details) : {}
    }
    return response.data
  }
)


export const getHighlights = createAsyncThunk(
  'score/getHighlights',
  async (params, { rejectWithValue }) => {
    const response = await getLiveDataDataApi({ ...params })
    if (response.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.results
  }
)


export const counterSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    getScorecard: (state, action) => {
      state.scorecard = { ...state.scorecard, ...action.payload }
    },
  },
  extraReducers: {
    // Series
    [getSeries.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getSeries.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getSeries.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.series = action.payload
    },
    // Fixtures
    [getHomeFixtures.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
      state.fixtures = []
    },
    [getHomeFixtures.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload
    },
    [getHomeFixtures.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.fixtures = action.payload
    },
    // Highlights
    [getHighlights.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
      state.fixtures = []
    },
    [getHighlights.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getHighlights.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.highlights = action.payload
    },
  }

})

export const { getScorecard } = counterSlice.actions
export default counterSlice.reducer