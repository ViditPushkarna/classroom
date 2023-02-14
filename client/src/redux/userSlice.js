import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "counter",
    initialState: {
        token: true,
        username: "",
        password: "",
        email: "",
        user: {}
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
});

export const {
    setToken,
    setUsername,
    setPassword,
    setEmail,
    setUser
} = userSlice.actions;

export default userSlice.reducer;
