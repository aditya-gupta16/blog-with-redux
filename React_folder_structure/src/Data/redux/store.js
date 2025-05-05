import { configureStore } from '@reduxjs/toolkit'
import  loginReducer from './slice/login/LoginSlice'
import  BlogReducer from './slice/Blog/BlogSlice'

export const store = configureStore({
  reducer: {
     login: loginReducer,
     blogs: BlogReducer,
  },
})

