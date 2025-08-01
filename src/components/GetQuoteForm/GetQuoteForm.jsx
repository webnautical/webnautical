
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Button, Col, Container, Offcanvas, ProgressBar, Row } from 'react-bootstrap';
//images imports
import sst1Img from '../../assets/online-course.gif';
import sst2Img from '../../assets/responsive-design.gif';
import sst3Img from '../../assets/responsive.gif';
import sst4Img from '../../assets/cyber-bullying.gif';
import sst5Img from '../../assets/monitor.gif';
import reqquoteimg from '../../assets/button-navigation-images/top.gif';
import success from '../../assets/success-icon.gif';
import config from '../../config';
import { useNavigate } from 'react-router-dom';

function GetQuoteForm({ show, onHide }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const [formData, setFormData] = useState({
    name: '',
    service_name: '',
    email: '',
    phone: '',
    budget: '',
    whatsapp_number: ''
  });
  const [serviceErr, setServiceErr] = useState(null);
  // const [emailErr, setEmailErr] = useState(null)
  //  const [errors, setErrors] = useState({})
  // console.log("formData", formData)
  // console.log(serviceErr, 'se')
  const nextStep = () => {
    if (!formData.service_name) {
      setServiceErr('Please Select A Service');
      return;
    } else {
      // setServiceErr("")
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleServiceChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, service_name: value });
    setServiceErr('');
  };

  const handleBudgetChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, budget: value === 'Not Sure' ? value : value.replace('undefined', '') });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log('Input changed:', name, value);
    setFormData({ ...formData, [name]: value });
    // if (!formData.email) {
    //   setEmailErr("Please enter a valid email")

    // }
  };

  const handleFormSubmit = async () => {
    setLoading(true);
    if (Object.keys(errors).length > 0) {
      setLoading(false);
      return;
    }

    try {
      // if (!formData.name || !formData.service_name || !formData.email || !formData.phone || !formData.whatsapp_number || !formData.budget) {
      //   return;
      // }
      const data = { ...formData };
      // console.log(data,'dccccc')
      let res = await fetch(`${config.url}/v1/quote_submission`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      let resJson = await res.json();
      console.log(resJson, 'response')
      if (resJson.status === 'success') {
        setLoading(false);

        //  navigate('/success');
        // window.location.reload();
        setFormData({
          name: '',
          service_name: '',
          email: '',
          phone: '',
          budget: '',
          whatsapp_number: ''
        });
        setIsSubmitted(true);
        setFormData({});
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };


  console.log(errors, 'errors');
  const progress = isSubmitted ? 100 : (step - 1) * 50; // Progress in percentage

  //console.log(formData, 'FORMMMMMMMMMMMMMM')
  const handleKeyDown = (event) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };
  useEffect(() => {
    if (isSubmitted) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isSubmitted]);

  useEffect(() => {
    if (timeLeft === 0) {
      window.location.reload();
    }
  }, [timeLeft]);
  return (
    <div className="get_quote_deign">
      <Offcanvas className="mainmobile_full" show={show} onHide={onHide}>
     
        <Offcanvas.Header className='p-1 main_g_form' closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <div className="top_images">
            <img src={reqquoteimg} alt="requoteimg" />
          </div>
  <div className=''>
  <Container fluid>
            <Row className='form_area'>
              <Col lg={4}>
                <div className="request_step">
                  <h2>Get a perfect quote</h2>
                  <p>
                    We’re eager to work with you. Please share your project goals and contact information. We respond to 97% of queries
                    within 1-2 business days. Really!
                  </p>
                </div>
              </Col>
              <Col lg={8}>
                <section className="steps">
                  <Container>
                    <Row>
                      <Col md={12} className="">
                        <div className="progress_outer">
                          <div className="progress_bar mt-3">
                            <p>PROGRESS</p>
                            <ProgressBar animated now={progress} />
                          </div>
                        </div>
                      </Col>
                      {/* {isSubmitted ? (
                        <Col md={12}>
                          <Alert variant="success" className="mt-4">
                            Form submitted successfully! Thank you.
                          </Alert>
                        </Col> */}
                      {isSubmitted ? (
                        <div className="success-message">
                          <img src={success} alt="success" />
                          <p style={{ color: 'green' }}>Your request has been sent successfully!</p>
                          <p style={{ color: 'green' }}>This page will automatically refresh in {timeLeft} seconds.</p>
                        </div>
                      ) : (
                        <>
                          {step === 1 && (
                            <form action="" onSubmit={handleSubmit(handleFormSubmit)} className="step-form">

                              <Col sm={12}>
                                <div>1/1</div>

                                <h3>Select the services you are looking for</h3>
                                <div className="radio-box">
                                  <div className="radios-ele flex-item service">
                                    <input
                                      type="radio"
                                      name="service_name"
                                      id="Website Desing undefined"
                                      value="Website Desing undefined"
                                      onClick={handleServiceChange}
                                      {...register('service_name', { required: true })}
                                    />
                                    <label htmlFor="Website Desing undefined">
                                      <div className="icons_boc_inner">
                                        {' '}
                                        <img src={sst1Img} alt="Website Desing" />
                                      </div>
                                      <br />
                                      <span>Website Desing</span>
                                      <br />
                                    </label>
                                  </div>
                                  <div className="radios-ele flex-item service">
                                    <input
                                      type="radio"
                                      name="service_name"
                                      id="WebsiteRedesing"
                                      value="WebsiteRedesing"
                                      onClick={handleServiceChange}
                                      {...register('service_name', { required: true })}
                                    />
                                    <label htmlFor="WebsiteRedesing">
                                      <div className="icons_boc_inner">
                                        {' '}
                                        <img src={sst2Img} alt="Website" />
                                      </div>
                                      <br />
                                      <span>Website</span>
                                      <br />
                                      <span>Redesing</span>
                                    </label>
                                  </div>
                                  <div className="radios-ele flex-item service">
                                    <input
                                      type="radio"
                                      name="service_name"
                                      id="MobileApplication"
                                      value="MobileApplication"
                                      onClick={handleServiceChange}
                                      {...register('service_name', { required: true })}
                                    />
                                    <label htmlFor="MobileApplication">
                                      <div className="icons_boc_inner">
                                        {' '}
                                        <img src={sst3Img} alt="Mobile" />
                                      </div>
                                      <br />
                                      <span>Mobile</span>
                                      <br />
                                      <span>Application</span>
                                    </label>
                                  </div>
                                  <div className="radios-ele flex-item service">
                                    <input
                                      type="radio"
                                      name="service_name"
                                      id="Seo/ DegitalMarketing"
                                      value="Seo/ DegitalMarketing"
                                      onClick={handleServiceChange}
                                      {...register('service_name', { required: true })}
                                    />
                                    <label htmlFor="Seo/ DegitalMarketing">
                                      <div className="icons_boc_inner">
                                        {' '}
                                        <img src={sst4Img} alt="Seo/ Degital" />
                                      </div>
                                      <br />
                                      <span>Seo/ Degital</span>
                                      <br />
                                      <span>Marketing</span>
                                    </label>
                                  </div>
                                  <div className="radios-ele flex-item service">
                                    <input
                                      type="radio"
                                      name="service_name"
                                      id="Custom WebDevelopment"
                                      value="Custom WebDevelopment"
                                      onClick={handleServiceChange}
                                      {...register('service_name', { required: true })}
                                    />
                                    <label htmlFor="Custom WebDevelopment">
                                      <div className="icons_boc_inner">
                                        {' '}
                                        <img src={sst5Img} alt="Custom Web" />
                                      </div>
                                      <br />
                                      <span>Custom Web</span>
                                      <br />
                                      <span>Development</span>
                                    </label>
                                  </div>

                                  {/* {formData.service_name ? setServiceErr("select service") : setServiceErr("")}
                                  {serviceErr && <p className="mt-4 text-danger">{serviceErr}</p>} */}

                                </div>

                                {serviceErr && <p className="mt-4 text-danger stop_warning"><i className="fa-solid fa-triangle-exclamation me-3"></i>{serviceErr}</p>}

                              </Col>

                              <Col className="mt-4">
                                <div className="globe_btn btm_bar btn-component pt-2 text-end">
                                  <button className='primery-btn' type="submit " onClick={nextStep}  ><span>Next</span></button>
                                </div>
                              </Col>
                            </form>
                          )}
                          {step === 2 && (
                            <form action="" onSubmit={handleSubmit(handleFormSubmit)} className="step-form">
                              <Col sm={12}>
                                <div>1/2</div>
                                <h3>Choose Your Budget Range & Tell Us About You</h3>
                                <div className="radio-box budget_box mb-2">
                                  <div className="radios-ele flex-item budget">
                                    <input
                                      type="radio"
                                      name="budget"
                                      id="$1000"
                                      value="$1000"
                                      onClick={handleBudgetChange}
                                      {...register('budget', { required: true })}
                                    />
                                    <label htmlFor="$1000">
                                      <div className="icons_boc_inner"> </div>
                                      <span>$1000</span>
                                      <br />
                                    </label>
                                  </div>
                                  <div className="radios-ele flex-item budget">
                                    <input
                                      type="radio"
                                      name="budget"
                                      id="$1001-3000undefined"
                                      value="$1001-3000undefined"
                                      onClick={handleBudgetChange}
                                      {...register('budget', { required: true })}
                                    />
                                    <label htmlFor="$1001-3000undefined">
                                      <div className="icons_boc_inner"> </div>
                                      <span>$1001-3000</span>
                                      <br />
                                    </label>
                                  </div>
                                  <div className="radios-ele flex-item budget">
                                    <input
                                      type="radio"
                                      name="budget"
                                      id="$3001-5000undefined"
                                      value="$3001-5000undefined"
                                      onClick={handleBudgetChange}
                                      {...register('budget', { required: true })}
                                    />
                                    <label htmlFor="$3001-5000undefined">
                                      <div className="icons_boc_inner"> </div>
                                      <span>$3001-5000</span>
                                      <br />
                                    </label>
                                  </div>
                                  <div className="radios-ele flex-item budget">
                                    <input
                                      type="radio"
                                      name="budget"
                                      id="$5001-10000undefined"
                                      value="$5001-10000undefined"
                                      onClick={handleBudgetChange}
                                      {...register('budget', { required: true })}
                                    />
                                    <label htmlFor="$5001-10000undefined">
                                      <div className="icons_boc_inner"> </div>
                                      <span>$5001-10000</span>
                                      <br />
                                    </label>
                                  </div>
                                  <div className="radios-ele flex-item budget">
                                    <input
                                      type="radio"
                                      name="budget"
                                      id="Not Sureundefined"
                                      value="Not Sureundefined"
                                      onClick={handleBudgetChange}
                                      {...register('budget', { required: true })}
                                    />
                                    <label htmlFor="Not Sureundefined">
                                      <div className="icons_boc_inner"> </div>
                                      <span>Not Sure</span>
                                      <br />
                                    </label>
                                  </div>
                                </div>
                                {errors.budget && <p className="mt-4 text-danger stop_warning"><i className="fa-solid fa-triangle-exclamation me-3"></i> Please Select budget</p>}

                               <div className='form_fields'>
                               <div className="row">
                                  <div className="sec_step_heading">
                                    {' '}
                                    <h2 className="mt-4">Tell us About You</h2>
                                  </div>
                                  <div className="form-element col-lg-6 col-md-6 col-sm-12">
                                    <input
                                      className="contact-input"
                                      id="name"
                                      type="text"
                                      placeholder="Name"
                                      name="name"
                                      {...register('name', { required: true })}
                                      onChange={handleInputChange}
                                    />
                                    <label className="element-lable" htmlFor="first-name">
                                      Name
                                    </label>

                                    {(formData.name === '' && errors.name) && <p className="text-danger stop_warning"><i className="fa-solid fa-triangle-exclamation me-3"></i>Name is required</p>}
                                  </div>
                                  <div className="form-element col-lg-6 col-md-6 col-sm-12">
                                    <input
                                      className="contact-input"
                                      id="email"
                                      type="email"
                                      placeholder="Email"
                                      name="email"
                                      {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                          message: 'Invalid email address'
                                        }
                                      })}
                                      onChange={handleInputChange}
                                    />
                                    <label className="element-lable" htmlFor="email">
                                      Email
                                    </label>

                                    {/* {errors.email && (
                                      <p className="text-danger">
                                        {errors.email.type === 'required'
                                          ? errors.email.message // Display the required error message if present
                                          : errors.email.type === 'pattern'
                                            ? errors.email.message // Display the pattern error message if present
                                            : ''}
                                      </p>

                                    )} */}

                                    {(errors.email && !formData.email) && (
                                      <p className="text-danger stop_warning ">
                                        <i className="fa-solid fa-triangle-exclamation me-3"></i>
                                        {errors.email.type === 'required'
                                          ? errors.email.message
                                          : errors.email.type === 'pattern'
                                            ? errors.email.message
                                            : ''}
                                      </p>
                                    )}
                                    {(formData.email && !formData.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) && (
                                      <p className="text-danger stop_warning">
                                        <i className="fa-solid fa-triangle-exclamation me-3"></i>   Invalid email address
                                      </p>
                                    )}
                                  </div>
                                  <div className="form-element col-lg-6 col-md-6 col-sm-12">
                                    <input
                                      className="contact-input"
                                      name="phone"
                                      type="tel"
                                      id="phone"
                                      maxLength={10}
                                      onKeyDown={handleKeyDown}
                                      placeholder=" Phone Number"
                                      {...register('phone', {
                                        required: 'Phone Number is required',
                                        pattern: {
                                          // value: '[7-9]{1}[0-9]{9}',
                                          value: /^\d{10}$/,
                                          message: 'Please enter a valid phone number'
                                        },

                                        minLength: 10,
                                        maxLength: 10
                                      })}
                                      onChange={handleInputChange}
                                    />
                                    <label className="element-lable" htmlFor="phone-no">
                                      Phone No.
                                    </label>
                                    {/* {serviceErr && <p className="mt-4 text-danger stop_warning"><i className="fa-solid fa-triangle-exclamation me-3"></i>{serviceErr}</p>} */}
                                    {(errors.phone && !formData.phone) && (
                                      <p className="text-danger phone-error stop_warning"><i className="fa-solid fa-triangle-exclamation me-3"></i>
                                        {errors.phone.type === 'required' ? errors.phone.message : 'Please enter a valid Phone Number'}
                                      </p>
                                    )}
                                    {(formData.phone && !formData.phone.match(/^\d{10}$/)) && (
                                      <p className="text-danger phone-error stop_warning"><i className="fa-solid fa-triangle-exclamation me-3"></i>
                                        Please enter a valid Phone Number
                                      </p>
                                    )}
                                  </div>
                                  <div className="form-element col-lg-6 col-md-6 col-sm-12">
                                    <input
                                      className="contact-input"
                                      id="whatsapp_number"
                                      type="text"
                                      placeholder=" Skype ID/ Whatsapp No."
                                      {...register('whatsapp_number', { required: true })}
                                      onChange={handleInputChange}
                                    />
                                    <label className="element-lable" htmlFor="skype-id">
                                      Skype ID/ Whatsapp No.
                                    </label>

                                    {(formData.whatsapp_number === '' && errors.whatsapp_number) && <p className="text-danger stop_warning"><i className="fa-solid fa-triangle-exclamation me-3"></i>This field is required</p>}
                                  </div>
                                </div>
                               </div>
                              </Col>

                              <Col className="p-0">
                                <div className="globe_btn btm_bar btn-component pt-2 text-end">
                                  <div>
                                    {' '}
                                    <button className='primery-btn' type="button" onClick={prevStep} ><span>Previous</span></button>
                                  </div>
                                  {loading ? (

                                    <div className="spinner-border text-primary mx-2" role="status">
                                      <span className="sr-only"></span>
                                    </div>

                                  ) : (
                                    <div className="mx-2">
                                      <button className="primery-btn" value="Submit" ><span>submit</span></button>
                                    </div>
                                  )}
                                </div>
                              </Col>
                            </form>
                          )}
                        </>
                      )}
                    </Row>
                  </Container>
                </section>
              </Col>
            </Row>
          </Container>
  </div>
        </Offcanvas.Body>



      </Offcanvas>

      


    </div>
  );
}

export default GetQuoteForm;
