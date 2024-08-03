"use client"
import { usePathname } from 'next/navigation';
import {MdNotifications, MdOutlineChat, MdPublic, MdSearch,} from "react-icons/md";


const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className='box'>
      <div className='flex items-center justify-between'>
          <div className='font-extralight'>{pathname.split('/').pop()}</div>
          <div className='relative'>
          <MdSearch size={20} className=' absolute top-2.5 left-2'/>
          <input type="text" placeholder="Search..." className="bg-slate-100 rounded-md text-sm h-4 p-4 pl-8" />
        </div>
          <div className='flex items-center justify-center gap-4'>
          <MdOutlineChat size={20} />
            <MdNotifications size={20} />
            <MdPublic size={20} />
          </div>
        </div>
    </div>
  )
}

export default Navbar