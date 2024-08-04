import { updateProduct } from '@/app/lib/actions';
import { fetchProduct } from '@/app/lib/data';
import Image from 'next/image'

const SingleProductPage = async ({params}) => {
  const {id} = params;
  const product = await fetchProduct(id)
  return (
    <div className='card-block'>
        <div className="my-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">        
            <div className="sm:col-span-2">
                <Image src="/noavatar.png" width={300} height={300}  alt=''/>
            </div>
            
            <div className="sm:col-span-4">
            <form action={updateProduct}>
            <input type="hidden" name="id" value={product.id}/>
        <div className="my-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">        
            <div className="sm:col-span-3">
              <label className="form-label">Title</label>
              <input type="text" placeholder={product.title} name="title" autocomplete="" className="form-input" />
            </div>

            <div className="sm:col-span-3">
              <label className="form-label">Category</label>
              <select id="cat" name="cat" className="form-input">
                <option>Choose a category</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>  
            <div className="sm:col-span-3">
              <label className="form-label">Price</label>
              <input type="number" name="price" placeholder={product.price}  className="form-input" />
            </div> 
            <div className="sm:col-span-3">
              <label className="form-label">Stock</label>
              <input type="number" name="stock" placeholder={product.stock}  className="form-input"/>
            </div>  
            <div className="sm:col-span-3">
              <label className="form-label">Color</label>
              <input type="text" name="color" placeholder={product.color} className="form-input"/>
            </div>  
            <div className="sm:col-span-3">
              <label className="form-label">Size</label>
              <input type="number" name="size" placeholder={product.size} className="form-input"/>
            </div>   
            <div className="sm:col-span-6">
            <label className="form-label">Description</label>
              <textarea name="desc" id="" placeholder={product.desc} className="form-input"></textarea>
            </div>   
        </div> 
        <button type='submit' className='button'>Update Product</button>  
      </form> 
            </div>
        </div>
    </div>
  )
}

export default SingleProductPage