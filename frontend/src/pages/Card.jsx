import React, { useEffect } from 'react';
import "../pages/css/card.css";
import logo2 from "../images/logo4.png";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Helmet, HelmetProvider } from 'react-helmet-async';
function Card({ card, setCard }) {


  useEffect(() => {
    getCard();
  }, []);

  function getCard() {
    if (localStorage.getItem('id') === null) {
      console.log('im mom')
    } else {
      axios.get('http://localhost/groupseven/backend/card/').then(function (response) {
        console.log(response.data);
        setCard(response.data);
      })
    }
  }
  const deleteCard = (id) => {
    axios.delete(`http://localhost/groupseven/backend/card/${id}/delete`).then(function (response) {
      console.log(response.data);
      getCard();
    });
  }
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
        <div className='card_wapper'>
          <div className='card_list'>
            <div className='card_item'>
              <div className='card_img'>
                <img src='https://i.pinimg.com/564x/78/72/44/78724471487b6f7d7013d67fcd60d947.jpg' />
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
              <div className='card_des'>
                <h3>Lau nuong NabiSotth</h3>
                <p>ngon bo re</p>
                <div className='card_price'>
                  <h5>$ 500000</h5>
                  <div className='card_quality'>
                    <button><i className="fa fa-minus" aria-hidden="true"></i></button>
                    <div>1</div>
                    <button><i className="fa fa-plus" aria-hidden="true"></i></button>
                  </div>
                </div>
                <div className='link_card'>
                  <Link>Xem chi tiết</Link>
                  <div className='line'>
                  </div>
                </div>
              </div>
            </div>
            <div className='card_item'>
              <div className='card_img'>
                <img src='https://i.pinimg.com/564x/78/72/44/78724471487b6f7d7013d67fcd60d947.jpg' />
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
              <div className='card_des'>
                <h3>Lau nuong NabiSotth</h3>
                <p>ngon bo re</p>
                <div className='card_price'>
                  <h5>$ 500000</h5>
                  <div className='card_quality'>
                    <button><i className="fa fa-minus" aria-hidden="true"></i></button>
                    <div>1</div>
                    <button><i className="fa fa-plus" aria-hidden="true"></i></button>
                  </div>
                </div>
                <Link>Xem chi tiết</Link>
              </div>
            </div>
            <div className='card_item'>
              <div className='card_img'>
                <img src='https://i.pinimg.com/564x/78/72/44/78724471487b6f7d7013d67fcd60d947.jpg' />
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
              <div className='card_des'>
                <h3>Lau nuong NabiSotth</h3>
                <p>ngon bo re</p>
                <div className='card_price'>
                  <h5>$ 500000</h5>
                  <div className='card_quality'>
                    <button><i className="fa fa-minus" aria-hidden="true"></i></button>
                    <div>1</div>
                    <button><i className="fa fa-plus" aria-hidden="true"></i></button>
                  </div>
                </div>
                <Link>Xem chi tiết</Link>
              </div>
            </div>
            <div className='card_item'>
              <div className='card_img'>
                <img src='https://i.pinimg.com/564x/78/72/44/78724471487b6f7d7013d67fcd60d947.jpg' />
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
              <div className='card_des'>
                <h3>Lau nuong NabiSotth</h3>
                <p>ngon bo re</p>
                <div className='card_price'>
                  <h5>$ 500000</h5>
                  <div className='card_quality'>
                    <button><i className="fa fa-minus" aria-hidden="true"></i></button>
                    <div>1</div>
                    <button><i className="fa fa-plus" aria-hidden="true"></i></button>
                  </div>
                </div>
                <Link>Xem chi tiết</Link>
              </div>
            </div>
            <div className='card_item'>
              <div className='card_img'>
                <img src='https://i.pinimg.com/564x/78/72/44/78724471487b6f7d7013d67fcd60d947.jpg' />
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
              <div className='card_des'>
                <h3>Lau nuong NabiSotth</h3>
                <p>ngon bo re</p>
                <div className='card_price'>
                  <h5>$ 500000</h5>
                  <div className='card_quality'>
                    <button><i className="fa fa-minus" aria-hidden="true"></i></button>
                    <div>1</div>
                    <button><i className="fa fa-plus" aria-hidden="true"></i></button>
                  </div>
                </div>
                <Link>Xem chi tiết</Link>
              </div>
            </div>
            <div className='card_item'>
              <div className='card_img'>
                <img src='https://i.pinimg.com/564x/78/72/44/78724471487b6f7d7013d67fcd60d947.jpg' />
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
              <div className='card_des'>
                <h3>Lau nuong NabiSotth</h3>
                <p>ngon bo re</p>
                <div className='card_price'>
                  <h5>$ 500000</h5>
                  <div className='card_quality'>
                    <button><i className="fa fa-minus" aria-hidden="true"></i></button>
                    <div>1</div>
                    <button><i className="fa fa-plus" aria-hidden="true"></i></button>
                  </div>
                </div>
                <Link>Xem chi tiết</Link>
              </div>
            </div>
            <div className='card_item'>
              <div className='card_img'>
                <img src='https://i.pinimg.com/564x/78/72/44/78724471487b6f7d7013d67fcd60d947.jpg' />
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
              <div className='card_des'>
                <h3>Lau nuong NabiSotth</h3>
                <p>ngon bo re</p>
                <div className='card_price'>
                  <h5>$ 500000</h5>
                  <div className='card_quality'>
                    <button><i className="fa fa-minus" aria-hidden="true"></i></button>
                    <div>1</div>
                    <button><i className="fa fa-plus" aria-hidden="true"></i></button>
                  </div>
                </div>
                <Link>Xem chi tiết</Link>
              </div>
            </div>
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
                <p>$ 430.00</p>
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
              <p>$ 43.00</p>
            </div>
            <div className='checkout_btn'>
              <Link to="/checkout">Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default Card