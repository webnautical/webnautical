import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { quoteContext } from '../../../contexts/QuoteContext';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../Header';

function ThirdStep({ thirdstepformData, updateFormData }) {
  // const { register, errors } = useContext(quoteContext);
  const [aboutData, setAboutData] = useState({ name: '', email: '', phone: '', whatsapp_number: '' });
  console.log(aboutData, 'finddddddddd');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formErrors, setFormErrors] = useState({}); // State to hold form errors
  // Update form errors when aboutData changes

  // useEffect(() => {
  //   const updatedErrors = { ...formErrors };
  //   for (const key in aboutData) {
  //     if (!aboutData[key].trim()) {
  //       updatedErrors[key] = { type: 'required', message: `${key.charAt(0).toUpperCase() + key.slice(1)} is required.` };
  //     } else {
  //       delete updatedErrors[key];
  //     }
  //   }
  //   setFormErrors(updatedErrors);
  // }, [aboutData]);
  useEffect(() => {
    const updatedErrors = { ...formErrors };
    for (const key in aboutData) {
      if (!aboutData[key].trim()) {
        switch (key) {
          case 'name':
            updatedErrors[key] = { type: 'required', message: 'Please provide your full name.' };
            break;
          case 'phone':
            updatedErrors[key] = { type: 'required', message: 'Please provide a valid phone number.' };
            break;
          case 'whatsapp_number':
            updatedErrors[key] = { type: 'required', message: 'Please provide your WhatsApp number or Skype ID.' };
            break;
          default:
            updatedErrors[key] = { type: 'required', message: `${key.charAt(0).toUpperCase() + key.slice(1)} is required.` };
        }
      } else {
        if (key === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(aboutData[key])) {
          updatedErrors[key] = { type: 'pattern', message: 'Invalid email address' };
        } else {
          delete updatedErrors[key];
        }
      }
    }
    setFormErrors(updatedErrors);
  }, [aboutData]);

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0) {
  //     updateFormData(aboutData);
  //   }
  // }, [aboutData, errors, updateFormData]);
  useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      updateFormData(aboutData);
    }
  }, [aboutData, formErrors, updateFormData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('Input changed:', name, value);
    setAboutData({ ...aboutData, [name]: value });
    updateFormData({ ...aboutData, [name]: value }); // Ensure this line is calling updateFormData correctly
  };
  <Header thirdstepformData={thirdstepformData} />
  // Log errors
  // console.log('Errors:', errors);
  console.log('Form Errors:', formErrors);
  return (
    <>
     
      <Row>
        <div className="sec_step_heading">
          {' '}
          <h2 className="mt-4">Tell us About You</h2>
        </div>
        <Col className="form-element" md={6} sm={12} lg={6}>
          <input
            className="contact-input"
            id="name"
            type="text"
            placeholder="e.g. Ravi Sharma"
            name="name"
            // {...register('name', { required: 'The Name field is required.' })}
            onChange={handleInputChange}
          />
          <label className="element-lable" htmlFor="first-name">
            Full Name
          </label>
          {/* {errors.name && (
            <p className="text-danger mt-1">
              {errors.name.type === 'required' && errors.name.message !== '' ? 'The Name field is required.' : ''}
            </p>
          )} */}
          {formErrors.name && <p className="text-danger mt-1">{formErrors.name.message}</p>}
        </Col>

        <Col className="form-element" md={6} sm={12} lg={6}>
          <input
            className="contact-input"
            id="email"
            type="email"
            placeholder="e.g. ravi@gamil.com"
            name="email"
            // {...register('email', {
            //   required: 'Email is required',
            //   pattern: {
            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //     message: 'Invalid email address'
            //   }
            // })}
            onChange={handleInputChange}
          />

          <label className="element-lable" htmlFor="email">
            Email
          </label>

          {formErrors.email && (
            <p className="text-danger  mt-1">{formErrors.email.type === 'required' ? formErrors.email.message : 'Invalid email address'}</p>
          )}
        </Col>

        <Col className="form-element" md={6} sm={12} lg={6}>
          <input
            className="contact-input"
            name="phone"
            type="tel"
            id="phone"
            maxLength={10}
            placeholder="e.g. 1234567890"
            // {...register('phone', {
            //   required: true,
            //   minLength: 10,
            //   maxLength: 10
            // })}
            onChange={handleInputChange}
          />
          <label className="element-lable" htmlFor="phone-no">
            Phone Number
          </label>
          {formErrors.phone && <p className="text-danger  mt-1">Please enter a valid Phone Number</p>}
        </Col>
        <Col className="form-element" md={6} sm={12} lg={6}>
          <input
            className="contact-input"
            id="whatsapp_number"
            type="text"
            placeholder="e.g. webnautical"
            name="whatsapp_number"
            // {...register('whatsapp_number', { required: true })}
            onChange={handleInputChange}
          />

          <label className="element-lable" htmlFor="skype-id">
            Skype ID/ Whatsapp No.
          </label>
          {formErrors.whatsapp_number && <p className="text-danger mt-1">This field is required.</p>}
        </Col>
      </Row>
    </>
  );
}

export default ThirdStep;
