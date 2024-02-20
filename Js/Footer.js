import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Footer = () => {
  return (
    // <div className="mt-4">
    <footer
      className="bg-dark text-white text-center  py-1"
      style={{ position: "fixd", bottom: "0", width: "100%" ,height:"50px", }}
    >
      <div className="container">
        <p>&copy; 2023 Patent Hub. All rights reserved. by- MD MASHOOD ALAM</p>
      </div>
    </footer>
    // </div>
  );
};

export default Footer;
