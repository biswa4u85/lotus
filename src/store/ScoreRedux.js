import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllDataApi } from '../utility/frappe-apis'

const doctypeFixtures = 'Live Score Fixtures'
const fieldsFixtures = ["*"]

const doctypeSeries = 'Live Score Series'
const fieldsSeries = ["*"]

const initialState = {
  isFetching: false,
  error: null,
  series: [],
  fixtures: [],
  scorecard: {},
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
      item.home = JSON.parse(item.home)
      item.away = JSON.parse(item.away)
    }
    return response.data
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
      state.error = action.payload.message
    },
    [getHomeFixtures.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.fixtures = action.payload
    },
  }

})

export const { getScorecard } = counterSlice.actions
export default counterSlice.reducer