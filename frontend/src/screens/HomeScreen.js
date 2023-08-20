import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
// import data from '../data';
import '../custom.css';
import { FaSearch } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import SearchBox from '../components/SearchBox';
// import NavigationBar from './components/NavigationBar'; // Import the NavigationBar component
import NavigationBar from '../components/NavigationBar';


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

function HomeScreen() {
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

      {/* Header hero */}
      <header className="hero">
        <div className="hero-content">
          <h1>Yonke, The Online Marketplace for all Goods and Services</h1>
          <p>Find everything you need in one place.</p>
          <SearchBox />
        </div>
      </header>

      <h1>Trending Products</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.slice(0, 4).map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>

      <h1>Categories </h1>
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
export default HomeScreen;
