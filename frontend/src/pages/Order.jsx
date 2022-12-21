import React from 'react'
import Navbar from '../components/Navbar'
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Order() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Quản lý đơn hàng</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    <div>
        đơn hàng
    </div>
    </HelmetProvider>
  )
}

export default Order