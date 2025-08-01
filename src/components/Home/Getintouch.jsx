import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from "react-router-dom";
const Getintouch = () => {

  const navigate = useNavigate();
  const { slug } = useParams();

  return (
    <div className='get_in_touch'>
      <Container>
     <div className='innner_get_in_touch'>
     <Row className='align-items-center'>
            <Col md={8}>
               <div className='inner_get_in_touch'>
               <p>Ready to start your dream project?</p>
                <h2>We have a TEAM to get you there.</h2>
               </div>
            </Col>
            <Col md={4} className='text-md-end text-center'>
              <div className='Get_btn'> 
              <div className="globe_btn">
                      <button
                        className="primery-btn"
                        onClick={() => navigate("/contact")}
                      >
                        <span>Contact Us <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></span>
                      </button>
                    </div>
              </div>
            </Col>
        </Row>
     </div>
      </Container>
    </div>
  )
}

export default Getintouch
