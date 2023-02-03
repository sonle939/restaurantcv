import React, { useEffect, useState } from 'react'
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../pages/css/home.css';
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import logo2 from "../images/logo4.png";
import video1 from "../video/video2.mp4";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Slider from "react-slick";

function Home() { 
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get('http://localhost/restaurantcv/backend/product/').then(function (response) {
      console.log(response.data);
      setProduct(response.data);
    });
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
   autoplaySpeed: 3000
  };
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trang chủ</title>
        <meta name="description" content="Helmet application" />
        <link rel="canonical" href="../images/logo2.png" />
      </Helmet>
      <div className='home_container'>
        <ScrollToTop smooth top="100" />
        <div className='banner_container'>
          <video autoPlay loop muted>
            <source src={video1} />
          </video>
          <div className='home_banner'>
            <h3>Thức ăn ngon, rung cảm tuyệt vời</h3>
            <div className='home_button'>
              <Link to="/menu">Thực đơn</Link>
              <Link to="/about">Giới thiệu</Link>
              <Link to="/book">Đặt bàn</Link>
            </div>
          </div>
        </div>
        <div className='ourstory'>
          <div className='ourstory_content'>
            <h2>Our Story</h2>
            <span>Begins</span>
            <p>NabiSotth ra đời với tầm nhìn mang
              đến trải nghiệm ăn uống đơn giản nhưng
              ấm cúng và thoải mái. Tất cả bắt đầu với
              ý tưởng về hai người bạn thời thơ ấu, đồng
              đội bóng chày và những người yêu thích ẩm
              thực, tập hợp những điểm mạnh của riêng họ
              lại với nhau để tạo ra thứ gì đó mà họ có thể
              chia sẻ với người khác. Với NabiSotth – một nghệ sĩ bẩm sinh,
              có niềm đam mê lớn với nghệ thuật ẩm thực, và Kai –
              một kế toán CPA nhạy bén trong kinh doanh, Nhà hàng NabiSotth đã ra đời</p>
          </div>
          <div className='ourstory_imagelist'>
            <div className='ourstory_imageitem'>
              <img src='https://i.pinimg.com/564x/23/72/11/2372118c3a2912d195b54f0ed9e0d1a1.jpg' />
            </div>
            <div className='ourstory_imageitem'>
              <img src='https://i.pinimg.com/564x/fa/74/04/fa7404aba8645484fe92f2ea43bf8d1e.jpg' />
            </div>
            <div className='ourstory_imageitem'>
              <img src='https://i.pinimg.com/564x/f0/52/c0/f052c064a283f56f9cab01c6f5e3f78d.jpg' />
            </div>
          </div>
        </div>
        <div className='todayspecial'>
          <div className='todayspecial_text'>
            <h3>Today Special</h3>
            <p>Những món ăn nổi bật mỗi ngày luôn mang đến hương vị độc đáo</p>
          </div>
          <div className='todayspecial_list'>
            <Slider {...settings}>
              {product.filter((filter)=>filter.categoryid === 8).map((item) => (
                <div className='todayspecial_item' key={item.id}>
                  <div className='today_image'>
                    <img src={item.image} />
                  </div>
                  <div className='special_des'>
                    <h4>{item.proname}</h4>
                    <span>{item.description}</span>
                    <p>{item.price} VND</p>
                    <div className='order_special'>
                      <p>Số lượng: {item.amount}</p>
                      <div>Mua ngay</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className='hometable'>
          <div className='hoametable_content'>
            <h3>Khám phá ý nghĩa thực sự của hương vị</h3>
            <p>Đặt bàn ngay: 03959559001. Lẩu Nướng NabiSotth
              là thương hiệu buffet có dây chuyền tự chọn đầu
              tiên tại Việt Nam. Với quầy buffet độc đáo gần 40
              món đủ các loại thịt, khai vị, panchan,
              nước chấm và hải sản, mỗi cơ sở mang một phong cách riêng...</p>
            <Link to="/authpage/book">Đặt bàn ngay</Link>
          </div>
          <div className='homebookatable_image'>
            <img src='https://i.pinimg.com/564x/de/7c/ef/de7cef031f15ff99ce105034c6ab9bc4.jpg' />
          </div>
        </div>
        <div className='amenities'>
          <h3>Tiện nghi</h3>
          <div className='amenities_list'>
            <div className='amenities_item'>
              <div className='amenities_icon'>
                <i className="fa fa-truck" aria-hidden="true"></i>
              </div>
              <p>Home Delivery</p>
            </div>
            <div className='amenities_item'>
              <div className='amenities_icon'>
                <i className="fa fa-podcast" aria-hidden="true"></i>
              </div>
              <p>Take away</p>
            </div>
            <div className='amenities_item'>
              <div className='amenities_icon'>
                <i className="fa fa-credit-card" aria-hidden="true"></i>
              </div>
              <p>Multiple payment mode</p>
            </div>
            <div className='amenities_item'>
              <div className='amenities_icon'>
                <i className="fa fa-yelp" aria-hidden="true"></i>
              </div>
              <p>Party Orders</p>
            </div>
          </div>
        </div>
        <div className='homesale'>
          <div className='homesale_content'>
            <div className='sale_time'>
              <div className='sale_special'>Special</div>
              <h3>gift voucher</h3>
              <p>Valid from November 23 to December 25</p>
              <div className='line'></div>
            </div>
            <p>Up to 50% off</p>
            <Link to="/menu">Mua hàng ngay</Link>
          </div>
          <div className='homesale_image'>
            <div className='homesale_item'>
              <img src='https://i.pinimg.com/564x/66/2a/39/662a39d240ac1cbdc2dad012beb44e87.jpg' />
            </div>
            <div className='homesale_item'>
              <img src='https://i.pinimg.com/736x/6a/bc/e9/6abce98ad4a6f86bf2c0f0a3a72e7cf7.jpg' />
            </div>
            <div className='homesale_item'>
              <img src='https://i.pinimg.com/564x/0a/ab/e0/0aabe06c91df821eab98b8af041dbcee.jpg' />
            </div>
            <div className='homesale_item'>
              <img src='https://i.pinimg.com/736x/1e/69/d2/1e69d2c5ef35b810636775f0e28abdbb.jpg' />
            </div>
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

export default Home