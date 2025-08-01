import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Clients = ({ clientLogo }) => {
  return (
    <div className="text_main">
      <Container fluid>
        <Row>
          <Col lg={2} className="p-0">
            <div className="top_badgde">We Put Our Clients First</div>
          </Col>

          <Col lg={10} className="p-0">
            <div className="slider_clients">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 2000, // Autoplay delay in ms
                }}
                slidesPerView={2.5} // Default for smaller screens
                spaceBetween={20} // Space between slides
                breakpoints={{
                  600: {
                    slidesPerView: 3,
                  },
                  1000: {
                    slidesPerView: 7,
                  },
                }}
                navigation={false} // Disable navigation arrows
                pagination={false} // Disable pagination dots
              >
                {clientLogo?.map((client, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={client.url}
                      alt={client.alt}
                      title={client.title}
                      width="100%"
                      height="100%"
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Clients;
