import React from 'react';
import Button from '../Buttons/Button';

//bootstrap imports
import { Container,Row,Col } from 'react-bootstrap';

function Discuss() {
  return (
    <section className="discuss-section">
        <Container className="animated fadeInUp">
              <Row >
                <Col lg={10} className="align-self-center">
                  <div className='discuss-details-container'>
                  <h2 >Let's turn your business idea into reality</h2>
                  <p>Do you want to experience the best-in-class quality mobile apps? Send us your inquiry and one of our executives will catch you up in no time by Call, Email or Skype.</p>
                  <div className="call-btn-container" >
                  <Button>
                        Make A Call
                    </Button>
                  </div>
                  </div>
                </Col>  
              </Row>
            </Container>
      </section>
  )
}

export default Discuss