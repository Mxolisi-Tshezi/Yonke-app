import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import '../css/MarketPlaceScreen.css';
// import data from '../data';
import '../custom.css';
import { FaSearch } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import SearchBox from '../components/SearchBox';

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
} from 'react-icons/fa';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function MarketPlaceScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Yonke</title>
      </Helmet>
      <div className="filtering-navbar">
        <div className="filtering-links">
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Explore the latest fashion"
          >
            <i className="fas fa-tshirt"></i> Shop Fashion
          </a>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Discover cutting-edge electronics"
          >
            <i className="fas fa-laptop"></i> Shop Electronics
          </a>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Take care of your health with our products"
          >
            <i className="fas fa-medkit"></i> Shop Health
          </a>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Equip your office with the best tools"
          >
            <i className="fas fa-laptop"></i> Shop Office Equipment
          </a>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Stay active and fit with our sports gear"
          >
            <i className="fas fa-dumbbell"></i> Shop Sport
          </a>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Get your groceries delivered to your doorstep"
          >
            <i className="fas fa-shopping-basket"></i> Shop Grocery
          </a>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Enhance your home with stylish decor"
          >
            <i className="fas fa-home"></i> Shop Home Decor
          </a>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Explore the world of books and literature"
          >
            <i className="fas fa-book"></i> Shop Books
          </a>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Upgrade your gaming experience with the latest releases"
          >
            <i className="fas fa-gamepad"></i> Shop Gaming
          </a>
          <a
            href="#"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Discover unique and handmade crafts"
          >
            <i className="fas fa-hand-holding-heart"></i> Shop Handmade
          </a>
        </div>
      </div>

      <header class="Marketplaceheader-header">
        <div class="Marketplaceheader-header-content">
          <h1>Friday Special</h1>
          <p>Browse our selection of high-quality Camers</p>
          <button>Shop now</button>
        </div>
      </header>

      <h1>Shop anything here</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
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
    </div>
  );
}
export default MarketPlaceScreen;
