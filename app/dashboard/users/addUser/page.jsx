import React from 'react'

const AddUser = () => {
  return (
    <div className='card-block'>
      <form>
        <div classname="my-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-8">        
            <div classname="sm:col-span-3">
              <label classname="form-label">Username</label>
              <input type="text" placeholder='Username' name="username" autocomplete="" classname="form-input" required/>
            </div> 
            <div classname="sm:col-span-3">
              <label classname="form-label">Email</label>
              <input type="email" placeholder='Email' name="email" autocomplete="" classname="form-input" required/>
            </div> 
            <div classname="sm:col-span-3">
              <label classname="form-label">Password</label>
              <input type="password" placeholder='Password' name="password" autocomplete="" classname="form-input" required/>
            </div>  
            <div classname="sm:col-span-3">
              <label classname="form-label">Phone</label>
              <input type="phone" placeholder='Phone' name="phone" autocomplete="" classname="form-input" required/>
            </div>  
            <div classname="sm:col-span-3">
              <label classname="form-label">Select User Type</label>
              <select id="isAdmin" name="isAdmin" classname="form-input">
                <option value='false'>Is Admin?</option>
                <option value='true'>Yes</option>
                <option value='false'>No</option>                
              </select>
            </div> 
            <div classname="sm:col-span-3">
              <label classname="form-label">Status</label>
              <select id="isActive" name="isActive" classname="form-input">
                <option value='true'>is Active?</option>
                <option value='true'>Yes</option>
                <option value='false'>No</option>                
              </select>
            </div> 
            <div classname="sm:col-span-6">
            <label classname="form-label">Address</label>
              <textarea name="address" id="" placeholder='Address' classname="form-input"></textarea>
            </div>  
        </div> 
        <button type='submit' className='button'>Add User</button>  
      </form> 
    </div>
  )
}

export default AddUser