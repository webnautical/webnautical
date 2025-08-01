import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import config from "../../config";
import Skeleton from "@mui/material/Skeleton";

import Swiper from "swiper";
import "swiper/css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BasicAppBanner from "./BasicAppBanner";
import Accordion from "react-bootstrap/Accordion";
// import OwlCarousel from "react-owl-carousel";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import circleimg from "../../assets/circle.png";
//bootsrtap imports
import { Container, Row, Col } from "react-bootstrap";
import Getintouch from "../../components/Home/Getintouch";
// import CountUp from 'react-countup/build/CountUp';
import CountUp from "react-countup";
// import servicesicon from "../../assets/servieicon.png";
//images imports
import android from "../../assets/android.png";
import Codeinger from "../../assets/blackfire-inverted-1.svg";
import ios from "../../assets/app-store.png";
// import node from "../../assets/node.png";
import node from "../../assets/node.webp";
import Wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import laravel from "../../assets/laravel.svg";
import flutter from "../../assets/fluuterpng.png";
import njs from "../../assets/js.png";
import reacticon from "../../assets/react.svg";
// import chatImg from '../../assets/solutions-images/chat-app.png';

function AppSolution({ id }) {
  const navigate = useNavigate();
  const { slug } = useParams();
  console.log("slug", slug);
  const [serviceDetail, setserviceDetail] = useState({});
  const [activeItem, setActiveItem] = useState(0);
  const [loading, setLoading] = useState(true);
  const helmetContext = {};
  const servicesContent = {
    background_image: serviceDetail?.banner_section?.background_image,
    subtitle: serviceDetail?.banner_section?.subtitle,
    title: serviceDetail?.banner_section?.title,
  };
  const thumbSlider = useRef(null);
  const gallerySlider = useRef(null);

  useEffect(() => {
    const thumbSlider = new Swiper(".servicenDevelopment__thumb", {
      slidesPerView: 1,
      loop: true,
      simulateTouch: false,
      speed: 1200,
      spaceBetween: 30,
      breakpoints: { 576: { slidesPerView: 1.5 }, 1024: { slidesPerView: 3 } },
    });

    const gallerySlider = new Swiper(".servicenDevelopment__gallery", {
      slidesPerView: 1,
      loop: true,
      autoplay: true,
      speed: 1200,
      simulateTouch: false,
      effect: "fade",
      fadeEffect: { crossFade: true },
      thumbs: { swiper: thumbSlider },
      navigation: {
        nextEl: ".servicenDevelopment__galleryWrapper .swiper-button-next",
        prevEl: ".servicenDevelopment__galleryWrapper .swiper-button-prev",
      },
    });

    const handleNextButtonClick = () => {
      thumbSlider.slideNext();
      gallerySlider.slideNext();
    };

    const handlePrevButtonClick = () => {
      thumbSlider.slidePrev();
      gallerySlider.slidePrev();
    };

    const nextButton = document.querySelector(
      ".servicenDevelopment__galleryWrapper .swiper-button-next"
    );
    const prevButton = document.querySelector(
      ".servicenDevelopment__galleryWrapper .swiper-button-prev"
    );

    if (nextButton && prevButton) {
      nextButton.addEventListener("click", handleNextButtonClick);
      prevButton.addEventListener("click", handlePrevButtonClick);
    }

    // Clean up
    return () => {
      if (nextButton && prevButton) {
        nextButton.removeEventListener("click", handleNextButtonClick);
        prevButton.removeEventListener("click", handlePrevButtonClick);
      }

      thumbSlider.destroy();
      gallerySlider.destroy();
    };
  }, []);

  const serviceRecord = async () => {
    try {
      setLoading(true);
      const params = { page_slug: slug };
      console.log(params, "params");
      const response = await fetch(`${config.url}/v1/service_details`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const apidata = await response.json();
      console.log("serviceDetail apidata ddd", apidata);

      if (apidata.status === "success") {
        setserviceDetail(apidata.data);
        setLoading(false);
      }
    } catch (error) {
      navigate("/*");
      console.error("Error:", error);
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    serviceRecord();
  }, [slug]);

  useEffect(() => {
    console.log(serviceDetail, "serviceDetail");
  }, [serviceDetail]);

  const [activeTab, setActiveTab] = useState("first"); // State to keep track of active tab

  // Function to handle hover event and set active tab
  const handleTabHover = (eventKey) => {
    setActiveTab(eventKey);
  };

  const industriesinner = {
    items: 3,
    nav: true,
    dots: false,
    responsiveClass: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 30,
    stagePadding: 0,
    autoWidth: false,
    startPosition: 0,
    center: false,
    // navText: ['prev', 'next'],
    autoplay: false,
    rewind: false,
    slideBy: 1,
    lazyLoad: false,
    dotsEach: false,
    infinite: false,
    autoplayTimeout: 1000,
    autoplaySpeed: 100,
    autoplayHoverPause: true,
    animateOut: null,
    animateIn: null,
    speed: 100,

    responsive: {
      0: {
        items: 1.2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  const handlePrev = () => {
    setActiveItem(
      activeItem === 0
        ? serviceDetail.build_result_section.results.length - 1
        : activeItem - 1
    );
  };

  const handleNext = () => {
    setActiveItem(
      activeItem === serviceDetail.build_result_section.results.length - 1
        ? 0
        : activeItem + 1
    );
  };
  console.log(
    serviceDetail?.build_result_section?.results.length,
    "serviceDetail?.build_result_section?.results"
  );

  const currentUrl = window.location.href;

  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{serviceDetail.meta_title}</title>
          <meta name="description" content={serviceDetail.meta_description} />
          <link rel="canonical" href={currentUrl} />
        </Helmet>
        {/* Banner Section */}
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
          <BasicAppBanner content={servicesContent} />
        )}
        {/* About Us Section */}
        {loading ? (
          <section className="aboutsection">
            <Container>
              <Row className="align-items-center">
                <Col md={6}>
                  <div>
                    <Skeleton variant="text" width="70%" height={50} />
                    <Skeleton variant="text" width="50%" height={26} />
                    <Skeleton variant="text" width="100%" height={20} />
                    <Skeleton variant="text" width="100%" height={20} />
                    <Skeleton variant="text" width="100%" height={20} />
                    <Skeleton variant="text" width="100%" height={20} />
                    {/* <Skeleton variant="rectangular" height={200} style={{
                          width: "100%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                          borderRadius: "10px",
                        }} /> */}
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <Skeleton variant="rectangular" width="100%" height={400} />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        ) : (
          <>
            {serviceDetail && serviceDetail.about_section ? (
              <section className="aboutsection">
                <Container>
                  <Row className="align-items-center justify-content-between">
                    <Col md={6}>
                      {serviceDetail && serviceDetail.about_section && (
                        <div className="about_content">
                          <h2 className="mb-2">
                            {serviceDetail.about_section.title}
                          </h2>

                          {/* <span>{serviceDetail.about_section.subtitle}</span> */}
                          <p
                            dangerouslySetInnerHTML={{
                              __html: serviceDetail.about_section.content,
                            }}
                          ></p>
                          <div className="globe_btn">
                            <button
                              className="primery-btn"
                              onClick={() => navigate("/contact")}
                            >
                              <span>
                                Get Free 30 Mins. Mobile App Consultation
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
                        </div>
                      )}
                    </Col>
                    <Col md={6}>
                      <div className="right_side_img text-center">
                        {serviceDetail &&
                          serviceDetail.about_section &&
                          serviceDetail.about_section.image && (
                            <img
                              src={serviceDetail.about_section.image.url}
                              alt={serviceDetail.about_section.image.alt}
                            />
                          )}
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            ) : null}
          </>
        )}
        {/* Counter Section */}
        {loading ? (
          <section className="services_counter counter_design ">
            <Container>
              <Row className="counter-box">
                <Col md={6} lg={3} className="p-5 text-center">
                  <div>
                    <Skeleton
                      variant="text"
                      width="40%"
                      height={80}
                      style={{ margin: "auto" }}
                    />
                    <Skeleton variant="text" width="100%" height={30} />
                  </div>
                </Col>
                <Col md={6} lg={3} className="p-5 text-center">
                  <div>
                    <Skeleton
                      variant="text"
                      width="40%"
                      height={80}
                      style={{ margin: "auto" }}
                    />
                    <Skeleton variant="text" width="100%" height={30} />
                  </div>
                </Col>
                <Col md={6} lg={3} className="p-5 text-center ">
                  <div>
                    <Skeleton
                      variant="text"
                      width="40%"
                      height={80}
                      style={{ margin: "auto" }}
                    />
                    <Skeleton variant="text" width="100%" height={30} />
                  </div>
                </Col>
                <Col md={6} lg={3} className="p-5 text-center ">
                  <div>
                    <Skeleton
                      variant="text"
                      width="40%"
                      height={80}
                      style={{ margin: "auto" }}
                    />
                    <Skeleton variant="text" width="100%" height={30} />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        ) : (
          <section className="services_counter counter_design ">
            <Container>
              <div className="icon text-center">
                <img src={circleimg} alt="circleimg" />
              </div>
              <h2 className="global_single_heading">The Journey So Far</h2>
              <Row className="counter-box ">
                <Col xs={6} sm={6} md={6} lg={3} className="p-md-5 text-center">
                  <div className="count-b">
                    <span>
                      <em className="count">
                        <CountUp duration={3} end={10} />
                      </em>
                      +
                    </span>
                  </div>
                  <p>Years on the market</p>
                </Col>
                <Col xs={6} sm={6} md={6} lg={3} className="p-md-5 text-center">
                  <div className="count-b">
                    <span>
                      <em className="count">
                        <CountUp duration={3} end={95} />
                      </em>
                      +
                    </span>
                  </div>
                  <p>Our NPS score</p>
                </Col>

                <Col
                  xs={6}
                  sm={6}
                  md={6}
                  lg={3}
                  className="p-md-5 text-center "
                >
                  <div className="count-b">
                    <span>
                      <em className="count">
                        <CountUp duration={3} end={50} />
                      </em>
                      +
                    </span>
                  </div>
                  <p>People on board</p>
                </Col>

                <Col
                  xs={6}
                  sm={6}
                  md={6}
                  lg={3}
                  className="p-md-5 text-center "
                >
                  <div className="count-b">
                    <span>
                      <em className="count">
                        <CountUp duration={3} end={100} />
                      </em>
                      +
                    </span>
                  </div>
                  <p>Projects Delivered</p>
                </Col>
                {/* <div className="counter-one__shape leftani hidden visible animated fadeInUp"></div> */}
              </Row>
            </Container>
          </section>
        )}
        {/* service Section */}
        {loading ? (
          <section>
            <Container>
              <Row>
                <div
                  className="services_steps"
                  style={{
                    backgroundColor: "#e4e4e4",
                  }}
                >
                  <Skeleton
                    variant="rectangular"
                    height={40}
                    className=" mb-3"
                    style={{
                      width: "50%",
                      backgroundColor: " rgb(25 97 181 / 28%)",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />

                  <Skeleton
                    variant="rectangular"
                    height={40}
                    className=" mb-3"
                    style={{
                      width: "10%",
                      backgroundColor: " rgb(25 97 181 / 28%)",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    className="mb-3"
                    style={{
                      width: "40%",
                      backgroundColor: " rgb(25 97 181 / 28%)",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    className="mb-3"
                    style={{
                      width: "40%",
                      backgroundColor: " rgb(25 97 181 / 28%)",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    className="mb-3"
                    style={{
                      width: "40%",
                      backgroundColor: " rgb(25 97 181 / 28%)",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    className="mb-3"
                    style={{
                      width: "40%",
                      backgroundColor: " rgb(25 97 181 / 28%)",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />
                </div>
                <Col md={4}>
                  <div className="steps_box">
                    <Skeleton
                      variant="rectangular"
                      height={20}
                      className="mb-3 "
                      style={{
                        width: "40%",
                        marginTop: "30px",
                        backgroundColor: " rgb(25 97 181 / 28%)",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                    <div className="bar_round">
                      <div className="circle"></div>
                      <div className="border_cus"></div>
                    </div>
                    <Skeleton
                      variant="rectangular"
                      height={20}
                      className="mb-3 mt-3"
                      style={{
                        width: "50%",
                        backgroundColor: " rgb(25 97 181 / 28%)",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                    <Skeleton
                      variant="rectangular"
                      height={16}
                      className="mb-3"
                      style={{
                        width: "60%",
                        backgroundColor: " rgb(25 97 181 / 28%)",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                    <Skeleton
                      variant="rectangular"
                      height={16}
                      style={{
                        width: "60%",
                        backgroundColor: " rgb(25 97 181 / 28%)",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="steps_box">
                    <Skeleton
                      variant="rectangular"
                      height={20}
                      className="mb-3 "
                      style={{
                        width: "40%",
                        marginTop: "30px",
                        backgroundColor: " rgb(25 97 181 / 28%)",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                    <div className="bar_round">
                      <div className="circle"></div>
                      <div className="border_cus"></div>
                    </div>
                    <Skeleton
                      variant="rectangular"
                      height={20}
                      className="mb-3 mt-3"
                      style={{
                        width: "50%",
                        backgroundColor: " rgb(25 97 181 / 28%)",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                    <Skeleton
                      variant="rectangular"
                      height={16}
                      className="mb-3"
                      style={{
                        width: "60%",
                        backgroundColor: " rgb(25 97 181 / 28%)",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                    <Skeleton
                      variant="rectangular"
                      height={16}
                      style={{
                        width: "60%",
                        backgroundColor: " rgb(25 97 181 / 28%)",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="steps_box">
                    <Skeleton
                      variant="rectangular"
                      height={20}
                      className="mb-3 "
                      style={{
                        width: "40%",
                        marginTop: "30px",
                        backgroundColor: " rgb(25 97 181 / 28%)",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                    <div className="bar_round">
                      <div className="circle"></div>
                      <div className="border_cus"></div>
                    </div>
                    <Skeleton
                      variant="rectangular"
                      height={20}
                      className="mb-3 mt-3"
                      style={{
                        width: "50%",
                        backgroundColor: " rgb(25 97 181 / 28%)",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                    <Skeleton
                      variant="rectangular"
                      height={16}
                      className="mb-3"
                      style={{
                        width: "60%",
                        backgroundColor: " rgb(25 97 181 / 28%)",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                    <Skeleton
                      variant="rectangular"
                      height={16}
                      style={{
                        width: "60%",
                        backgroundColor: " rgb(25 97 181 / 28%)",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        ) : (
          <>
            {serviceDetail &&
            serviceDetail.solution_section &&
            serviceDetail.solution_section.step_1_title &&
            serviceDetail.solution_section.step_3_title &&
            serviceDetail.solution_section.step_2_title ? (
              <section className="services_steps">
                <Container>
                  <Row>
                    <Col md={7}>
                      <div
                        className="global_heading"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1000"
                      >
                        <div className="icon">
                          <img src={circleimg} alt="" />
                        </div>
                        <h2 className="mb-3">
                          {serviceDetail.solution_section.title}
                        </h2>

                        <p
                          dangerouslySetInnerHTML={{
                            __html: serviceDetail.solution_section.content,
                          }}
                        ></p>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={4}>
                      <div className="steps_box">
                        <h2>Steps 1</h2>
                        <div className="bar_round">
                          <div className="circle"></div>
                          <div className="border_cus"></div>
                        </div>
                        <h3>{serviceDetail.solution_section.step_1_title}</h3>

                        <p>{serviceDetail.solution_section.step_1_content}</p>
                      </div>
                    </Col>

                    <Col md={4}>
                      <div className="steps_box">
                        <h2>Steps 2</h2>
                        <div className="bar_round">
                          <div className="circle"></div>
                          <div className="border_cus"></div>
                        </div>
                        <h3>{serviceDetail.solution_section.step_2_title}</h3>

                        <p>{serviceDetail.solution_section.step_2_content}</p>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="steps_box">
                        <h2>Steps 3</h2>
                        <div className="bar_round">
                          <div className="circle"></div>
                          <div className="border_cus"></div>
                        </div>
                        <h3>{serviceDetail.solution_section.step_3_title}</h3>

                        <p>{serviceDetail.solution_section.step_3_content}</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            ) : null}
          </>
        )}
        {/* work Section */}
        {serviceDetail &&
          serviceDetail.development_process &&
          serviceDetail.development_process.process && (
            <section className="our_w_process">
              <Container>
                <Row className="justify-content-center">
                  {serviceDetail && serviceDetail.development_process && (
                    <Col md={8}>
                      <div
                        className="global_heading"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1000"
                      >
                        <div className="icon">
                          <img src={circleimg} alt="" />
                        </div>
                        <h2 className="">
                          {serviceDetail.development_process.title}
                        </h2>
                        <p>{serviceDetail.development_process.subtitle}</p>
                      </div>
                    </Col>
                  )}
                </Row>
                <Row>
                  {serviceDetail &&
                    serviceDetail.development_process &&
                    serviceDetail.development_process.process &&
                    serviceDetail.development_process.process.map(
                      (item, index) => (
                        <Col md={4} className="mb-4">
                          <div className="ser_inner servises_box">
                            <div className="head_top icon_service">
                              <div className="related_icon">
                                <i className={item.icon}></i>
                                {/* <img src={servicesicon} /> */}
                              </div>

                              {/* <div className="arrow_icon">
                                <i className="fa-solid fa-arrow-right-long"></i>
                              </div> */}
                            </div>
                            <div className="services_name text">
                              {item.title}
                            </div>
                            <p>{item.content}</p>
                          </div>
                        </Col>
                      )
                    )}
                </Row>
              </Container>
            </section>
          )}
        {/* getintouch Section */}

        <Getintouch />

        {/* expertise Section */}
        {serviceDetail &&
          serviceDetail.technology_section &&
          serviceDetail.technology_section.title &&
          serviceDetail.technology_section.subtitle && (
            <div className="expertise">
              <Container>
                <Row>
                  <Col md={5}>
                    <div className="global_heading text-start">
                      <div className="icon">
                        <img src={circleimg} alt="" />
                      </div>
                      <span>{serviceDetail?.technology_section?.subtitle}</span>
                      <h2>{serviceDetail?.technology_section?.title} </h2>
                    </div>
                  </Col>
                  {/* <Col md={6}>
 
              <div dangerouslySetInnerHTML={{ __html: technology.description }} />
 
            </Col> */}
                </Row>

                <Row className="mt-5 row-cols-2 row-cols-sm-2 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 g-3 pt-1 ">
                  <Col
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000"
                  >
                    <Link to={"/services/android-app-development"}>
                      <div className="android tech_inner border_box">
                        <div className="tech_main_box">
                          <div className="tech_icon">
                            <img
                              src={android}
                              alt="Android Apps"
                              width="120px"
                              height="60px"
                              loading="lazy"
                            />
                          </div>
                          <div className="tech_name">Android Apps</div>
                          <div className="project_count">18 Project</div>
                        </div>
                      </div>
                    </Link>
                  </Col>

                  <Col
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000"
                  >
                    <Link to={"/services/codeigniter-development"}>
                      <div className="ci tech_inner border_box">
                        <div className="tech_main_box">
                          <div className="tech_icon">
                            <img
                              src={Codeinger}
                              alt="CodeIgniter"
                              width="120px"
                              height="60px"
                              loading="lazy"
                            />
                          </div>
                          <div className="tech_name">CodeIgniter</div>
                          <div className="project_count">11 Project</div>
                        </div>
                      </div>
                    </Link>
                  </Col>

                  <Col
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000"
                  >
                    <Link to={"/services/ios-apps-development"}>
                      <div className="ios tech_inner border_box">
                        <div className="tech_main_box">
                          <div className="tech_icon">
                            <img
                              src={ios}
                              alt="IOS Apps"
                              width="120px"
                              height="60px"
                              loading="lazy"
                            />
                          </div>
                          <div className="tech_name">IOS Apps</div>
                          <div className="project_count">12 Project</div>
                        </div>
                      </div>
                    </Link>
                  </Col>

                  <Col
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1500"
                  >
                    <Link to={"/services/node-js-development"}>
                      <div className="js tech_inner border_box">
                        <div className="tech_main_box">
                          <div className="tech_icon">
                            <img
                              src={node}
                              alt="NodeJS"
                              width="120px"
                              height="60px"
                              loading="lazy"
                            />
                          </div>
                          <div className="tech_name">NodeJS</div>
                          <div className="project_count">14 Project</div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                    <Link to={"/services/wordpress-development"}>
                      <div className="wordpress tech_inner border_box">
                        <div className="tech_main_box">
                          <div className="tech_icon">
                            <img
                              src={Wordpress}
                              alt="Wordpress"
                              width="120px"
                              height="60px"
                              loading="lazy"
                            />
                          </div>
                          <div className="tech_name">Wordpress</div>
                          <div className="project_count">40 Project</div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                    <Link to={"/services/shopify-development"}>
                      <div className="shopify tech_inner border_box">
                        <div className="tech_main_box">
                          <div className="tech_icon">
                            <img
                              src={shopify}
                              alt="Shopify"
                              width="120px"
                              height="60px"
                              loading="lazy"
                            />
                          </div>
                          <div className="tech_name">Shopify</div>
                          <div className="project_count">6 Project</div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                    <Link to={"/services/laravel-web-development"}>
                      <div className="lara tech_inner border_box">
                        <div className="tech_main_box">
                          <div className="tech_icon">
                            <img
                              src={laravel}
                              alt="Laravel"
                              width="120px"
                              height="60px"
                              loading="lazy"
                            />
                          </div>
                          <div className="tech_name">Laravel</div>
                          <div className="project_count">25 Project</div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                    <Link to={"/services/flutter-app-development"}>
                      <div className="fluter tech_inner border_box">
                        <div className="tech_main_box">
                          <div className="tech_icon">
                            <img
                              src={flutter}
                              alt="Flutter"
                              width="120px"
                              height="60px"
                              loading="lazy"
                            />
                          </div>
                          <div className="tech_name">Flutter</div>
                          <div className="project_count">10 Project</div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                    <Link to={"/services/javascript-development"}>
                      <div className="javascript tech_inner border_box">
                        <div className="tech_main_box">
                          <div className="tech_icon">
                            <img
                              src={njs}
                              alt="JavaScript"
                              width="120px"
                              height="60px"
                              loading="lazy"
                            />
                          </div>
                          <div className="tech_name">JavaScript</div>
                          <div className="project_count">35 Project</div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                    <Link to={"/services/react-js-development"}>
                      <div className="border_box tech_inner">
                        <div className="tech_main_box">
                          <div className="tech_icon">
                            <img
                              src={reacticon}
                              alt="React JS"
                              width="120px"
                              height="60px"
                              loading="lazy"
                            />
                          </div>
                          <div className="tech_name">React JS</div>
                          <div className="project_count">12 Project</div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          )}
        {/* slider Section */}

        {/* {serviceDetail?.build_result_section?.results > 0 ?  */}

        <div className="servicenDevelopment__sliderWrapper twocol-row">
          <Container>
            <Row className="align-items-center">
              <Col md={8}>
                <div className="servicenDevelopment__thumbWrapper">
                  <div className="servicenDevelopment__thumb swiper" dir="rtl">
                    <div className="swiper-wrapper">
                      {/* Thumb Slider Content */}

                      {serviceDetail &&
                        serviceDetail.build_result_section &&
                        serviceDetail.build_result_section.results &&
                        serviceDetail.build_result_section.results.map(
                          (item, index) => (
                            <div className="swiper-slide">
                              <div className="slide-img">
                                <img
                                  className="lazy-img"
                                  src={item.image.url}
                                  alt={item.image.alt}
                                />
                                <div className="slide-count">{index + 1}</div>
                              </div>
                              <div className="slide-head">{item.title}</div>
                            </div>
                          )
                        )}
                      {/* Add more slides here */}
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={4}>
                <div className="servicenDevelopment__galleryWrapper">
                  <div className="servicenDevelopment__gallery swiper">
                    <div className="swiper-wrapper">
                      {/* Gallery Slider Content */}
                      {serviceDetail &&
                        serviceDetail.build_result_section &&
                        serviceDetail.build_result_section.results &&
                        serviceDetail.build_result_section.results.map(
                          (item, index) => (
                            <div className="swiper-slide">
                              <h3 className="head fw-600 gray-col">
                                {item.title}
                              </h3>
                              <p className="descrip s-font gray-col">
                                {item.content}
                              </p>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                  {serviceDetail &&
                  serviceDetail.build_result_section &&
                  serviceDetail.build_result_section.results ? (
                    <div className="generic-navigation-wrapper">
                      <button className="swiper-button-next">
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button className="swiper-button-prev">
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* :
          <></>

        } */}

        {/* faq Section */}
        {serviceDetail && serviceDetail.faq_section && (
          <section className="faq">
            <Container>
              <Row className="justify-content-center">
                <Col md={12}>
                  <div
                    className="global_heading text-start mb-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000"
                  >
                    <div className="icon">
                      <img src={circleimg} alt="" />
                    </div>
                    <h2 className="mb-3 text-start">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={12}>
                  <Accordion defaultActiveKey="0">
                    {serviceDetail &&
                      serviceDetail.faq_section &&
                      serviceDetail.faq_section.map((item, index) => (
                        <Accordion.Item key={index} eventKey={index.toString()}>
                          <Accordion.Header>{item.question}</Accordion.Header>
                          <Accordion.Body>{item.answer}</Accordion.Body>
                        </Accordion.Item>
                      ))}
                  </Accordion>
                </Col>
              </Row>
            </Container>
          </section>
        )}
      </>
    </HelmetProvider>
  );
}

export default AppSolution;
