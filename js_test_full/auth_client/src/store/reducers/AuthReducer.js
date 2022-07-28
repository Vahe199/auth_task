import {createSlice} from "@reduxjs/toolkit"
import {CheckAuth, Login, Logouts, Registration} from "../actions/AuthActions";


const initialState = {
    isAuth:false,
    users: {},
    load: false,
    success:false,
    error: ''
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset(state) {
           return initialState
        }
    },
    extraReducers: {
        [Registration.pending]: (state) => {
            state.load = true
            state.load = true
        },
        [Registration.fulfilled]: (state, action) => {
            state.load = false
            state.users = action?.payload?.user
            state.error = false
            state.success = true
            state.isAuth = true
        },
        [Registration.rejected]: (state, action) => {
            state.load = false
            state.isAuth = false
            state.error = true
            state.message = action.payload
        },
        [Login.pending]: (state) => {
            state.load = true
        },
        [Login.fulfilled]: (state, action) => {
            state.load = false
            state.users = action?.payload?.user
            state.error = false
            state.success = true
            state.isAuth = true
        },
        [Login.rejected]: (state, action) => {
            state.load = false
            state.isAuth = false
            state.error = true
            state.message = action.payload
            state.auth = false
        },
        [CheckAuth.pending]: (state) => {
            state.load = true
        },
        [CheckAuth.fulfilled]: (state, action) => {
            state.load = false
            state.users = action?.payload?.user
            state.error = false
            state.success = true
            state.isAuth = true
        },
        [CheckAuth.rejected]: (state, action) => {
            state.load = false
            state.isAuth = false
            state.error = true
            state.message = action.payload
            state.auth = false
        },
        [Logouts.pending]: (state) => {
            state.load = true
        },
        [Logouts.fulfilled]: () => initialState,

        [Logouts.rejected]: (state, action) => {
            state.load = false
            state.isAuth = false
            state.error = action.payload
            state.auth = false
        },
    }

})

export const {reset} = authSlice.actions


export default authSlice.reducer
