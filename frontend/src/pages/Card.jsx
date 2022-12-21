import React, { useEffect, useState } from 'react';
import "../pages/css/card.css";
import logo2 from "../images/logo4.png";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import heartlogo from "../images/heart.png";
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Card({ card, setCard }) {
  const [total, settotal] = useState(0);
  const handleTotal = () => {
    let sum = 0;
    card.filter(itemtotal=>itemtotal.userid == localStorage.getItem('id')).map((item) => (sum += item.amount * item.price));
    settotal(sum);

  };

  useEffect(() => {
    getCard();
    handleTotal();
  }, [card]);

  function getCard() {
    if (localStorage.getItem('id') === null) {
      console.log('abc')
    } else {
      axios.get('http://localhost/groupseven/backend/cart/').then(function (response) {
        console.log(response.data);
        setCard(response.data);
      })
    }
  }
  const deleteCard = (id) => {
    axios.delete(`http://localhost/groupseven/backend/cart/${id}/delete`).then(function (response) {
      console.log(response.data);
      getCard();
    });
  }
  console.log(card);
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Giỏ Hàng</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className='card_container'>
        <div className='card_breadcrumb'>
          <Link to="/">Trang chủ</Link>
          <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          <Link to="/card" className='cardpage'>Cart Page</Link>
        </div>
        {localStorage.getItem('id') === null || card.filter(item=>item.userid == localStorage.getItem('id')).length == 0 ?
          <div className="container">
            <img src={heartlogo} />
            <h2 className="title">
              <span className="title-word title-word-1">Giỏ  </span>
              <span className="title-word title-word-2">hàng </span>
              <span className="title-word title-word-3">của bạn</span>
              <span className="title-word title-word-4">trống...</span>
            </h2>
          </div> :
          (<div className='card_wapper'>
            <div className='card_list'>
              {card.filter((itemfilter) => itemfilter.userid == localStorage.getItem('id')).map(item => (
                <div className='card_item' key={item.id}>
                  <div className='card_img'>
                    <img src={item.image} />
                    <div className='card_delete' onClick={() => deleteCard(item.id)}>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className='card_des'>
                    <h3>{item.proname}</h3>
                    <p>{item.description}</p>
                    <div className='card_price'>
                      <h5>$ {item.price}</h5>
                      <div className='card_quality'>
                        <button><i className="fa fa-minus" aria-hidden="true"></i></button>
                        <div>{item.amount}</div>
                        <button><i className="fa fa-plus" aria-hidden="true"></i></button>
                      </div>
                    </div>
                    <Link>Xem chi tiết</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className='card_checkout'>
              <div className='checkout_title'>
                <h3>Order Summury</h3>
                <p>Enter promo code / Gift certificate</p>
                <div className='lines'></div>
              </div>
              <div className='checkout_list'>
                <div className='checkouts_title'>
                  <h4>Subtotal:</h4>
                  <p>$ {total}</p>
                </div>
                <div className='checkouts_title'>
                  <h4>Subtotal:</h4>
                  <p>----</p>
                </div>
                <div className='checkouts_title'>
                  <h4>Estimated Shipping & Handling:</h4>
                  <p>$ 00:00</p>
                </div>
              </div>
              <div className='total_container'>
                <h3>Total:</h3>
                <p>$ {total}</p>
              </div>
              <div className='checkout_btn'>
                <Link to="/checkout">Checkout</Link>
              </div>
            </div>
          </div>)
        }

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

export default Card