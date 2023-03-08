import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "counter",
    initialState: {
        courses: []
    },
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload;
        },
        addCourse: (state, action) => {
            state.courses.push(action.payload);
        },
    },
});

export const {
    setCourses,
    addCourse,
} = homeSlice.actions;

export default homeSlice.reducer;
