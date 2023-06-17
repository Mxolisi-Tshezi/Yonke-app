import React from "react";
import { Link } from "react-router-dom";

function Services() {
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
              placeholder="        Search for services near me"
            />
            <button>Search</button>
          </div>
        </div>
        <div className="links">
          <a href="/">Home</a>
          <a href="#">Appointments</a>
          {/* <a href="#">My Account</a> */}
          <a href="#" className="cart-link">
            <i className="fa fa-envelope"></i>
            <span className="cart-count">3</span>
          </a>
        </div>
      </div>

      {/* Filtering */}

      <div className="filtering-navbar">
        <div className="filtering-links">
          <Link to="/marketplace">near me</Link>
          <a href="#">Fashion</a>
          <a href="#">Electronics</a>
          <a href="#">Beauty</a>
          <a href="#">Health</a>
          <a href="#">Office equipment</a>
          <a href="#">Sport</a>
          <a href="#">Tutoring</a>
          <a href="#">Tech</a>
          <a href="#">Legal</a>
          <a href="#">Legal</a>

          <a href="#">Legal</a>






        </div>
      </div>

      {/* <header class="Marketplaceheader-header">
        <div class="Marketplaceheader-header-content">
          <h1>Friday Special</h1>
          <p>Browse our selection of high-quality Camers</p>
          <button>Shop now</button>
        </div>
      </header> */}

      <main>
        <h2>Services near Me</h2>
        <ul className="Store-list">
          <li>
            <div className="backgroundaimg">
              <img src="/assets/Images/lewis.png" alt="Store" />
            </div>
            <h3>Lewis Kysna</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniamt.
            </p>
            <span>
              <div class="ratings">
                <button>View Details</button>{" "}
                <span class="rating">&#9733;</span>
                <span class="rating">&#9733;</span>
                <span class="rating">&#9733;</span>
                <span class="rating">&#9734;</span>
                <span class="rating">&#9734;</span>
              </div>
            </span>
          </li>
          <li>
  <div className="backgroundaimg">
    <img src="/assets/Images/lewis.png" alt="Store" />
  </div>
  <h3>Lewis Kysna</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt.
  </p>
  <span>
    <div class="ratings">
      <button>View Details</button>{" "}
      <span class="rating">&#9733;</span>
      <span class="rating">&#9733;</span>
      <span class="rating">&#9733;</span>
      <span class="rating">&#9734;</span>
      <span class="rating">&#9734;</span>
    </div>
  </span>
</li>
   <li>
  <div className="backgroundaimg">
    <img src="/assets/Images/lewis.png" alt="Store" />
  </div>
  <h3>Lewis Kysna</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt.
  </p>
  <span>
    <div class="ratings">
      <button>View Details</button>{" "}
      <span class="rating">&#9733;</span>
      <span class="rating">&#9733;</span>
      <span class="rating">&#9733;</span>
      <span class="rating">&#9734;</span>
      <span class="rating">&#9734;</span>
    </div>
  </span>
</li>
   <li>
  <div className="backgroundaimg">
    <img src="/assets/Images/lewis.png" alt="Store" />
  </div>
  <h3>Lewis Kysna</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt.
  </p>
  <span>
    <div class="ratings">
      <button>View Details</button>{" "}
      <span class="rating">&#9733;</span>
      <span class="rating">&#9733;</span>
      <span class="rating">&#9733;</span>
      <span class="rating">&#9734;</span>
      <span class="rating">&#9734;</span>
    </div>
  </span>
</li>
   <li>
  <div className="backgroundaimg">
    <img src="/assets/Images/lewis.png" alt="Store" />
  </div>
  <h3>Lewis Kysna</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt.
  </p>
  <span>
    <div class="ratings">
      <button>View Details</button>{" "}
      <span class="rating">&#9733;</span>
      <span class="rating">&#9733;</span>
      <span class="rating">&#9733;</span>
      <span class="rating">&#9734;</span>
      <span class="rating">&#9734;</span>
    </div>
  </span>
</li>
   <li>
  <div className="backgroundaimg">
    <img src="/assets/Images/lewis.png" alt="Store" />
  </div>
  <h3>Lewis Kysna</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt.
  </p>
  <span>
    <div class="ratings">
      <button>View Details</button>{" "}
      <span class="rating">&#9733;</span>
      <span class="rating">&#9733;</span>
      <span class="rating">&#9733;</span>
      <span class="rating">&#9734;</span>
      <span class="rating">&#9734;</span>
    </div>
  </span>
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

export default Services;
