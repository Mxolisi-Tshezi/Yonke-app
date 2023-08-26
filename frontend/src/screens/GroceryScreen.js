import React from "react";
import { Link } from "react-router-dom"
import "./GroceryScreen.css"

function Grocery() {
    return (
        <div>
          

            {/*Main Body*/}
      
            <main>
                <h2>Find Groceries At Any Of These Stores!!!</h2>

                    {/*First Grocry shop */}
                <ul className="Store-list">
                    <li>
                        <div className="backgroundaimg">
                            <img src="/assets/Images/logo-1.jpg" alt="Checkers" />
                        </div>
                        <h3>Checkers</h3>
                        <p>
                            Better and better
                        </p>
                        {/*<button className="grocery-btn" onclick="gotoLink(this)" value="https://www.sixty60.co.za/home.html">Shop Here</button>*/}
                       <button ><Link to="https://www.sixty60.co.za/home.html"><b>Shop Here</b></Link></button> 
                    </li>

                    {/*Second Grocry shop */}
                    <li>
                        <div className="backgroundaimg">
                            <img src="/assets/Images/logo-2.png" alt="PicknPay" />
                        </div>
                        <h3>Pick 'n Pay</h3>
                        <p>
                            Where lower prices look better
                        </p>
                        {/*<button className="grocery-btn" onclick="gotoLink(this)" value="https://www.pnp.co.za/">Shop Here</button>*/}
                        <button><Link to="https://www.pnp.co.za/" ><b>Shop Here</b></Link></button>
                    </li>

                    {/*Third Grocry shop */}
                    <li>
                        <div className="backgroundaimg">
                            <img src="/assets/Images/logo-3.jpg" alt="Woolworths" />
                        </div>
                        <h3>Woolworths</h3>
                        <p>
                            The fresh food people
                        </p>
                        {/*<button className="grocery-btn" onclick="gotoLink(this)" value="https://www.woolworths.co.za/">Shop Here</button>*/}
                        <button><Link to="https://www.woolworths.co.za/"><b>Shop Here</b></Link></button>
                    </li>

                    {/*Fourth Grocry shop */}
                    <li>
                        <div className="backgroundaimg">
                            <img src="/assets/Images/logo-4.jpg" alt="Spar" />
                        </div>
                        <h3>Spar</h3>
                        <p>
                            Better together
                        </p>
                        {/*<button className="grocery-btn" onclick="gotoLink(this)" value="https://www.pnp.co.za/">Shop Here</button>*/}
                        <button><Link to="https://www.spar.co.za/Home" ><b>Shop Here</b></Link></button>
                    </li>

                </ul>
            </main>

       
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

export default Grocery;
    
    
    

