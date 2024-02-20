import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../Images/logo.jpeg';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './Firebase';




const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitt = (e) => {
        e.preventDefault();

        const auth = getAuth(app);
        

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                alert("Welcome");
                window.location.href = '/dashboard'; 
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                alert(errorCode);
            });
    }

    return (
        <>
            <NavBar />
            <div className="container mb-5 mt-5" >
                <form onSubmit={handleSubmitt} className="container border border-danger col-sm-offset-2 col-sm-3 mt-4"
                    style={{ background: 'linear-gradient(150deg, #964B00, #FFFFFF)', borderRadius: '10px' }}>
                    <div className="mt-4">
                        <center>
                            <img className='rounded-circle border border-light' src={logo} height="100" width="100" alt="Logo" />
                            </center>
                    </div>
                    <h3 className="text-center text-dark ">
                        SignIn
                    </h3>
                    <div className="container mb-4">
                        <input
                            type="email"
                            name="Email"
                            className="form-control"
                            placeholder="Enter Email ID"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="container mb-4">
                        <input
                            type="password"
                            name="pass"
                            className="form-control"
                            placeholder="Enter password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="container text-center">
                        <button
                            type="submit"
                            className="btn btn-outline-dark text "
                        >
                            SignIn
                        </button>
                    </div>
                    <h6 className="text-center text-warning mb-4 " style={{ marginLeft: "180px" }}>
                        <NavLink to="/signup"><label>SignUp</label></NavLink>
                    </h6>
                </form>
            </div>
        </>
    );
    
}

export default Login;