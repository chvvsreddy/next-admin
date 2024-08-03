import React from 'react'

const AddProduct = () => {
  return (
    <div className='card-block'>
      <form>
        <div classname="my-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-8">        
            <div classname="sm:col-span-3">
              <label classname="form-label">Title</label>
              <input type="text" placeholder='Title' name="title" autocomplete="" classname="form-input" required/>
            </div>

            <div classname="sm:col-span-3">
              <label classname="form-label">Category</label>
              <select id="cat" name="cat" classname="form-input">
                <option>Choose a category</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>  
            <div classname="sm:col-span-3">
              <label classname="form-label">Price</label>
              <input type="number" placeholder='Price' name="price" autocomplete="" classname="form-input" required/>
            </div> 
            <div classname="sm:col-span-3">
              <label classname="form-label">Stock</label>
              <input type="number" placeholder='Stock' name="stock" autocomplete="" classname="form-input" required/>
            </div>  
            <div classname="sm:col-span-3">
              <label classname="form-label">Color</label>
              <input type="text" placeholder='Color' name="color" autocomplete="" classname="form-input" required/>
            </div>  
            <div classname="sm:col-span-3">
              <label classname="form-label">Size</label>
              <input type="number" placeholder='Size' name="size" autocomplete="" classname="form-input" required/>
            </div>   
            <div classname="sm:col-span-6">
            <label classname="form-label">Description</label>
              <textarea name="description" id="" placeholder='Description' classname="form-input"></textarea>
            </div>   
        </div> 
        <button type='submit' className='button'>Add Product</button>  
      </form> 
    </div>
  )
}

export default AddProduct