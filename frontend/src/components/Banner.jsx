import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/css/home.css';
function Banner() {
  return (
    <div className='banner_container'>
    <img src="https://img.freepik.com/premium-photo/restaurant_23-2148014999.jpg?w=2000"/>
    <div className='home_banner'>
        <h3>Good Food, Great Vibes</h3>
        <div className='home_button'>
            <Link to="/menu">Menu</Link>
            <Link to="/promotion">Promotion</Link>
            <Link to="/book">Book a Table</Link>
        </div>
    </div> 
</div>
  )
}

export default Banner