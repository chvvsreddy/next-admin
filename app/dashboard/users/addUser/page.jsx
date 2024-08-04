import { addUser } from '@/app/lib/actions'
import React from 'react'

const AddUser = () => {
  return (
    <div className='card-block'>
      <form action={addUser}>
        <div className="my-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-8">        
            <div className="sm:col-span-3">
              <label className="form-label">Username</label>
              <input type="text" placeholder='Username' name="username" autocomplete="" className="form-input" required/>
            </div> 
            <div className="sm:col-span-3">
              <label className="form-label">Email</label>
              <input type="email" placeholder='Email' name="email" autocomplete="" className="form-input" required/>
            </div> 
            <div className="sm:col-span-3">
              <label className="form-label">Password</label>
              <input type="password" placeholder='Password' name="password" autocomplete="" className="form-input" required/>
            </div>  
            <div className="sm:col-span-3">
              <label className="form-label">Phone</label>
              <input type="phone" placeholder='Phone' name="phone" autocomplete="" className="form-input" required/>
            </div>  
            <div className="sm:col-span-3">
              <label className="form-label">Select User Type</label>
              <select id="isAdmin" name="isAdmin" className="form-input">
                <option value='false'>Is Admin?</option>
                <option value='true'>Yes</option>
                <option value='false'>No</option>                
              </select>
            </div> 
            <div className="sm:col-span-3">
              <label className="form-label">Status</label>
              <select id="isActive" name="isActive" className="form-input">
                <option value='true'>is Active?</option>
                <option value='true'>Yes</option>
                <option value='false'>No</option>                
              </select>
            </div> 
            <div className="sm:col-span-6">
            <label className="form-label">Address</label>
              <textarea name="address" id="" placeholder='Address' className="form-input"></textarea>
            </div>  
        </div> 
        <button type='submit' className='button'>Add User</button>  
      </form> 
    </div>
  )
}

export default AddUser