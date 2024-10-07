// Login.js

import { Alert, Button, Input, Spinner } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';

import { FaClover, FaInfo, FaKey } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../state/Actions/AuthActions';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {

    const [email,setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [message,setMessage] = useState('hi')


    const userData = useSelector((state) => state.user);
    const {isSuccess,isRequest, userInfo,data,errorMessage} = userData
    const history = useNavigate()
    const dispatch = useDispatch()


    const HandleSubmit =(e)=>{
        e.preventDefault()
    
        dispatch(login({email,password}))

    }
    useEffect(() => {
        if (userInfo) {
          // eslint-disable-next-line react/prop-types
          history('/profile')
        }
      }, [history,userInfo])
    
    
  return (
    <div className="min-h-screen flex items-center justify-none md:justify-center bg-white md:bg-gray-100">
      <div className="bg-white p-2 md:p-8 rounded sm:shadow-none md:shadow-md w-full sm:w-96 ">
        <div className='text-center  mb-[70px] text-primary'>
            <h2 className='font-bold text-4xl'>Welcome!</h2>
            <span className='text-blue-800 font-bold text-sm'>Sign in to continue</span>
        </div>
        <form onSubmit={HandleSubmit}> 
            <div className='mb-4'>
                {errorMessage && <Alert color='red' icon={<FaInfo/>}>{errorMessage}</Alert> }
                {isSuccess && <Alert color='green'>SuccessFul</Alert>}
                {isRequest && <Spinner/>}
                


            </div>
          <div className="mb-4">
          
            <input
              type="email"
              id="emai"
              name="emai"
              className="w-full px-4 py-2 border-none rounded-md bg-blue-100 focus:outline-none focus:border-primary !text-black"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
          <Input type='password' variant="outline" label="password"  placeholder="Standard" className="w-full !focus:outline-none !focus:border-primary  !border-none !outline-none  !bg-blue-100 " icon={<FaKey/>}
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
          />

          </div>
          <div className='flex justify-between my-4'>
            <div className='space-x-2'>
            <input type='checkbox'/> <label>Remember me</label>
            </div>
          
            <span className='text-sm font-medium text-gray-500 link'>Forget password?</span>
          </div>
          <Button type='submit' className='btn w-full btn-primary bg-primary'>Login</Button>
         
          <div className='text-center my-2 '>
          
            <span className='font-base text-gray-500  font-semibold'>Dont have an account yet?  <span className='font-bold'>Sign Up</span></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
