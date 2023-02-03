import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function ReadUser() {
  const [inputs, setInputs] = useState([]);
  
  const nagative = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(`http://localhost/restaurantcv/backend/user/${id}`).then((res) => {
      console.log(res.data)
      setInputs(res.data); 
    });
  }, []);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }
  return (
    <div className='add_wrap'>
      <h1>View account</h1>

      <form className='form_add'>
        <div className='add_control_list'>
          <div className='add_item'>
            <h3>Full Name</h3>
            <input type="text" 
              onChange={handleChange}
              required
              name="fullname"
              value={inputs.fullname}
              disabled
            />
          </div>
          <div className='add_item'>
            <h3>Email</h3>
            <input type="text"
            onChange={handleChange}
              required
              name="email"
              value={inputs.email}
              disabled
            />
          </div>
          <div className='add_item'>
            <h3>Password</h3>
            <input type="text"
            onChange={handleChange}
              required
              name="password"
              value={inputs.password}
              disabled
            />
          </div>
          <div className='add_item'>
            <h3>Address</h3>
            <input type="text"
            onChange={handleChange}
              required
              name="address"
              value={inputs.address}
              disabled
            />
          </div>
          <div className='add_item'>
            <h3>Mobile</h3>
            <input type="text" 
            onChange={handleChange}
              required
              name="mobile"
              value={inputs.mobile}
              disabled
            />
          </div>
          <div className='add_item'>
            <h3>Rank</h3>
            <input type="text" 
            onChange={handleChange}
              required
              name="rank"
              value={inputs.rank}
              disabled
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ReadUser