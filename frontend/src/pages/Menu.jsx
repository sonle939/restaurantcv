import React, { useState, useEffect } from 'react'
import "./css/menu.css";
import ScrollToTop from "react-scroll-to-top";
import video2 from "../video/video3.mp4";
import { Link } from 'react-router-dom';
import logo2 from "../images/logo4.png";
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Menu() {
  const [dataProduct, setDataProduct] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [active, setActive] = useState(false);
  const insertHeart = (item) => {
    const data = {
      proname: item.proname,
      image: item.image,
      price: item.price,
      description: item.description,
      userid: localStorage.getItem('id'),
      pronameid: item.id
    }
    if (localStorage.getItem('id') === null) {
      alert("Bạn phải đăng nhập thì mới thêm được...");

    }else {
      axios.post('http://localhost/restaurant/backend/heart/save', data)
        .then(resault => {
          console.log(resault);
          alert("Them thanh cong")
        });
    }
  }
  useEffect(() => {
    getproduct();
  }, []);

  function getproduct() {
    axios.get('http://localhost/restaurant/backend/product/').then(function (response) {
      console.log(response.data);
      setDataProduct(response.data);
      setItemData(response.data);
    }); 
  };
  const filterProduct = (id) => {
    const filterData = dataProduct.filter((itemate) => {
      return itemate.categoryid === id;
    });
    setItemData(filterData);
  }
  console.log(itemData)

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Thực đơn</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className='menu'>
        <ScrollToTop smooth top="100" />
        <div className='menu_banner'>
          <video autoPlay loop muted>
            <source src={video2} />
          </video>
          <h3>Thực đơn</h3>
        </div>
        <div className='menu_list'>
          <div className='menu_slogan'>
            <h3>CHOOSE BEST OF</h3>
            <p>Thực đơn của NabiSotth</p>
          </div>
          <div className='menu_wrapper'>
            <div className='menu_button'>
              <button onClick={() => { setItemData(dataProduct) }} className="btn_active">tất cả</button>
              <button onClick={() => { filterProduct(1) }} className="btn_active">Lẩu</button>
              <button onClick={() => { filterProduct(2) }} className="btn_active">Nướng</button>
              <button onClick={() => { filterProduct(7) }} className="btn_active">Đồ uống</button>
              <button onClick={() => { filterProduct(8) }} className="btn_active">Khác</button>
            </div>
            <div className='menu_content'>
              {itemData.map((item) => (
                <div className='menucontent_item' key={item.id}>
                  <div className='menucontent_img'>
                    <img src={item.image} alt={item.proname} />
                  </div>
                  <div className='menucontent_des'>
                    <h3>{item.proname}</h3>
                    <p>{item.description}</p>
                    <span>Còn lại: {item.amount}</span>
                    <div className='menu_cart'>
                      <span>{item.price}VNĐ</span>
                      <div className='menunuicon_btn'>
                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                        <div className='menunuicon_btn_overlay'>
                          <div className='menu-list-icon'>
                            <i className="fa fa-eye" aria-hidden="true"></i>
                          </div>
                          <div className='menu-list-icon'>
                            <i className="fa fa-cart-plus" aria-hidden="true"></i>
                          </div>
                          <div className='menu-list-icon' onClick={() => insertHeart(item)}>
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='footer'>
          <img src={logo2} />
          <div className='footer_list'>
            <div className='footer_item'>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
            <div className='footer_item'>
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </div>
            <div className='footer_item'>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div className='footer_item'>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <div className='footer_item'>
              <i className="fa fa-google" aria-hidden="true"></i>
            </div>
          </div>
          <h3>Get new & offers</h3>
          <div className='footer_intput'>
            <input placeholder='Your email' type='text' />
            <div className='footer_icon'>
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </div>
          </div>
          <div className='footer_menu'>
            <Link to="/">Home</Link>
            <span></span>
            <Link to="/menu" >Menu</Link>
            <span></span>
            <Link to="/book" >Book</Link>
            <span></span>
            <Link to="/promotion" >Promotion</Link>
          </div>
          <h3 className='footer_copyright'>
            @2022 Created by Groupseven. All right LeeXs
          </h3>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default Menu