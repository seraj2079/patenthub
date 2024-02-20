import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../Images/logo.jpeg';
import '../Css/Home.css'
import { NavLink } from 'react-router-dom';
import backgroundImage from '../Images/bacg.png';


const Dashboard = () => {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', // Text color for better visibility
        padding: '10px', // Adjust padding as needed
    };
  return (
    <>
    <Navbar collapseOnSelect expand="lg"className='contact-section' style={sectionStyle}>
        <img className='rounded-circle border border-light m-2' src={logo} height='80' width='80' />
        <Navbar.Brand className='text-light m-2'>
            Patent-Hub.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' style={{ background: '#ff0000', marginRight: '10px',float:'right' }} />
        <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end' >
            <Nav className='mr-auto'>
            <NavLink to="/dash-home" className=' m-2' id='nav-dropdown-title'>
                    <label>Home</label>
                </NavLink>
                <NavLink to="/dash-about" className=' m-2' id='nav-dropdown-title'>
                    <label>About</label>
                </NavLink>
                <NavLink to="/dash-patent" className=' m-2' id='nav-dropdown-title'>
                    <label>Patent</label>
                </NavLink>

                <NavLink to="/register" className=' m-2' id='nav-dropdown-title'>
                    <label>Registration</label>
                </NavLink>
                <NavLink to="/" className=' m-2' id='nav-dropdown-title'>
                    <label>Log Out</label>
                </NavLink>
            </Nav>

        </Navbar.Collapse>
    </Navbar>

    </>
  )
}

export default Dashboard;