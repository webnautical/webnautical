import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import config from "../../config";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { Helmet, HelmetProvider } from "react-helmet-async";

//images imports
import contactImg from "../../assets/contact-page-images/contact.png";
import callImg from "../../assets/contact-page-images/call-icon-001.png";
import mailImg from "../../assets/contact-page-images/mail-icon-001.png";
import mapImg from "../../assets/contact-page-images/map-marker-icon-001.png";
import skypeeImg from "../../assets/contact-page-images/skypee-icon-001.png";
import fileImg from "../../assets/contact-page-images/attact-file-icon.png";

//fontawesome imports
import {
  faTwitter,
  faFacebookF,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Contact() {
  const [contactInfo, setContactInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const helmetContext = {};

  useEffect(() => {
    contactInfoRecord();
  }, []);

  const contactInfoRecord = async () => {
    try {
      const response = await fetch(`${config.url}/v1/get_contact`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("contactInfo", data);

      if (data.status === "success") {
        setContactInfo(data.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  const handleFormSubmit = (formData, recaptchaValue) => {
    // Handle form submission
    console.log(formData, recaptchaValue);
  };

  const currentUrl = window.location.href;

  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{contactInfo.meta_title}</title>
          <meta name="description" content={contactInfo.meta_description} />
          <link rel="canonical" href={currentUrl} />
        </Helmet>
        {loading ? (
          <div className="bg_top">
            <Container>
              {" "}
              <Skeleton
                variant="rectangular"
                height={20}
                className=" mb-3"
                style={{
                  width: "50%",
                  backgroundColor: " rgb(25 97 181 / 28%)",
                }} // Inline CSS to set width to 40% and background color to blue
              />
              <Skeleton
                variant="rectangular"
                height={50}
                className=""
                style={{
                  width: "30%",
                  backgroundColor: " rgb(25 97 181 / 28%)",
                }} // Inline CSS to set width to 40% and background color to blue
              />
            </Container>
          </div>
        ) : (
          <section
            className="short_banner banner app-solution-banner"
            style={{
              backgroundImage: `url(${contactInfo.banner_section?.background_image?.url})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {contactInfo.banner_section && contactInfo.form_section && (
              <Container className="">
                <Row className="">
                  <Col md={12} className="">
                    <div className="main_brecrumb_headig">
                      <p className="liner_class">
                        {contactInfo.banner_section.subtitle}
                      </p>
                      <h1>{contactInfo.banner_section.title}</h1>
                    </div>
                  </Col>
                  {/* <Col md={12}>
              <img src={contactImg} alt="contactImg" />
            </Col> */}
                </Row>
              </Container>
            )}
          </section>
        )}
        {/* contact about section */}

        {loading ? (
          <div className="about">
            <Container>
              <Row>
                <Col md={6} lg={4} sm={12}>
                  <Skeleton
                    variant="rectangular"
                    height={680}
                    className=" mb-3"
                    style={{
                      width: "100%",
                      backgroundColor: " rgb(25 97 181 / 28%)",
                      borderRadius: "10px",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />
                </Col>

                <Col md={6} lg={8} sm={12}>
                  <Row>
                    <Col md={6} className="mb-4">
                      <Skeleton
                        variant="rectangular"
                        height={10}
                        className=" mt-5"
                        style={{
                          width: "30%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                      <Skeleton
                        variant="rectangular"
                        height={20}
                        className=" mt-3"
                        style={{
                          width: "100%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                    </Col>
                    <Col md={6} className="mb-4">
                      <Skeleton
                        variant="rectangular"
                        height={10}
                        className=" mt-5"
                        style={{
                          width: "30%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                      <Skeleton
                        variant="rectangular"
                        height={20}
                        className=" mt-3"
                        style={{
                          width: "100%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                    </Col>
                    <Col md={6} className="mb-4">
                      <Skeleton
                        variant="rectangular"
                        height={10}
                        className=" mt-5"
                        style={{
                          width: "30%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                      <Skeleton
                        variant="rectangular"
                        height={20}
                        className=" mt-3"
                        style={{
                          width: "100%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                    </Col>

                    <Col md={6} className="mb-4">
                      <Skeleton
                        variant="rectangular"
                        height={10}
                        className=" mt-5"
                        style={{
                          width: "30%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                      <Skeleton
                        variant="rectangular"
                        height={20}
                        className=" mt-3"
                        style={{
                          width: "100%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                    </Col>

                    <Col md={12} className="mb-4">
                      <Skeleton
                        variant="rectangular"
                        height={10}
                        className=" mt-5"
                        style={{
                          width: "20%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                      <Skeleton
                        variant="rectangular"
                        height={20}
                        className=" mt-3"
                        style={{
                          width: "100%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                    </Col>

                    <Col md={6} className="mb-4">
                      <Skeleton
                        variant="rectangular"
                        height={80}
                        className=" mt-5"
                        style={{
                          width: "80%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                    </Col>

                    <Col md={6} className="mb-4 text-end">
                      <Skeleton
                        variant="rectangular"
                        height={46}
                        className=" mt-5"
                        style={{
                          width: "50%",
                          marginLeft: "auto",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        ) : (
          <section id="contact-about" className="about">
            {/* form and cotact details section */}

            {contactInfo.banner_section && contactInfo.form_section && (
              <Container className="animated fadeInUp">
                <Row>
                  {/* contact info */}
                  <Col lg={4} className="contact-left order-lg-1 order-2">
                    <div>
                      <h4>{contactInfo.form_section.title}</h4>
                      <p>{contactInfo.form_section.subtitle}</p>

                      <ul>
                        <li>
                          <div className="icon_bg">
                            <i className="fa-solid fa-phone"></i>
                          </div>
                          <a
                            href={`tel:${contactInfo.form_section.phone}`}
                            title={`Call ${contactInfo.form_section.phone}`}
                            aria-label={`Call ${contactInfo.form_section.phone}`}
                          >
                            {contactInfo.form_section.phone}
                          </a>
                        </li>
                        <li>
                          <div className="icon_bg">
                            <i className="fa-solid fa-envelope"></i>
                          </div>
                          <a
                            href={`mailto:${contactInfo.form_section.email}`}
                            title={`Email ${contactInfo.form_section.email}`}
                            aria-label={`Email ${contactInfo.form_section.email}`}
                          >
                            {contactInfo.form_section.email}
                          </a>
                        </li>
                        <li>
                          <div className="icon_bg">
                            <i className="fa-brands fa-skype"></i>
                          </div>
                          <a
                            href={`skype:${contactInfo.form_section.skype}?call`}
                            title={`Skype ${contactInfo.form_section.skype}`}
                            aria-label={`Skype ${contactInfo.form_section.skype}`}
                          >
                            {contactInfo.form_section.skype}
                          </a>
                        </li>
                        <li>
                          <div className="icon_bg">
                            <i className="fa-solid fa-map-location-dot"></i>
                          </div>
                          <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(
                              contactInfo.form_section.address
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`View Address: ${contactInfo.form_section.address}`}
                            aria-label={`View Address: ${contactInfo.form_section.address}`}
                          >
                            {contactInfo.form_section.address}
                          </a>
                        </li>
                      </ul>

                      <div className="counter-one__shape2 leftani"></div>
                      <div className="counter-one__shape3 updown"></div>
                      <div className="l-logo-container">
                        <div className="footer-social-links">
                          <Link to={contactInfo.facebook} target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </Link>
                          <Link to={contactInfo.twitter} target="_blank">
                            <i className="fa-brands fa-x-twitter"></i>
                          </Link>
                          <Link to={contactInfo.Linkedin} target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                          </Link>
                          <Link to={contactInfo.instagram} target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                          </Link>
                          <Link to={contactInfo.youtube}>
                            <FontAwesomeIcon icon={faYoutube} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  {/* contact form */}
                  <Col className="contact-right pt-5 order-lg-2 order-1" lg={8}>
                    <ContactForm onSubmit={handleFormSubmit} />
                  </Col>
                </Row>

                {/* goggle map section */}
                <Row>
                  <Col className="map-container">
                    <iframe src={contactInfo.form_section?.map}></iframe>
                  </Col>
                </Row>
              </Container>
            )}
          </section>
        )}
      </>
    </HelmetProvider>
  );
}

export default Contact;
