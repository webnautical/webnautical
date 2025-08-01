import React from "react";
import { Link } from "react-router-dom";
import BasicAppBanner from "../solutions/BasicAppBanner";
import { Container, Col, Row } from "react-bootstrap";
const Sitemap = () => {
  const background_image_url = "path/to/your/image.jpg"; // Replace with your static image path
  const subtitle = "Sitemap";
  const title = "Explore Our Site's Key Pages and Navigate with Ease";

  return (
    <>
      <section
        className="full zoom banner app-solution-banner"
        style={{
          backgroundImage: `url(${background_image_url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Container className="animated fadeInUp">
          <Row className="banner-row align-items-center">
            <Col lg={6} className="col-md-6">
              <p className="liner_class">{subtitle}</p>
              <h1>{title}</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="margindiv-header">
        <section className="staticpage sitemapaddpage">
          <div className="container">
            <h2 className="mb-3">Pages</h2>
            <ul className="ms-4">
              <li>
                <a href="https://webnautical.com/">Home</a>
              </li>
              <li>
                <a href="https://www.webnautical.com/company-profile">
                  Company Profile
                </a>
              </li>
              <li>
                <a href="https://www.webnautical.com/blog">Blog</a>
              </li>
              <li>
                <a href="https://webnautical.com/blogdetail/why-flutter-is-good-for-mobile-app">
                  Why Flutter is Good for Mobile App
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/blogdetail/gpt-model">
                  GPT Model
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/service-main/mobile-app-development">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/service-main/web-development">
                  Web Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/service-main/hybrid-app-development">
                  Hybrid App Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/service-main/business-consultation">
                  Latest Technology
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/services/android-app-development">
                  Android App Development
                </a>
              </li>
              <li>
                <a href="https://www.webnautical.com/services/ipad-app-development">
                  iPad App Development
                </a>
              </li>
              <li>
                <a href="https://www.webnautical.com/services/mobile-app-design">
                  Mobile App Design
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/services/ios-apps-development">
                  iOS Apps Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/services/cms">CMS</a>
              </li>
              <li>
                <a href="https://webnautical.com/services/mean-and-mern-development">
                  MEAN and MERN Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/services/angular-js-development">
                  Angular JS Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/services/laravel-web-development">
                  Laravel Web Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/services/codeigniter-development">
                  CodeIgniter Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/services/php-development">
                  PHP Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/services/flutter-app-development">
                  Flutter App Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/services/ionic-app-development">
                  Ionic App Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/services/phonegap-app-development">
                  PhoneGap App Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/services/beacon-app-development">
                  Beacon App Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/services/iot-app-development">
                  IoT App Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/services/wearable-app-development">
                  Wearable App Development
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/services/aso">ASO</a>
              </li>
              <li>
                <a href="https://webnautical.com/services/smo">SMO</a>
              </li>
              <li>
                <a href="https://webnautical.com/services/seo">SEO</a>
              </li>
              <li>
                <a href="https://webnautical.com/services/paid-marketing">
                  Paid Marketing
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/expertise/learning-and-education">
                  Learning and Education
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/expertise/healthcare-solutions">
                  Healthcare Solutions
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/expertise/finance-industry">
                  Finance Industry
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/expertise/baking-industry">
                  Banking Industry
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/expertise/directory-app-solutions">
                  Directory App Solutions
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/expertise/transportation-and-logistics">
                  Transportation and Logistics
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/hire-developer/node-js">
                  Hire Node JS Developer
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/hire-developer/magento">
                  Hire Magento Developer
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/hire-developer/react-js">
                  Hire React JS Developer
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/hire-developer/android-developer">
                  Hire Android Developer
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/hire-developer/laravel-2">
                  Hire Laravel Developer
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/work">Our Work</a>
              </li>
              <li>
                <a href="https://webnautical.com/contact">Contact Us</a>
              </li>
              <li>
                <a href="https://webnautical.com/digital-marketing">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/infrastructure">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/life-web-nautical">
                  Life at Web Nautical
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/hire-developers">
                  Hire Developers
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/partnership">Partnership</a>
              </li>
              <li>
                <a href="https://webnautical.com/web-hosting">Web Hosting</a>
              </li>
              <li>
                <a href="https://webnautical.com/career">Career</a>
              </li>
              <li>
                <a href="https://webnautical.com/term-of-service">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/refund-policy">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="https://webnautical.com/support">Support</a>
              </li>
              <li>
                <a href="https://webnautical.com/sitemap">Sitemap</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sitemap;
