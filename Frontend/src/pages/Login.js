import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../components/Input/PasswordInput';

function Login() {
  return (
    <>
      <Navbar/>
      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={()=>{

          }}>
            <h4 className='text-2xl mb-2'>Login</h4>
            <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
    
            <input type='text' placeholder='Email' className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none'/>
            
            </div>
            <PasswordInput />
            <button type='submit' className='btn-primary'>
              Login
            </button>
            <p className='text-sm text-center mt-4'>
              Not Registered Yet?{" "}
              <Link to="/singnup" className='font-medium text-primary underline'>
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
export default Login;