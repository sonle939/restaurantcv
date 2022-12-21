import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {
  const [inputs, setInputs] = useState([]);
  
  const nagative = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(`http://localhost/groupseven/backend/user/${id}`).then((res) => {
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
    axios.put(`http://localhost/groupseven/backend/user/${id}/edit`, inputs).then((response) => {
      console.log(response.data);
      nagative("/account");
    });
  }
  return (
    <div className='add_wrap'>
    <h1>Update account</h1>

    <form className='form_add' onSubmit={handleUpdate}>
      <div className='add_control_list'>
        <div className='add_item'>
          <h3>Full Name</h3>
          <input type="text" 
            onChange={handleChange}
            required
            name="fullname"
            value={inputs.fullname}
          />
        </div>
        <div className='add_item'>
          <h3>Email</h3>
          <input type="text"
          onChange={handleChange}
            required
            name="email"
            value={inputs.email}
          />
        </div>
        <div className='add_item'>
          <h3>Password</h3>
          <input type="text"
          onChange={handleChange}
            required
            name="password"
            value={inputs.password}
          />
        </div>
        <div className='add_item'>
          <h3>Address</h3>
          <input type="text"
          onChange={handleChange}
            required
            name="address"
            value={inputs.address}
          />
        </div>
        <div className='add_item'>
          <h3>Mobile</h3>
          <input type="text" 
          onChange={handleChange}
            required
            name="mobile"
            value={inputs.mobile}
          />
        </div>
        <div className='add_item'>
          <h3>Rank</h3>
          <input type="text" 
          onChange={handleChange}
            required
            name="rank"
            value={inputs.rank}
          />
        </div>
      </div>
      <button type='submit'>Edit user</button>
    </form>
  </div>
  )
}

export default UpdateUser