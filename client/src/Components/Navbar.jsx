import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <BootstrapNavbar className="theme-bg-base p-2 rt-2 border border-white rounded-top text-center mx-auto" expand="lg" fixed="top">
      <BootstrapNavbar.Brand href="#" className="h2 p-2 text-black font-bold text-lg transform hover:scale-110 transition-transform duration-300 hover:shadow-md">
        Kwizz?
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Nav className="ml-5">
          <Nav.Link as={Link} to="/Home" className="navbar-link text-black font-bold hover:text-green-500 transition-colors duration-300 hover:scale-110 hover:shadow-md">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Dashboard" className="navbar-link text-black font-bold hover:text-green-500 transition-colors duration-300 hover:scale-110 hover:shadow-md">
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/Contact" className="navbar-link text-black font-bold hover:text-green-500 transition-colors duration-300 hover:scale-110 hover:shadow-md">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/About" className="navbar-link text-black font-bold hover:text-green-500 transition-colors duration-300 hover:scale-110 hover:shadow-md">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/Login" className="navbar-link text-black font-bold hover:text-green-500 transition-colors duration-300 hover:scale-110 hover:shadow-md">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/Admin" className="navbar-link text-black font-bold hover:text-green-500 transition-colors duration-300 hover:scale-110 hover:shadow-md">
            Admin
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
