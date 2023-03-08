import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
    name: "counter",
    initialState: {
        course: {},
        posts: []
    },
    reducers: {
        setCourse: (state, action) => {
            state.course = action.payload;
        },
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
    },
});

export const {
    setCourses,
    setPosts,
    addPost
} = courseSlice.actions;

export default courseSlice.reducer;
