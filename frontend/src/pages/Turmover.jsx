import React from 'react'
import Navbar from '../components/Navbar'
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Turmover() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Thống kê</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div>
        Thống kê
      </div>
    </HelmetProvider>
  )
}

export default Turmover