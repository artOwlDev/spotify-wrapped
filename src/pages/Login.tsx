

import React from 'react'
import {FaSpotify} from 'react-icons/fa'

const Login = () => {
  return (
    <div className='bg-primaryBg'>
        <div className='flex h-screen justify-center items-center' id='login-container'>
            <div className='bg-slate-50 h-100 w-96 flex gap-1 justify-around flex-col items-center' id='login-card'>
                <FaSpotify/>

                <button>
                    hi
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login