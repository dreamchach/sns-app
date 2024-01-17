import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from 'redux-persist/lib/storage/session'
import authReducer from './authSlice'

const persistConfig = {
    key : 'root',
    storage
}
const rootReducer = combineReducers({
    auth: authReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer : persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export const persistor = persistStore(store)