import Image from 'next/image'


const SingleUserPage = () => {
  return (
    <div className='card-block'>
        <div className="my-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">        
            <div className="sm:col-span-2">
                <Image src="/noavatar.png" width={300} height={300}  alt=''/>
            </div>
            <div className="sm:col-span-4">
            <form>
        <div className="my-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">        
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
                <option value='true'>Yes</option>
                <option value='false'>No</option>                
              </select>
            </div> 
            <div className="sm:col-span-3">
              <label className="form-label">Status</label>
              <select id="isActive" name="isActive" className="form-input">
                <option value='true'>Yes</option>
                <option value='false'>No</option>                
              </select>
            </div> 
            <div className="sm:col-span-6">
            <label className="form-label">Address</label>
              <textarea name="address" id="" placeholder='Address' className="form-input"></textarea>
            </div>  
        </div> 
        <button type='submit' className='button'>Update User</button>  
      </form> 
            </div>
        </div>
    </div>
  )
}

export default SingleUserPage