import React,{useState} from "react";
import logo from '../Images/patent1.jpg';
import logo1 from '../Images/rpatent.jpg';
import backgroundImage from '../Images/bacg.png';
import logo3 from '../Images/p3.jpg';
import { NavLink } from "react-router-dom";




const Home1 = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  
  return (
    <>
       <div
        className="landing-container mb-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div
          className="home-section row"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            padding:'30px',
          }}
        >
          {/* First Row */}
          <div
            className="home-text-section"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "5px",
            }}
          >
            <div
              style={{
                borderRadius: "3%",
                overflow: "auto",
                width: "100%",
                height: "20%",
                marginBottom: "30px",
              }}
            >
              <img
                src={logo}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                alt="Description of your image"
              />
            </div>
            <div
              style={{
                backgroundColor: "#e2ab77",
                textAlign: "center",
                color: "white",
                padding: "50px",
              }}
            >
              <h1
                className="primary-heading"
                style={{ fontWeight: "bold", fontSize: "50px" }}
              >
                What is patent?
              </h1>
              <p
                className="primary-text"
                style={{ fontSize: "20px", textAlign: "left" }}
              >
                A patent is a legal document granted by a government authority
                that provides the creator of an invention with exclusive rights
                for its use and distribution. It's a form of intellectual
                property right that gives the patent holder the right to exclude
                others from making, using, selling, or importing the patented
                invention without their permission for a limited period, usually
                20 years from the filing date of the patent application.
                <br />
                <br />
                In essence, a patent protects an inventor's rights by offering a
                time-limited monopoly on their creation, encouraging innovation
                and creativity. To obtain a patent, the invention must meet
                specific criteria, including being novel, non-obvious, and
                useful. The patent application typically involves disclosing the
                details and technical aspects of the invention in a patent
                application to the relevant patent office.
                <br />
                <br />
                Once granted, a patent gives the holder the legal right to
                prevent others from using or exploiting the invention
                commercially without permission, allowing the patentee to
                capitalize on their invention through various means, such as
                licensing, manufacturing, or selling the patented product or
                process.
              </p>
              <NavLink to="/patent">
                <button
                  className="secondary-button"
                  id="explore-button"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "white",
                    borderRadius: "20px",
                    fontSize: "1.5em",
                  }}
                >
                  Explore More
                </button>
              </NavLink>
            </div>
          </div>

          {/* Second Row */}
          <div
            className="home-text-section  row"
            style={{
              backgroundColor: "#e2ab77",
              display: "flex",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div className="col-lg-6">
              <h1 className="primary-heading">What is patent registration ?</h1>
              <p
                className="primary-text"
                style={{ fontSize: "20px", textAlign: "left" }}
              >
                Patent registration refers to the process of obtaining a patent
                for an invention. A patent registration is a legal document that
                grants the inventor exclusive rights to their invention for a
                specified period, typically 20 years from the date of filing the
                patent application. During this period, the patent holder has
                the right to exclude others from making, using, selling, and
                importing the patented invention without their permission.
              </p>
              {/* <button className="secondary-button">Explore</button> */}
            </div>
            <div className="col-lg-6">
              <img className="img-fluid"
                src={logo1}
                alt=""
                style={{ width: "100%", height: "auto" }}
              
              />
            </div>
          </div>

          {/* Third Row */}
          <div
            className="home-text-section  row"
            style={{
              backgroundColor: "#e2ab77",
              display: "flex",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div className="col-lg-6">
              <img className="img-fluid"
              alt=""
                src={logo}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-lg-6" style={{padding:"30px"}}>
              <h1 className="primary-heading">
                There are three main types of patents:
              </h1>
              <p className="primary-text">
                <ul>
                  <li>
                    *Utility Patents:* These are the most common and cover new
                    and useful processes, machines, articles of manufacture, or
                    compositions of matter. Utility patents provide broad
                    protection for inventions.
                  </li>
                  <br />
                  <li>
                    *Design Patents:* These protect the ornamental design or
                    aesthetic aspects of an object. Unlike utility patents,
                    design patents focus on appearance rather than
                    functionality.
                  </li>
                  <br />
                  <li>
                    *Plant Patents:* These are granted for asexually reproduced
                    plants that are new, distinct, and have not been previously
                    sold or discovered. Plant patents are less common than
                    utility and design patents
                  </li>
                  <br />
                </ul>
              </p>
            </div>
          </div>

          {/* Third Row */}
          <div
            className="home-text-section  row"
            style={{
              backgroundColor: "#e2ab77",
              display: "flex",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div className="col-lg-6">
              <h1 className="primary-heading">why we need to do patent?</h1>
              <p className="primary-text">
                {showFullContent ? (
                  <>
                    Legal Rights and Recognition: Patents provide legal rights
                    and recognition for inventors, acknowledging their
                    contribution to innovation. This recognition can be
                    beneficial for brand reputation and credibility in the
                    industry. Incentive for Disclosure: Patent applications
                    require disclosing technical details and aspects of the
                    invention, contributing to the public knowledge base. This
                    disclosure can promote further innovation and development in
                    related fields. Defense Against Infringement: With a patent
                    in place, inventors have legal grounds to defend against
                    infringement. It allows them to take legal action against
                    unauthorized use or reproduction of their inventions.
                    Overall, patents play a pivotal role in fostering
                    innovation, protecting inventors' rights, and driving
                    economic growth by incentivizing research and development
                    efforts. However, the decision to pursue a patent should be
                    considered based on various factors, including the
                    invention's novelty, market potential, costs, and strategic
                    business goals.
                  </>
                ) : (
                  <>
                    Protection of Intellectual Property: Patents grant exclusive
                    rights to inventors or assignees for their inventions,
                    preventing others from using, making, selling, or importing
                    the patented invention without permission. This protection
                    encourages inventors to disclose their inventions without
                    fearing theft or unauthorized use. Monetary Benefits:
                    Patents can be monetized through licensing agreements,
                    allowing patent holders to earn royalties by permitting
                    others to use their inventions for a fee. Patents can also
                    provide a competitive edge, boosting market share and
                    revenue. Encouragement of Innovation: By rewarding inventors
                    with exclusive rights for a limited time, patents
                    incentivize innovation and creativity. They encourage
                    investment in research and development by ensuring a period
                    of exclusivity to profit from the invention. Market
                    Advantage: Patents can offer a competitive advantage,
                    especially in industries where innovation and unique
                    technology are vital. They create barriers to entry for
                    competitors, giving patent holders a market advantage.
                    <span
                      onClick={toggleContent}
                      style={{
                        cursor: "pointer",
                        color: "blue",
                        textDecoration: "underline",
                      }}
                    >
                      {" "}
                      Know More
                    </span>
                  </>
                )}
              </p>
            </div>
            <div className="col-lg-6">
              <img
              className="img-fluid"
                src={logo3}
                style={{ width: "100%", height: "auto" }}
                alt="Description of your image"
              />
            </div>
          </div>
        </div>
      </div>
      </>

  );
};
export default Home1;