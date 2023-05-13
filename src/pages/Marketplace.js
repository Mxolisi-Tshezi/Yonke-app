import React from "react";
import { Link } from "react-router-dom";

function About() {
  // const [goToContact, setGoToContact] = React.useState(false);

  // if (goToContact) {
  //   return <Navigate to="/contact" />;
  // }

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src="/assets/Images/yonkelogo.png" alt="Logo" />
        </div>
        <div className="search-bar">
          <div className="filter">
            <select name="filter">
              <option value="all">Filter by..</option>
              <option value="location">Fashion</option>
              <option value="service">Elecronics</option>
              <option value="product">Health & Beauty</option>
              <option value="product">Office</option>
              <option value="product">School</option>
            </select>
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search for products or anything near me"
            />
            <button>Search</button>
          </div>
        </div>
        <div className="links">
          <a href="/">Home</a>
          <a href="#">Track My Order</a>
          <a href="#">My Account</a>
          <a href="#" className="cart-link">
            <i className="fa fa-shopping-cart"></i>
            <span className="cart-count">3</span>
          </a>
        </div>
      </div>

      {/* Filtering */}

      <div className="filtering-navbar">
        <div className="filtering-links">
          <Link to="/stores">Stores near me</Link>
          <a href="#">Shop Fashion</a>
          <a href="#">Shop Electronics</a>
          <a href="#">Shop Beauty</a>
          <a href="#">Shop Health</a>
          <a href="#">Shop Office equipment</a>
          <a href="#">Shop Sport</a>
          <a href="#">Shop Grocery</a>
        </div>
      </div>

      <header class="Marketplaceheader-header">
        <div class="Marketplaceheader-header-content">
          <h1>Friday Special</h1>
          <p>Browse our selection of high-quality Camers</p>
          <button>Shop now</button>
        </div>
      </header>

      <main>
        <h2>Products</h2>
        <ul className="Marketplace-product-list">
          <li>
            <img src="/assets/Images/yini-le.jpg" alt="Product" />

            <h3>Product Title</h3>
            <p>Product Description</p>
            <p>Sold by: Seller Name</p>

            <span>R10.00</span>
            {/* <div class="ratings">
              <span class="rating">&#9733;</span>
              <span class="rating">&#9733;</span>
              <span class="rating">&#9733;</span>
              <span class="rating">&#9734;</span>
              <span class="rating">&#9734;</span>

            </div> */}
            <button>Add to Cart</button>
          </li>
          <li>
            <img src="/assets/Images/Mofaya.jpeg" alt="Product" />
            <h3>Product Title</h3>
            <p>Product Description</p>
            <p>Sold by: Seller Name</p>
            <span>R10.00</span>
            <button>Add to Cart</button>
          </li>
          <li>
            <img src="/assets/Images/imbiza.jpeg" alt="Product" />
            <h3>Product Title</h3>
            <p>Product Description</p>
            <p>Sold by: Seller Name</p>

            <span>R10.00</span>
            <button>Add to Cart</button>
          </li>
          <li>
            <img src="/assets/Images/headphones.jpg" alt="Product" />
            <h3>Product Title</h3>
            <p>Product Description</p>
            <p>Sold by: Seller Name</p>

            <span>R10.00</span>
            <button>Add to Cart</button>
          </li>
          <li>
            <img src="/assets/Images/vaseline.jpeg" alt="Product" />
            <h3>Product Title</h3>
            <p>Product Description</p>
            <p>Sold by: Seller Name</p>

            <span>R10.00</span>
            <button>Add to Cart</button>
          </li>

          <li>
            <img src="/assets/Images/shoes.jpg" alt="Product" />
            <h3>Product Title</h3>
            <p>Product Description</p>
            <p>Sold by: Seller Name</p>

            <span>R10.00</span>
            <button>Add to Cart</button>
          </li>
          <li>
            <img
              src="https://media.takealot.com/covers_images/faad12fbb951493fb1ed4aa8f37bb43b/s-zoom.file"
              alt="Product"
            />
            <h3>Product Title</h3>
            <p>Product Description</p>
            <p>Sold by: Seller Name</p>

            <span>R10.00</span>
            <button>Add to Cart</button>
          </li>
          <li>
            <img src="/assets/Images/ingwe.jpeg" alt="Product" />
            <h3>Product Title</h3>
            <p>Product Description</p>
            <p>Sold by: Seller Name</p>

            <span>R10.00</span>
            <button>Add to Cart</button>
          </li>
        </ul>
      </main>
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

      {/* This is the Marketplace Page
      <button
        onClick={() => {
          setGoToContact(true);
        }}
      >
        {" "}
        Go to the contact page
      </button> */}
    </div>
  );
}

export default About;
