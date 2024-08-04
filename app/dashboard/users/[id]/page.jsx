import { updateUser } from '@/app/lib/actions';
import { fetchUser } from '@/app/lib/data';
import Image from 'next/image'


const SingleUserPage = async ({params}) => {
  const {id} = params;
  const user = await fetchUser(id)
  
  return (
    <div className='card-block'>
        <div className="my-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">        
            <div className="sm:col-span-2">
                <Image src="/noavatar.png" width={300} height={300}  alt=''/>
              
            </div>
            <div className="sm:col-span-4">
            <form action={updateUser}>
            <input type="hidden" name="id" value={user.id}/>
        <div className="my-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">        
            <div className="sm:col-span-3">
              <label className="form-label">Username</label>
              <input type="text" name="username" placeholder={user.username} className="form-input" />
            </div> 
            <div className="sm:col-span-3">
              <label className="form-label">Email</label>
              <input type="email" name="email"  placeholder={user.email}className="form-input"/>
            </div> 
            <div className="sm:col-span-3">
              <label className="form-label">Password</label>
              <input type="password" name="password" placeholder='Password' className="form-input"/>
            </div>  
            <div className="sm:col-span-3">
              <label className="form-label">Phone</label>
              <input type="phone" name="phone" placeholder={user.phone} className="form-input"/>
            </div>  
            <div className="sm:col-span-3">
              <label className="form-label">Select User Type</label>
              <select id="isAdmin" name="isAdmin" className="form-input">
                <option value='true'selected={user.isAdmin}>Yes</option>
                <option value='false'selected={!user.isAdmin}>No</option>                
              </select>
            </div> 
            <div className="sm:col-span-3">
              <label className="form-label">Status</label>
              <select id="isActive" name="isActive" className="form-input">
                <option value='true' selected={user.isActive}>Yes</option>
                <option value='false' selected={!user.isActive}>No</option>                
              </select>
            </div> 
            <div className="sm:col-span-6">
            <label className="form-label">Address</label>
              <textarea name="address" placeholder={user.address} className="form-input"></textarea>
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