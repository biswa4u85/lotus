import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiPostCall, fileUpload } from '../utility/site-apis'
import { toast } from 'react-toastify';

const initialState = {
  isFetching: false,
  error: null,
  homeSettings: {},
  headlines: [],
  cms: {},
  categorys: [],
  newsList: [],
  newsListByCat: [],
  newsDetails: {},
  isSubscribe: false,
}

export const getHomeSettings = createAsyncThunk(
  'auth/getHomeSettings',
  async (params, { rejectWithValue }) => {
    let urls = `doctype=News+Home+Page&fieldname=${JSON.stringify(["key_series_footer", "meta_title", "meta_description", "left_category_one", "left_category_two", "center_category", "right_category_one", "right_category_two", "bottom_category"])}&cmd=frappe.client.get_value`;
    let response = await apiPostCall('/', urls)
    if (response) {
      return response
    }
  }
)

export const getHeadlineList = createAsyncThunk(
  'auth/getHeadlineList',
  async (params, { rejectWithValue }) => {
    let urls = `doctype=News+Headlines&limit_page_length=None&fields=${JSON.stringify(["name", "description"])}&cmd=frappe.client.get_list`;
    let response = await apiPostCall('/', urls)
    if (response) {
      return response
    }
  }
)

export const getNewsCategory = createAsyncThunk(
  'auth/getNewsCategory',
  async (params, { rejectWithValue }) => {
    let urls = `doctype=News+Category&limit_page_length=None&fields=${JSON.stringify(["name", "description"])}&cmd=frappe.client.get_list`;
    let response = await apiPostCall('/', urls)
    if (response) {
      return response
    }
  }
)

export const getNewsList = createAsyncThunk(
  'auth/getNewsList',
  // 'limit_start':0,
  //  'limit_page_length': 10
  async (params, { rejectWithValue }) => {
    let urls = `doctype=Blog+Post&limit_page_length=None&order_by=published_on desc&filters=${JSON.stringify([["Blog Post", "lotus", "like", 1]])}&fields=${JSON.stringify(["name", "title", "news_category", "category_description", "blog_intro", "meta_image", "modified", "blogger"])}&cmd=frappe.client.get_list`;
    let response = await apiPostCall('/', urls)
    if (response) {
      return response
    }
  }
)

export const getNewsListByCat = createAsyncThunk(
  'auth/getNewsListByCat',
  async (params, { rejectWithValue }) => {
    let urls = `doctype=Blog+Post&limit_page_length=None&order_by=published_on desc&filters=${JSON.stringify([["Blog Post", "news_category", "like", params], ["Blog Post", "lotus", "like", 1]])}&fields=${JSON.stringify(["name", "title", "news_category", "category_description", "blog_intro", "meta_image", "modified", "blogger"])}&cmd=frappe.client.get_list`;
    let response = await apiPostCall('/', urls)
    if (response) {
      return response
    }
  }
)

export const getNewsDetails = createAsyncThunk(
  'auth/getNewsDetails',
  async (params, { rejectWithValue }) => {
    let urls = `doctype=Blog+Post&fields=${JSON.stringify(["*"])}&filters=${JSON.stringify([["Blog Post", "name", "like", params]])}&cmd=frappe.client.get_list`;
    let response = await apiPostCall('/', urls)
    if (response) {
      return response[0]
    }
  }
)

export const getCmsDetails = createAsyncThunk(
  'auth/getCmsDetails',
  async (params, { rejectWithValue }) => {
    let urls = `doctype=Web+Page&fields=${JSON.stringify(["*"])}&filters=${JSON.stringify([["Web Page", "route", "like", params]])}&cmd=frappe.client.get_list`;
    let response = await apiPostCall('/', urls)
    if (response) {
      return { name: params, data: response[0] }
    }
  }
)

export const subscribeEmail = createAsyncThunk(
  'auth/subscribeEmail',
  async (params, { rejectWithValue }) => {
    let urls = `email=${params.email}&cmd=frappe.email.doctype.newsletter.newsletter.subscribe`;
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
    resetNews: (state, action) => {
      state.newsDetails = {}
    },
  },
  extraReducers: {
    // Home Settings
    [getHomeSettings.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getHomeSettings.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getHomeSettings.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.homeSettings = action.payload
    },
    // Headline List
    [getHeadlineList.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getHeadlineList.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getHeadlineList.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.headlines = action.payload ? action.payload : []
    },
    // News Category
    [getNewsCategory.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getNewsCategory.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getNewsCategory.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.categorys = action.payload ? action.payload : []
    },
    // News List
    [getNewsList.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getNewsList.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getNewsList.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.newsList = action.payload ? action.payload : []
    },
    // News List By CAt
    [getNewsListByCat.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
      state.newsListByCat = []
    },
    [getNewsListByCat.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getNewsListByCat.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.newsListByCat = action.payload ? action.payload : []
    },
    // News Details
    [getNewsDetails.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getNewsDetails.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getNewsDetails.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.newsDetails = action.payload
    },
    // CMS Details
    [getCmsDetails.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
    },
    [getCmsDetails.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [getCmsDetails.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.cms = { ...state.cms, ...{ [action.payload.name]: action.payload.data } }
    },
    // Subscribe Email
    [subscribeEmail.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
      state.isSubscribe = true
    },
    [subscribeEmail.rejected]: (state, action) => {
      state.isFetching = false
      state.isSubscribe = false
      state.error = action.payload.message
    },
    [subscribeEmail.fulfilled]: (state, action) => {
      toast.success(`Email subscribe successfully`);
      state.isFetching = false
      state.error = null
      state.isSubscribe = false
    },
  }

})

export const { resetNews } = counterSlice.actions
export default counterSlice.reducer
