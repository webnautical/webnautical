import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import config from "../../config";
import success from "../../assets/success-icon.gif";
import { Modal } from "react-bootstrap";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import popimg from "../../assets/pop.webp";
import GetQuoteForm from "../GetQuoteForm/GetQuoteForm";
import ContactForm from "../../components/Contact/ContactForm";
import { Col, Row } from "react-bootstrap";
import Clients from "./Clients";
import thumbimage from "../../assets/thumb.png";
function Banner({ homePageData }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupShownOnce, setPopupShownOnce] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to track the visibility of the success message
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //     setPopupShownOnce(true);
  //   }, 1000); // 1 seconds

  //   return () => clearTimeout(timer);
  // }, []);
  useEffect(() => {
    const popupShownOnce = sessionStorage.getItem("popupShownOnce");
    if (!popupShownOnce) {
      setTimeout(() => {
        setShowPopup(true);
        setPopupShownOnce(true);
        sessionStorage.setItem("popupShownOnce", "true");
      }, 5000); // Show popup after 1 second
    }
  }, []);
  const handleFormSubmit = (formdata) => {
    setLoading(true);
    setErrorMessage("");
    setMessageSent(true);
    console.log(formdata, "formdata");
    fetch(`${config.url}/v1/hiring_developer_submission`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => {
        console.log(response, "DEVELOPERFOERMMMMM");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("Success:", responseData);
        if (responseData.status === "success") {
          setMessageSent(true);
          reset();
          setLoading(false);
          setShowSuccessMessage(true); // Show the success message
          // setTimeout(() => {
          //   setShowPopup(false); // Close the popup after 3 seconds
          //   setShowSuccessMessage(false); // Hide the success message after 3 seconds
          // }, 9000);
          // responseData.data = formdata;
          // navigate("/success");
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  const ClosePopUp = () => setShowPopup(false);

  const videoContainerStyle = {
    position: "relative",
    width: "100%",
    minHeight: "100vh", // Changed height to min-height
    overflow: "hidden",
  };

  const videoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "fixed",
    top: 0,
  };

  const textOverlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-80%, -50%)",
    color: "#fff",
  };
  // console.log(homePageData, 'banner-homePageData');

  //form state and function
  const [menuShow, setMenuShow] = useState(false);

  const openMenu = () => {
    setMenuShow(true);
  };

  const handleClose = () => {
    setMenuShow(false);
  };

  const handleKeyDown = (event) => {
    const allowedKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      " ",
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
    ];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };
  console.log(showPopup, "popup");
  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showSuccessMessage]);

  useEffect(() => {
    if (timeLeft === 0) {
      window.location.reload();
    }
  }, [timeLeft]);
  return (
    <>
      {showPopup && (
        <Modal
          className="pop_open "
          show={showPopup}
          onHide={ClosePopUp}
          centered
        >
          <Modal.Body className="p-0">
            <Row>
              <Col md={7}>
                <div className="pop_up_form ">
                  <h2>
                    Begin Your Digital Journey With Us
                  </h2>
                  <div>
                    {showSuccessMessage ? (
                      <div className="success-message">
                        <img src={success} alt="success"  loading="lazy" />
                        <p style={{ color: "green" }}>
                          Your request has been sent successfully!
                        </p>
                        <p style={{ color: "green" }}>
                          This page will automatically refresh in {timeLeft}{" "}
                          seconds.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <Row>
                          <Col md={12} className="mb-3">
                            <div className="main_outer_input">
                              <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                {...register("name", { required: true })}
                              />
                              {errors.name && (
                                <p className="text-danger mt-3 stop_warning">
                                  <i className="fa-solid fa-triangle-exclamation me-3"></i>
                                  First Name is required
                                </p>
                              )}
                            </div>
                          </Col>

                          <Col md={12} className="mb-3">
                            <div className="main_outer_input">
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                maxLength={10}
                                placeholder="Contact Number"
                                onKeyDown={handleKeyDown}
                                {...register("phone", {
                                  required: true,
                                  minLength: 10,
                                  maxLength: 10,
                                })}
                              />
                              {errors.phone && (
                                <p className="text-danger mt-3 stop_warning">
                                  <i className="fa-solid fa-triangle-exclamation me-3"></i>
                                  Phone Number is required
                                </p>
                              )}
                            </div>
                          </Col>

                          <Col md={12} className="mb-3">
                            <div className="main_outer_input">
                              <input
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                type="email"
                                {...register("email", {
                                  required: "Email is required",
                                  pattern: {
                                    value:
                                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                  },
                                })}
                              />
                              {errors.email && (
                                <p className="text-danger mt-3 stop_warning">
                                  <i className="fa-solid fa-triangle-exclamation me-3"></i>
                                  {errors.email.type === "required"
                                    ? errors.email.message
                                    : "Invalid email address"}
                                </p>
                              )}
                            </div>
                          </Col>

                          <Col md={12} className="mb-3">
                            <div className="main_outer_input">
                              <input
                                type="text"
                                id="website_link"
                                name="website_link"
                                placeholder="Website Name"
                                {...register("website_link", {
                                  required: true,
                                })}
                              />
                              {errors.website_link && (
                                <p className="text-danger mt-3 stop_warning">
                                  <i className="fa-solid fa-triangle-exclamation me-3"></i>{" "}
                                  This field is required
                                </p>
                              )}
                            </div>
                          </Col>

                          <Col md={12} className="mb-3">
                            <div className="main_outer_input">
                              <label
                                className="d-none"
                                htmlFor="looking_for"
                                aria-hidden="true"
                              >
                                Select Service*
                              </label>

                              <select
                                aria-label="Select Service"
                                id="looking_for"
                                {...register("looking_for", { required: true })}
                              >
                                <option value="">Select Service</option>
                                <option value="Branding Design">
                                  Branding Design
                                </option>
                                <option value="Web site Design">
                                  Web site Design
                                </option>
                                <option value="Web Site Development">
                                  Web Site Development
                                </option>
                                <option value="Mobile App Development">
                                  Mobile App Development
                                </option>
                                <option value="Digital Marketing">
                                  Digital Marketing
                                </option>
                                <option value="Custom Website Development">
                                  Custom Website Development
                                </option>
                              </select>

                              {errors.looking_for && (
                                <p className="text-danger mt-3 stop_warning">
                                  <i className="fa-solid fa-triangle-exclamation me-3"></i>{" "}
                                  Please select a service
                                </p>
                              )}
                            </div>
                          </Col>

                          <Col md={12} className="mb-3">
                            <div className="main_outer_input">
                              <textarea
                                id="message"
                                name="message"
                                rows="4"
                                cols="50"
                                placeholder="Type your message here..."
                                {...register("message", { required: true })}
                              ></textarea>
                              {errors.message && (
                                <p className="text-danger mt-3 stop_warning">
                                  <i className="fa-solid fa-triangle-exclamation me-3"></i>{" "}
                                  Message is required
                                </p>
                              )}
                            </div>
                          </Col>
                          <Col md={12} className="mb-3 text-end">
                            {loading ? (
                              <div
                                className="spinner-border text-primary"
                                role="status"
                              >
                                <span className="sr-only">Loading...</span>
                              </div>
                            ) : (
                              <div className="globe_btn">
                                <button className="primery-btn" type="submit">
                                  <span> Submit</span>
                                </button>
                              </div>
                            )}
                          </Col>
                        </Row>
                      </form>
                    )}
                  </div>
                </div>
              </Col>
              <Col md={5}>
                <div className="pop_up_img">
                  <img
                    src={popimg}
                    alt="pop-up-image"
                    width="100%"
                    height="100%"
                     loading="lazy"
                  />
                </div>
              </Col>
            </Row>

            <div className="close_btn_pop_up">
              <button
                className="me-3"
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  borderRadius: "20px", // Semi-circle shape
                  padding: "10px 20px",
                  cursor: "pointer",
                  outline: "none",
                }}
                variant="secondary"
                onClick={ClosePopUp}
                aria-label="Close popup"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}
      <GetQuoteForm show={menuShow} onHide={handleClose} />
      <div className="banner_main" style={videoContainerStyle}>
        {/* <img src={thumbimage} alt="Thumbnail" className="thumbnail_image" /> */}
        <video className="video_pp" autoPlay loop muted style={videoStyle}>
          <source
            src={homePageData.video.url}
            type="video/mp4"
            alt={homePageData.video.alt}
          />
          <track
            kind="captions"
            src={homePageData.video.captionsUrl} // Provide the path to your captions file
            srcLang="en" // Set the language of the captions
            label="English" // Optional: label for the captions
          />
          Your browser does not support the video tag.
        </video>

        <div className="video_overlay_style" style={textOverlayStyle}>
          <h1 className="" data-aos="fade-left" data-aos-duration="2000">
            {homePageData.title_1}{" "}
            <span className="border_line">{homePageData.title_2}</span>
            {homePageData.title_3}
          </h1>
          <p>{homePageData.short_description}</p>

          <div className="option_btn d-flex">
            <div className="globe_btn">
              <Link to="/work" aria-label="Explore our work masterpieces">
                <button className="primery-btn mobile_btn">
                  <span>
                    Explore Our Work Masterpieces
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      className="svg-inline--fa fa-arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </Link>

              <button
                className="d-none mobile_quote primery-btn"
                onClick={openMenu}
              >
                <span>
                  {" "}
                  Get Free Quote
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    className="svg-inline--fa fa-arrow-right "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            <Button className="contact_bb ">
              <Link to={homePageData.button_2_url}>Let’s Build Your Brand</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="slide_bt">
        <Clients homePageData={homePageData} />
      </div>
    </>
  );
}

export default Banner;
