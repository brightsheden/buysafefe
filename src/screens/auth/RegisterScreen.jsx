

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../state/Actions/AuthActions';
import { Alert, Spinner } from '@material-tailwind/react';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [referal, setReferal] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [message,setMessage] = useState('')
  
   
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const user = useSelector((state)=>state.register)
    const {isSuccess,isRequest,userInfo, errorMessage} = user
  
    const onSubmitHandler = (e)=>{
      e.preventDefault()
      if(password !== password2){
  
        setMessage('password does not match')
      }else{
        dispatch(register({name,email,referal,password}))
  
  
      }
      
    }
  
    useEffect(()=>{
      if(userInfo){
        navigate('/profile')
        
      }
  
  
    },[isSuccess,userInfo,navigate])
  return (
    <div className="min-h-screen flex items-center justify-none md:justify-center bg-white md:bg-gray-100">
      <div className="bg-white p-2 md:p-8 rounded sm:shadow-none md:shadow-md w-full sm:w-96 ">
        <div className='text-center  mb-[70px]'>
            <h2 className='font-bold text-4xl'>Welcome!</h2>
            <p className='text-gray-500 font-bold ml-8 text-[12px]  w-[80%]'>Please provide the following details for your new account</p>
        </div>
        <form onSubmit={onSubmitHandler}>
            <div className='mb-4'>
            {errorMessage && <Alert color='red' icon={<FaInfo/>}>{errorMessage}</Alert> }
                {isSuccess && <Alert color='green'>SuccessFul</Alert>}
                {isRequest && <Spinner/>}
            </div>

        <div className="mb-4">
          
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-4 py-2 border-none rounded-md bg-blue-100 focus:outline-none focus:border-primary"
            placeholder="Enter your username"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
          <div className="mb-4">
          
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border-none rounded-md bg-blue-100 focus:outline-none focus:border-primary"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
           
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border-none rounded-md bg-blue-100 focus:outline-none focus:border-primary"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
           
           <input
             type="password"
             id="password"
             name="password"
             className="w-full px-4 py-2 border-none rounded-md bg-blue-100 focus:outline-none focus:border-primary"
             placeholder="Enter your password"
             value={password2}
             onChange={(e)=>setPassword2(e.target.value)}
           />
         </div>
         
          <button
            type="submit"
            className="btn w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Register
          </button>
          <div className='text-center my-2 '>
            <span className='font-base text-gray-500  font-semibold'>Already have an account? <span className='font-bold'>Login</span></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
