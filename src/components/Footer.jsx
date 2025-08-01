import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from "../config";
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import logoImg from "../assets/logonew.svg";

function Footer() {
  const [footerMenu, setFooterMenu] = useState({
    heading1: "",
    heading2: "",
    copyright_information: "",
    address: "",
    email: "",
    phone: "",
    logo: "",
    facebook: "",
    instagram: "",
    Linkedin: "",
    twitter: "",
    expertise_menu: [],
    quicklink_menu: [],
    legal_menu: [],
  });
  const hasFetchedRef = useRef(false);

  const FooterRecord = async () => {
    try {
      const response = await fetch(`${config.url}/v1/footer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      if (data.message === "Footer details retrieved successfully") {
        setFooterMenu((prevState) => ({
          ...prevState,
          heading1: data.data.heading1,
          heading2: data.data.heading2,
          copyright_information: data.data.copyright_information,
          address: data.data.address,
          email: data.data.email,
          phone: data.data.phone,
          logo: data.data.logo,
          facebook: data.data.facebook,
          instagram: data.data.instagram,
          Linkedin: data.data.Linkedin,
          twitter: data.data.twitter,
          expertise_menu: data.data.expertise_menu,
          quicklink_menu: data.data.quicklink_menu,
          legal_menu: data.data.legal_menu,
        }));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
 useEffect(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;
    FooterRecord();
  }, []);

  return (
    <>
      <footer>
        <Container className="animated fadeInUp">
          <div className="dbl border_line">{footerMenu.heading1}</div>
          <Row>
            <Col lg={12}>
              <Row>
                <Col md={5}>
                  <a href=" ">
                    <img src={logoImg} alt="log-img" width="286" height="40" />
                  </a>
                  <div className="footer_cnt">
                    <h2
                      dangerouslySetInnerHTML={{ __html: footerMenu.heading2 }}
                    ></h2>

                    <address className="mb-0">
                      <ul className="information">
                        {footerMenu.address && (
                          <li>
                            <a
                              href={`https://maps.google.com/?q=${encodeURIComponent(
                                footerMenu.address
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`View Address: ${footerMenu.address}`}
                              aria-label={`View Address: ${footerMenu.address}`}
                            >
                              {footerMenu.address}
                            </a>
                          </li>
                        )}
                        {footerMenu.email && (
                          <li>
                            <a
                              href={`mailto:${footerMenu.email}`}
                              title={`Email: ${footerMenu.email}`}
                              aria-label={`Email ${footerMenu.email}`}
                            >
                              {footerMenu.email}
                            </a>
                          </li>
                        )}
                        {footerMenu.phone && (
                          <li>
                            {" "}
                            <a
                              href={`tel:${footerMenu.phone}`}
                              title={`Call ${footerMenu.phone}`}
                              aria-label={`Call ${footerMenu.phone}`}
                            >
                              {" "}
                              {footerMenu.phone}
                            </a>
                          </li>
                        )}
                        <li>
                          <div className="social_linksicons">
                            <ul>
                              <li>
                                <Link
                                  to={footerMenu.facebook}
                                  aria-label="Facebook"
                                  title="Visit our Facebook page"
                                >
                                  <FontAwesomeIcon icon={faFacebookF} />
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={footerMenu.twitter}
                                  aria-label="Twitter"
                                  title="Visit our Twitter page"
                                >
                                  <i className="fa-brands fa-x-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={footerMenu.Linkedin}
                                  aria-label="LinkedIn"
                                  title="Visit our LinkedIn page"
                                >
                                  <FontAwesomeIcon icon={faLinkedin} />
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={footerMenu.instagram}
                                  aria-label="Instagram"
                                  title="Visit our Instagram page"
                                >
                                  <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                              </li>
                             
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </address>
                  </div>
                </Col>
                <Col md={7}>
                  <Row>
                    <Col md={4}>
                      <h3>
                        Quick Link{" "}
                        <span className="arrow_cs">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </h3>
                      <ul id="block-7">
                        {footerMenu?.quicklink_menu?.map((item) => (
                          <li key={item.slug}>
                            <Link to={`/${item.slug}`}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={4}>
                      <h3>
                        Legal{" "}
                        <span className="arrow_cs">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </h3>
                      <ul id="block-9">
                        {footerMenu?.legal_menu?.map((item) => (
                          <li>
                            <Link to={`/${item.slug}`}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={4}>
                      <h3>
                        Service{" "}
                        <span className="arrow_cs">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </h3>
                      <ul id="block-8">
                        {footerMenu?.expertise_menu?.map((item) => (
                          <li>
                            <Link to={`/${item.slug}`}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="footer-log-container"></Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="footer-bottom">
              {footerMenu.copyright_information}
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
