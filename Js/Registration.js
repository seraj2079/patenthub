import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button } from "react-bootstrap";
import logo from '../Images/logo.jpeg';
import Resizer from 'react-image-file-resizer';
import shortid from 'shortid';
import Dashboard from './Dashboard';



const initData = {
    Name: '',
    Number: "",
    Email: "",
    imgdata: "",
    Address: "",
    City: "",
    Pincode: "",
    State: "",
    Cuntry: "",
    patent_type: "",
    Patent_Name: "",
    message: "",
    patentID: ""
}
let myfordata = "";
const Registration = () => {

    // =================send data in state====================
    const [state, setState] = useState(initData)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }


    // console.log(".............", state)
    // ================================================================
    // ==============image section==================================

    const imageLoad = (e) => {

        var fileInput = false;
        if (e.target.files[0]) {
            fileInput = true;
        }
        if (fileInput) {
            try {
                Resizer.imageFileResizer(
                    e.target.files[0],
                    300,
                    300,
                    "JPEG",
                    200,
                    0,
                    (uri) => {
                        myfordata = uri;
                        state.imgdata = uri;
                    },
                    "base64",
                    300,
                    300
                );
            }
            catch (err) {
                console.log("error in image section");
            }
        }


    }

    // =============================================================
    // =======================Data send to database===========================

    const handleSubmit = (e) => {
        const idData = shortid.generate();
        state.patentID = idData;
        const { Name, Number, Email, imgdata, Address, City, Pincode, State, Cuntry, patent_type, Patent_Name, message, patentID } = state;
        e.preventDefault();
        const options = {
            method: 'POST',
            Headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({
                Name, Number, Email, imgdata, Address, City, Pincode, State, Cuntry, patent_type, Patent_Name, message, patentID
            })
        }
        const res = fetch(
            'https://patent-1af2d-default-rtdb.firebaseio.com/UserData.json',
            options
        )
        if (res) {
            alert("Your ID is       " + patentID)
            window.location.href = '/dashboard';
        }
        else {
            alert("Error Occured")
        }
    }
    // =================================================================



    return (
        <>
            <Dashboard />
            <div className="container mb-5 mt-5">
                <form onSubmit={handleSubmit} className="container border border-danger col-sm-offset-2 col-sm-6 mt-4"
                    style={{ background: 'linear-gradient(150deg, #964B00, #FFFFFF)', borderRadius: '10px' }}>
                    <div className="mt-4">
                        <center>
                            <img className='rounded-circle border border-light' src={logo} height="100" width="100" alt="" />
                            </center>
                    </div>

                    <h3 className="text-center text-dark ">
                        Registration
                    </h3>
                    <div className="container mb-4 text-danger">
                        <input
                            type="text"
                            name="Name"
                            className="form-control"
                            placeholder="Enter name"
                            onChange={handleChange}
                            value={state.Name}
                            required
                        />
                    </div>
                    <div className="container mb-4 text-danger">
                        <input
                            type="number"
                            name="Number"
                            className="form-control"
                            placeholder="Enter Number"
                            onChange={handleChange}
                            value={state.Number}
                            required
                            pattern="[0-9]{10}"
                            
                        />
                    </div>
                    <div className="container mb-4 text-danger">
                        <input
                            type="email"
                            name="Email"
                            className="form-control"
                            placeholder="Enter Email"
                            onChange={handleChange}
                            value={state.Email}
                            required
                        />
                    </div>

                    <div className="container mb-4 text-danger">
                        <input
                            type="file"
                            name="imgdata"
                            className="form-control"
                            onChange={imageLoad}
                            required
                        />
                    </div>
                    <div className="container mb-4 text-danger">
                        <input
                            type="text"
                            name="Address"
                            className="form-control"
                            placeholder="Enter Address"
                            onChange={handleChange}
                            value={state.Address}
                            required
                        />
                    </div>
                    <div className="container mb-4 text-danger">
                        <input
                            type="text"
                            name="City"
                            className="form-control"
                            placeholder="Enter City Name"
                            onChange={handleChange}
                            value={state.City}
                            required
                        />
                    </div>
                    <div className="container mb-4 text-danger">
                        <input
                            type="pin"
                            name="Pincode"
                            className="form-control"
                            placeholder="Enter Pin Code"
                            onChange={handleChange}
                            value={state.Pincode}
                            maxLength="6"
                            required
                        />

                    </div>
                    <div className="container mb-4 text-danger">
                        <input
                            type="text"
                            name="State"
                            className="form-control"
                            placeholder="Enter State Name"
                            onChange={handleChange}
                            value={state.State}
                            required
                        />
                    </div>
                    <div className="container mb-4 text-danger">
                        <input
                            type="text"
                            name="Cuntry"
                            className="form-control"
                            placeholder="Enter Cuntry Name"
                            onChange={handleChange}
                            value={state.Cuntry}
                            required
                        />
                    </div>
                    <div className="container mb-4 text-danger">
                        <input
                            type="text"
                            name="Patent_Name"
                            className="form-control"
                            placeholder="Enter Patent Name"
                            onChange={handleChange}
                            value={state.Patent_Name}
                            required
                        />
                    </div>

                    <div className="container mb-4 text-danger">
                        <select className="form-control"
                            name="patent_type"
                            onChange={handleChange}
                            value={state.patent_type}
                            required>
                            <option>Select Patent </option>
                            <option>Utlity Patent.</option>
                            <option>Design Patent. </option>
                            <option>Plant Patent. </option>
                        </select>
                    </div>
                    <div className="container mb-4 text-danger">
                        <textarea
                            type="text"
                            name="message"
                            className="form-control"
                            placeholder="Describe your Patent.....!"
                            onChange={handleChange}
                            value={state.message}
                            required
                        />
                    </div>
                    <div className="container text-center mb-4">

                        <Button
                            type="submit"
                            className="btn btn-success text ">
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </>


    );
}

export default Registration;