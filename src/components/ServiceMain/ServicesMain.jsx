import React, { useState, useEffect, useLayoutEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import config from "../../config";
import Skeleton from "@mui/material/Skeleton";
import { Container, Row, Col } from "react-bootstrap";
import HireDetailsbg from "../../assets/bghiredetails.png";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import circleimg from "../../assets/circle.png";
import serviceimg from "../../assets/services-main.webp";
import CaseStudy from "../Home/CaseStudy.home";
import BasicAppBanner from "../solutions/BasicAppBanner";
import Accordion from "react-bootstrap/Accordion";
import { useParams } from "react-router-dom";
import imgprocces from "../../assets/sports.png";
import imgproccestwo from "../../assets/banking.png";
import imgproccesthree from "../../assets/food.png";

import imgproccesfour from "../../assets/health.png";
import ClientReview from "../Home/ClientReview";

const ServicesMain = () => {
  const [activeSection, setActiveSection] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = document.querySelectorAll(".img_scroll_bpx");
      let newActiveSection = 0;
      sections.forEach((section, index) => {
        if (section.offsetTop <= scrollPosition + 200) {
          newActiveSection = index;
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { slug } = useParams();
  // console.log('slug', slug);
  const [serviceData, setServiceData] = useState({});
  const [loading, setLoading] = useState(true);
  const helmetContext = {};
  const bigimage = {
    backgroundImage: `url(${HireDetailsbg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const serviceContent = {
    background_image: serviceData?.banner_section?.background_image,
    subtitle: serviceData?.banner_section?.subtitle,
    title: serviceData?.banner_section?.title,
  };

  const ServiceRecord = async () => {
    try {
      setLoading(true);
      const params = { page_slug: slug };
      console.log(params, "params");
      const response = await fetch(`${config.url}/v1/development_main`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      if (data.status === "success") {
        setServiceData(data.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      navigate("/*");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    ServiceRecord();
  }, [slug]);

  useEffect(() => {
    console.log(serviceData, "caseStudyRecored");
  }, [serviceData]);

  const
currentUrl = window.location.href;

  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{serviceData.meta_title}</title>
          <meta name="description" content={serviceData.meta_description} />
          <link rel="canonical" href={currentUrl} />
        </Helmet>
        <div className="hire_dev_details service_main">
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
            <BasicAppBanner content={serviceContent} />
          )}

          {loading ? (
            <section className="our_value_services">
              <Container>
                <div className="global_heading ">
                  <Skeleton
                    variant="rectangular"
                    height={45}
                    className=" mb-3"
                    style={{
                      width: "50%",
                      marginLeft: "0px",
                      borderRadius: "10px",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />
                </div>
                <div className="global_heading ">
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    className=" mb-3"
                    style={{
                      width: "100%",
                      marginLeft: "0px",
                      borderRadius: "10px",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />
                </div>
                <div className="global_heading ">
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    className=" mb-3"
                    style={{
                      width: "50%",
                      marginLeft: "0px",
                      borderRadius: "10px",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />
                </div>
                <Row>
                  {[...Array(9)].map((_, index) => (
                    <Col md={6} lg={4} className="mb-3">
                      <div className="servises_box">
                        <div className="icon_service">
                          <div className="related_icon">
                            <Skeleton
                              variant="rectangular"
                              height={40}
                              className=" mb-3"
                              style={{
                                width: "200%",
                                marginLeft: "25px",
                                borderRadius: "10px",
                              }} // Inline CSS to set width to 40% and background color to blue
                            />
                          </div>
                          <div className="arrow_icon">
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </div>
                        </div>
                        <div className="services_name">
                          <Skeleton
                            variant="rectangular"
                            height={40}
                            className=" mb-3"
                            style={{
                              width: "60%",
                              marginLeft: "25px",
                              borderRadius: "10px",
                            }} // Inline CSS to set width to 40% and background color to blue
                          />
                        </div>
                        <Skeleton
                          variant="rectangular"
                          height={15}
                          className=" mb-3"
                          style={{
                            width: "90%",
                            margin: "auto",
                            borderRadius: "10px",
                          }} // Inline CSS to set width to 40% and background color to blue
                        />
                        <Skeleton
                          variant="rectangular"
                          height={15}
                          className=" mb-3"
                          style={{
                            width: "90%",
                            margin: "auto",
                            borderRadius: "10px",
                          }} // Inline CSS to set width to 40% and background color to blue
                        />
                        <Skeleton
                          variant="rectangular"
                          height={15}
                          className=" mb-3"
                          style={{
                            width: "90%",
                            margin: "auto",
                            borderRadius: "10px",
                          }} // Inline CSS to set width to 40% and background color to blue
                        />
                        <Skeleton
                          variant="rectangular"
                          height={15}
                          className=" mb-3"
                          style={{
                            width: "90%",
                            margin: "auto",
                            borderRadius: "10px",
                          }} // Inline CSS to set width to 40% and background color to blue
                        />
                        <Skeleton
                          variant="rectangular"
                          height={15}
                          className=" mb-3"
                          style={{
                            width: "90%",
                            margin: "auto",
                            borderRadius: "10px",
                          }} // Inline CSS to set width to 40% and background color to blue
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>
          ) : (
            <>
              {serviceData && serviceData.services_section ? (
                <section className="our_value_services">
                  <Container>
                    <div className="global_heading ">
                      <div className="icon">
                        <img src={circleimg} alt="circleimg" />
                      </div>
                      <h2>{serviceData?.services_section?.title}</h2>
                      <p>
                        As a custom website design and development company, our
                        major goal is to give dynamic web development services
                        to businesses that not only resonate with what users
                        want but also relevant as per the market demand. Our
                        worked projects have performed greatly in the target
                        niche and have also ensured better ROI.{" "}
                      </p>
                    </div>
                    <Row>
                      {serviceData &&
                        serviceData.services_section &&
                        serviceData.services_section.service &&
                        serviceData.services_section.service.map(
                          (item, index) => (
                            <Col md={6} lg={4} className="mb-3">
                              <Link to={item.url}>
                                <div className="servises_box">
                                  <div className="icon_service">
                                    <div className="related_icon">
                                      <i className={item.icon_class}></i>
                                    </div>
                                    <div className="arrow_icon">
                                      <i className="fa-solid fa-arrow-right-long"></i>
                                    </div>
                                  </div>
                                  <div className="services_name">
                                    {item.title}
                                  </div>
                                  <p>{item.content}</p>
                                </div>
                              </Link>
                            </Col>
                          )
                        )}
                    </Row>
                  </Container>
                </section>
              ) : null}
            </>
          )}
          {/* <section className="hire_why the_procces">
            <Container>
              <Row className="justify-content-center ">
                <Col md={10}>
                  <div
                    className="global_heading text-center mb-5 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000"
                  >
                    <div className="icon">
                      <img src={circleimg} alt="circleimg" />
                    </div>
                    <h2>{serviceData?.process_section?.title}</h2>
                    <p>{serviceData?.process_section?.subtitle}</p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <div>
                    <Accordion>
                      {serviceData &&
                        serviceData.process_section &&
                        serviceData.process_section.accordion &&
                        serviceData.process_section.accordion.map(
                          (item, index) => (
                            <Accordion.Item eventKey={index}>
                              <Accordion.Header>{item.title}</Accordion.Header>
                              <Accordion.Body>{item.content}</Accordion.Body>
                            </Accordion.Item>
                          )
                        )}
                    </Accordion>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          <>
            {serviceData && serviceData.process_section ? (
              <section className="procees_business">
                <Container>
                  <Row className="justify-content-center">
                    <Col lg={8}>
                      <div
                        className="global_heading text-center mb-5 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1000"
                      >
                        <div className="icon">
                          <img src={circleimg} alt="circleimg" />
                        </div>
                        <h2>{serviceData?.process_section?.title}</h2>
                        <p>{serviceData?.process_section?.subtitle}</p>
                      </div>
                    </Col>
                  </Row>
                  <Row className=" justify-content-center">
                    <Col md={11} lg={10} xl={8}>
                      <Row className="border-righttop">
                        <div className="oborder-innertop"></div>
                        <Col sm={6} md={4} lg={4} className=" mb-4">
                          <div className="procces_box text-center">
                            <div className="circle_icon">
                              <i className="fa-brands fa-mendeley"></i>
                            </div>

                            <div className="procces_name">Discover </div>
                            <p>
                              {" "}
                              design first with real content in mind but do drop
                              in the Real Contant{" "}
                            </p>
                          </div>
                        </Col>

                        <Col sm={6} md={4} lg={4} className=" mb-4">
                          <div className="procces_box text-center">
                            <div className="circle_icon">
                              <i className="fa-solid fa-ruler-combined"></i>
                            </div>

                            <div className="procces_name">Define </div>
                            <p>
                              {" "}
                              design first with real content in mind but do drop
                              in the Real Contant{" "}
                            </p>
                          </div>
                        </Col>

                        <Col sm={6} md={4} lg={4} className=" mb-4">
                          <div className="procces_box text-center">
                            <div className="circle_icon">
                              <i className="fa-solid fa-code"></i>
                            </div>

                            <div className="procces_name">Design </div>
                            <p>
                              {" "}
                              design first with real content in mind but do drop
                              in the Real Contant{" "}
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <div className="oborder-innercenter"></div>
                      <Row className="bordr-lefttop">
                        <Col sm={6} md={4} lg={4} className=" mb-4">
                          <div className="procces_box text-center">
                            <div className="circle_icon">
                              <i className="fa-regular fa-rectangle-list"></i>
                            </div>

                            <div className="procces_name">App Architect </div>
                            <p>
                              {" "}
                              design first with real content in mind but do drop
                              in the Real Contant{" "}
                            </p>
                          </div>
                        </Col>

                        <Col sm={6} md={4} lg={4} className=" mb-4">
                          <div className="procces_box text-center">
                            <div className="circle_icon">
                              <i className="fa-solid fa-rocket"></i>
                            </div>

                            <div className="procces_name">
                              Platform Development{" "}
                            </div>
                            <p>
                              {" "}
                              design first with real content in mind but do drop
                              in the Real Contant{" "}
                            </p>
                          </div>
                        </Col>

                        <Col sm={6} md={4} lg={4} className=" mb-4">
                          <div className="procces_box text-center">
                            <div className="circle_icon">
                              <i className="fa-solid fa-headset"></i>
                            </div>

                            <div className="procces_name">
                              Quality Assurance{" "}
                            </div>
                            <p>
                              {" "}
                              design first with real content in mind but do drop
                              in the Real Contant{" "}
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </section>
            ) : null}
          </>
          {serviceData && serviceData.why_go_section && (
            <section className="why_should">
              <Container>
                <Row className="justify-content-center">
                  <Col md={10}>
                    <div className="global_heading text-center">
                      <div className="icon">
                        <img src={circleimg} alt="circleimg" />
                      </div>
                      <h2>{serviceData?.why_go_section?.title}</h2>

                      <p>{serviceData?.why_go_section?.subtitle}</p>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col lg={6}>
                    <div className="serrvice_img_box">
                      <img
                        className="w-80 m-auto"
                        src={serviceData?.why_go_section?.background_image?.url}
                        alt={serviceData?.why_go_section?.background_image?.alt}
                      />
                    </div>
                  </Col>

                  <Col lg={6}>
                    {serviceData &&
                      serviceData.why_go_section &&
                      serviceData.why_go_section.points &&
                      serviceData.why_go_section.points.map((item, index) => (
                        <ul>
                          <li>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                          </li>
                        </ul>
                      ))}
                  </Col>
                </Row>
              </Container>
            </section>
          )}
          {serviceData && serviceData.projects_section && (
            <section>
              {serviceData &&
                serviceData.projects_section &&
                serviceData.projects_section.projects && (
                  <CaseStudy data={serviceData.projects_section} />
                )}
            </section>
          )}
          {/* <section className="exerp_in">
            <Container>
              <div
                className="global_heading mb-5"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <div className="icon">
                  <img src={''} alt="Expertise" />
                  
                </div>
                <span>{'Expertise'}</span>
                <h2>{'Industries We Serve'}</h2>
                <p>{'WebNautical serves an array of sectors, spanning from eCommerce to finance website development services.  '}</p>
              </div>
              <Row className="mt-5">


                <Col md={6} lg={3} className="mb-4">
                  <div className="industries_hover">
                    <div className="industry_box">
                      <div className="icon_box">
                        <img src={imgprocces} alt={''} />
                      </div>

                      <div className="name mt-3">{'E-commerce'}</div>
                      <p className="mt-3">
                        {'The e-commerce landscape is raising the digital transformation standards therefore you must too. '}
                      </p>
                  

                    </div>
                  </div>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <div className="industries_hover">
                    <div className="industry_box">
                      <div className="icon_box">
                  <img src={imgproccesfour} alt="Healthcare" />
                       
                      </div>

                      <div className="name mt-3">{'Healthcare '}</div>
                      <p className="mt-3">
                        {'Our Team of Healthcare app developers specializes in offering tech-powered digital solutions for the Healthcare industry.'}
                      </p>
               

                    </div>
                  </div>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <div className="industries_hover">
                    <div className="industry_box">
                      <div className="icon_box">
                        <img src={imgprocces} alt={''} />
                      </div>

                      <div className="name mt-3">{'Education'}</div>
                      <p className="mt-3">
                        {'Elevate education with our brainy e-learning apps for real-time performance enhancement.'}
                      </p>
                   

                    </div>
                  </div>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <div className="industries_hover">
                    <div className="industry_box">
                      <div className="icon_box">
                        <img src={imgprocces} alt={''} />
                      </div>

                      <div className="name mt-3">{'Finance '}</div>
                      <p className="mt-3">
                        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                      </p>
                   

                    </div>
                  </div>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <div className="industries_hover">
                    <div className="industry_box">
                      <div className="icon_box">
                        <img src={imgprocces} alt={''} />
                      </div>

                      <div className="name mt-3">{'Entertainment'}</div>
                      <p className="mt-3">
                        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                      </p>
                 

                    </div>
                  </div>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <div className="industries_hover">
                    <div className="industry_box">
                      <div className="icon_box">
                        <img src={imgproccestwo} alt={''} />
                      </div>

                      <div className="name mt-3">{'Travel and Tourism '}</div>
                      <p className="mt-3">
                        {'Craft successful travel apps with our rich features for synchronized expeditions'}
                      </p>
                  
                    </div>
                  </div>
                </Col>


                <Col md={6} lg={3} className="mb-4">
                  <div className="industries_hover">
                    <div className="industry_box">
                      <div className="icon_box">
                        <img src={imgprocces} alt={''} />
                      </div>

                      <div className="name mt-3">{'Gaming '}</div>
                      <p className="mt-3">
                        {'Unify coaches, trainers, and fans with WebNautical for personalized app experiences.'}
                      </p>
                 

                    </div>
                  </div>
                </Col>
                <Col md={6} lg={3} className="mb-4">
                  <div className="industries_hover">
                    <div className="industry_box">
                      <div className="icon_box">
                        <img src={imgproccesthree} alt={''} />
                      </div>

                      <div className="name mt-3">{'Food and Beverage '}</div>
                      <p className="mt-3">
                        {"WebNautical's on-demand food delivery app keeps your business ahead in the market."}
                      </p>
                   

                    </div>
                  </div>
                </Col>
                
                <Col md={6} lg={3} className="mb-4">
                  <div className="industries_hover">
                    <div className="industry_box">
                      <div className="icon_box">
                        <img src={imgprocces} alt={''} />
                      </div>

                      <div className="name mt-3">{'Transportation and Logistics  '}</div>
                      <p className="mt-3">
                        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                      </p>
                     
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}

          {serviceData && serviceData.faq_section && (
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
                      <div className="icon">
                        <img src={circleimg} alt="circleimg" />
                      </div>
                      <h2 className="mb-3 text-start">
                        Frequently Asked Questions
                      </h2>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col md={12} data-aos="fade-up" data-aos-duration="1000">
                    <Accordion>
                      {serviceData &&
                        serviceData.faq_section &&
                        serviceData.faq_section.map((item, index) => (
                          <Accordion.Item
                            key={index}
                            eventKey={index.toString()}
                          >
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
        </div>
      </>
    </HelmetProvider>
  );
};

export default ServicesMain;
