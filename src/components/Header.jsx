import React, { useState, useEffect, useLayoutEffect } from "react";
import Button from "./Buttons/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import config from "../config";
// bootstrap imports
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logotwo from "../assets/bluelogo.svg";
import logowhite from "../assets/logonew.svg";
//fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faChevronDown,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Skeleton from "@mui/material/Skeleton";
import GetQuoteForm from "./GetQuoteForm/GetQuoteForm";
import Clients from "./Home/Clients";

// faChevronLeft
function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [clientLogo, setClientLogo] = useState([])

  const [headerMenu, setHeaderMenu] = useState({
    about_menu: [],
    resource_menu: [],
    expertise_menu: [],
    app_development_menu: [],
    web_development_menu: [],
    hybrid_development_menu: [],
    latest_technology_menu: [],
    digital_marketing_menu: [],
    hire_developer_menu: [],
    logo: "",
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const headerMenuPageRecored = async () => {
    try {
      const response = await fetch(`${config.url}/v1/header_menus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("headerMenu", data);

      if (data.message === "Header menus retrieved successfully") {
        setClientLogo(data?.data?.client_logos)
        setHeaderMenu({
          about_menu: data.data.about_menu,
          resource_menu: data.data.resource_menu,
          expertise_menu: data.data.expertise_menu,
          app_development_menu: data.data.app_development_menu,
          web_development_menu: data.data.web_development_menu,
          hybrid_development_menu: data.data.hybrid_development_menu,
          latest_technology_menu: data.data.latest_technology_menu,
          digital_marketing_menu: data.data.digital_marketing_menu,
          hire_developer_menu: data.data.hire_developer_menu,
          logo: data.data.logo,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useLayoutEffect(() => {
    headerMenuPageRecored();
  }, []);

  const handleTabNav = (index) => {
    setActiveMenuItem(index);
  };

  const [logoTwo, setLogoTwo] = useState(false);

  const [activeClass, setActiveClass] = useState(false);
  
  const [subMenuOpen, setSubMenuOpen] = useState(Array(2).fill(false)); // Assuming there are 2 submenus
  const [subMenuExpanded, setSubMenuExpanded] = useState(Array(2).fill(false));
  const [blogSubMenuOpen, setBlogSubMenuOpen] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Track active submenu index
  // Add scroll event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.document.documentElement.scrollTop;

      if (position > 1) {
        setLogoTwo(true);
      }
      if (position === 0) {
        setLogoTwo(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubMenuClick = (index) => {
    const newSubMenuOpen = subMenuOpen.map((value, i) =>
      i === index ? !value : false
    );
    setSubMenuOpen(newSubMenuOpen);
    setSubMenuExpanded(Array(subMenuExpanded.length).fill(false));
    setSubMenuExpanded((prev) => {
      prev[index] = !prev[index];
      return [...prev];
    });
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  const handleBlogSubMenuClick = (ii, jj) => {
    if (ii == jj) {
      setBlogSubMenuOpen(null);
    } else {
      setBlogSubMenuOpen(ii);
    }
  };

  const [menuShow, setMenuShow] = useState(false);

  const openMenu = () => {
    setMenuShow(true);
  };

  const handleClose = () => {
    setMenuShow(false);
  };

  return (
    <>
      <div className="top_header_design">
        <Clients clientLogo={clientLogo} />
      </div>

      <header
        id="header"
        className={logoTwo ? "header-sticky" : "header-fixed"}
      >
        <Navbar expand="lg" className="d-lg-block d-none">
          <Container fluid className="animated fadeInUp">
            <Link to={"/"} className="logo_design">
              <div className="logo_white">
                <img
                  src={logowhite}
                  alt="logowhite"
                  width="283"
                  height="100%"
                />
              </div>

              <div className="logo_blue">
                <img
                  src={logotwo}
                  alt="logotwo"
                  width="283"
                  loading="lazy"
                  height="100%"
                />
              </div>
            </Link>

            {/* </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-lg`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto">
                  {/* <div
                    className={`menu-item ${isHovered ? "active" : ""}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <Link onClick={() => handleTabNav(true, "Company")}>
                      company
                      <FontAwesomeIcon className="fa" icon={faChevronDown} />
                    </Link>
                    <HeaderMenu>
                      <Row>
                        <Col className="menu-nav-links">
                          <ul>
                            <li
                              className={`inner_one_more_menu ${
                                activeMenuItem === 0 ? "active" : ""
                              }`}
                              onMouseEnter={() => handleTabNav(0)}
                            >
                              <Link to="">About us</Link>
                              {activeMenuItem === 0 && (
                                <HeaderMenu>
                                  {headerMenu.about_menu.map((item) => (
                                    <li key={item.slug}>
                                      <Link to={`/${item.slug}`}>
                                        {item.title}
                                      </Link>
                                    </li>
                                  ))}
                                </HeaderMenu>
                              )}
                            </li>


                            

                            <li
                              className={`inner_one_more_menu ${
                                activeMenuItem === 1 ? "active" : ""
                              }`}
                              onMouseEnter={() => handleTabNav(1)}
                            >
                              <Link to="">Resources</Link>
                              {activeMenuItem === 1 && (
                                <HeaderMenu>
                                  {headerMenu.resource_menu.map((item) => (
                                    <li key={item.slug}>
                                      <Link to={`/${item.slug}`}>
                                        {item.title}
                                      </Link>
                                    </li>
                                  ))}
                                </HeaderMenu>
                              )}
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </HeaderMenu>
                  </div> */}

                  <div className={`${activeClass === "Solutions" && "active"}`}>
                    <Link
                      className="text-white"
                      onClick={() => handleTabNav(true, "Solutions")}
                    >
                      Company
                      <FontAwesomeIcon className="fa" icon={faChevronDown} />
                    </Link>

                    <HeaderMenu>
                      <Container>
                        <Row className="justify-content-center">
                          <Col md={10}>
                            <Row className="align-items-center">
                              <Col md="6" className="menu-nav-links">
                                <ul>
                                  {headerMenu.about_menu.map((item) => (
                                    <li key={item.slug}>
                                      <Link to={`/${item.slug}`}>
                                        {item.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>

                                <div>
                                  <h4 className="heading_header mt-4">
                                    We think about your business
                                  </h4>
                                  <p>
                                    Got a great idea or looking for a remote
                                    dedicated team? Simply reach us and see what
                                    we can do for you.
                                  </p>
                                </div>
                              </Col>

                              <Col md="6" className="menu-nav-links">
                                {/* <div className="contact_detils"> */}
                                <Row>
                                  <Col md={6}>
                                    <Link className="my_header_contact" to="tel:+9530488844">
                                      <div className="box_client">
                                        <i className="fa-solid fa-phone-volume"></i>
                                       <span className="d-block"> Call us at</span>
                                     
                                        +91-9530488844
                                      </div>
                                    </Link>
                                  </Col>

                                  <Col md={6}>
                                      <Link to="/contact" className="my_header_contact">
                                    <div className="box_client">
                                      <i className="fa-solid fa-envelope"></i>
                                      <span className="d-block"> Get in Touch</span>
                                        Let's talk more!
                                    </div>
                                      </Link>
                                  </Col>
                                </Row>
                                {/* </div> */}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Container>
                    </HeaderMenu>
                  </div>

                  <div
                    className={`menu-item ${isHovered ? "active" : ""}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <Link
                      className="text-white"
                      to=""
                      onClick={() => handleTabNav(true, "Services")}
                    >
                      Service
                      <FontAwesomeIcon className="fa" icon={faChevronDown} />
                    </Link>
                    <HeaderMenu>
                      <Container>
                        <Row className="justify-content-center">
                          <Col md={10}>
                            <Row className="justify-content-between">
                              <Col md={5}>
                                <div>
                                  <h4 className="top_hed heading_header mt-0">
                                    Services
                                  </h4>
                                  <p>
                                    Discover top-notch IT services designed to
                                    drive your business forward. From managed IT
                                    solutions and network security to cloud
                                    computing and tech support, our expert team
                                    provides reliable and customized solutions
                                    tailored to your unique needs.
                                  </p>
                                </div>
                              </Col>
                              <Col
                                md={6}
                                className="menu-nav-links services_box_header"
                              >
                                <ul>
                                  <li
                                    className={`inner_one_more_menu ${
                                      activeMenuItem === 0 ? "active" : ""
                                    }`}
                                    onMouseEnter={() => handleTabNav(0)}
                                  >
                                    <Link to="/service-main/mobile-app-development">
                                      Mobile App Development
                                    </Link>
                                    {activeMenuItem === 0 && (
                                      <HeaderMenu>
                                        {headerMenu.app_development_menu.map(
                                          (item) => (
                                            <li key={item.slug}>
                                              <Link to={`/${item.slug}`}>
                                                {item.title}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </HeaderMenu>
                                    )}
                                  </li>

                                  <li
                                    className={`inner_one_more_menu ${
                                      activeMenuItem === 1 ? "active" : ""
                                    }`}
                                    onMouseEnter={() => handleTabNav(1)}
                                  >
                                    <Link to="/service-main/web-development">
                                      Web Development
                                    </Link>
                                    {activeMenuItem === 1 && (
                                      <HeaderMenu>
                                        {headerMenu.web_development_menu.map(
                                          (item) => (
                                            <li key={item.slug}>
                                              <Link to={`/${item.slug}`}>
                                                {item.title}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </HeaderMenu>
                                    )}
                                  </li>

                                  <li
                                    className={`inner_one_more_menu ${
                                      activeMenuItem === 2 ? "active" : ""
                                    }`}
                                    onMouseEnter={() => handleTabNav(2)}
                                  >
                                    <Link to="/service-main/hybrid-app-development">
                                      Hybrid App Development
                                    </Link>
                                    {activeMenuItem === 2 && (
                                      <HeaderMenu>
                                        {headerMenu.hybrid_development_menu.map(
                                          (item) => (
                                            <li key={item.slug}>
                                              <Link to={`/${item.slug}`}>
                                                {item.title}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </HeaderMenu>
                                    )}
                                  </li>

                                  {/* <li
                                    className={`inner_one_more_menu ${
                                      activeMenuItem === 3 ? "active" : ""
                                    }`}
                                    onMouseEnter={() => handleTabNav(3)}
                                  >
                                    <Link to="/service-main/business-consultation">
                                     Business Consultation{" "}
                                    </Link>
                                    {activeMenuItem === 3 && (
                                      <HeaderMenu>
                                        {headerMenu.latest_technology_menu.map(
                                          (item) => (
                                            <li key={item.slug}>
                                              <Link to={`/${item.slug}`}>
                                                {item.title}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </HeaderMenu>
                                    )}
                                  </li> */}

                                  <li
                                    className={`inner_one_more_menu ${
                                      activeMenuItem === 4 ? "active" : ""
                                    }`}
                                    onMouseEnter={() => handleTabNav(4)}
                                  >
                                    <Link to="/digital-marketing">
                                      Digital Marketing{" "}
                                    </Link>
                                    {activeMenuItem === 4 && (
                                      <HeaderMenu>
                                        {headerMenu.digital_marketing_menu.map(
                                          (item) => (
                                            <li key={item.slug}>
                                              <Link to={`/${item.slug}`}>
                                                {item.title}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </HeaderMenu>
                                    )}
                                  </li>
                                </ul>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Container>
                    </HeaderMenu>
                  </div>

                  <div className={`${activeClass === "Solutions" && "active"}`}>
                    <Link
                      className="text-white"
                      onClick={() => handleTabNav(true, "Solutions")}
                    >
                      Industries
                      <FontAwesomeIcon className="fa" icon={faChevronDown} />
                    </Link>
                    <HeaderMenu>
                      <Container>
                        <Row className="justify-content-center">
                          <Col md={10}>
                            <Row className="justify-content-between">
                              <Col md={5}>
                                <div>
                                  <h4 className="top_hed heading_header mt-0">
                                    Industries
                                  </h4>
                                  <p>
                                    Discover top-notch IT services designed to
                                    drive your business forward. From managed IT
                                    solutions and network security to cloud
                                    computing and tech support, our expert team
                                    provides reliable and customized solutions
                                    tailored to your unique needs.
                                  </p>
                                </div>
                              </Col>
                              <Col
                                md={6}
                                className="menu-nav-links indusris_b services_box_header"
                              >
                                <ul>
                                  {headerMenu.expertise_menu.map((item) => (
                                    <li key={item.slug}>
                                      <Link to={`/${item.slug}`}>
                                        {item.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Container>
                    </HeaderMenu>
                  </div>

                  {/* <div className={`${activeClass === "Solutions" && "active"}`}>
                    <Link
                      className="text-white"
                      to={"/hire-developers"}
                      onClick={() => handleTabNav(true, "Solutions")}
                    >
                      Hire your Developer
                      <FontAwesomeIcon className="fa" icon={faChevronDown} />
                    </Link>
                    <HeaderMenu>
                      <Container>
                        <Row className="justify-content-center">
                          <Col md={10}>
                            <Row className="justify-content-between">
                              <Col md={5}>
                                <div>
                                  <h4 className="top_hed heading_header mt-0">
                                    Hire Devlopers
                                  </h4>
                                  <p>
                                    Discover top-notch IT services designed to
                                    drive your business forward. From managed IT
                                    solutions and network security to cloud
                                    computing and tech support, our expert team
                                    provides reliable and customized solutions
                                    tailored to your unique needs.
                                  </p>
                                </div>
                              </Col>
                              <Col
                                md={6}
                                className="menu-nav-links indusris_b services_box_header"
                              >
                                <ul>
                                  {headerMenu.hire_developer_menu.map(
                                    (item) => (
                                      <li key={item.slug}>
                                        <Link to={`/${item.slug}`}>
                                          {item.title}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Container>
                    </HeaderMenu>
                  </div> */}

                  <div>
                    <Link className="text-white" to={"/hire-developers"}>
                    Hire your Developer

                    </Link>
                  </div>
                  <div>
                    <Link className="text-white" to={"/work"}>
                      Our Masterpieces
                    </Link>
                  </div>

                  <div>
                    <Link className="text-white" to={"/contact"}>
                      contact us
                    </Link>
                  </div>

                  <div className="nav-end-item">
                    <div className="globe_btn">
                      <button className="primery-btn" onClick={openMenu}>
                        <span>
                          {" "}
                          Get Free Quote
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-right"
                            className="svg-inline--fa fa-arrow-right "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    {/* <Button>
            <Link to="" onClick={handleShow}>
              Get Free Ouote
            </Link>
          </Button> */}
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <Navbar expand="lg" className="d-lg-none d-block">
          <Container fluid className="animated fadeInUp">
            <Link to={"/"} className="logo_deisgn">
              <div className="logo_white">
                <img src={logowhite} alt="logo1" />
              </div>

              <div className="logo_blue">
                <img src={logotwo} alt="logo2" loading="lazy" />
              </div>
            </Link>
            {/* </Navbar.Brand> */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleMenuToggle}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              className={`mobile_menus ${menuOpen ? "show" : ""}`}
              show={menuOpen}
              onHide={handleMenuClose}
            >
              <Offcanvas.Header closeButton onClick={handleMenuClose}>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-lg`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto">
                  <ul className={`menu mobilemeu open`}>
                    {/* <li className="menu-item" key={0}>
                      <Link
                        onClick={() => handleSubMenuClick(0)}
                        className={activeSubMenu === 0 ? "active" : ""}
                      >
                        Company{" "}
                        <FontAwesomeIcon
                          icon={
                            subMenuExpanded[0] ? faChevronUp : faChevronDown
                          }
                        />
                      </Link>
                      {subMenuOpen[0] && (
                        <ul className="submenu">
                          <li key={0}>
                            <Link
                              onClick={() =>
                                handleBlogSubMenuClick(0, blogSubMenuOpen)
                              }
                              className={blogSubMenuOpen === 0 ? "active" : ""}
                            >
                              About Us <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                            {blogSubMenuOpen === 0 && (
                              <ul className="subsubmenu">
                                {headerMenu.about_menu.map(
                                  (subsubItem, subsubIndex) => (
                                    <li key={subsubIndex}>
                                      <Link
                                        to={`/${subsubItem.slug}`}
                                        onClick={handleMenuClose}
                                      >
                                        {subsubItem.title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>

                          <li key={1}>
                            <Link
                              onClick={() =>
                                handleBlogSubMenuClick(1, blogSubMenuOpen)
                              }
                              className={blogSubMenuOpen === 1 ? "active" : ""}
                            >
                              Resources <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                            {blogSubMenuOpen === 1 && (
                              <ul className="subsubmenu">
                                {headerMenu.resource_menu.map(
                                  (subsubItem, subsubIndex) => (
                                    <li key={subsubIndex}>
                                      <Link
                                        to={`/${subsubItem.slug}`}
                                        onClick={handleMenuClose}
                                      >
                                        {subsubItem.title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        </ul>
                      )}
                    </li> */}
                    <li className="menu-item" key={0}>
                      <Link
                        onClick={() => handleSubMenuClick(0)}
                        className={activeSubMenu === 0 ? "active" : ""}
                      >
                        Company
                        <FontAwesomeIcon
                          icon={
                            subMenuExpanded[0] ? faChevronUp : faChevronRight
                          }
                        />
                      </Link>
                      {activeSubMenu === 0 && (
                        <ul className="submenu">
                          <ul>
                            {headerMenu.about_menu.map(
                              (subsubItem, subsubIndex) => (
                                <li key={subsubIndex}>
                                  <Link
                                    to={`/${subsubItem.slug}`}
                                    onClick={handleMenuClose}
                                  >
                                    {subsubItem.title}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </ul>
                      )}
                    </li>
                    {/* second */}
                    <li className="menu-item" key={1}>
                      {/* first */}
                      <Link
                        onClick={() => handleSubMenuClick(1)}
                        className={activeSubMenu === 1 ? "active" : ""}
                      >
                        Services{" "}
                        <FontAwesomeIcon
                          icon={
                            subMenuExpanded[1] ? faChevronUp : faChevronRight
                          }
                        />
                      </Link>
                      {subMenuOpen[1] && (
                        <ul className="submenu">
                          <li key={0}>
                            <div>
                              <Link to="/service-main/mobile-app-development">
                                Mobile App Development{" "}
                              </Link>
                              <FontAwesomeIcon
                                className={
                                  blogSubMenuOpen === 0 ? "active" : ""
                                }
                                onClick={() =>
                                  handleBlogSubMenuClick(0, blogSubMenuOpen)
                                }
                                icon={faChevronRight}
                              />
                            </div>
                            {blogSubMenuOpen === 0 && (
                              <ul className="subsubmenu">
                                {headerMenu.app_development_menu.map(
                                  (subsubItem, subsubIndex) => (
                                    <li key={subsubIndex}>
                                      <Link
                                        to={`/${subsubItem.slug}`}
                                        onClick={handleMenuClose}
                                      >
                                        {subsubItem.title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>

                          <li key={1}>
                            <div>
                              <Link to="/service-main/web-development">
                                Web Development{" "}
                              </Link>
                              <FontAwesomeIcon
                                className={
                                  blogSubMenuOpen === 1 ? "active" : ""
                                }
                                onClick={() =>
                                  handleBlogSubMenuClick(1, blogSubMenuOpen)
                                }
                                icon={faChevronRight}
                              />
                            </div>
                            {blogSubMenuOpen === 1 && (
                              <ul className="subsubmenu">
                                {headerMenu.web_development_menu.map(
                                  (subsubItem, subsubIndex) => (
                                    <li key={subsubIndex}>
                                      <Link
                                        to={`/${subsubItem.slug}`}
                                        onClick={handleMenuClose}
                                      >
                                        {subsubItem.title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>

                          <li key={2}>
                            <div>
                              <Link to="/service-main/hybrid-app-development">
                                Hybrid App Development{" "}
                                <FontAwesomeIcon
                                  className={
                                    blogSubMenuOpen === 2 ? "active" : ""
                                  }
                                  onClick={() =>
                                    handleBlogSubMenuClick(2, blogSubMenuOpen)
                                  }
                                  icon={faChevronRight}
                                />
                              </Link>
                            </div>
                            {blogSubMenuOpen === 2 && (
                              <ul className="subsubmenu">
                                {headerMenu.hybrid_development_menu.map(
                                  (subsubItem, subsubIndex) => (
                                    <li key={subsubIndex}>
                                      <Link
                                        to={`/${subsubItem.slug}`}
                                        onClick={handleMenuClose}
                                      >
                                        {subsubItem.title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>

                          <li key={3}>
                            <div>
                              <Link to="/service-main/business-consultation">
                               Business Consultation{" "}
                              </Link>
                              <FontAwesomeIcon
                                className={
                                  blogSubMenuOpen === 3 ? "active" : ""
                                }
                                onClick={() =>
                                  handleBlogSubMenuClick(3, blogSubMenuOpen)
                                }
                                icon={faChevronRight}
                              />
                            </div>
                            {blogSubMenuOpen === 3 && (
                              <ul className="subsubmenu">
                                {headerMenu.latest_technology_menu.map(
                                  (subsubItem, subsubIndex) => (
                                    <li key={subsubIndex}>
                                      <Link
                                        to={`/${subsubItem.slug}`}
                                        onClick={handleMenuClose}
                                      >
                                        {subsubItem.title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                          <li key={4}>
                            <div>
                              <Link to="/digital-marketing">
                                Digital Marketing{" "}
                              </Link>
                              <FontAwesomeIcon
                                className={
                                  blogSubMenuOpen === 4 ? "active" : ""
                                }
                                onClick={() =>
                                  handleBlogSubMenuClick(4, blogSubMenuOpen)
                                }
                                icon={faChevronRight}
                              />
                            </div>
                            {blogSubMenuOpen === 4 && (
                              <ul className="subsubmenu">
                                {headerMenu.digital_marketing_menu.map(
                                  (subsubItem, subsubIndex) => (
                                    <li key={subsubIndex}>
                                      <Link
                                        to={`/${subsubItem.slug}`}
                                        onClick={handleMenuClose}
                                      >
                                        {subsubItem.title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        </ul>
                      )}
                    </li>
                    {/* third */}
                    <li className="menu-item" key={2}>
                      {/* fourth */}
                      <Link
                        onClick={() => handleSubMenuClick(2)}
                        className={activeSubMenu === 2 ? "active" : ""}
                      >
                        Industries
                        <FontAwesomeIcon
                          icon={
                            subMenuExpanded[2] ? faChevronUp : faChevronRight
                          }
                        />
                      </Link>
                      {activeSubMenu === 2 && (
                        <ul className="submenu">
                          <ul>
                            {headerMenu.expertise_menu.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  to={`/${item.slug}`}
                                  onClick={handleMenuClose}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </ul>
                      )}
                    </li>

                      {/* fourth */}
                    {/* <li className="menu-item" key={3}>
                      <Link
                        to={"/hire-developers"}
                        onClick={() => handleSubMenuClick(3)}
                        className={activeSubMenu === 3 ? "active" : ""}
                      >
                        Hire Your Developer{" "}
                        <FontAwesomeIcon
                          icon={
                            subMenuExpanded[3] ? faChevronUp : faChevronRight
                          }
                        />
                      </Link>
                      {activeSubMenu === 3 && (
                        <ul className="submenu">
                          <ul>
                            {headerMenu.hire_developer_menu.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  to={`/${item.slug}`}
                                  onClick={handleMenuClose}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </ul>
                      )}
                    </li> */}
                    <li className="menu-item" key={4}>
                      <Link to={"/hire-developers"} onClick={handleMenuClose}>
                      Hire your Developer

                      </Link>
                    </li>
                    <li className="menu-item" key={4}>
                      <Link to={"/work"} onClick={handleMenuClose}>
                        Our Masterpieces
                      </Link>
                    </li>

                    <li className="menu-item" key={5}>
                      <Link to={"/contact"} onClick={handleMenuClose}>
                        contact us
                      </Link>
                    </li>
                  </ul>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>

      <GetQuoteForm show={menuShow} onHide={handleClose} />
    </>
  );
}

export default Header;

const HeaderMenu = ({ children }) => {
  return <div className="menu-subs menu-mega menu-column-4">{children}</div>;
};
