import { configureStore } from '@reduxjs/toolkit'
import courseSlice from './courseSlice';
import homeSlice from './homeSlice';
import userSlice from './userSlice'

export default configureStore({
    reducer: {
        user: userSlice,
        home: homeSlice,
        course: courseSlice
    }
});