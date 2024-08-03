import { fetchUsers } from '@/app/lib/data'
import Pagination from '@/app/ui/dashboard/Pagination'
import Search from '@/app/ui/dashboard/Search'
import Image from 'next/image'
import Link from 'next/link'


const UsersPage = async ({searchParams}) => {
  
const q = searchParams?.q || "";
const page = searchParams?.page || 1;
const {count, users} = await fetchUsers(q,page);

  return (
    <div className='card-block'>
      <div className='flex items-center justify-between'>
        <Search placeholder="Search for the User..."/>
        <Link href="/dashboard/users/addUser"><button className='button'>+ Add New</button></Link>
        </div>
        <table className="table-auto w-full text-left mt-3">
            <thead className='items-start justify-end'>
                <tr className='border-b-2 border-slate-200'>
                  <th className='p-2'>Name</th>
                  <th className='p-2'>Email</th>
                  <th className='p-2'>Created at</th>
                  <th className='p-2'>Role</th>
                  <th className='p-2'>Action</th>
                  <th className='p-2'></th>
                </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr className='border-b-2 border-slate-200' key={user.id}>
                <td className='p-2 flex items-center gap-2'>
                    <Image src={user.img || "/noavatar.png"} alt='' width={30} height={30} className='ring-gray-300 ring-1 rounded-full'/>
                    {user.username}
                </td>
                <td className='p-2'>{user.email}</td>
                <td className='p-2'>{user.createdAt?.toString().slice(4 , 16)}</td>
                <td className='p-2'>{user.isAdmin ? "Admin":"Client" }</td>
                <td className='p-2'>{user.isctive ? "Active" : "Passive"}</td>
                <td className='p-2'>
                <Link href={`/dashboard/users/${user.id}r`}><span className='btn-blue'>view</span></Link>  <span className='btn-green'>Delete</span>
                  </td>
                
            </tr>
                
              ))}
                

            </tbody>
       </table>
      <Pagination count={count}/>
      
    </div>
  )
}

export default UsersPage