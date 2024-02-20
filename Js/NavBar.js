import React from 'react'
import { Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../Images/logo.jpeg';
import '../Css/Home.css'
import { NavLink } from 'react-router-dom';
import backgroundImage from '../Images/bacg.png';



const NavBar = () => {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', // Text color for better visibility
        padding: '0.5px 10px', // Adjust padding as needed
    };
  return (

    <>
    
    <Navbar collapseOnSelect expand="lg"className='contact-section' style={sectionStyle} >
        <img className='rounded-circle border border-light m-2' src={logo} height='50' width='50' alt="" />
        <Navbar.Brand className='text-light m-2'>
            Patent-Hub.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' style={{ background: '#a56236', marginRight: '10px',float:'right' }} />
        <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
            <Nav className='mr-auto '>
            <NavLink to="/home" className=' m-2' id='nav-dropdown-title'>
                    <label>Home</label>
                </NavLink>
                <NavLink to='/about' className=' m-2' id='nav-dropdown-title'>
                    <label>About</label>
                </NavLink>
                <NavLink to='/patent' className=' m-2' id='nav-dropdown-title'>
                    <label>Patent</label>
                </NavLink>
                <NavLink to="/contact" className=' m-2' id='nav-dropdown-title'>
                    <label>ContactUs</label>
                </NavLink>
                <NavLink to="/signup" className=' m-2' id='nav-dropdown-title'>
                    <label>SignUp</label>
                </NavLink>
            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
    
    </>
    
  )
}

export default NavBar;