
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import config from '../../config';
import success from '../../assets/success-icon.gif';

import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function ContactForm({ onSubmit }) {
  const [recaptchaValue, setRecaptchaValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const handleFormSubmit = (data) => {
    setLoading(true);
    if (!recaptchaValue) {
      // console.log('Please complete the reCAPTCHA verification.');
      setErrorMessage('Please complete the reCAPTCHA verification.');
      return;
    }
    setErrorMessage('');
    setMessageSent(true);


    // Include reCAPTCHA value in your form data
    // data.recaptcha = recaptchaValue;
    // console.log(data, 'formdata');
    fetch(`${config.url}/v1/contact_submission`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        console.log(response, 'contact');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        console.log('Success:', responseData);
        if (responseData.status === 'success') {
          setLoading(false);
          setMessageSent(true);
          reset();
          //responseData.data = data;
          // navigate('/success');
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setErrorMessage('');
  };
  console.log(handleFormSubmit)
  useEffect(() => {
    if (messageSent) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [messageSent]);

  useEffect(() => {
    if (timeLeft === 0) {
      window.location.reload();
    }
  }, [timeLeft]);
  const handleKeyDown = (event) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Row>
        <Col className="form-element" md={6} sm={12} lg={6}>
          <input
            className="contact-input"
            id="first-name"
            type="text"
            placeholder=" First Name"
            {...register('first_name', { required: true })}
          />
          <label className="element-lable" htmlFor="first-name">
            First Name
          </label>
          {errors.first_name && <p className="text-danger mt-1 stop_warning"><i className="fa-solid fa-triangle-exclamation me-3"></i>First Name is required</p>}
        </Col>

        <Col className="form-element" md={6} sm={12} lg={6}>
          <input
            className="contact-input"
            id="last-name"
            type="text"
            placeholder="Last Name"
            {...register('last_name', { required: true })}
          />
          <label className="element-lable" htmlFor="last-name">
            Last Name
          </label>
          {errors.last_name && <p className="text-danger mt-1 stop_warning"><i className="fa-solid fa-triangle-exclamation me-3"></i> Last Name is required</p>}
        </Col>

        <Col className="form-element" md={6} sm={12} lg={6}>
          <input
            className="contact-input"
            id="email"
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          <label className="element-lable" htmlFor="email">
            Email
          </label>

          {errors.email && (
            <p className="text-danger mt-1 stop_warning"><i className="fa-solid fa-triangle-exclamation me-3"></i>{errors.email.type === 'required' ? errors.email.message : 'Invalid email address'}</p>
          )}

          {/* <p className="text-danger">Please enter a valid Email</p>} */}
        </Col>

        <Col className="form-element" md={6} sm={12} lg={6}>
          <input
            className="contact-input"
            type="tel"
            id="phone-no"
            maxLength={10}
            placeholder="Phone Number"
            onKeyDown={handleKeyDown}
            {...register('phone_number', {
              required: true,
              minLength: 10,
              maxLength: 10
             
            })}
          />
          <label className="element-lable" htmlFor="phone-no">
            Phone Number
          </label>
          {errors.phone_number && <p className="text-danger mt-1 stop_warning"><i className="fa-solid fa-triangle-exclamation me-3"></i>Please enter a valid Phone Number</p>}
        </Col>

        <Col className="form-element" md={12} lg={12}>
          <input
            className="contact-input"
            type="text"
            id="message"
            placeholder="Your requirement"
            {...register('message', { required: true })}
          />
          <label className="element-lable" htmlFor="message">
            Message
          </label>
          {errors.message && <p className="text-danger mt-1 stop_warning"><i className="fa-solid fa-triangle-exclamation me-3"></i>This field is required</p>}
        </Col>
        <Col className='mb-4'>
          <ReCAPTCHA
            sitekey="6Le2g34qAAAAAIbYKKkos6c5vOwuoJm2u2mVdVXO" // Replace with your reCAPTCHA site key
            onChange={handleRecaptchaChange} // Callback function to handle reCAPTCHA response change
          // local -6Ld1cYopAAAAALz90-JWbtFchlVmkqxmChJUiVIi
          // live-6Le5t4wpAAAAAKFUMXpVNmqDSxMnrHLahueb10kM
          />


          {errorMessage && (
            <p className="text-danger">{errorMessage}</p>
          )}

        </Col>

        <Col>
          {loading ? (

            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>

          ) : (
            <div className="text-end globe_btn">
              <button
                className='primery-btn'
                type="submit"
                onSubmit={handleFormSubmit}
              >
                <span>  Send Message  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg> </span>
              </button>
              {/* <Button type="submit">Send Message</Button> */}
            </div>
          )}
        </Col>
      </Row>
      {messageSent && (
        <div className="success-message">
          <img src={success} alt="success" />
          <p style={{ color: 'green' }}>Your request has been sent successfully!</p>

          <p style={{ color: 'green' }}>This page will automatically refresh in {timeLeft}  seconds.</p>
        </div>
      )}
    </form>

  );
}

export default ContactForm;
