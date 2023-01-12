import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function ReadCategory() {
  const [inputs, setInputs] = useState([]);
  
  const nagative = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(`http://localhost/restaurant/backend/category/${id}`).then((res) => {
      console.log(res.data)
      setInputs(res.data); 
    });
  }, []);
  console.log(inputs)
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }
  console.log(inputs.categoryname)
  return (
    <div className='add_wrap'>
      <h1>View Category</h1>

      <form className='form_add from_category'>
        <div className='add_control_list'>
          <div className='add_item'>
            <h3>Category Name</h3>
            <input type="text" 
              onChange={handleChange}
              required
              name="Category"
              value={inputs.categoryname}
              disabled
            />
          </div>
        </div>
      </form> 
    </div>
  )
}

export default ReadCategory