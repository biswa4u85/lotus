import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiPostCall, fileUpload } from '../utility/site-apis'

const initialState = {
  isFetching: false,
  error: null,
  templates: []
}

export const getTemplates = createAsyncThunk(
  'auth/getTemplates',
  async (params, { rejectWithValue }) => {
    let urls = `doctype=Chat+Template&filters=%7B%22brand%22%3A%22${params}%22%7D&limit_page_length=None&fields=%5B%22name%22%2C%22brand%22%2C%22template_message%22%5D&cmd=frappe.client.get_list`;
    let response = await apiPostCall('/', urls)
    if (response) {
      return response
    }
  }
)


export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginRedirectUrl: (state, action) => {
      state.loginRedirectUrl = action.payload
    },
    logout: (state, action) => {
      state.user = null
      state.token = null
    },
  },
  extraReducers: {
    // Get Templates
    [getTemplates.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getTemplates.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getTemplates.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.templates = action.payload
    },
  }

})

export const { logout, setLoginRedirectUrl } = counterSlice.actions
export default counterSlice.reducer
