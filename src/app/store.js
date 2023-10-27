import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../task/task_slice'

export default configureStore({
    reducer: {
        task : taskReducer,
    }
})