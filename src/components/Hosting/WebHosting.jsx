import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navigate } from "react-router-dom";
import feature1 from "../../assets/feature-01.webp";
import feature2 from "../../assets/feature-02.webp";
import feature3 from "../../assets/feature-03.webp";
import feature4 from "../../assets/feature-04.webp";
import circleimg from "../../assets/circle.png";
import whychoose from "../../assets/whychoose.svg";
import moneyback from "../../assets/money-back.svg";
import speed from "../../assets/speed.svg";
import support from "../../assets/support.svg";
import basicIcon from "../../assets/cloud-network.png";
import premiumIcon from "../../assets/add-database.png";
import businessIcon from "../../assets/cloud-storage.png";
import businessIcon1 from "../../assets/cloud-server.png";
import { Accordion, Row, Col, Container, Offcanvas } from "react-bootstrap";
import settingicon from "../../assets/cloud-computing.png";
import security from "../../assets/security.png";
import owned from "../../assets/economic-prosperity.png";
import fullymanage from "../../assets/mechanical-gears.png";
import migration from "../../assets/data-migration.png";
import hostingbanner from "../../assets/hostng.png";

const items = [
  {
    question: "What is cloud hosting?",
    answer:
      "Cloud hosting makes applications and websites accessible using cloud resources.",
  },
  {
    question: "How does cloud hosting work?",
    answer:
      "Cloud hosting works by hosting websites on virtual servers which pull their computing resource from extensive underlying networks of physical web servers.",
  },
  {
    question: "Why is Cloudminister a reliable cloud web hosting company?",
    answer:
      "Cloudminister has been a trusted cloud web hosting provider since 2011 and continues to revolutionize the website creation experience. Over 2 million websites are powered by Cloudminister and we continue to provide world class cloud web hosting services and products to our global customer base. As one of the top recommended WordPress cloud web hosting providers by WordPress.org, we provide cloud web hosting and domain solutions that can optimize WordPress websites for speed, performance and design through our innovative products.",
  },
  // Add more items as needed
];

const pricingPlans = [
  {
    name: "Startup Shared Hosting",
    desc: "Price Table",
    pastPrice: "2.38",
    offer: "SAVE 50%",
    price: "42.89",
    renewYear: "3",
    icon: basicIcon,
    features: [
      "1 Website",
      "5 GB SSD Storage",
      "512 MB RAM",
      "1 Email Account",
      "100 GB Bandwidth",
      "Free SSL Encrypt",
    ],
  },
  {
    name: "Plus Shared Hosting",
    desc: "Price Table",
    pastPrice: "2.38",
    offer: "SAVE 50%",
    price: "53.61",
    icon: premiumIcon,
    renewYear: "3",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "512 MB RAM",
      "1 Email Account",
      "100 GB Bandwidth",
      "Free SSL Encrypt",
    ],
    popular: true,
    active: true,
  },
  {
    name: "Pro Shared Hosting",
    desc: "Price Table",
    pastPrice: "2.38",
    offer: "SAVE 50%",
    icon: businessIcon,
    price: "171.55",
    renewYear: "3 ",
    features: [
      "1 Website",
      "100 GB SSD Storage",
      "1 GB RAM",
      "1 Email Account",
      "100 GB Bandwidth",
      "Free SSL Encrypt",
    ],
  },
];
const WebHosting = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [expertiseData] = useState({
    meta_title: "",
    meta_description: "",
    banner_section: {},
    solution_section: {},

    education_section: {},
    teachers_section: {},
  });
  const helmetContext = {};
  const
currentUrl = window.location.href;
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>{expertiseData.meta_title}</title>
        <meta name="description" content={expertiseData.meta_description} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <section
        className="mern__hosting banner "
        // style={{
        //   backgroundImage:
        //     "url('https://webnautical.webupdatecenter.com/wp-content/uploads/2024/07/banner__ten-1.webp')",
        // }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 order-md-1 order-2">
              <div
                className="rts-hero-four__content wow slideInDown"
                data-wow-delay="0.1s"
                data-wow-duration="0.8s"
              >
                <h1>
                  Leading Cloud Web Hosting Company To Speed Up Your Business
                  Success
                </h1>
                <p>
                  Get your website online with CloudMinister robust cloud web
                  hosting Plans and rest assured of enhanced security, maximum
                  uptime,and quicker response time.
                </p>
                <div>
                  <ul className="feature__list">
                    <li>
                      <i className="fa-regular fa-circle-check text-succes"></i>{" "}
                      Node.js Supported
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check text-succes"></i>{" "}
                      MongoDB Supported
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check text-succes"></i>{" "}
                      Litespeed Web Server
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check text-succes"></i>{" "}
                      99.99% Uptime
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check text-succes"></i>{" "}
                      24/7/365 Day Support
                    </li>
                  </ul>
                </div>

                {/* <div className="globe_btn mobile_hide_class mt-4">
                  <button
                    className="primery-btn"
                    onClick={() => Navigate("/work")}
                  >
                    <span>
                      Explore Our Masterpieces{" "}
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
                </div> */}
              </div>
            </div>

            <div className="col-md-5  order-md-2 order-1">
              <div className="hosting_banner">
                <img src={hostingbanner} alt="banner-hosting" />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div
              className="col-md-4 mb-md-0 mb-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="box_poitns">
                <div className="icon">
                  <i className="fa-solid fa-retweet"></i>
                </div>
                <h2>Shared Hosting</h2>
                <p>
                  For delivering high website performance we designed a custom
                  execution of PHP and...
                </p>
              </div>
            </div>

            <div
              className="col-md-4 mb-md-0 mb-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="box_poitns">
                <div className="icon">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <h2>VPS Hosting</h2>
                <p>
                  At Cloudminister, we always aim to make websites run 10x
                  faster by integrating...
                </p>
              </div>
            </div>

            <div
              className="col-md-4 mb-md-0 mb-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="box_poitns">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="60"
                    height="47"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        d="M185.787 330.332h140.427a6.978 6.978 0 0 0 6.838-8.5 78.907 78.907 0 0 0-154.1 0 6.978 6.978 0 0 0 6.839 8.5zM338.257 221.9l28.306-28.307a8 8 0 0 1 11.313 11.313l-28.306 28.306 2.3-.283a8 8 0 1 1 1.938 15.875l-25.2 3.1a8.006 8.006 0 0 1-9.058-8.888l3.119-25.356a8 8 0 1 1 15.871 1.94zM162.43 233.212l-28.306-28.306a8 8 0 0 1 11.312-11.313l28.307 28.307-.283-2.3a8 8 0 1 1 15.875-1.938l3.119 25.356a8.007 8.007 0 0 1-9.059 8.888l-25.2-3.1a8 8 0 1 1 1.937-15.875l2.3.283zm251.784 182.476a39.784 39.784 0 1 1-26.383 10.012l-35.454-61.407a7.966 7.966 0 1 1 13.813-7.938l35.432 61.37a39.7 39.7 0 0 1 12.592-2.037zM264 416.493a39.778 39.778 0 1 1-16 0v-56.169a8 8 0 0 1 16 0zm-166.214-.805a39.784 39.784 0 1 0 26.383 10.012l35.454-61.407a7.966 7.966 0 1 0-13.813-7.938l-35.432 61.37a39.725 39.725 0 0 0-12.592-2.037zm327.17-397.556 22 12.7-76.045 43.9v34.577l22.053 12.732V87.467L469 43.563l22 12.7a9.767 9.767 0 0 1 5 8.66v76.262a9.767 9.767 0 0 1-5 8.661l-66.044 38.13a9.766 9.766 0 0 1-10 0l-66.044-38.13a9.767 9.767 0 0 1-5-8.661V64.922a9.767 9.767 0 0 1 5-8.66l66.044-38.13a9.766 9.766 0 0 1 10 0zm-327.912 0 22 12.7L43 74.735v34.577l22.052 12.732V87.467l76.045-43.9 22 12.7a9.767 9.767 0 0 1 5 8.66v76.262a9.767 9.767 0 0 1-5 8.661l-66.044 38.13a9.766 9.766 0 0 1-10 0L21 149.845a9.767 9.767 0 0 1-5-8.661V64.922a9.767 9.767 0 0 1 5-8.66l66.044-38.13a9.766 9.766 0 0 1 10 0zM256 170.158a39.887 39.887 0 1 1-39.887 39.886A39.887 39.887 0 0 1 256 170.158z"
                        fill="#0064d9"
                        opacity="1"
                        dataOriginal="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h2>Reseller Hosting</h2>
                <p>
                  To offer the best in class and secure website, our all web
                  hosting...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rts-pricing-plan">
        <div className="container">
          <div className="global_heading text-center">
            <div className="icon">
              <img src={circleimg} alt="circleimg" />
            </div>
            <span>Cloud Web Hosting Plan</span>
            <h2>Our Best Cloud Web Hosting Pricing</h2>
            <p>
              Go through with our amazing yet pocket-friendly Cloud Web Hosting
              plans and deals and choose according to website needs.
            </p>
          </div>
          <div className="price__content mt-md-5 mt-4">
            <div className="row">
              {pricingPlans.map((plan, index) => (
                <div className="col-lg-4 col-md-4 col-12" key={index}>
                  <div className={`card-plan ${plan.active ? "active" : ""}`}>
                    {plan.popular && (
                      <div className="popular-tag">most popular</div>
                    )}

                    <div className="card-plan__package">
                      <div className="icon mb-3">
                        <img src={plan.icon} width="60" alt="businessIcon1" />
                      </div>
                      <h4>{plan.name}</h4>
                    </div>
                    <p className="card-plan__desc">{plan.desc}</p>
                    <div className="card-plan__offer mb-4">
                      <span className="offer-given">{plan.offer}</span>
                    </div>
                    <h5 className="card-plan__price mb-4">
                      $ {plan.price} <sub> / Tri-Annually</sub>
                    </h5>
                    <div className="globe_btn mobile_hide_class mt-3 mb-2">
                      <a href="#" className="primery-btn">
                        {" "}
                        <span>
                          Buy Now
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
                      </a>
                    </div>
                    <p className="card-plan__renew-price">
                      {plan.renewYear} Year at $ {plan.pastPrice} /mo
                    </p>
                    <div className="card-plan__feature">
                      <ul className="card-plan__feature--list">
                        {plan.features.map((feature, i) => (
                          <li className="card-plan__feature--list-item" key={i}>
                            <span className="text">
                              <i className="fa fa-check text-success"></i>{" "}
                              {feature}
                            </span>
                          </li>
                        ))}
                        <li className="card-plan__feature--list-trigered"></li>
                      </ul>
                    </div>
                    <span className="blut btn_pop_up text" onClick={handleShow}>
                      View More Features
                      <i className="fa-sharp fa fa-chevron-down"></i>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="whats_make_diff ">
        <div className="container">
          <div
            className="global_heading text-center mb-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >
            <div className="icon">
              <img src={circleimg} alt="circleimg" />
            </div>
            <h2 className="mb-3">
              Webnautical Web Hosting So Different From Others
            </h2>
            <p>
              {" "}
              Cloudminister is a foremost cloud web hosting provider of
              web-presence solutions to small firms, professionals, and
              individuals. We deliver our clients with a wide suite of helpful
              products that enable them to establish & expand their online
              presence with our cloud web hosting plan.
            </p>
          </div>
          <div className="inner_whats_make">
            <div className="row">
              <div className="col-md-4 mb-4" data-aos="zoom-in">
                <div className="whats_make_box">
                  <div className="top_box_whats_make_box">
                    <div className="icon">
                      <img src={fullymanage} alt="icon" />
                    </div>
                    <div className="icon_line"></div>
                  </div>

                  <h3>Fully Managed Server</h3>
                  <p>
                    We deploy, set up, secure, and do optimization on the cloud
                    web hosting server with backup and security by keeping all
                    the SEO perspectives in mind. Reach your target audience
                    with great speed with us to boost your business growth.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4" data-aos="zoom-in">
                <div className="whats_make_box">
                  <div className="top_box_whats_make_box">
                    <div className="icon">
                      <img src={settingicon} alt="icon" />
                    </div>
                    <div className="icon_line"></div>
                  </div>

                  <h3>99.99% Uptime Guarantee</h3>
                  <p>
                    Our expert team guarantees that servers will be accessible
                    at least 99.99% of the time. We do have uptime monitoring
                    tools to maintain 100% uptime and bring the best to the
                    table.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4" data-aos="zoom-in">
                <div className="whats_make_box">
                  <div className="top_box_whats_make_box">
                    <div className="icon">
                      <img src={security} alt="icon" />
                    </div>
                    <div className="icon_line"></div>
                  </div>

                  <h3>Privacy and Security</h3>
                  <p>
                    Your website security and solitude come first at
                    Cloudminister web hosting plans, and we will consistently
                    keep the ownership of individuals and customers online. It’s
                    our aim to keep the internet available, free, and secure for
                    everyone.{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4" data-aos="zoom-in">
                <div className="whats_make_box">
                  <div className="top_box_whats_make_box">
                    <div className="icon">
                      <img src={owned} alt="icon" />
                    </div>
                    <div className="icon_line"></div>
                  </div>

                  <h3>Employee Owned</h3>
                  <p>
                    Being employee-owned keeps us concentrated on the special
                    requirements of our users, and we wouldn't have it any other
                    manner. We're determined to help everyone discover success
                    online.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4" data-aos="zoom-in">
                <div className="whats_make_box">
                  <div className="top_box_whats_make_box">
                    <div className="icon">
                      <img src={migration} alt="icon" />
                    </div>
                    <div className="icon_line"></div>
                  </div>

                  <h3>Website Migration</h3>
                  <p>
                    With Cloudminister, moving from other vendors is not
                    difficult as our admins will take care of migrating your web
                    hosting servers without any downtime and without any
                    additional charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rts-feature-area">
        <div className="container">
          <div
            className="global_heading text-center mb-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >
            <div className="icon">
              <img src={circleimg} alt="circleimg" />
            </div>
            <h2 className="mb-3">
              Professional Cloud Web Hosting Company with a Decade of Experience
            </h2>
            <p>
              {" "}
              Cloudminister is a foremost cloud web hosting provider of
              web-presence solutions to small firms, professionals, and
              individuals. We deliver our clients with a wide suite of helpful
              products that enable them to establish & expand their online
              presence with our cloud web hosting plan.
            </p>
          </div>
          <div className="section-inner">
            <div className="feature-wrapper">
              <div className="row g-5 mt--60 inner-separator">
                <div className="col-lg-3 col-md-6 col-sm-6 mt--0 pt--50">
                  <div className="feature-wrapper text-center">
                    <div className="overlay"></div>
                    <div className="icon">
                      <img src={feature1} alt="businessIcon1" />
                    </div>
                    <div className="content">
                      <h4>Uptime Guarantee</h4>
                      <p className="desc">
                        Share processes & data secure lona need to know basis
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt--0 pt--50">
                  <div className="feature-wrapper text-center">
                    <div className="overlay"></div>
                    <div className="icon">
                      <img src={feature2} alt="businessIcon1" />
                    </div>
                    <div className="content">
                      <h4>Safe and Secured</h4>
                      <p className="desc">
                        Share processes & data secure lona need to know basis
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt--0 pt--50">
                  <div className="feature-wrapper text-center">
                    <div className="overlay"></div>
                    <div className="icon">
                      <img src={feature3} alt="businessIcon1" />
                    </div>
                    <div className="content">
                      <h4>Dedicated Support</h4>
                      <p className="desc">
                        Share processes & data secure lona need to know basis
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt--0 pt--50">
                  <div className="feature-wrapper text-center">
                    <div className="overlay"></div>
                    <div className="icon">
                      <img src={feature4} alt="feature4" />
                    </div>
                    <div className="content">
                      <h4>Money-Back Guarantee</h4>
                      <p className="desc">
                        Share processes & data secure lona need to know basis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="rts-whychoose">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-change mb-4">
              <div className="rts-whychoose__content">
                <div
                  className="global_heading text-start mb-5"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  <div className="icon">
                    <img src={circleimg} alt="circleimg" />
                  </div>
                  <h2 className="mb-3 text-start">
                    {" "}
                    Why Choose MERN Hosting for Your Hosting Needs
                  </h2>
                </div>
                <div className="single" data-sal="slide-right">
                  <div className="single__image">
                    <img src={speed} alt="feature4" />
                  </div>
                  <div className="single__content">
                    <h6>Up To 20xFaster Turbo</h6>
                    <p>
                      That means better SEO rankings, lower bounce rates &amp;
                      higher conversion rates!
                    </p>
                  </div>
                </div>
                <div className="single" data-sal="slide-right">
                  <div className="single__image">
                    <img src={support} alt="feature4" />
                  </div>
                  <div className="single__content">
                    <h6>24/7 Expert Support</h6>
                    <p>
                      Our knowledgeable and friendly support team is available
                      24/7/365 to help!
                    </p>
                  </div>
                </div>
                <div className="single" data-sal="slide-right">
                  <div className="single__image">
                    <img src={moneyback} alt="moneyback" />
                  </div>
                  <div className="single__content">
                    <h6>Money-Back Guarantee</h6>
                    <p>
                      Give our high-speed hosting service a try completely
                      risk-free!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="rts-whychoose__image">
                <img src={whychoose} alt="whychoose" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="faq">
        <Container>
          <Row className="justify-content-start">
            <Col md={8}>
              <div
                className="global_heading text-start mb-3"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <div className="icon ">
                  <img src={circleimg} alt="circleimg" />
                </div>
                <h2 className="mb-3 text-start">Frequently Asked Questions</h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {items.map((item, index) => (
              <Col
                md={12}
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Accordion>
                  <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body>{item.answer}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="plans_compare offcanvas-full-page"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="request_step text-center pt-0">
            <h2> Startup Vs Plus Vs Boost Vs Pro Shared Hosting Plans</h2>
            <p>Full Features Explained In Detail</p>
          </div>
          <div className="compare-pricing-table table-responsive-md">
            <table className="table table-bordered bg-soft mb-0">
              <thead className="bg-soft">
                <tr>
                  <th scope="col">
                    <div className="card-plan__package text-start">
                      <h4>Select Billing Cycle</h4>
                    </div>
                    <div className="d-flex justify-content-center changeyear">
                      <select className="form-select">
                        <option value="1" selected="selected">
                          3 Year
                        </option>
                        <option value="2">2 Year</option>
                        <option value="3">1 Year</option>
                        <option value="4">6 Month</option>
                      </select>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="top_bar_model align-items-start justify-content-between mb-4">
                      <div className="card-plan__package text-start">
                        <div className="icon mb-2 text-center">
                          <img src={basicIcon} width="30" alt="basicIcon" />
                        </div>
                        <h4 className="mb-0">Startup Shared Hosting</h4>
                      </div>
                      <div className="card-plan__offer">
                        <span className="offer-given">SAVE 50%</span>
                      </div>
                    </div>
                    <h5 className="card-plan__price">
                      $42.89 <sub> / Tri-Annually</sub>
                    </h5>
                    <div className="d-flex main_price">
                      <div className="globe_btn mobile_hide_class">
                        <a className="primery-btn" href="#">
                          <span>
                            Buy Now
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
                        </a>
                      </div>
                      <p className="card-plan__renew-price">
                        3 Year at $ 2.38 /mo
                      </p>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="top_bar_model align-items-start justify-content-between mb-4">
                      <div className="card-plan__package text-start">
                        <div className="icon mb-2 text-center">
                          <img src={premiumIcon} width="30" alt="premiumIcon" />
                        </div>
                        <h4 className="mb-0">Plus Shared Hosting</h4>
                      </div>
                      <div className="card-plan__offer">
                        <span className="offer-given">SAVE 50%</span>
                      </div>
                    </div>
                    <h5 className="card-plan__price">
                      $ 53.61 <sub> / Tri-Annually</sub>
                    </h5>
                    <div className="d-flex main_price">
                      <div className="globe_btn mobile_hide_class">
                        <a className="primery-btn" href="#">
                          <span>
                            Buy Now
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
                        </a>
                      </div>
                      <p className="card-plan__renew-price">
                        3 Year at $ 2.38 /mo
                      </p>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="top_bar_model align-items-start justify-content-between mb-4">
                      <div className="card-plan__package text-start">
                        <div className="icon mb-2 text-center">
                          <img src={businessIcon} width="30" alt="Pro Shared Hosting" />
                        </div>
                        <h4 className="mb-0">Pro Shared Hosting</h4>
                      </div>
                      <div className="card-plan__offer">
                        <span className="offer-given">SAVE 50%</span>
                      </div>
                    </div>
                    <h5 className="card-plan__price">
                      $ 171.55 <sub> / Tri-Annually</sub>
                    </h5>
                    <div className="d-flex main_price">
                      <div className="globe_btn mobile_hide_class">
                        <a className="primery-btn" href="#">
                          <span>
                            Buy Now
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
                        </a>
                      </div>
                      <p className="card-plan__renew-price">
                        3 Year at $ 2.38 /mo
                      </p>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="top_bar_model align-items-start justify-content-between mb-4">
                      <div className="card-plan__package text-start">
                        <div className="icon mb-2 text-center">
                          <img src={businessIcon1} width="30" alt="businessIcon1" />
                        </div>
                        <h4 className="mb-0">Startup Shared Hosting</h4>
                      </div>
                      <div className="card-plan__offer">
                        <span className="offer-given">SAVE 50%</span>
                      </div>
                    </div>
                    <h5 className="card-plan__price">
                      ₹ 3,600.00 <sub> / Tri-Annually</sub>
                    </h5>
                    <div className="d-flex main_price">
                      <div className="globe_btn mobile_hide_class">
                        <a className="primery-btn" href="#">
                          <span>
                            Buy Now
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
                        </a>
                      </div>
                      <p className="card-plan__renew-price">
                        3 Year at $ 2.38 /mo
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="compare-content-body">
                <tr>
                  <th scope="row">Website </th>
                  <td>
                    <i className="fa fa-check "></i>
                    <span className="fw-bolder">1 Website </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">2 Website </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">10 Websites </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">20 Websites </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Nvme SSD Storage</th>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">5 GB SSD Storage</span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">10 GB SSD Storage </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">50 GB SSD Storage </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">100 GB SSD Storage </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">RAM </th>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">512 MB RAM </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">512 MB RAM </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">1 GB RAM </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">1 GB RAM </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Email Account</th>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">1 Email Account </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">10 Email Account </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Unlimited Email Account </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Unlimited Email Account </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">cPanel + 1 Click Installer </th>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">
                      cPanel + 1 Click Installer{" "}
                    </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">
                      cPanel + 1 Click Installer{" "}
                    </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">
                      cPanel + 1 Click Installer{" "}
                    </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">
                      cPanel + 1 Click Installer{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Free SSL Encrypt</th>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Free SSL Encrypt </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Free SSL Encrypt </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Free SSL Encrypt </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Free SSL Encrypt </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">MySQL DB's Databases</th>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">2 Databases </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">10 Databases </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Unlimited Databases </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Unlimited Databases </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Backups</th>
                  <td>
                    <i className="fa fa-times text-danger"></i>
                    <span className="fw-bolder">Weekly Backups* </span>
                  </td>
                  <td>
                    <i className="fa fa-times text-danger"></i>
                    <span className="fw-bolder">Weekly Backups* </span>
                  </td>
                  <td>
                    <i className="fa fa-times text-danger"></i>
                    <span className="fw-bolder">Weekly Backups* </span>
                  </td>
                  <td>
                    <i className="fa fa-times text-danger"></i>
                    <span className="fw-bolder">Weekly Backups* </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Credit Back Guarantee</th>
                  <td>
                    <i className="fa fa-times text-danger"></i>
                    <span className="fw-bolder">
                      30 Days Credit Back Guarantee*{" "}
                    </span>
                  </td>
                  <td>
                    <i className="fa fa-times text-danger"></i>
                    <span className="fw-bolder">
                      30 Days Credit Back Guarantee*{" "}
                    </span>
                  </td>
                  <td>
                    <i className="fa fa-times text-danger"></i>
                    <span className="fw-bolder">
                      30 Days Credit Back Guarantee*{" "}
                    </span>
                  </td>
                  <td>
                    <i className="fa fa-times text-danger"></i>
                    <span className="fw-bolder">
                      30 Days Credit Back Guarantee*{" "}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Account Setup</th>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Free Account Setup </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Free Account Setup </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Free Account Setup </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Free Account Setup </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Technical Support</th>
                  <td>
                    <i className="fa fa-checkng"></i>
                    <span className="fw-bolder">24*7 Ticket </span>
                  </td>
                  <td>
                    <i className="fa fa-checkng"></i>
                    <span className="fw-bolder">24*7 Ticket </span>
                  </td>
                  <td>
                    <i className="fa fa-checkng"></i>
                    <span className="fw-bolder">24*7 Ticket </span>
                  </td>
                  <td>
                    <i className="fa fa-checkng"></i>
                    <span className="fw-bolder">24*7 Ticket </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Uptime Guarantee</th>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">99.9% Uptime Guarantee </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">99.9% Uptime Guarantee </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">99.9% Uptime Guarantee </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">99.9% Uptime Guarantee </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">DNS</th>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">DNS Management </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">DNS Management </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">DNS Management </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">DNS Management </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Manager</th>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Access Manager </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Access Manager </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Access Manager </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">Access Manager </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Subdomains</th>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">2 Subdomains </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">10 Subdomains </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">100 Subdomains </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">100 Subdomains </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">FTP Account</th>
                  <td>
                    <i className="fa fa-checkng"></i>
                    <span className="fw-bolder">1 FTP Account </span>
                  </td>
                  <td>
                    <i className="fa fa-checkng"></i>
                    <span className="fw-bolder">10 FTP Account </span>
                  </td>
                  <td>
                    <i className="fa fa-checkng"></i>
                    <span className="fw-bolder">Unlimited FTP Account </span>
                  </td>
                  <td>
                    <i className="fa fa-checkng"></i>
                    <span className="fw-bolder">Unlimited FTP Account </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Inodes Limit</th>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">100000 Inodes </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">100000 Inodes </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">150000 Inodes </span>
                  </td>
                  <td>
                    <i className="fa fa-check text-success"></i>
                    <span className="fw-bolder">250000 Inodes </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </HelmetProvider>
  );
};

export default WebHosting;
