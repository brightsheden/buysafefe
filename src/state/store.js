import { configureStore } from '@reduxjs/toolkit';
import {  loginReducer, registerReducer } from './Slice/AuthSlice'
import { balanceRducer, profileReducer } from './Slice/UserSlice';
import { confirmOrderReducer, orderReducer, paymentSuccessReducer } from './Slice/OrderSlice';





const store = configureStore({
    reducer:{
        user:loginReducer,
        register:registerReducer,
        profile : profileReducer,
        balance: balanceRducer,
        order:orderReducer,
        payment:paymentSuccessReducer,
        confirmorder:confirmOrderReducer,
  
        
      
    }
})

export default store