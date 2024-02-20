import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../Images/logo.jpeg';
import shortid from 'shortid';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './Firebase';
import NavBar from './NavBar';

const initData = {
    Name: "",
    Email: "",
    Number: "",
    Password: "",
    ID: shortid.generate(),
}

const SignUp = () => {
    const [state, setState] = useState(initData);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
        console.log("=======",state)
    }

    const handleSubmitt = async (e) => {
        e.preventDefault();
        
        const auth = getAuth(app);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, state.Email, state.Password);
            const user = userCredential.user;
            console.log(user);

            const { Name, Number, Email, Password, ID } = state;
            const options = {
                method: 'POST',
                Headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Name, Number, Email, Password, ID })
            };

            const res = await fetch(
                'https://patent-1af2d-default-rtdb.firebaseio.com/SignUp_Data.json',
                options
            );

            if (res) {
                alert("Your Password is " + state.Password);
                window.location.href = '/login';
            } else {
                alert("Error Occurred");
            }
        } catch (error) {
            const errorCode = error.code;
            alert(errorCode);
        }
    }

    return (
        <>
            <NavBar />
            <div className="container mb-5 mt-5">
                <form onSubmit={handleSubmitt} className="container border border-danger col-sm-offset-10 col-sm-4 mt-2"
                    style={{ background: 'linear-gradient(150deg, #964B00, #FFFFFF)', borderRadius: '10px' }}>
                    <div className="mt-4">
                        <center>
                            <img className='rounded-circle border border-light' src={logo} height="100" width="100"alt="" />
                            </center>
                    </div>
                    <h3 className="text-center text-dark ">
                        SignUp
                    </h3>
                    <div className="container mb-4">
                        <input
                            type="text"
                            name="Name"
                            className="form-control"
                            placeholder="Enter full Name"
                            onChange={handleChange}
                            value={state.Name}
                        />
                    </div>
                    <div className="container mb-4">
                        <input
                            type="email"
                            name="Email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={handleChange}
                            value={state.Email}
                            required
                        />
                    </div>
                    <div className="container mb-4">
                        <input
                            type="pin"
                            name="Number"
                            className="form-control"
                            placeholder="Enter mobile number"
                            onChange={handleChange}
                            value={state.Number}
                            maxLength="10"
                            minLength="10"
                            required
                        />
                    </div>
                    <div className="container mb-4">
                        <input
                            type="password"
                            name="Password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={handleChange}
                            value={state.Password}
                            required
                            minLength="8"
                        />
                    </div>
                    <div className="container text-center">
                        <button
                            type="submit"
                            className="btn btn-outline-dark text ">
                            SignUp
                        </button>
                    </div>
                    <h6 className="text-center text-warning mb-4 " style={{ marginLeft: "180px" }}>
                        <NavLink to='/login'> <label>SignIn</label></NavLink>
                    </h6>
                </form>
            </div>
        </>
    );
    
}

export default SignUp;
