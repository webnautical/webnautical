
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Button from '../Buttons/Button';
function BasicAppBanner({ content }) {
  const { background_image, subtitle, title } = content;
  return (
    <section
      className="full zoom banner app-solution-banner"
      style={{
        backgroundImage: background_image ? `url(${background_image?.url})` : null,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <Container className="animated fadeInUp">
        <Row className="banner-row align-items-center">
          <Col lg={6} className="col-md-6">
            {subtitle && <p className="liner_class">{subtitle}</p>}
            {title && <h1>{title}</h1>}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
 
export default BasicAppBanner;
 