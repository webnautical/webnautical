import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
//boot-strap imports
import { Container,Row,Col } from 'react-bootstrap';

import SecondButton from '../Buttons/SecondButton';
//images imports 
import errorImg  from '../../assets/erorr.png'
function Error() {

  const navigate = useNavigate();
  const { slug } = useParams();
  return (
    <>
    <div>
    <div className="space_overlay"></div>
    <section id="contact-banner" className="error_page p-0 m-0 banner">
          
          <Container className="animated fadeInUp">
            <Row className='mb-1'>
              <Col md={12}>
                  <h1 className='text-black'>PAGE DOES NOT EXIST</h1>
  
              </Col>
              <Col md={12}>
            <div className='error_img'>    <img src={errorImg} alt="errorImg" /></div>
              </Col>
            </Row>
            <Row className=' text-center'>
              <Col className='error-box m-0'>
                  <h2>Oops! That page can’t be found</h2>
                  <p>You have come to the end of the road. The page you are looking for doesn't exist or isn't available right now.</p>
                  <div style={{width:'220px',margin:'auto'}}>
                  <div className="globe_btn">
                            <button
                              className="primery-btn"
                              onClick={() => navigate("/")}
                            >
                              <span>Back To Home <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></span>
                            </button>
                          </div>
                  </div>  
              </Col>
            </Row>
         
          </Container>
        </section>
  
 
    </div>

    </>
  )
}

export default Error