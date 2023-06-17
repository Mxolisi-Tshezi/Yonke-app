import React from "react";
import { Link } from "react-router-dom";

import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaCommentAlt,
  FaFileSignature,
  FaHandshake,
  FaHeart,
  FaComment,
  FaSearchLocation,
  FaUserAlt,
  FaShoppingBasket,
  FaStore,
  FaSearch, // add this line
} from "react-icons/fa";
function Home() {
  return (
    // <div>
    //   HOME PAGE
    //   <Link to="/marketplace"> GO TO THE ABOUT PAGE </Link>
    // </div>
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/assets/Images/yonkelogo.png" alt="Logo" />
        </div>

        <div className="user-profile">
          <span className="greeting">Hi, user</span>
          <i className="fa fa-user"></i>
        </div>

        <div className="links">
          <Link to="/marketplace">Buy Products</Link>
          <Link to="/services">Buy Services</Link>
          <Link to="/Grocery">Buy Grocery</Link>

          {/* <a href="#">Buy Grocery</a> */}
          <a href="#">Track My Order</a>
          <Link to="/login">Sign in / Register</Link>

          <a href="#" className="register-link">
            Register your Business
          </a>
        </div>
      </div>

      {/* Header hero*/}

      <header className="hero">
        <div className="hero-content">
          <h1>Yonke, The Online Marketplace for all Goods and Services</h1>
          <p>Find everything you need in one place.</p>
          <div className="search-box">
            <input type="text" placeholder="What are you looking for?" />
            <button>
              <FaSearch />
            </button>
          </div>
        </div>
      </header>

      {/* categories */}

      <h2>categories </h2>
      <div className="card-box">
        <div className="grid-container">
          <div className="grid-item">
            <FaStore className="icon store" />
            <div className="text">Market Place</div>
            <p>
              Discover amazing deals on electronics, fashion, home essentials
              and more.
            </p>
          </div>
          <div className="grid-item">
            <FaHandshake className="icon shake" />
            <div className="text">Services</div>
            <p>
              Hire top-rated professionals for your home, office or project
              needs.
            </p>
          </div>
          <div className="grid-item">
            <FaShoppingBasket className="icon groceries" />
            <div className="text">Grocery stores</div>
            <p>
              Find all your grocery needs from fresh produce to household
              essentials.
            </p>
          </div>
          <div className="grid-item">
            <FaCalendarAlt className="icon calendar" />
            <div className="text">Events</div>
            <p>Discover the latest events and experiences in your city.</p>
          </div>
          <div className="grid-item">
            <FaFileSignature className="icon sign" />
            <div className="text">Tenders</div>
            <p>
              Find the latest government and private tenders in your industry.
            </p>
          </div>
        </div>
      </div>

      {/* Top Selling Services and Products */}

      <h2>Top Selling Services and Products</h2>

      <div className="TopSelling-card-box">
        <div className="TopSelling-grid-container">
          <div className="TopSelling-grid-item">
            <img
              src="/assets/Images/Mofaya.jpeg"
              alt="Product image"
              className="icon"
            />
            <div className="TopSelling-text">Samsung Digital Watch</div>
            <div className="TopSelling-provider-text">
              Sold by: Smart Electronics
            </div>
          </div>

          <div className="TopSelling-grid-item">
            <img
              src="/assets/Images/images.png"
              alt="Service image"
              className="icon"
            />
            <div className="TopSelling-text">Plumbing services</div>
            <div className="TopSelling-provider-text">
              Sold by: Smart Rhino Plumbers
            </div>
          </div>

          <div className="TopSelling-grid-item">
            <img
              src="/assets/Images/yini-le.jpg"
              alt="Product image"
              className="icon"
            />
            <div className="opSelling-text">yini-le </div>
            <div className="TopSelling-provider-text">Sold by: Glamourous</div>
          </div>

          <div className="TopSelling-grid-item">
            <img
              src="/assets/Images/attorneys.jpeg"
              alt="Service image"
              className="icon"
            />
            <div className="TopSelling-text">Legal services</div>
            <div className="TopSelling-provider-text">
              Sold by: MJ Nyanga Attorneys
            </div>
          </div>

          <div className="TopSelling-grid-item">
            <img
              src="/assets/Images/salon.png"
              alt="Service image"
              className="icon"
            />
            <div className="TopSelling-text">Hair Salon</div>
            <div className="TopSelling-provider-text">
              Sold by: Zodwa's Hair Salon
            </div>
          </div>

          <div className="TopSelling-grid-item">
            <img
              src="/assets/Images/Mofaya.jpeg"
              alt="Product image"
              className="icon"
            />
            <div className="TopSelling-text">Mofaya Energy Drink</div>
            <div className="TopSelling-provider-text">Sold by: Mofaya </div>
          </div>
          <div className="TopSelling-grid-item">
            <img
              src="/assets/Images/digitalwatch.jpg"
              alt="Product image"
              className="icon"
            />
            <div className="TopSelling-text">Samsung Digital Watch</div>
            <div className="TopSelling-provider-text">
              Sold by: Smart Electronics
            </div>
          </div>
          <div className="TopSelling-grid-item">
            <img
              src="/assets/Images/wiseman.jpeg"
              alt="Product image"
              className="icon"
            />
            <div className="TopSelling-text">Elecrician services</div>
            <div className="TopSelling-provider-text">
              Sold by: Senzo Elecricals{" "}
            </div>
          </div>
          <div className="TopSelling-grid-item">
            <img
              src="/assets/Images/nailtech.jpeg"
              alt="Product image"
              className="icon"
            />
            <div className="TopSelling-text">Nail Tech services</div>
            <div className="TopSelling-provider-text">
              Sold by: Fufu Beauty Spar
            </div>
          </div>
          <div className="TopSelling-grid-item">
            <img
              src="/assets/Images/prime.jpeg"
              alt="Product image"
              className="icon"
            />
            <div className="TopSelling-text">Prime Energy Drink</div>
            <div className="TopSelling-provider-text">Sold by: Checkers </div>
          </div>

          <div className="TopSelling-grid-item">
            <img
              src="/assets/Images/wiseman.jpeg"
              alt="Product image"
              className="icon"
            />
            <div className="TopSelling-text">Elecrician services</div>
            <div className="TopSelling-provider-text">
              Sold by: Senzo Elecricals{" "}
            </div>
          </div>
          <div className="TopSelling-grid-item">
            <img
              src="../Images/digitalwatch.jpg"
              alt="Product image"
              className="icon"
            />
            <div className="TopSelling-text">Samsung Digital Watch</div>
            <div className="TopSelling-provider-text">
              Sold by: Smart Electronics
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}

      <footer>
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-section">
              <h4 className="footer-title">Company Info</h4>
              <ul className="footer-list">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Terms &amp; Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Customer Service</h4>
              <ul className="footer-list">
                <li>FAQs</li>
                <li>Shipping &amp; Returns</li>
                <li>Size Guide</li>
                <li>Track Your Order</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Follow Us</h4>
              <ul className="footer-social-list">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="footer-text">&copy; 2023 Yonke. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
