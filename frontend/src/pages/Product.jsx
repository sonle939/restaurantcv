import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/account.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Product() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get('http://localhost/groupseven/backend/product/').then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`http://localhost/groupseven/backend/product/${id}/delete`).then(function (response) {
      console.log(response.data);
      getUsers();
    });
  }

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Quản lý sản phẩm</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className='account_wrap'>
        <div className='account_container'>
          <h4>Manage product</h4>
          <div className='add_control'>
            <i classname="fa fa-plus" aria-hidden="true"></i>
            <Link to='/product/add' className='add_user'>Add Product</Link>
          </div>
        </div>
        <div className='account_list'>
          <Table className='table_container' striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Image</th>
                <th>CategoryID</th>
                <th className='title_action'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.proname}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.amount}</td>
                    <td><img className='image_product' src={item.image} /></td>
                    <td>{item.categoryid}</td>
                    <td className='btn_control'>
                      <Link
                        to={`/product/${item.id}`}
                        className="btn_view"
                      >
                        <i className="fa fa-eye " aria-hidden="true"></i>
                      </Link>
                      <Link
                        to={`/product/${item.id}/edit`}
                        className="btn_update"
                      >
                        <i className="fa fa-pencil-square-o " aria-hidden="true"></i>
                      </Link>
                      <Link
                        onClick={() => deleteUser(item.id)}
                        to="#"
                        className='btn_del'
                      >
                        <i className="fa fa-trash " aria-hidden="true"></i>
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>

      </div>
    </HelmetProvider>
  )
}

export default Product