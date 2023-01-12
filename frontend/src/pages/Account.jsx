import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/account.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Account() {
  const [users, setUsers] = useState([]);
  const [isActive, setIsactive] = useState(false);
  const [selected, setSelected] = useState('Choose one');
  const [order, setOrder] = useState("ASC");
  //const options = ["All","Staff","Customer","Administrators"]
  const options = [
    {
      id: 1,
      optionname: "All"
    },
    {
      id: 2,
      optionname: "staff"
    },
    {
      id: 3,
      optionname: "user"
    },
    {
      id: 4,
      optionname: "admin"
    }
  ]
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get('http://localhost/restaurant/backend/user/').then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`http://localhost/restaurant/backend/user/${id}/delete`).then(function (response) {
      console.log(response.data);
      getUsers();
    });
  }
  const filterAccount = (rankAccount) => {
    if (rankAccount === "admin") {
      const filter = [...users].filter((itemRank) => {
        return rankAccount === itemRank.rank;
      });
      setUsers(filter);
    }
    if (rankAccount === "user") {
      const filter = [...users].filter((itemRank) => {
        return rankAccount === itemRank.rank;
      });
      setUsers(filter);
    }
    if (rankAccount === "staff") {
      const filter = [...users].filter((itemRank) => {
        return rankAccount === itemRank.rank;
      });
      setUsers(filter);
    }
    if (rankAccount === "all") {
      const filter = [...users].forEach((itemRank) => {
        return itemRank;
      });
      setUsers(filter);
    }
  }
  const sortName = (col) => {
    if (order === "ASC") {
      const sorted = [...users].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setUsers(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...users].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? -1 : 1
      );
      setUsers(sorted);
      setOrder("ASC");
    }
  }
  console.log(selected)
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Quản lý tài khoản</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className='account_wrap'>
        <div className='account_container'>
          <div className='account_text'>
            <h4>Manage Account</h4>
            <div className='account_filter'>
              <div className='dropdown_account' onClick={() => setIsactive(!isActive)}>
                {selected}
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              {isActive && (
                <div className='dropdown_content'>
                  {options.map((items, index) => (
                    <div className='dropdown_item'
                      key={items.id}
                      onClick={(e) => {
                        setSelected(items.optionname);
                        setIsactive(false);
                        filterAccount(items.optionname);
                      }}>
                      {items.optionname}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className='add_control'>
            <i classname="fa fa-plus" aria-hidden="true"></i>
            <Link to='/account/add' className='add_user'>Add User</Link>
          </div>
        </div>
        <Table className='table_container' striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th onClick={(e) => sortName("fullname")}>Full Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Rank</th>
              <th className='title_action'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.fullname}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.address}</td>
                  <td>(+84){item.mobile}</td>
                  <td>{item.rank}</td>
                  <td className='btn_control'>
                    <Link
                      to={`/account/${item.id}`}
                      className="btn_view"
                    >
                      <i className="fa fa-eye " aria-hidden="true"></i>
                    </Link>
                    <Link
                      to={`/account/${item.id}/edit`}
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
    </HelmetProvider>
  )
}

export default Account