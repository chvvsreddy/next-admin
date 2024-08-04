import React from 'react'

const LoginPage = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-slate-100'>
      <div className='card-block w-[400px] -mt-20'> 
          <h2 className='text-2xl font-bold pb-4 text-center border-b mb-4' >Login</h2>
          <form>
            <div className="">
              <label className="form-label">Username</label>
              <input type="text" placeholder='Username' name="username" autocomplete="" className="form-input" required/>
            </div>
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input type="text" placeholder='Password' name="password" autocomplete="" className="form-input" required/>
            </div>
            <button type='submit' className='button w-full'>Login</button>
          </form>
      </div>
    </div>
  )
}

export default LoginPage