import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { AiFillPhone } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2, ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col
            lg="3"
            md="3"
            sm="12"
            className="wow fadeInLeft span12"
            data-wow-duration="0.5s"
          >
            <img src="images/mail.png" alt="" />
          </Col>
          <Col
            lg="3"
            md="3"
            sm="12"
            className="wow fadeInDown span12"
            data-wow-duration="0.5s"
          >
            <h5>USEFUL LINKS</h5>
            <div>
              <Link to="/">Home</Link>
              <Link to="/About">About Us</Link>
              <Link to="/ContactUs">Contact us</Link>
              <Link to="/Groups">Our Group</Link>
              <Link to="/Projects">Our Projects </Link>
            </div>
          </Col>
          <Col
            lg="3"
            md="3"
            sm="12"
            className="wow fadeInUp span12"
            data-wow-duration="0.5s"
          >
            <h5>OPENING HOURS</h5>
            <p>Sunday – Thursday : 9:00AM to 5:00PM </p>
            <p>Friday- Saterday : Closed</p>
            <div className="iconsfooter">
              <div>
                <FaFacebookF />
              </div>
              <div>
                {" "}
                <ImLinkedin2 />
              </div>
            </div>
          </Col>
          <Col
            lg="3"
            md="3"
            sm="12"
            className="wow fadeInRight span12"
            data-wow-duration="0.5s"
          >
            <h5>CONTACT HERE</h5>
            <div>
              <a href="#">
                <ImLocation2 /> Address:
                <br />
                <div style={{ marginLeft: "50px" }}>
                  DIAR FOR MANAGEMENT SPORTS & LEISURE FACILITIES , DIAR
                  PROPERTY MANAGEMENT: Al Haram, Giza Governorate
                  <br />
                  <br />

                  Flash water: Hurghada - Airport Street - in front of Al-Nahda
                  School
                  <br />
                  <br />

                  Pixel : 155 Maadi Street - Maadi - Cairo
                  <br />
                  <br />

                  Diar for integrated businesses: GARDENIA COMPOUND, 7TH
                  DISTRICT, 6-TH OCTOBER, GIZA
                </div>
              </a>
              <a href="tel:+201066674323">
                <AiFillPhone /> Phone :<br />
                <span style={{ marginLeft: "50px" }}>
                  01066674323 - 01061624413
                </span>
                <br />
                
                <span style={{ marginLeft: "50px" }}>
                  01000753028 - 01201531313
                </span>
              </a>
              <a href="mailto:Info@diargroups.com">
                <MdEmail /> Email : Info@diargroups.com
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
