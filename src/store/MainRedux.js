import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllDataApi, getQueryDataApi, postCmdApi, postMethodApi } from '../utility/frappe-apis'
import { toast } from 'react-toastify';
import Config from "../common/Config";

const siteName = 'lotus'

const doctypeNewsHomePage = 'News Home Page Lotus'
const fieldsNewsHomePage = ["meta_title", "meta_description", "left_category_one", "left_category_two", "center_category", "right_category_one", "right_category_two", "bottom_category"]

const doctypeWebPage = 'Web Page'
const fieldsWebPage = ["*"]

const doctypeNewsHeadlines = 'News Headlines'
const fieldsNewsHeadlines = ["name", "description"]

const doctypeBlogCategory = 'Blog Category'
const fieldsBlogCategory = ["name", "title", "status", "meta_title_lotus", "meta_description_lotus"]

const doctypeBlogPost = 'Blog Post'
const fieldsBlogPost = ["name", "title", "blog_category", "category_description", "blog_intro", "meta_image", "published_on", "published_time", "blogger"]

const initialState = {
  isFetching: false,
  error: null,
  token: Config.token,
  homeSettings: {},
  headlines: [],
  cms: {},
  categorys: [],
  newsList: [],
  newsListByCat: {},
  newsDetails: {},
  isSubscribe: false,
  isAddComment: false,
  searchValue: [],
}

export const getHomeSettings = createAsyncThunk(
  'auth/getHomeSettings',
  async (params, { rejectWithValue }) => {
    const settings = await getQueryDataApi(`select field,value from tabSingles where doctype = '${doctypeNewsHomePage}'`)
    const settingCategory = await getQueryDataApi("select title from `tabNews Category Child` where parent= 'News Home Page Lotus' AND parentfield= 'footer_category'")
    const settingUsefulLinks = await getQueryDataApi("select title from `tabWeb Page Child` where parent= 'News Home Page Lotus' AND parentfield= 'footer_useful_link'")
    let response = {}
    for (let item of settings) {
      response[item.field] = item.value
    }
    response['category'] = settingCategory
    response['usefulLinks'] = settingUsefulLinks
    return response
  }
)

export const getHeadlineList = createAsyncThunk(
  'auth/getHeadlineList',
  async (params, { rejectWithValue }) => {
    const response = await getAllDataApi({ doctype: doctypeNewsHeadlines, fields: fieldsNewsHeadlines, filters: [[doctypeNewsHeadlines, siteName, "=", 1]], ...params })
    if (response.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)

export const getNewsCategory = createAsyncThunk(
  'auth/getNewsCategory',
  async (params, { rejectWithValue }) => {
    const response = await getAllDataApi({ doctype: doctypeBlogCategory, fields: fieldsBlogCategory, ...params })
    if (response.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)

export const getNewsList = createAsyncThunk(
  'auth/getNewsList',
  async (params, { rejectWithValue }) => {
    const response = await getAllDataApi({ doctype: doctypeBlogPost, fields: fieldsBlogPost, filters: [[doctypeBlogPost, siteName, "=", 1]], orderBy: 'published_on desc', ...params })
    if (response.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data
  }
)

export const getNewsListByCat = createAsyncThunk(
  'auth/getNewsListByCat',
  async (params, { rejectWithValue }) => {
    const response = await getAllDataApi({ doctype: doctypeBlogPost, fields: fieldsBlogPost, filters: [[doctypeBlogPost, siteName, "=", 1], [doctypeBlogPost, "blog_category", "=", params.Id]], orderBy: 'published_on desc', ...params })
    if (response.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response
  }
)
export const searchPost = createAsyncThunk(
  'auth/searchPost',
  async (params, { rejectWithValue }) => {
    const response = await getAllDataApi({ doctype: doctypeBlogPost, fields: fieldsBlogPost, filters: [[doctypeBlogPost, siteName, "=", 1], [doctypeBlogPost, "title", "like", `%${params.name}%`]], orderBy: 'published_on desc', ...params })
    if (response.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response
  }
)

export const getNewsDetails = createAsyncThunk(
  'auth/getNewsDetails',
  async (params, { rejectWithValue }) => {
    const response = await getAllDataApi({ doctype: doctypeBlogPost, fields: ["*"], filters: [[doctypeBlogPost, "name", "=", params.pId]], ...params })
    if (response.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response.data[0]
  }
)

export const getCmsDetails = createAsyncThunk(
  'auth/getCmsDetails',
  async (params, { rejectWithValue }) => {
    const response = await getAllDataApi({ doctype: doctypeWebPage, fields: fieldsWebPage, filters: [[doctypeWebPage, "name", "=", params.Id]], ...params })
    if (response.status === 'error') {
      return rejectWithValue(response.data)
    }
    return { name: params.Id, data: response.data[0] }
  }
)

export const subscribeEmail = createAsyncThunk(
  'auth/subscribeEmail',
  async (params, { rejectWithValue }) => {
    const response = await postCmdApi({ cmd: 'frappe.email.doctype.newsletter.newsletter.subscribe', ...params })
    if (response.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response
  }
)

export const addComments = createAsyncThunk(
  'auth/addComments',
  async (params, { rejectWithValue }) => {
    const response = await postMethodApi({ method: 'frappe.desk.form.utils.add_comment', reference_doctype: doctypeBlogPost, ...params })
    if (response.status === 'error') {
      return rejectWithValue(response.data)
    }
    return response
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
      state.newsList = action.payload
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
      state.newsListByCat = action.payload
    },
    //searchPost
    [searchPost.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
      state.newsListByCat = []
    },
    [searchPost.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [searchPost.fulfilled]: (state, action) => {
      state.isFetching = false
      state.error = null
      state.searchValue = action.payload
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
    // Add Comments
    [addComments.pending]: (state, action) => {
      state.isFetching = true
      state.error = null
      state.isAddComment = true
    },
    [addComments.rejected]: (state, action) => {
      state.isFetching = false
      state.error = action.payload.message
    },
    [addComments.fulfilled]: (state, action) => {
      toast.success(`add Comment successfully`);
      state.isFetching = false
      state.error = null
      state.isAddComment = false
    },
  }

})

export const { resetNews } = counterSlice.actions
export default counterSlice.reducer