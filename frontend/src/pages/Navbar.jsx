import React, { useState } from 'react'
import "./css/authpage.css";
import logo2 from "../images/logo2.png";
import avt2 from "../images/avt.jpg";
import { Link, useNavigate } from 'react-router-dom';
import ManageTurnover from '../components/ManageTurnover';
import Home from '../components/Home';
import ManageOrder from '../components/ManageOrder';

function AuthPage() {
    const navigate = useNavigate();
    const [overlay, setOverlay] = useState(false);
    const Logout = () => {
        localStorage.removeItem('email');
        localStorage.clear();
        navigate(`/`);
    }
    const handleOverlay = () => {
        setOverlay(!overlay)
    }
    const ranklocal = localStorage.getItem("rank")
    return (
        <div className='auth_page'>
            <div className='admin_container'>
                <div className='nav_container'>
                    <h3> Hotline: +84 39595 9001</h3>
                    <ul className='nav_icon'>
                        <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                        <li><i className="fa fa-youtube-play" aria-hidden="true"></i></li>
                        <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                        <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                        <li><i className="fa fa-google" aria-hidden="true"></i></li>
                    </ul>
                </div>
                <div className='nav_wrapuser'>
                    <h3>Welcome to NabiSotth</h3>
                    <div className='nav_logo'>
                        <img src={logo2} alt="" />
                    </div>
                    <div className='nav_wrapper'>
                        <div className='nav_user'>
                            <div className='user_container'>
                                <Link to="/authuser">Login</Link>
                            </div>
                        </div>
                        <div className='nav_control'>
                            <div className='nav_control_item'>
                                <i className="fa fa-heart-o" aria-hidden="true"></i>  (0)
                            </div>
                            <div className='nav_control_item'>
                                CART(0)
                            </div>
                            <div className='nav_control_item'>
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nav_content'>
                    <ul className='menu_admin'>
                        <li><Link to="/authpage/pageuser" data-replace="Home"><span>Home</span></Link></li>
                        <li><Link to="/authpage/menu" data-replace="Menu"><span>Menu</span></Link></li>
                        <li> <Link to="/authpage/book" data-replace="Book"><span>Book</span></Link></li>
                        <li><Link to="/authpage/promotion" data-replace="Promotion"><span>Promotion</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AuthPage