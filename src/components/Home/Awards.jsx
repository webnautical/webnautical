import React, { useState, useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import girl from "../../assets/girl.png";
import goodfirms from "../../assets/good-firms.svg";
import { Link } from "react-router-dom";
import circleimg from "../../assets/circle.png";
import google from "../../assets/google.png";
import semfirms from "../../assets/semfirms.webp";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Skeleton from "@mui/material/Skeleton";

const Awards = ({ awardData }) => {
  const [loading, setLoading] = useState(!awardData);
  useEffect(() => {
    setLoading(!awardData); // Set loading to false if awardData is not empty
  }, [awardData]); // Update loading whenever awardData changes

  const weareon = {
    loop: false,
    autoplay: true,
    autoplaySpeed: 2000,
    margin: 10,
    dots: false,
    nav: true,
    responsiveClass: true,
    infinite: true,
    speed: 100,

    navText: [
      "<i class='fas fa-chevron-left' aria-label='Previous slide'></i>",
      "<i class='fas fa-chevron-right'  aria-label='Next slide'></i>",
    ],

    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
        loop: true,
      },
    },
  };

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false); // Once data is fetched, set loading to false
    };
    fetchData();
  }, []);
  return (
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
              <span>Reviews</span>
              <h2>{awardData.title}</h2>
            </div>
          </Col>
          <Col md={7} className="order-1 order-md-2 ">
            <Row>
              <OwlCarousel className="owl-theme" {...weareon}>
                {loading ? (
                  [...Array(4)].map((_, index) => (
                    <Skeleton
                      key={index}
                      variant="rectangular"
                      width={200}
                      height={200}
                    />
                  ))
                ) : (
                  <>
                    {awardData.certified_services.map((award, index) => (
                      <div className="item" key={index}>
                        <Link
                          href={award.linkurl}
                          aria-label="Learn More"
                        >
                          <div className="badge_box">
                            <img
                              src={award.url}
                              alt={award.alt || "Award"}
                              width="90px"
                              height="100%"
                              loading="lazy"
                            />
                            <p>{award.description}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </>
                )}
              </OwlCarousel>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Awards;
