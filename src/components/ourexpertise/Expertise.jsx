import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import circleimg from "../../assets/circle.png";
import reacticon from "../../assets/react.svg";
// import node from "../../assets/node.png";
import node from "../../assets/node.webp";

import Wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import laravel from "../../assets/laravel.svg";
import flutter from "../../assets/fluuterpng.png";
import njs from "../../assets/js.png";
import android from "../../assets/android.png";
import ios from "../../assets/app-store.png";

import Codeinger from "../../assets/blackfire-inverted-1.svg";
import { Link } from "react-router-dom";

const Expertise = ({ technology }) => {
  // console.log('technology_section',technology )
  return (
    <div className="expertise">
      <Container>
        <Row className="align-items-center">
          <Col md={5}>
            <div className="global_heading text-start">
              <div className="icon">
                <img src={circleimg} alt="circleimg" />
              </div>
              <span>Technology</span>
              <h2>{technology.title} </h2>
            </div>
          </Col>
          <Col md={7}>
            <div dangerouslySetInnerHTML={{ __html: technology.description }} />
          </Col>
        </Row>

        <Row className="mt-5 row-cols-2 row-cols-sm-2 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 g-3 pt-1 ">
          <Col
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >
            <Link to={"services/android-app-development"}>
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
            <Link to={"services/codeigniter-development"}>
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
            <Link to={"services/ios-apps-development"}>
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
            <Link to={"services/node-js-development"}>
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
            <Link to={"services/wordpress-development"}>
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
            <Link to={"services/shopify-development"}>
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
            <Link to={"services/laravel-web-development"}>
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
            <Link to={"services/flutter-app-development"}>
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
            <Link to={"services/javascript-development"}>
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
            <Link to={"services/react-js-development"}>
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
  );
};

export default Expertise;
