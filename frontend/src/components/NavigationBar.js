import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';

const NavigationBar = ({ sidebarIsOpen, setSidebarIsOpen, cart, userInfo, signoutHandler }) => {
  return (
    <header className='myheader'>
    <Navbar  bg="dark" variant="dark" expand="lg">
      <Container>
        <Button
          variant="dark"
          onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
        >
          <i className="fas fa-bars"></i>
        </Button>

        <LinkContainer to="/">
          <Navbar.Brand> Yonke</Navbar.Brand>
          {/* <Navbar.Brand><div className="logo">
    <img src="../yonkelogo.png" alt="Logo" />
  </div></Navbar.Brand> */}

        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <SearchBox /> */}
          <Nav className="me-auto  w-100  justify-content-end">
            <Link className="nav-link" to="/#">
              Home
            </Link>
            <Link className="nav-link" to="/MarketPlaceScreen">
              Buy Products
            </Link>
            <Link className="nav-link" to="/ServicesScreen">
              Buy Services
            </Link>
            <Link className="nav-link" to="/ServicesScreen">
              Buy Grocery
            </Link>

            <Link className="nav-link" to="/TrackOrderScreen">
              Track My Order
            </Link>
            <Link className="nav-link" to="/ServicesScreen">
              Sell here
            </Link>
            <Link to="/cart" className="nav-link">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>User Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/orderhistory">
                  <NavDropdown.Item>Order History</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <Link
                  className="dropdown-item"
                  to="#signout"
                  onClick={signoutHandler}
                >
                  Sign Out
                </Link>
              </NavDropdown>
            ) : (
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="admin-nav-dropdown">
                <LinkContainer to="/admin/dashboard">
                  <NavDropdown.Item>Dashboard</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/products">
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/orders">
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/users">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  );
};

export default NavigationBar;
