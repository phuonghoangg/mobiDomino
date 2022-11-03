import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import blaReducer from './blaSlice'

export default configureStore({
    reducer:{
        // user: userReducer,
        bla:blaReducer,
    }
})
