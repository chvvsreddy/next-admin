import { addProduct } from '@/app/lib/actions'


const AddProduct = () => {
  return (
    <div className='card-block'>
      <form action={addProduct}>
        <div className="my-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-8">        
            <div className="sm:col-span-3">
              <label className="form-label">Title</label>
              <input type="text" placeholder='Title' name="title" className="form-input" required/>
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
              <input type="number" placeholder='Price' name="price" className="form-input" required/>
            </div> 
            <div className="sm:col-span-3">
              <label className="form-label">Stock</label>
              <input type="number" placeholder='Stock' name="stock"  className="form-input" required/>
            </div>  
            <div className="sm:col-span-3">
              <label className="form-label">Color</label>
              <input type="text" placeholder='Color' name="color"  className="form-input" required/>
            </div>  
            <div className="sm:col-span-3">
              <label className="form-label">Size</label>
              <input type="number" placeholder='Size' name="size"  className="form-input" required/>
            </div>   
            <div className="sm:col-span-6">
            <label className="form-label">Description</label>
              <textarea name="desc" id="" placeholder='Description' className="form-input"></textarea>
            </div>   
        </div> 
        <button type='submit' className='button'>Add Product</button>  
      </form> 
    </div>
  )
}

export default AddProduct