import React, { useEffect, useState } from 'react';
import "../pages/css/authpage.css";
import logo2 from "../images/logo4.png";
import avt from "../images/avt.jpg";
import { Link, useNavigate } from 'react-router-dom';
function Navbar({ heart, setHeart, card, setCard }) {
  const navigate = useNavigate();
  const [overlay, setOverlay] = useState(false);
  const handleOverlay = () => {
    setOverlay(!overlay);
  }
  const Logout = () => {
    localStorage.removeItem('email');
    localStorage.clear();
    navigate(`/`);
    setOverlay(!overlay);
  }
  const ranklocal = localStorage.getItem("rank");
  return (
    <div className="navbar_container">
      <div className='navbar_top'>
        <div className='navbar_address'>
          <h3> Hotline: +84 39595 9001</h3>
          <ul className='nav_icon'>
            <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
            <li><i className="fa fa-youtube-play" aria-hidden="true"></i></li>
            <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
            <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
            <li><i className="fa fa-google" aria-hidden="true"></i></li>
          </ul>
        </div>
        <div className='navbar_userlist'>
          {
            ranklocal === null ? <Link to="/authuser" className='link_user'>Đăng nhập | Đăng kí</Link> : (
              <>
                <div className='navbar_username'>
                  <div className='username_image'>
                    <img src={localStorage.getItem('image')} />
                  </div>
                  <p className='text_user' onClick={handleOverlay}>{localStorage.getItem('username')}</p>
                  <div className={overlay ? "username_overlay active" : "username_overlay"}>
                    <div className='overlay_item'>
                      <div className='ovelay_icon'>
                        <i className="fa fa-info" aria-hidden="true"></i>
                      </div>
                      <Link to="/infouser" onClick={handleOverlay}>Infomation</Link>
                    </div>
                    <div className='overlay_item'>
                      <div className='ovelay_icon'>
                        <i className="fa fa-cog" aria-hidden="true"></i>
                      </div>
                      <p onClick={handleOverlay}>Settings</p>
                    </div>
                    <div className='overlay_item'>
                      <div className='ovelay_icon'>
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                      </div>
                      <p onClick={Logout} >LogOut</p>
                    </div>
                  </div>
                </div>
              </>
            )
          }
        </div>
      </div>
      <div className='navbar_wrapper'>
        <div className='navbar_logo'>
          <img src={logo2} />
        </div>
        <div className='nav_control'>
          <ul className='menu_admin'>
            {
              ranklocal === "admin" && (
                <>
                  <li><Link to="/turmover" data-replace="Thống kê"><span>Thống kê</span></Link></li>
                  <li><Link to="/account" data-replace="Tài khoản"><span>Tài khoản</span></Link></li>
                  <li><Link to="/product" data-replace="Sản phẩm"><span>Sản phẩm</span></Link></li>
                  <li><Link to="/category" data-replace="Danh mục"><span>Danh mục</span></Link></li>
                </>
              )
            }
            {
              (ranklocal === "user" || ranklocal === null) && (
                <>
                  <li><Link to="/" data-replace="Trang chủ"><span>Trang chủ</span></Link></li>
                  <li><Link to="/menu" data-replace="Thực đơn"><span>Thực đơn</span></Link></li>
                  <li><Link to="/book" data-replace="Đặt bàn"><span>Đặt bàn</span></Link></li>
                  <li><Link to="/about" data-replace="Giới thiệu"><span>Giới thiệu</span></Link></li>
                </>
              )
            }
            {
              ranklocal === "staff" && (
                <>
                  <li><Link to="/order" data-replace="Đơn hàng"><span>Đơn hàng</span></Link></li>
                  <li><Link to="/bookingtable" data-replace="Quản lý bàn"><span>Quản lý bàn</span></Link></li>
                </>
              )
            }
          </ul>
          <div className='navbar_controls'>
            <div className='nav_control_item'>
              <Link to="/card"> {ranklocal === "admin" || ranklocal === "staff" ? "" : (<>CART({card.length})</>)}</Link>
            </div>
            <div className='nav_control_item'>
              {localStorage.getItem('id') === null ? <Link to="/heart"> {ranklocal === "admin" || ranklocal === "staff" ? "" : (<><i className="fa fa-heart-o" aria-hidden="true"></i>(0)</>)}</Link> : <Link to="/heart"> {ranklocal === "admin" || ranklocal === "staff" ? "" : (<><i className="fa fa-heart-o" aria-hidden="true"></i>({heart.length})</>)}</Link>}
            </div>
            <div className='nav_control_item'>
              {ranklocal === "admin" || ranklocal === "staff" ? "" : (<>  <i className="fa fa-search" aria-hidden="true"></i></>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar  