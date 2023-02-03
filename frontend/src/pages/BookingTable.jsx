import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/esm/Table';
import { Link } from 'react-router-dom';
import "./css/bookingtable.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';
function BookingTable() {
  const [table, setTable] = useState([]);
  useEffect(() => {
    getTable();
  }, []);

  function getTable() {
    axios.get('http://localhost/restaurantcv/backend/bookatable/save').then(function (response) {
      console.log(response.data);
      setTable(response.data);
    });
  }

  const deleteTable = (id) => {
    axios.delete(`http://localhost/restaurantcv/backend/bookatable/${id}/delete`).then(function (response) {
      console.log(response.data);
      getTable();
    });
  }

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Quản lý đặt bàn</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    <div className='account_wrap'>
      <div className='table_container'>
        <h4>Manage Table</h4>
      </div>
      <div className='account_list'>
        <Table className='table_container' striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full name </th>
              <th>Mobile</th>
              <th>Date</th>
              <th>Amountpp</th>
              <th>Note</th>
              <th>UserID</th>
              <th className='title_action'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.fullname}</td>
                  <td>{item.mobile}</td>
                  <td>{item.date}</td>
                  <td>{item.amountpp}</td>
                  <td>{item.note}</td>
                  <td>{item.userid}</td>
                  <td className='btn_control'>
                    <Link
                      onClick={() => deleteTable(item.id)}
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

export default BookingTable