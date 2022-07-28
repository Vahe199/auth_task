import {createAsyncThunk} from "@reduxjs/toolkit";
import $api, {API_URL} from "../../API";
import axios from "axios";


export const Registration  = createAsyncThunk(
    'auth/registration',
    async (data, thunkAPI) => {
        try {
            const response = await $api.post('registration', data)
            localStorage.setItem('token', response?.data?.accessToken);
            return response.data
        } catch (e) {
            console.log(e?.response?.data.message, 'register error')
            return thunkAPI.rejectWithValue(e?.response?.data?.message)
        }
    }
)

export const Login = createAsyncThunk(
    'auth/login',
    async (data, thunkAPI) => {
        try{
            const response= await $api.post('login', data)
            localStorage.setItem('token', response?.data?.accessToken);
            return response.data
        }
        catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(e?.response ? e?.response?.data?.message : 'incorrect email address or password')
        }
    }
)

export const Logouts = createAsyncThunk(
    'auth/logout',
    async ( thunkAPI) => {
        try{
            const response= await $api.post("logout")
            localStorage.removeItem('token');
            localStorage.removeItem('applicationState');
            // localStorage.clear()
            return response.data
        }
        catch (e) {
            console.log(e.message)
            return thunkAPI.rejectWithValue('404 error')
        }
    }
)


export const CheckAuth = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        try{
            const response= await axios.get(`${API_URL}refresh`,{withCredentials:true})
            localStorage.setItem('token', response?.data?.accessToken);
            return response.data
        }
        catch (e) {
            console.log(e)
            localStorage.clear()
            return thunkAPI.rejectWithValue(e?.response ? e?.response?.data?.message : 'incorrect email address or password')
        }
    }
)

