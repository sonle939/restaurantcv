import React, { useEffect, useState } from 'react';
import "./css/heart.css";
import { Link, useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import logo2 from "../images/logo4.png";
import heartlogo from "../images/heart.png";
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Heart({ heart, setHeart }) {
  useEffect(() => {
    getHeart();
  }, []);
  const iduser = localStorage.getItem('id');
  function getHeart() {
    if (localStorage.getItem('id') === null) {
      console.log('nabisotth')
    } else {
      axios.get('http://localhost/groupseven/backend/heart/').then(function (response) {
        console.log(response.data);
        setHeart(response.data);
      })
    }
  }
  const deleteHeart = (id) => {
    axios.delete(`http://localhost/groupseven/backend/heart/${id}/delete`).then(function (response) {
      console.log(response.data);
      getHeart();
    });
  }
  console.log(heart)
  const insertcart = (item) => {
    const data = {
      proname: item.proname,
      image: item.image,
      price: item.price,
      amount: 1,
      description: item.description,
      userid: localStorage.getItem('id'),
      pronameid: item.pronameid
    }
    if (localStorage.getItem('id') === null) {
      alert("Bạn phải đăng nhập thì mới thêm được...");

    } else {
      axios.post('http://localhost/groupseven/backend/cart/save', data)
        .then(resault => {
          console.log(resault);
        });
      //alert('Them thanh cong')
    }
  }
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mục yêu thích</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className='heart'>
        <div className='heart_breadcrumb'>
          <Link to="/">Trang chủ</Link>
          <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          <Link to="/heart" className='Favourite'>Favourite</Link>
        </div>
        {localStorage.getItem('id') === null || heart.filter(item=>item.userid == localStorage.getItem('id')).length === 0  ? (
          <div className="container">
            <img src={heartlogo}/>
            <h2 className="title">
              <span className="title-word title-word-1">Mục </span>
              <span className="title-word title-word-2">yêu </span>
              <span className="title-word title-word-3">thích</span>
              <span className="title-word title-word-4">trống...</span>
            </h2>
          </div>
        ) : (<div className='heart_wrapper'>
          <h3>My Wishlist</h3>
          <div className='heart_list'>
            <Table className='heart_table' striped bordered hover>
              <thead>
                <tr>
                  <th >Images</th>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Description</th>
                  <th className='pronameid_table'>pronameID</th>
                  <th>Add to cart</th>
                  <th className='title_action'>Remove</th>
                </tr>
              </thead>
              <tbody>
                {heart.filter((itemfilter)=>itemfilter.userid == iduser).map((item) => {
                  return (
                    <tr key={item.id}>
                      <td><img src={item.image} className="imageheart" /></td>
                      <td className='item_text_table'>{item.proname}</td>
                      <td className='item_text_table'>{item.price}</td>
                      <td className='item_text_table'>{item.description}</td>
                      <td className='pronameid_table'>{item.pronameid}</td>
                      <td><button onClick={() => { insertcart(item); deleteHeart(item.id) }}>Add to card</button></td>
                      <td className='btn_control'>
                        <Link
                          onClick={() => deleteHeart(item.id)}
                          to="#"
                          className='btn_del'
                        >
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>

        </div>)}
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

export default Heart