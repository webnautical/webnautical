import React, { useState, useEffect, useLayoutEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Skeleton from "@mui/material/Skeleton";
import config from "../../config";
import { Col, Container, Row } from "react-bootstrap";
import BasicAppBanner from "../solutions/BasicAppBanner";
import CountUp from "react-countup";
import seoimg from "../../assets/seo (1).png";
import goodfirm from "../../assets/glssdorr.webp";
import semfirms from "../../assets/semfirms.webp";
import google from "../../assets/google.png";
import clutch_11zon from "../../assets/clutch_11zon.webp";
import goodfirms from "../../assets/good-firms.svg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import circleimg from "../../assets/circle.png";
import Accordion from "react-bootstrap/Accordion";
import Expert from "../Home/Expert";
import ClientReview from "../Home/ClientReview";
import Getintouch from "../Home/Getintouch";
const DigitalMarketing = () => {
  const [marketingList, setMarketingList] = useState({});
  const [loading, setLoading] = useState(true);
  const helmetContext = {};
  const marketingContent = {
    background_image: marketingList?.banner_section?.background_image,
    subtitle: marketingList?.banner_section?.subtitle,
    title: marketingList?.banner_section?.title,
  };

  const weareon = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 100,
    margin: 10,
    dots: false,
    nav: false,
    responsiveClass: true,
    infinite: true,
    speed: 100,

    responsive: {
      0: {
        items: 2.5,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,

        loop: true,
      },
    },
  };

  const MarketingRecord = async () => {
    try {
      const response = await fetch(`${config.url}/v1/get_digital_marketing`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      if (data.status === "success") {
        setMarketingList(data.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    setLoading(true);
    MarketingRecord();
  }, []);

  const currentUrl = window.location.href;

  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{marketingList.meta_title}</title>
          <meta name="description" content={marketingList.meta_description} />
          <link rel="canonical" href={currentUrl} />
        </Helmet>

        <div className="digital_marketing">
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
            <>
              <BasicAppBanner content={marketingContent} />
            </>
          )}
          <section className="our_value_services">
            <Container>
              <div className="global_heading ">
                <div className="icon">
                  <img src={circleimg} alt="circleimg" />
                </div>
                <h2>{marketingList?.services_section?.title}</h2>
              </div>

              <Row>
                {marketingList &&
                  marketingList.services_section &&
                  marketingList.services_section.service &&
                  marketingList.services_section.service.map((item, index) => (
                    <Col md={4} className="mb-3">
                      <Link to={item.url}>
                        <div className="servises_box">
                          <div className="icon_service">
                            <div className="related_icon">
                              <i className={item.class_icon}></i>
                            </div>
                            <div className="arrow_icon">
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </div>
                          </div>
                          <div className="services_name">{item.title}</div>
                          <p>{item.content}</p>
                        </div>
                      </Link>
                    </Col>
                  ))}
              </Row>
            </Container>
          </section>

          <section className="counter_design pt-3">
            <Container>
              <div className="icon text-center">
                <img src={circleimg} alt="circleimg" />
              </div>
              <h2 className="global_single_heading">
                {marketingList?.our_work?.title}
              </h2>
              <Row className="counter-box mb-0">
                {marketingList &&
                  marketingList.our_work &&
                  marketingList.our_work.counts &&
                  marketingList.our_work.counts.map((item, index) => (
                    <Col md={3} className="p-5 text-center">
                      <div className="count-b">
                        <span>
                          <em className="count">
                            <CountUp duration={3} end={item.count} />
                          </em>
                          +
                        </span>
                      </div>
                      <p>{item.title}</p>
                    </Col>
                  ))}
              </Row>
            </Container>
          </section>

          <section className="digital_marketing_services">
            <Container>
              <div className="global_heading text-center mb-3">
                <div className="icon">
                  <img src={circleimg} alt="circleimg" />
                </div>
                <h2>{marketingList?.seo_service?.title}</h2>
              </div>
              <Row className="align-items-center mt-5">
                <Col md={7}>
                  <div
                    className="cnt_box"
                    dangerouslySetInnerHTML={{
                      __html: marketingList?.seo_service?.content,
                    }}
                  ></div>
                </Col>

                <Col md={5} className="text-center">
                  <div className="img_seo text-center">
                    <img
                      src={marketingList?.seo_service?.service_image?.url}
                      alt={marketingList?.seo_service?.service_image?.alt}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <div className="Awards">
            <Container>
              <Row className="align-items-center justify-content-between">
                <Col md={4} className="text-center order-2 order-md-1 ">
                  {/*        
              <div className="Person_img" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <img src={awardData.image.url} alt={awardData.image.alt} />
              </div> */}

                  <div className="global_heading text-start">
                    <div className="icon">
                      <img src={circleimg} alt="circleimg" />
                    </div>
                    {/* <span>Reviews</span> */}
                    <h2 className="text-white">
                      {marketingList?.tool_section?.title}
                    </h2>
                  </div>
                </Col>
                <Col md={8} className="order-1 order-md-2 ">
                  <Row>
                    <OwlCarousel className="owl-theme" {...weareon}>
                      {marketingList &&
                        marketingList.tool_section &&
                        marketingList.tool_section.gallery &&
                        marketingList.tool_section.gallery.map(
                          (item, index) => (
                            <div className="item">
                              <Link href={item.url}>
                                <div className="badge_box">
                                  <img
                                    src={item.logo.url}
                                    alt={item.logo.alt}
                                  />
                                  <p>{item.description}</p>
                                </div>
                              </Link>
                            </div>
                          )
                        )}
                    </OwlCarousel>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>

          {/* <section className="tools_we_use">
            <div className="we_are_on">
              <Container>
                <div className="global_heading mb-4">
                  <h2>{marketingList?.tool_section?.title}</h2>
                </div>
                <Row>
                  <Col md={12}>
                    <OwlCarousel className="owl-theme" {...weareon}>
                      {marketingList &&
                        marketingList.tool_section &&
                        marketingList.tool_section.gallery &&
                        marketingList.tool_section.gallery.map(
                          (item, index) => (
                            <div className="item">
                              <Link className="outer_box_we">
                                <img src={item.url} alt={item.alt} />
                              </Link>
                            </div>
                          )
                        )}
                    </OwlCarousel>
                  </Col>
                </Row>
              </Container>
            </div>
          </section> */}

          {marketingList &&
            marketingList.expertise_section &&
            marketingList.expertise_section.certified_services && (
              <Expert data={marketingList.expertise_section} />
            )}
          <div className="mb-3">
            <Getintouch />
          </div>

          <section className="why_choose_marketing">
            <Container>
              <div className="global_heading text-center mb-5">
                <div className="icon">
                  <img src={circleimg} alt="circleimg" />
                </div>
                <h2>{marketingList?.why_go_section?.title}</h2>
              </div>
              <Row>
                {marketingList &&
                  marketingList.why_go_section &&
                  marketingList.why_go_section.points &&
                  marketingList.why_go_section.points.map((item, index) => (
                    <Col md={3} className="mb-3">
                      <div className="why_choose_marketing_inner">
                        <div className={`icon lokesh${index}`}>
                          <i className={item.class_icon}></i>
                        </div>
                        <h2>{item.title}</h2>

                        <p>{item.description}</p>
                      </div>
                    </Col>
                  ))}
              </Row>
            </Container>
          </section>

          {marketingList &&
            marketingList.testimonial_section &&
            marketingList.testimonial_section.reviews && (
              <ClientReview testimonial={marketingList.testimonial_section} />
            )}

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
                    {marketingList &&
                      marketingList.faq_section &&
                      marketingList.faq_section.map((item, index) => (
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
        </div>
      </>
    </HelmetProvider>
  );
};

export default DigitalMarketing;
