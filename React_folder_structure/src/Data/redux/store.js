import { configureStore } from '@reduxjs/toolkit'
import  loginReducer from './slice/login/LoginSlice'
import  BlogReducer from './slice/Blog/BlogSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'   



// const rootReducer = combineReducers({
//        login: loginReducer,
//        blogs: BlogReducer,
// })

const rootReducer = combineReducers({
         login: loginReducer,
         blogs:  BlogReducer
})


const persistConfig = {
  key: 'root',
  storage,
}   
 
const persistedReducer = persistReducer(persistConfig, rootReducer )


export const store = configureStore({
  reducer: persistedReducer,  
})

export const persistor = persistStore(store)