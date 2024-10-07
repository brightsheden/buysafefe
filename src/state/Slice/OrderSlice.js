import { createSlice } from "@reduxjs/toolkit";
import { IsPaid, confirmOrder, createLink, linkDetail, myLinks } from "../Actions/OrderActions";











export const orderSlice = createSlice({
    name: "link",
    initialState:{

      isRequest: false,
      isSuccess: false,
      linkSucess:false,
      errorMessage: "",
      linkdetail:[],
      links:[]
  
    },
    reducers: {
      resetOrderState: (state) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = "";
        state.data = null;
     
  
   
      },
    },
  
    
    extraReducers: (builder) => {
      builder
        .addCase(createLink.pending, (state) => {
          state.isRequest = true;
        })
        .addCase(createLink.fulfilled, (state, action) => {
          state.isRequest = false;
          state.isSuccess = true;
          state.data = action.payload;
        
        })
        .addCase(createLink.rejected, (state, action) => {
          state.isRequest = false;
          state.isSuccess = false;
          state.errorMessage = action.payload;
        })

        
        .addCase(linkDetail.pending, (state) => {
            state.isRequest = true;
          })
          .addCase(linkDetail.fulfilled, (state, action) => {
            state.isRequest = false;
            state.isSuccess = true;
            state.linkdetail = action.payload;
          
          })
          .addCase(linkDetail.rejected, (state, action) => {
            state.isRequest = false;
            state.isSuccess = false;
            state.errorMessage = action.payload;
          })


          .addCase(myLinks.pending, (state) => {
            state.isRequest = true;
          })
          .addCase(myLinks.fulfilled, (state, action) => {
            state.isRequest = false;
            state.linkSucess= true;
            state.links = action.payload;
          
          })
          .addCase(myLinks.rejected, (state, action) => {
            state.isRequest = false;
            state.linkSucess = false;
            state.errorMessage = action.payload;
          })
          
    
  
    },
  });


  export const paymentSuccessSlice = createSlice({
    name: "payment",
    initialState:{

      isRequest: false,
      isSuccess: false,
      errorMessage: "",
  
    },
    reducers: {
      resetPaymentState: (state) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = "";
        state.data = null;
      },

    },
  
    
    extraReducers: (builder) => {
      builder
        .addCase(IsPaid.pending, (state) => {
          state.isRequest = true;
        })
        .addCase(IsPaid.fulfilled, (state, action) => {
          state.isRequest = false;
          state.isSuccess = true;
          state.data = action.payload;
      
        })
        .addCase(IsPaid.rejected, (state, action) => {
          state.isRequest = false;
          state.isSuccess = false;
          state.errorMessage = action.payload;
        })
        
  
    },
  });


  export const confirmOrderSlice = createSlice({
    name: "confirm order",
    initialState:{

      isRequest: false,
      isSuccess: false,
      errorMessage: "",
  
    },
    reducers: {
      resetConfirmOrderState: (state) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = "";
        state.data = null;
      },

    },
  
    
    extraReducers: (builder) => {
      builder
        .addCase(confirmOrder.pending, (state) => {
          state.isRequest = true;
        })
        .addCase(confirmOrder.fulfilled, (state, action) => {
          state.isRequest = false;
          state.isSuccess = true;
          state.data = action.payload;
      
        })
        .addCase(confirmOrder.rejected, (state, action) => {
          state.isRequest = false;
          state.isSuccess = false;
          state.errorMessage = action.payload;
        })
        
  
    },
  });




  

export const orderReducer = orderSlice.reducer

export const {resetOrderState} = orderSlice.actions
export const paymentSuccessReducer = paymentSuccessSlice.reducer
export const {resetPaymentState} = paymentSuccessSlice.actions

export const confirmOrderReducer = confirmOrderSlice.reducer
export const { resetConfirmOrder} = confirmOrderSlice.actions

