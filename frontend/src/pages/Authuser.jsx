import React, { useState } from 'react'
import "./css/authuser.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Authuser() {
    let [authMode, setAuthMode] = useState("login")
    const changeAuthMode = () => {
        setAuthMode(authMode === "login" ? "register" : "login")
    }
    let navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [data, setData] = useState({
        id: "",
        fullname: "",
        email: "",
        password: "",
        address: "",
        mobile: "",
        password: "",
        image: "",
        rank: "user"
    })
    const handleChangeRegister = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        //console.log(data)
    };
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const submitForm = (e) => {
        e.preventDefault();
        const senddata = {
            email: user.email,
            password: user.password,
            mobile: user.mobile,
            id: user.id,
            address: user.address,
            password: user.password,
            image: user.image
        }
        console.log(senddata);
        axios.post('http://localhost/restaurant/backend/loginandsignup/login.php', senddata)
            .then((resault) => {
                if (resault.data.Status === "200") {
                    window.localStorage.setItem('email', resault.data.email);
                    window.localStorage.setItem('username', (resault.data.fullname));
                    window.localStorage.setItem('password', (resault.data.password));
                    window.localStorage.setItem('mobile', (resault.data.mobile));
                    window.localStorage.setItem('address', resault.data.address);
                    window.localStorage.setItem('id', resault.data.id);
                    window.localStorage.setItem('rank', resault.data.rank);
                    window.localStorage.setItem('image', resault.data.image);
                    if (window.localStorage.getItem('rank') === "admin") {
                        navigate("/turmover");
                    } else if (window.localStorage.getItem('rank') === "user") {
                        navigate("/");
                    } else {
                        navigate("/order");
                    }
                } else {
                    alert('Email hoặc mật khẩu không đúng');
                }
            })
    }
    const submitFormRegister = (e) => {
        e.preventDefault();
        const importdata = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
            address: data.address,
            mobile: data.mobile,
            rank: data.rank
        }
        if (data.fullname === null) {
            alert("nhap ten vao")
        }
        console.log(importdata);
        axios.post('http://localhost/groupseven/backend/loginandsignup/register.php', importdata)
            .then((resault) => {
                if (resault.data.Status == "Invalid") {
                    alert('Invalid User');
                } else {
                    //nagatave(`/dashboard`);
                    alert('dang ki thanh cong')
                }
            })
    }
    if (authMode === "login") {
        return (
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Đăng nhập & Đăng kí</title>
                    <meta name="description" content="Helmet application" />
                </Helmet>
                <div className='authuser_container'>
                    <div className='login_container'>
                        <div className='login_from'>
                            <div className='login_img'>
                                <img src='https://i.pinimg.com/736x/cf/89/44/cf894410f0505ecb8fc0ddee13f40672.jpg' alt='logonhom7' />
                            </div>
                            <div className='form_control'>
                                <form onSubmit={submitForm}>
                                    <div className='login_title'>
                                        We are NabiSotth
                                    </div>
                                    <div className='login_title_signup'>
                                        <h3>Do not have an account ? </h3>
                                        <Link to="" className='link_register' onClick={changeAuthMode}>Sign up now </Link>
                                    </div>
                                    <div className='input_list'>
                                        <div className='input_item'>
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            <input type="text" placeholder='Enter email...' required onChange={handleChange} name="email" value={user.email} />
                                        </div>
                                        <div className='input_item'>
                                            <i className="fa fa-lock" aria-hidden="true"></i>
                                            <input type="password" placeholder='Enter password...' required onChange={handleChange} name="password" value={user.password} />
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className='button_list'>
                                        <button type='submit'>Sign in</button>
                                        <Link to="/forgitpassword">Forgot Username Password ?</Link>
                                    </div>
                                    <div className='social_media'>
                                        <h4>Continue with social media</h4>
                                        <div className='media_list'>
                                            <div className='media_item'>
                                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </div>
                                            <div className='media_item'>
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </div>
                                            <div className='media_item'>
                                                <i className="fa fa-google-plus" aria-hidden="true"></i>
                                            </div>
                                            <div className='media_item'>
                                                <i className="fa fa-github" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </HelmetProvider>
        )
    }
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Đăng nhập & Đăng kí</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className='authuser_container'>
                <div className='signup_container'>
                    <div className='signup_form'>
                        <div className='signup_img'>
                            <img src='https://i.pinimg.com/736x/cf/89/44/cf894410f0505ecb8fc0ddee13f40672.jpg' alt='logonhom7' />
                        </div>
                        <div className='signup_control'>
                            <form className='form_input' onSubmit={submitFormRegister}>
                                <div className='signup_title'>
                                    We are NabiSotth
                                </div>
                                <div className='title_signup'>
                                    <h3>Are you ready to experience ? </h3>
                                    <Link to="" className='link_register' onClick={changeAuthMode}>Sign in now </Link>
                                </div>
                                <div className='signup_list'>
                                    <div className='signup_item'>
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <input type="text" placeholder='Enter fullname...' name='fullname' onChange={handleChangeRegister}
                                            value={data.fullname} required
                                        />
                                    </div>
                                    <div className='signup_item'>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <input type="email" placeholder='Enter email...' name='email' onChange={handleChangeRegister}
                                            value={data.email} required
                                        />
                                    </div>
                                    <div className='signup_item'>
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                        <input type="password" placeholder='Enter password...' name='password' onChange={handleChangeRegister}
                                            value={data.password} required
                                        />
                                    </div>
                                    <div className='signup_item'>
                                        <i className="fa fa-bullseye" aria-hidden="true"></i>
                                        <input type="text" placeholder='Enter address...' name='address' onChange={handleChangeRegister}
                                            value={data.address} required
                                        />
                                    </div>
                                    <div className='signup_item'>
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <input type="text" placeholder='Enter mobile...' name='mobile' onChange={handleChangeRegister}
                                            value={data.mobile} required
                                        />
                                    </div>
                                </div>
                                <div className='signup_link'>
                                    <button type='submit'>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Authuser