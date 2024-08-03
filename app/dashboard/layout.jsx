import React from 'react'
import Sidebar from '../ui/dashboard/Sidebar'
import Navbar from '../ui/dashboard/navbar/Navbar'
import Footer from '../ui/dashboard/Footer'



const layout = ({children}) => {
  return (
    <>
    <div className="flex items-start justify-between bg-slate-100 gap-4">
        <div className='bg-white shadow-md w-[20%] h-[100%] hidden md:block'>
            <Sidebar/>
        </div>
        <div className='w-[80%] flex flex-col gap-6 py-4 pr-4'>
            <Navbar/>
            {children}
            <Footer/>
        </div>        
    </div>  
    </>
  )
}

export default layout