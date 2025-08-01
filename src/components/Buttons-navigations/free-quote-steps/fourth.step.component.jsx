import React from 'react'
import { useContext } from 'react'
import { quoteContext } from '../../../contexts/QuoteContext'
import { Row,Col } from 'react-bootstrap'
function FourthStep() {
  const {register,errors} = useContext(quoteContext);
  return (
    <Row>
          <Col className="form-element" md={12} lg={12}>
          <input
            className="contact-input"
            type="text"
            id="message"
            placeholder="e.g. Your Project Requirements"
            {...register("requirements", { required: true })}
          />
          <label className="element-lable" htmlFor="message">
          Your Project Requirements
          </label>
          {errors.requirements&& (<p  className="pt-1 text-danger">The project requirement field is required.</p> )}
        </Col>
    </Row>
  )
}

export default FourthStep