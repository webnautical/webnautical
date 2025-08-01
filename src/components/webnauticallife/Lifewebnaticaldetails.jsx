import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Image } from "antd";
const Lifewebnaticaldetails = () => {
  return (
    <div className="life_webnautial">
      <div className="space_overlay"></div>
      <section className="life_webnautial_inner">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <div className="top-heading">
                <h2>Diwali</h2>
                <p>
                  another home for Codianters. Showcasing diverse experiences
                  that represent a mix of talents, who shine inclusively in
                  different colors.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="all_images">
        <Container>
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            <Row>
              <Col md={3}  className="mb-3">
                <Image className="w-100"
                 
                  src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                />
              </Col>

              <Col md={3} className="mb-3">
                <Image
                 
                  src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                />
              </Col>
            </Row>
          </Image.PreviewGroup>
        </Container>
      </section>
    </div>
  );
};

export default Lifewebnaticaldetails;
