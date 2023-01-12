import React, { useEffect, useState } from 'react'
import "./css/infouser.css";
import userimage from "../images/user.jpg";
import imageUser from "../data/userimage.json";
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function InfoUser() {
  const [inputs, setInputs] = useState([]);
  const [imageLink, setImageLink] = useState(imageUser);
  const [backgr, setBackgr] = useState();
  const [hide, setHide] = useState(false);
  const [btn, setBtn] = useState(false);
  const disabled = "disabled";
  const enabled = !disabled;
  const id = localStorage.getItem('id')
  const [dis, setDis] = useState(disabled);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }
  useEffect(() => {
    axios.get(`http://localhost/restaurant/backend/user/${id}`).then((res) => {
      console.log(res.data)
      setInputs(res.data);
    });
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost/groupseven/restaurant/user/${id}/edit`, inputs).then((response) => {
      console.log(response.data);
    });
  }
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Thông tin cá nhân</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className='infouser'>
        <div className='infouser_container'>
          <div className='infouser_image'>
            <div className='infouser_img'>
              <img src={inputs.image} />
            </div>
            <div className='infouser_button'>
              <div className={btn ? "infouser_btn active" : "infouser_btn"} onClick={() => { setBtn(true); setDis(enabled) }}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
                <p>Edit Profile</p>
              </div>
              <div className={btn ? "infouser_btn1" : "infouser_btn1 active"}>
                <i className="fa fa-upload" aria-hidden="true"></i>
                <p onClick={() => setHide(true)}>Upload image</p>
              </div>
            </div>
          </div>
          <div className='infouser_description'>
            <h3>My porfile</h3>
            <form onSubmit={handleUpdate}>
              <div className='info_list'>
                <div className='info_item'>
                  <p>Fullname</p>
                  <input type="text"
                    name='fullname'
                    onChange={handleChange}
                    value={inputs.fullname} disabled={dis} />
                </div>
                <div className='info_item'>
                  <p>email</p>
                  <input type="text"
                    name='email'
                    onChange={handleChange}
                    value={inputs.email} disabled={dis} />
                </div>
                <div className='info_item'>
                  <p>password</p>
                  <input type="text"
                    name='password'
                    onChange={handleChange}
                    value={inputs.password} disabled={dis} />
                </div>
                <div className='info_item'>
                  <p>Address</p>
                  <input type="text"
                    name='address'
                    onChange={handleChange}
                    value={inputs.address} disabled={dis} />
                </div>
                <div className='info_item'>
                  <p>mobile</p>
                  <input type="text"
                    name='mobile'
                    onChange={handleChange}
                    value={inputs.mobile} disabled={dis} />
                </div>
                <div className='info_item'>
                  <p>UserID</p>
                  <input type="text" value={localStorage.getItem('id')} disabled />
                </div>
              </div>
              <div className={btn ? "infor_button" : "infor_button active"}>
                <button className='save' type='submit' onClick={() => { setBtn(false); setDis(disabled) }}>Save</button>
                <button className='cancel' onClick={() => { setBtn(false); setDis(disabled) }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
        <div className={hide ? "userinfo_overlayImage" : "userinfo_overlayImage active"}>
          <div className='overlayimguser'>
            <h3>Image user list</h3>
            <div className='overlayimguser_list'>
              {imageLink.map((item) => (
                <div className={backgr === item.id ? "overlayimguser_item active" : "overlayimguser_item"} onClick={() => setBackgr(item.id)} key={item.id}>
                  <img src={item.imagelink} onClick={() => setInputs({ ...inputs, image: item.imagelink })} />
                </div>
              ))}
            </div>
            <div className='infouser_exit'>
              <button onClick={() => setHide(!hide)}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default InfoUser