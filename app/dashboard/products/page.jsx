import { fetchProducts } from '@/app/lib/data'
import Pagination from '@/app/ui/dashboard/Pagination'
import Search from '@/app/ui/dashboard/Search'
import Image from 'next/image'
import Link from 'next/link'

const ProductsPage = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count, products} = await fetchProducts(q,page)

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
            {products.map(product =>(
              <tr className='border-b-2 border-slate-200' key={product.id}>
              <td className='p-2 flex items-center gap-2'>
                  <Image src={product.img || "/noproduct.jpg"} alt='' width={30} height={30} className='ring-gray-300 ring-1 rounded-full'/>
                  {product.title}
              </td>
              <td className='p-2'>{product.desc}</td>
              <td className='p-2'>{product.price}</td>
              <td className='p-2'>{product.createdAt?.String().slice(4,16)}</td>
              <td className='p-2'>{product.stock}</td>
              <td className='p-2'>
              <Link href={`/dashboard/products/${product.id}`}><span className='btn-blue'>view</span></Link>  <span className='btn-green'>Delete</span>
                </td>
              
          </tr>
            ))}
              

          </tbody>
     </table>
    <Pagination count={count}/>
    
  </div>
  )
}

export default ProductsPage