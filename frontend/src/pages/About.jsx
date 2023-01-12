import React from 'react'
import "./css/about.css"
import video1 from "../video/restaurant1.mp4";
import video2 from "../video/video3.mp4";
import bich from "../images/bich2.jpg";
import tuan from "../images/tuanly.jpg";
import son from "../images/son.jpg";
import thang from "../images/thangoanh1.jpg";
import ngan from "../images/ngan.jpg";
import { Link } from 'react-router-dom';
import logo2 from "../images/logo4.png";
import ScrollToTop from "react-scroll-to-top";
import { Helmet, HelmetProvider } from 'react-helmet-async';
function About() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Giới thiệu</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    <div className='about'>
    <ScrollToTop smooth top="100" />
      <div className='about_banner'>
        <video autoPlay loop muted>
          <source src={video1} />
        </video>
        <h3>About Us</h3>
      </div>
      <div className='aboutkaffen'>
        <div className='aboutkaffen_content'>
          <h2>About kaffen</h2>
          <h4>NabiSotth was founded to bring new flavors</h4>
          <p>NabiSotth Grilled Hot Pot is a restaurant system
            that is trusted and appreciated for its quality and
            price. This place always gives diners impressive
            experiences and dishes</p>
          <div className='aboutkaffen_content-item'>
            <i className="fa fa-cutlery" aria-hidden="true"></i>
            <div className='content-item_text'>
              <h3>Food quality</h3>
              <p>Always bring the food full of nutrition and irresistible taste</p>
            </div>
          </div>
          <div className='aboutkaffen_content-item'>
            <i className="fa fa-leaf" aria-hidden="true"></i>
            <div className='content-item_text'>
              <h3>Safe ingredients</h3>
              <p>Always use foods that are safe for diners</p>
            </div>
          </div>
          <Link to="/menu">Our Menu</Link>
        </div>
        <div className='aboutkaffen_image'>
          <img src='https://i.pinimg.com/736x/92/98/29/9298299fb18c4bd7ba1e56e606c12aee--hong-kong-chefs.jpg' />
        </div>
      </div>
      <div className='aboutcertification'>
        <div className='certification_item'>
          <div className='certification_icon'>
            <i className="fa fa-diamond" aria-hidden="true"></i>
          </div>
          <span>150+</span>
          <h2>Premium Clients</h2>
        </div>
        <div className='certification_item'>
          <div className='certification_icon'>
            <i className="fa fa-users" aria-hidden="true"></i>
          </div>
          <span>20+</span>
          <h2>Professional Chefs</h2>
        </div>
        <div className='certification_item'>
          <div className='certification_icon'>
            <i className="fa fa-trophy" aria-hidden="true"></i>
          </div>
          <span>20+</span>
          <h2>Certifications</h2>
        </div>
        <div className='certification_item'>
          <div className='certification_icon'>
            <i className="fa fa-certificate" aria-hidden="true"></i>
          </div>
          <span>100+</span>
          <h2>5 Start Reviews</h2>
        </div>
      </div>
      <div className='aboutchef'>
        <div className='chef_slogan'>
          <h2>EXPERIENCE TEAM MEMBER</h2>
          <p>Meet Our Professional Chefs</p>
        </div>
        <div className='chef_list'>
          <div className='chef_item'>
            <div className='chef_info'>
              <h3>Lê Xuân Sơn</h3>
              <p>Senior Chefs</p>
            </div>
            <div className='chef_image'>
              <img src={son} />
              <div className='chef_overlay'>
                <p>sonhq28@gmail.com</p>
                <p>(+84) 395 959 001</p>
                <div className='chef_overlayIcon'>
                  <div className='cheflist_icon'>
                    <div className='chefitem_icon'>
                      <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='chef_item'>
            <div className='chef_info'>
              <h3>Vũ Thị Ngọc Bích</h3>
              <p>Senior Chefs</p>
            </div>
            <div className='chef_image'>
              <img src={bich} />
              <div className='chef_overlay'>
                <p>ngocvtp66@gmail.com</p>
                <p>(+84) 395 959 001</p>
                <div className='chef_overlayIcon'>
                  <div className='cheflist_icon'>
                    <div className='chefitem_icon'>
                      <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='chef_item'>
            <div className='chef_info'>
              <h3>Vũ Hữu Thắng</h3>
              <p>Senior Chefs</p>
            </div>
            <div className='chef_image'>
              <img src={thang} />
              <div className='chef_overlay'>
                <p>vuthang28801@gmail.com</p>
                <p>(+84) 395 959 001</p>
                <div className='chef_overlayIcon'>
                  <div className='cheflist_icon'>
                    <div className='chefitem_icon'>
                      <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='chef_item'>
            <div className='chef_info'>
              <h3>Nguyễn Thanh Ngân</h3>
              <p>Senior Chefs</p>
            </div>
            <div className='chef_image'>
              <img src={ngan} />
              <div className='chef_overlay'>
                <p>thanhngannguyen2k1@gmail.com</p>
                <p>(+84) 395 959 001</p>

                  <div className='cheflist_icon'>
                    <div className='chefitem_icon'>
                      <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className='chef_item'>
            <div className='chef_info'>
              <h3>Trần Đức Tuấn</h3>
              <p>Senior Chefs</p>
            </div>
            <div className='chef_image'>
              <img src={tuan} />
              <div className='chef_overlay'>
                <p>tuanbi2000@gmail.com</p>
                <p>(+84) 395 959 001</p>
                  <div className='cheflist_icon'>
                    <div className='chefitem_icon'>
                      <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                    <div className='chefitem_icon'>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                  </div>
              </div>
            </div>
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

export default About