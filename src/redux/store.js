import { configureStore } from '@reduxjs/toolkit'
import issuesReducer from './issues'

export default configureStore({
    reducer: {
        issues: issuesReducer
    },
})