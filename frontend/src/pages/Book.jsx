import React, { useEffect, useState } from 'react'
import "./css/bookatable.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import logo2 from "../images/logo4.png";
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Book() {
  const [fullname, setFullname] = useState('');
  const [mobile, setMobile] = useState('');
  const [date, setDate] = useState('');
  const [amountpp, setAmountpp] = useState('');
  const [note, setNote] = useState('');
  const [userid, setUserid] = useState('');
  const data = {
    fullname: fullname,
    mobile: mobile,
    date: date,
    amountpp: amountpp,
    note: note,
    userid: userid
  }
  useEffect(() => {
    setUserid(localStorage.getItem('id'));
  }, [])

  const submitTable = (e) => {
    e.preventDefault();
    if (localStorage.getItem('id') === null) {
      alert("Bạn phải đăng nhập thì mới đặt bàn được...")
    } else {
      axios.post('http://localhost/restaurant/backend/bookatable/save', data)
        .then(resault => {
          console.log(resault);
          alert("Đặt bàn thành công");
        });
    }
  }
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Đặt bàn</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className='bookatable'>
        <ScrollToTop smooth top="100" />
        <div className='bookatable_banner'>
          <img src='https://img.freepik.com/premium-photo/restaurant_23-2148014999.jpg?w=2000' />
          <div className='bookatable_banner_text'>
            Book a Table
          </div>
        </div>
        <div className='bookatable_address'>
          <h3>get in touch with us</h3>
          <div className='bookatable_address_list'>
            <div className='bookatable_address_item'>
              <i className="fa fa-mobile" aria-hidden="true"></i>
              <h4>Phone</h4>
              <p>Phone +84 395 959 001</p>
              <p>Phone +84 125 700 9502</p>
            </div>
            <div className='line_book'></div>
            <div className='bookatable_address_item'>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <h4>Address</h4>
              <p>54 triều khúc thanh xuân</p>
              <p>52 ngõ 138 tân triều</p>
            </div>
            <div className='line_book'></div>
            <div className='bookatable_address_item'>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <h4>Email</h4>
              <p>Email: sonhq28@gmail.com</p>
              <p>Email lexuanson28102001@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='bookatable_control'>
          <h3>What are you hesitating about
            without choosing a table for yourself
            at NabiSotth</h3>
          <div className='table_wrapper'>
            <form onSubmit={submitTable}>
              <div className='form_booktable_list'>
                <div className='form_booktable_item'>
                  <input type='text'
                    onChange={e => setFullname(e.target.value)}
                    placeholder='Your name' required />
                </div>
                <div className='form_booktable_item'>
                  <input type='text'
                    onChange={e => setMobile(e.target.value)}
                    placeholder='Your mobile' required />
                </div>
                <div className='form_booktable_item'>
                  <input type='date'
                    onChange={e => setDate(e.target.value)}
                    required />
                </div>
                <div className='form_booktable_item'>
                  <input type='text'
                    onChange={e => setAmountpp(e.target.value)}
                    placeholder='enter amount' required />
                </div>
                <div className='form_booktable_item'>
                  <textarea
                    onChange={e => setNote(e.target.value)}
                    placeholder='Enter notes' required></textarea>
                </div>
              </div>
              <div className='btn_bookatable'>
                <button type='submit'>Book a table</button>
              </div>
            </form>
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

export default Book