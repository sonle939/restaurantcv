import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/account.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Category() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get('http://localhost/restaurant/backend/category/').then(function (response) {
      console.log(response.data);
      setCategory(response.data);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`http://localhost/restaurant/backend/category/${id}/delete`).then(function (response) {
      console.log(response.data);
      getUsers();
    });
  }

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Danh mục</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className='account_wrap'>
        <div className='account_container'>
          <h4>Manage Category</h4>
          <div className='add_control'>
            <i classname="fa fa-plus" aria-hidden="true"></i>
            <Link to='/category/add' className='add_user'>Add Category</Link>
          </div>
        </div>
        <Table className='table_container' striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th className='catename'>Category Name</th>
              <th className='title_action'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {category.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.categoryid}</td>
                  <td>{item.categoryname}</td>
                  <td className='btn_control'>
                    <Link
                      to={`/category/${item.categoryid}`}
                      className="btn_view"
                    >
                      <i className="fa fa-eye " aria-hidden="true"></i>
                    </Link>
                    <Link
                      to={`/category/${item.categoryid}/edit`}
                      className="btn_update"
                    >
                      <i className="fa fa-pencil-square-o " aria-hidden="true"></i>
                    </Link>
                    <Link
                      onClick={() => deleteUser(item.categoryid)}
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
    </HelmetProvider>
  )
}

export default Category