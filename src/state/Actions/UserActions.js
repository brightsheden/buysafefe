import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
//import localforage from "localforage";



export const profile = createAsyncThunk('user/profile', async (arg,{getState, rejectWithValue}) => {
    const state = getState();
    console.log(state.user.userInfo.token)
  
    try {
        
       

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.get(
            'http://127.0.0.1:8000/api/v1/user/profile/',
          
            config
        );   
        localStorage.setItem('userProfile', JSON.stringify(data));
    
        return data;

    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const userbalance = createAsyncThunk('user/balance', async (arg,{getState, rejectWithValue}) => {
    const state = getState();
  
    try {
        
       

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.get(
            'http://127.0.0.1:8000/api/v1/user/balance/',
          
            config
        );
    
        return data;

    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const editoprofile = createAsyncThunk('user/editprofile', async ({image,username,email,phone},{getState, rejectWithValue}) => {
    const state = getState();
  
    try {
        
       

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.put(
            '/api/user/editProfile/',
            {"image":image,"username":username,"email":email,"phone":phone},
          
            config
        );
    
        return data;

    } catch (error) {
        return rejectWithValue(error.message);
    }
});