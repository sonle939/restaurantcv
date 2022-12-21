import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../pages/css/account.css';
function AddUser() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState();
  const [rank, setRank] = useState("");
  const navigate = useNavigate();
  const data = {
    fullname: fullname,
    email: email,
    password: password,
    address: address,
    mobile: mobile,
    rank: rank
  };
  const submitAccount = (e) => {
    e.preventDefault();
    axios.post('http://localhost/groupseven/backend/user/save', data)
      .then(resault => {
        console.log(resault);
        navigate("/account")
      });
  }
  return (
    <div className='add_wrap'>
      <h1>Add account</h1>

      <form className='form_add' onSubmit={submitAccount}>
        <div className='add_control_list'>
          <div className='add_item'>
            <h3>Full Name</h3>
            <input type="text" placeholder='Enter fullname'
              onChange={e => setFullname(e.target.value)}
              required
            />
          </div>
          <div className='add_item'>
            <h3>Email</h3>
            <input type="text" placeholder='Enter email'
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='add_item'>
            <h3>Password</h3>
            <input type="text" placeholder='Enter fullname'
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='add_item'>
            <h3>Address</h3>
            <input type="text" placeholder='Enter address'
              onChange={e => setAddress(e.target.value)}
              required
            />
          </div>
          <div className='add_item'>
            <h3>Mobile</h3>
            <input type="text" placeholder='Enter mobile'
              onChange={e => setMobile(e.target.value)}
              required
            />
          </div>
          <div className='add_item'>
            <h3>Rank</h3>
            <input type="text" placeholder='Enter rank'
              onChange={e => setRank(e.target.value)}
              required
            />
          </div>
        </div>
        <button type='submit'>Add user</button>
      </form>
    </div>
  )
}

export default AddUser