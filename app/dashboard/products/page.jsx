import Pagination from '@/app/ui/dashboard/Pagination'
import Search from '@/app/ui/dashboard/Search'
import Image from 'next/image'
import Link from 'next/link'

const ProductsPage = () => {
  return (
    <div className='card-block'>
    <div className='flex items-center justify-between'>
      <Search placeholder="Search for the Products..."/>
      <Link href='/dashboard/products/addProduct'><button className='button'>+ Add New</button></Link>
      </div>
      <table className="table-auto w-full text-left mt-3">
          <thead className='items-start justify-end'>
              <tr className='border-b-2 border-slate-200'>
                <th className='p-2'>Title</th>
                <th className='p-2'>Description</th>
                <th className='p-2'>Price</th>
                <th className='p-2'>Created At</th>
                <th className='p-2'>Stock</th>
                <th className='p-2'>Action</th>
              </tr>
          </thead>
          <tbody>
              <tr className='border-b-2 border-slate-200'>
                  <td className='p-2 flex items-center gap-2'>
                      <Image src="/noproduct.jpg" alt='' width={30} height={30} className='ring-gray-300 ring-1 rounded-full'/>
                      Iphone
                  </td>
                  <td className='p-2'>Description</td>
                  <td className='p-2'>$1500</td>
                  <td className='p-2'>12 Nov, 2023</td>
                  <td className='p-2'>Yes</td>
                  <td className='p-2'>
                  <Link href='/dashboard/products/singleProduct'><span className='btn-blue'>view</span></Link>  <span className='btn-green'>Delete</span>
                    </td>
                  
              </tr>

          </tbody>
     </table>
    <Pagination/>
    
  </div>
  )
}

export default ProductsPage