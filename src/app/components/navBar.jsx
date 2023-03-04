import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
 
  return (
   
    <Navbar sticky='top' bg="dark" variant='dark'>
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
      
          <Link className="nav-link" to="/">Main</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/cars">Our cars for sale</Link>
          <div style={{ marginLeft:'100px', alignContent:'center'}}
          className='navbar-text'> bestdealer@mail.com <span>/</span> +31077708881</div>
          
          
          <Link className="nav-link" 
            style={{color: 'green', position:'absolute', right:'10px'}} 
            to="/loginForm">Admin access</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   
  );
};

export default NavBar;