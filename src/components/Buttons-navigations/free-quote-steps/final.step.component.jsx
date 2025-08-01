import React from 'react'
import { useContext } from 'react';
import { quoteContext } from '../../../contexts/QuoteContext';
import { Row,Col } from 'react-bootstrap';
import fileImg from '../../../assets//contact-page-images/attact-file-icon.png'

function FinalStep() {
  

  return (
    <Row>
          <Col className="form-element" md={12} lg={12}>
          <span className="fillup">
            <p>upload your requirements</p>
            <label className="file-lable" htmlFor="file-input">
              <img src={fileImg} />
              Attach a File   
            </label>
            <input
              className="contact-input"
              id="file-input"
              type="file"
              placeholder="e.g. Your requirement"
              
            />
          </span>
        </Col>
    </Row>
  )
}

export default FinalStep