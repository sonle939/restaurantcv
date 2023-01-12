import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../pages/css/account.css';
import Form from 'react-bootstrap/Form';
function AddCategory() {
  const [categoryname, setCategoryname] = useState("");
  const navigate = useNavigate();
  const data = {
    categoryname: categoryname
  };
  const submitCategory = (e) => {
    e.preventDefault();
    axios.post('http://localhost/restaurant/backend/category/save', data)
      .then(resault => {
        console.log(resault);
        navigate("/category")
      });
  }
  return (
    <div className='add_wrap'> 
      <h1>Add account</h1>

      <form className='form_add from_category' onSubmit={submitCategory}>
        <div className='add_control_list'>
          <div className='add_item'>
            <h3>Category Name</h3>
            <input type="text" placeholder='Enter categoryname'
              onChange={e => setCategoryname(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='btn_category'>
        <button type='submit' className='btn_category'>Add Category</button>
        </div>
      </form>
    </div>
  )
}

export default AddCategory