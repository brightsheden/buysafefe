import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createLink = createAsyncThunk('link/create', async ({name,amount,description},{getState}) => {
    const state = getState();

  
    try {
        
       
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `http://127.0.0.1:8000/api/v1/order/create-order/`,
            {name,amount,description},
            config
        );
    
        return data;

    } catch (error) {
        return error.message;
    }
});

export const linkDetail = createAsyncThunk('link/detail', async (id,{getState}) => {
    const state = getState();

  
    try {
        
       
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/v1/order/${id}`,config
        );
    
        return data;

    } catch (error) {
        return error.message;
    }
});

export const IsPaid = createAsyncThunk('link/paymenmt', async (id,{ getState }) => {
    const state = getState();
    
    
  
    try {
      const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${state.user.userInfo.token}`
        }
    }
  
      const { data } = await axios.put(`http://127.0.0.1:8000/api/v1/order/paid/${id}/`,null, config);
      return data;
    } catch (error) {
      return error.message;
    }
  });



  export const confirmOrder = createAsyncThunk('link/confirm', async (id,{ getState ,rejectWithValue}) => {
    const state = getState();
    
    
  
    try {
      const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${state.user.userInfo.token}`
        }
    }
  
      const { data } = await axios.put(`http://127.0.0.1:8000/api/v1/order/delivered/${id}/`,null, config);
      return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
  });
  

  export const myLinks = createAsyncThunk('link/list', async (arg,{getState, rejectWithValue}) => {
    const state = getState();

  
    try {
        
       
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${state.user.userInfo.token}`
            }
        }

        const { data } = await axios.get(
            'http://127.0.0.1:8000/api/v1/order/myorder/',config
        );
    
        return data;

    } catch (error) {
        return rejectWithValue(error.message);
    }
});