import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {
  const [inputs, setInputs] = useState([]);
  
  const nagative = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(`http://localhost/restaurant/backend/category/${id}`).then((res) => {
      console.log(res.data)
      setInputs(res.data); 
    });
  }, []);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost/restaurant/backend/category/${id}/edit`, inputs).then((response) => {
      console.log(response.data);
      nagative("/category");
    });
  } 
  return (
    <div className='add_wrap'>
    <h1>Update category</h1>

    <form className='form_add from_category' onSubmit={handleUpdate}>
      <div className='add_control_list'>
        <div className='add_item'>
          <h3>Full Name</h3>
          <input type="text" 
            onChange={handleChange}
            required
            name="categoryname"
            value={inputs.categoryname}
          />
        </div>
      </div>
      <button type='submit' className='btn_category'>Edit Category</button>
    </form>
  </div>
  )
}

export default UpdateUser