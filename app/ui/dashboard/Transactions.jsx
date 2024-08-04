import Image from 'next/image'
import React from 'react'

const Transactions = () => {
  return (
    <div className='card-block mt-4'>
        <h2 className='font-semibold'>Latest Transactions</h2>
        <table className="table-auto w-full text-left mt-3">
            <thead className='items-start justify-end'>
                <tr className='border-b-2 border-slate-200'>
                <th className='p-2'>Name</th>
                <th className='p-2'>State</th>
                <th className='p-2'>Date</th>
                <th className='p-2'>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr className='border-b-2 border-slate-200'>
                    <td className='p-2 flex items-center gap-2'>
                        <Image src="/noavatar.png" alt='' width={30} height={30} className='ring-gray-300 ring-1 rounded-full'/>
                        john deo
                    </td>
                    <td className='p-2'><span className='bg-red-100 p-1 px-2 text-sm rounded-md'>Pending</span></td>
                    <td className='p-2'>14.02.2024</td>
                    <td className='p-2'>$3.200</td>
                </tr>
                <tr className='border-b-2 border-slate-200'>
                    <td className='p-2 flex items-center gap-2'>
                        <Image src="/noavatar.png" alt='' width={30} height={30} className='ring-gray-300 ring-1 rounded-full'/>
                        john deo
                    </td>
                    <td className='p-2'><span className='bg-green-100 p-1 px-2 text-sm rounded-md'>Complete</span></td>
                    <td className='p-2'>14.02.2024</td>
                    <td className='p-2'>$3.200</td>
                </tr>
                <tr className='border-b-2 border-slate-200'>
                    <td className='p-2 flex items-center gap-2'>
                        <Image src="/noavatar.png" alt='' width={30} height={30} className='ring-gray-300 ring-1 rounded-full'/>
                        john deo
                    </td>
                    <td className='p-2'><span className='bg-orange-100 p-1 px-2 text-sm rounded-md'>inProgress</span></td>
                    <td className='p-2'>14.02.2024</td>
                    <td className='p-2'>$3.200</td>
                </tr>
            </tbody>
            </table>
           
    </div>
  )
}

export default Transactions