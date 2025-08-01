import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { OwlCarouselProps } from "react-owl-carousel";
import OwlCarousel from "react-owl-carousel";
// import img1 from "../../../assets/portfolio-images/sort2.png";
// import img2 from "../../../assets/portfolio-images/sort3.png";
// import img3 from "../../../assets/portfolio-images/sort4.png";

// const img = {
//     img1:'',
//     img2:'',
//     img3:'',
// }
function PortfolioOwlCrousel({caseStudy }) {

  const options = {
    loop: true,
    // center: true,
    margin: 10,
    items: 2,
    autoplay: false,
    autoplayTimeout: 4000,
    smartSpeed: 450,
    dots: true,
    nav: false,

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
        items: 1,
        nav: false,
        loop: false,
      },
    },
  };

  return (

    <section className="port-carousel pb-4">
        {caseStudy&&caseStudy.gallery&& (
      <Container>
     

     <Row className="justify-content-center">
      <Col md={12}>
      <h2>Interfaces</h2>
      <OwlCarousel className="owl-theme" {...options}>
        {caseStudy.gallery.map(item=>(
                
             
          <div className="owl-stage-outer">
            <div className="item">
              <div className="slider-main-box">
                
              <img src={item.url} alt={item.alt}/>
              </div>
            </div>
          </div>

        
))}
        </OwlCarousel>
      </Col>
     </Row>
      </Container>
        )}
    </section>
  );
}

export default PortfolioOwlCrousel;
