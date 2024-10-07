import { createSlice } from "@reduxjs/toolkit";
import { editoprofile, profile, userbalance } from "../Actions/UserActions";









const userProfileFromStorage =localStorage.getItem('userProfile') ?
    JSON.parse(localStorage.getItem("userProfile")) : null



export const profileSlice = createSlice({
    name: "profile",
    initialState:{
      userProfile:  userProfileFromStorage,
      isRequest: false,
      isSuccess: false,
      errorMessage: "",
  
    },
    reducers: {
      resetProfileState: (state) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = "";
        state.data = null;
        state.userProfile =[]
        localStorage.removeItem('userInfo');
        localStorage.removeItem('userProfile');
  
   
      },
    },
  
    
    extraReducers: (builder) => {
      builder
        .addCase(profile.pending, (state) => {
          state.isRequest = true;
        })
        .addCase(profile.fulfilled, (state, action) => {
          state.isRequest = false;
          state.isSuccess = true;
          state.data = action.payload;
          state.userProfile = state.data
        })
        .addCase(profile.rejected, (state, action) => {
          state.isRequest = false;
          state.isSuccess = false;
          state.errorMessage = action.payload;
        })
        
  
    },
  });


  export const balanceSlice = createSlice({
    name: "balance",
    initialState:{

      isRequest: false,
      isSuccess: false,
      errorMessage: "",
  
    },
    reducers: {
      resetUserbalanceState: (state) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = "";
        state.data = null;
      
  
   
      },
    },
  
    
    extraReducers: (builder) => {
      builder
        .addCase(userbalance.pending, (state) => {
          state.isRequest = true;
        })
        .addCase(userbalance.fulfilled, (state, action) => {
          state.isRequest = false;
          state.isSuccess = true;
          state.data = action.payload;
      
        })
        .addCase(userbalance.rejected, (state, action) => {
          state.isRequest = false;
          state.isSuccess = false;
          state.errorMessage = action.payload;
        })
        
  
    },
  });


  export const editMyProfileSlice = createSlice({
    name: "editprofile",
    initialState:{

      isRequest: false,
      isSuccess: false,
      errorMessage: "",
  
    },
    reducers: {
      resetEditProfileState: (state) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.data = null;
        
      },

    },
  
    
    extraReducers: (builder) => {
      builder
        .addCase(editoprofile.pending, (state) => {
          state.isRequest = true;
        })
        .addCase(editoprofile.fulfilled, (state, action) => {
          state.isRequest = false;
          state.isSuccess = true;
          state.data = action.payload;
      
        })
        .addCase(editoprofile.rejected, (state, action) => {
          state.isRequest = false;
          state.isSuccess = false;
          state.errorMessage = action.payload;
        })
        
  
    },
  });
  

export const profileReducer = profileSlice.reducer
export const balanceRducer = balanceSlice.reducer
export const editeProfileRducer = editMyProfileSlice.reducer
export const {resetEditProfileState} = editMyProfileSlice.actions

