import getSingleMango from '../reducers/getSingleMango.jsx'
import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../reducers/AuthSlice.jsx'
import getMango from '../reducers/getMango.jsx'
import SortSlice from '../reducers/SortSlice.jsx'


const store = configureStore({
    reducer: {
        getMango,
        getSingleMango,
        AuthSlice,
        SortSlice
    }
})

export default store