import React from "react";
import image1 from "../Images/patent1.jpg";
import image2 from "../Images/rpatent.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Patent = () => {
  return (
    <>
      <div className="container mb-5">
        {/* First Row */}
        <div className="row" style={{ padding: "30px" }}>
          <div className="col-lg-6">
            <img
              src={image1}
              alt="Image 1"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="col-lg-6" style={{ padding: "30px" }}>
            <div className="content">
              <h2 className='text-info'>About Patent!</h2>
              <p>
                Patent registration is the legal process by which an inventor or
                assignee seeks protection for their invention, preventing others
                from making, using, selling, or importing the patented invention
                without permission. This protection is granted by a government
                authority, such as the United States Patent and Trademark Office
                (USPTO) in the U.S. or the Controller General of Patents,
                Designs and Trademarks in India.
              </p>
            </div>
          </div>
        </div>
        {/* Content Between Rows */}
        <div className="row" style={{ padding: "20px", border: '2px solid #e2ab77' }}>
          <div className="col-lg-12">
            <div className="content">
              <h2 className="text-danger">There are three main types of patents:</h2>
              <ol>
                <li>
                  <p>
                    <strong>Utility Patents:</strong> These are the most common
                    and cover new and useful processes, machines, articles of
                    manufacture, or compositions of matter. Utility patents
                    provide broad protection for inventions.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Design Patents:</strong> These protect the
                    ornamental design or aesthetic aspects of an object. Unlike
                    utility patents, design patents focus on appearance rather
                    than functionality.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Plant Patents:</strong> These are granted for
                    asexually reproduced plants that are new, distinct, and have
                    not been previously sold or discovered. Plant patents are
                    less common than utility and design patents.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="row" style={{ padding: "20px" }}>
          <div className="col-lg-6 order-lg-2">
            <img
              src={image2}
              alt="Image 2"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="content">
              <h2 className='text-info'>Advantage's of Patent!</h2>
              <ul>
                <li>
                  Monopoly Control: Patents grant exclusive rights to the inventor for a limited period, typically around 20 years from the filing date, allowing them to prevent others from making, using, selling, or importing their invention without permission.
                </li>

                <li>
                  Protection: This exclusivity safeguards the inventor's creation from unauthorized use, providing legal recourse against infringement.
                </li>


                <li>
                  Public Disclosure: Patent applications require disclosing technical details and aspects of the invention, contributing to the collective knowledge base, fostering further innovation, and preventing duplication of efforts.
                </li>
                <li>
                  Global Protection: Patents can be recognized and enforced internationally through agreements like the Patent Cooperation Treaty (PCT), allowing inventors to seek protection for their inventions in multiple countries.
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div
          style={{
            border: '2px solid #e2ab77',
            padding: "30px",
            marginTop: "20px", // Adjusted marginTop
            marginBottom: '20px', // Adjusted marginBottom
          }}
        >
          <h1 className='text-danger text-center'>Rules for Patent Registration</h1>
          <br />
          <ol style={{ fontSize: "1.5em", margin: 0, paddingInlineStart: "20px" }}>
            <li>
              <strong>Novelty:</strong> The invention or innovation seeking
              patent protection must be novel, meaning it should not have been
              previously disclosed or made available to the public before the
              patent application filing date.
            </li>
            <li>
              <strong>Non-Obviousness:</strong> The invention must not be
              obvious to a person with ordinary skill in that field. It should
              represent a significant improvement or departure from existing
              technologies or methods.
            </li>
            <li>
              <strong>Usefulness/Utility:</strong> The invention should have a
              practical application. It should serve a useful purpose and have
              some form of utility.
            </li>

            <li>
              <strong>Disclosure:</strong> Full disclosure of the invention is
              essential. This includes providing a detailed description and any
              necessary diagrams or drawings, enabling someone skilled in the
              field to reproduce or use the invention.
            </li>

            <li>
              <strong>Patent Application:</strong> Filing a patent application
              with the relevant patent office is necessary. The application
              includes a detailed description of the invention, claims defining
              the scope of protection sought, and often accompanying
              illustrations.
            </li>

            <li>
              <strong>Examination:</strong> The patent office will conduct an
              examination to verify if the invention meets the patentability
              criteria. This examination involves a review of prior art and a
              determination of whether the invention qualifies for patent
              protection.
            </li>

            <li>
              <strong>Grant and Maintenance:</strong> If the patent office
              determines that the invention meets all requirements, a patent
              will be granted. Maintenance fees or annuities may be required
              periodically to keep the patent in force.
            </li>

            <li>
              <strong>Duration:</strong> Patents typically have a limited
              duration of protection, usually around 20 years from the date of
              filing the application, after which they expire, and the invention
              enters the public domain.
            </li>
            <br />
          </ol>
        </div>
      </div>
    </>
  );
};

export default Patent;
