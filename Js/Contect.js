import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import backgroundImage from '../Images/bacg.png';
import NavBar from './NavBar';


const initData = {
  Name: "",
  Number: "",
  Email: "",
  Message: ""
};

const Contact = () => {
  const [state, setState] = useState(initData);

  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '230px ', 
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log("=======", state)
  };

  const handleSubmit = (e) =>{
    const {Name, Number, Email, Message} = state;
     e.preventDefault();
     const options ={
      method: 'POST',
      Headers: {
        'Content-Type' : 'aplication/json'
      },
      body: JSON.stringify({
        Name, Number, Email, Message
      })
     }
     const res = fetch(
        'https://patent-1af2d-default-rtdb.firebaseio.com/Contact_Data.json',
      options
      )
      if(res)
      {
        alert("Message Send")
        window.location.href = '/';      }
      else
      {
        alert("Error Occured")
      }
  }
  

  return (
    <>
    <NavBar/>
      <div className='container mt-5 mb-5'  >
              <form onSubmit={handleSubmit}className="container border border-danger col-sm-offset-15 col-sm-4 mt-2"
                    style={{ background: 'linear-gradient(150deg, #964B00, #FFFFFF)', borderRadius: '10px' }}>
                       <h3 className="text-center text-dark ">
                        Contact US
                    </h3>
                <div className='container mb-4'>
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name='Name'
                    className="form-control"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    value={state.Name}
                    required
                  />
                </div>
                <div className='container mb-4'>
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    name='Number'
                    className="form-control"
                    placeholder="Enter your number"
                    onChange={handleChange}
                    value={state.Number}
                    required
                  />
                </div>
                <div className='container mb-4'>
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name='Email'
                    className="form-control"
                    placeholder="alam@example.com"
                    onChange={handleChange}
                    value={state.Email}
                    required
                  />
                </div>
                <div className='container mb-4'>
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    type="text"
                    name="Message"
                    className="form-control"
                    placeholder="Type Message"
                    onChange={handleChange}
                    value={state.Message}
                    required
                  ></textarea>
                </div>
                <div className="container text-center mb-4">
                  <button className="btn btn-outline-dark" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
    </>
  );
};

export default Contact;

