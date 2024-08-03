import React from 'react'

const AddProduct = () => {
  return (
    <div className='card-block'>
      <form>
        <div className="my-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-8">        
            <div className="sm:col-span-3">
              <label className="form-label">Title</label>
              <input type="text" placeholder='Title' name="title" autocomplete="" className="form-input" required/>
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
              <input type="number" placeholder='Price' name="price" autocomplete="" className="form-input" required/>
            </div> 
            <div className="sm:col-span-3">
              <label className="form-label">Stock</label>
              <input type="number" placeholder='Stock' name="stock" autocomplete="" className="form-input" required/>
            </div>  
            <div className="sm:col-span-3">
              <label className="form-label">Color</label>
              <input type="text" placeholder='Color' name="color" autocomplete="" className="form-input" required/>
            </div>  
            <div className="sm:col-span-3">
              <label className="form-label">Size</label>
              <input type="number" placeholder='Size' name="size" autocomplete="" className="form-input" required/>
            </div>   
            <div className="sm:col-span-6">
            <label className="form-label">Description</label>
              <textarea name="description" id="" placeholder='Description' className="form-input"></textarea>
            </div>   
        </div> 
        <button type='submit' className='button'>Add Product</button>  
      </form> 
    </div>
  )
}

export default AddProduct