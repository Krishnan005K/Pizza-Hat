import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const Add = () => {

  const url = 'http://localhost:4000';

  const [image, setImage] = useState(false);
  const [data, setDate] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"

  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDate(data => ({ ...data, [name]: value }))
  }
  const onUSubmitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)
    const response = await axios.post(`${url}/api/food/add `, formData)
    if (response.status === 200) {
      setDate({
        name: "",
        description: "",
        price: "",
        category: "Salad"
      })
      setImage(false)
      toast.success(response.data.message)

    }
    else {
      toast.error(response.data.message)
    }
  }

  return (
    <div className='add'>
      <form className="flex-col" onSubmit={onUSubmitHandler}>
        <div className="add-img-upload flex-col" >
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name  flex-col">
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder=" enter the content here" required > </textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" id="">
              <option value="salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div onChange={onChangeHandler} value={data.price} className="add-price flex-col">
            <p>Product price</p>
            <input type="number" name='price' placeholder='₹20' />
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}


export default Add
