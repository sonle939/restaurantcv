import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ListImages from "../../data/Images.json";
function UpdateUser() {
  const [inputs, setInputs] = useState([]);
  const [upproduct,setUpproduct] = useState([])
  const nagative = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost/groupseven/backend/product/${id}`).then((res) => {
      console.log(res.data)
      setUpproduct(res.data); 
    });
  }, []);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUpproduct(values => ({ ...values, [name]: value }));
  }
  function getCategory() {
    axios.get('http://localhost/groupseven/backend/category/').then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className='add_wrap'>
    <h1>Update product</h1>

    <form className='form_add from_product'>
      <div className='add_control_list product'>
        <div className='add_item'>
          <h3>Product Name</h3>
          <input type="text" placeholder='Enter proname'
          onChange={handleChange}
            name="proname"
            value={upproduct.proname}
            required
          />
        </div>
        <div className='add_item'>
          <h3>Description</h3>
          <input type="text" placeholder='Enter des'
          name="description"
          onChange={handleChange}
          value={upproduct.description}
            required
          />
        </div>
        <div className='add_item'>
          <h3>Price</h3>
          <input type="text" placeholder='Enter price'
          name="price"
          onChange={handleChange}
          value={upproduct.price}
            required
          />
        </div>
        <div className='add_item'>
          <h3>Amount</h3>
          <input type="text" placeholder='Enter amount'
          name="amount"
          onChange={handleChange}
          value={upproduct.amount}
            required
          />
        </div>
        <div className='add_item'>
          <h3>Image</h3>
          <div className='input_images'>
            <input type="text" placeholder='Enter image'
              className='input_file'
              required disabled
              value={upproduct.image}

            />
          </div>
        </div>
        <div className='add_item'>
          <h3>CategoryID</h3>
          <input type="text"
          required disabled
          value={upproduct.categoryid}
        />
        </div>
      </div>
    </form>
  </div>
  )
}

export default UpdateUser