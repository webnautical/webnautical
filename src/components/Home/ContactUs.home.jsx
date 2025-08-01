import React from "react";
import Button from "../Buttons/Button";
//bootstrap imports
import { Container, Row, Col } from "react-bootstrap";
//images imports
import callImg from "../../assets/contactus-imges/call-img.png";
import callback from "../../assets/contactus-imges/call-img-bg.png";
import skypImg from "../../assets/contactus-imges/skype-icon.webp";
import mailImg from "../../assets/contactus-imges/mail-icon.webp";
import callicon from "../../assets/contactus-imges/call-icon.webp";

function ContactUs() {
  return (
    <section>
        <Container className="animated fadeInUp">
        <Row>
          <Col lg={8}>
            <div className="contact-text-container">
              <Row>
                <Col md={6} className="text-data-col">
                  <div className="text-data">
                    <h1>
                      Do you want to <br />
                      <strong>discuss a project</strong>
                    </h1>
                    <div  style={{width:'238px'}}>
                      <Button>Get Free Quote</Button>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <span className="call-img">
                    <img src={callImg} className="leftani" alt="call-image"  loading="lazy" />
                  </span>
                  <img src={callback} alt="background-image"  loading="lazy" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={4}>
            <div className="contact-details-container">
              <Row>
                <Col md={12}>
                  <h4>Contact With Us</h4>
                </Col>
                <Col md={12}>
                    <ContactButton image={skypImg} >
                    Contact With Us
                    </ContactButton >
                </Col>
                <Col md={12}>
                <ContactButton image={mailImg} >
                sales@webnautical.com
                    </ContactButton >
                </Col>
                <Col md={12}>
                <ContactButton image={callicon} >
                +91 9530488844
                            </ContactButton >
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactUs;


const ContactButton = ({children,image}) => {
 
  return (
    <div className="c-box hvr-bounce-to-right">
      <a href="">
        <img src={image}  loading="lazy" />
      {children}
      </a>
    </div>
  );
};
