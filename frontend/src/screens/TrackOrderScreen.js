import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import '../css/ServicesScreen.css';

function TrackOrderScreen() {
  const [orderNumber, setOrderNumber] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to a different screen with the order number as a parameter
    history.push(`/order/${orderNumber}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Track Your Order</h1>
        <form onSubmit={handleSubmit} className="order-form">
          <input
            type="text"
            placeholder="Enter Order Number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </header>
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

export default TrackOrderScreen;
