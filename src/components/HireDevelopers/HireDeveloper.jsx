import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import config from "../../config";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import circleimg from "../../assets/circle.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
import arrowimg from "../../assets/resource-looking.svg";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import archimg from "../../assets/arch.png";
import success from "../../assets/success-icon.gif";
import bigbg from "../../assets/bigbg.png";
import whyicon from "../../assets/icons-why.png";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
const HireDeveloper = () => {
  const { slug } = useParams();
  const [hireDeveloper, setHireDeveloper] = useState({});
  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = (formdata) => {
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
          //responseData.data = formdata;
          // navigate('/success');
        } else {
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    hireDeveloperRecord();
  }, [slug]);
  // console.log(hireDeveloper, 'develoepr');
  const helmetContext = {};
  const hireDeveloperRecord = async () => {
    try {
      const params = { page_slug: slug };
      const response = await fetch(`${config.url}/v1/get_hiring_dev_details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      // console.log('developerdata', data);

      if (data.status === "success") {
        setHireDeveloper(data.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      navigate("/*");
      console.error("Error:", error);
    }
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

  // useEffect(() => {
  //   if (messageSent) {
  //     const timeout = setTimeout(() => {
  //       window.location.reload();
  //     }, 5000);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [messageSent]);
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
  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{hireDeveloper.meta_title}</title>
          <meta name="description" content={hireDeveloper.meta_description} />
        </Helmet>
        {loading ? (
          <section
            className="technology_hire"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundColor: "ghostwhite",
              backgroundPosition: "center",
            }}
          >
            <Container>
              <Row className="align-items-center">

                <Col lg={6}>
                  <div className="tech_heading">
                    <Skeleton
                      variant="rectangular"
                      height={80}
                      style={{
                        borderRadius: "10px",
                        width: "500px",
                        marginLeft: "90px",
                      }}
                      className="mt-2"
                    />
                    <Skeleton
                      variant="rectangular"
                      height={80}
                      style={{
                        borderRadius: "10px",
                        width: "400px",
                        marginLeft: "90px",
                      }}
                      className="mt-2"
                    />
                    <Skeleton
                      variant="rectangular"
                      height={20}
                      style={{
                        borderRadius: "10px",
                        width: "550px",
                        marginLeft: "90px",
                      }}
                      className="mt-2"
                    />
                    <Skeleton
                      variant="rectangular"
                      height={20}
                      style={{
                        borderRadius: "10px",
                        width: "400px",
                        marginLeft: "90px",
                      }}
                      className="mt-2"
                    />
                  </div>
                </Col>



              </Row>
            </Container>
          </section>
        ) : (
          <>
            {hireDeveloper.banner_section ? (
              <section
                className="technology_hire"
                style={{
                  backgroundImage: `url(${hireDeveloper.banner_section?.background_icon?.url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundColor:
                    hireDeveloper.banner_section?.background_color,
                  backgroundPosition: "center",
                }}
              >
                <Container>
                  <Row className="align-items-center">
                    {hireDeveloper && hireDeveloper.banner_section && (
                      <Col lg={6}>
                        <div className="tech_heading">
                          <h2>{hireDeveloper.banner_section.title} </h2>
                          <p>{hireDeveloper.banner_section.content}</p>
                        </div>
                      </Col>
                    )}
                    {/* form starts */}
                    <Col lg={6}>
                      <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <div className="text_for_from mb-2">
                          <h4>Looking for Developer?</h4>
                          <img src={arrowimg} alt="arrowimg" />
                        </div>
                        <div className="form_hire_dev">
                          <Row>
                            <Col md={6} className="mb-5">
                              <div className="main_outer_input">
                                <label>Name*</label>

                                <input
                                  type="text"
                                  id="name"
                                  {...register("name", { required: true })}
                                />
                                {errors.name && (
                                  <p className="text-danger mt-2 stop_warning">
                                    <i className="fa-solid fa-triangle-exclamation me-3"></i>
                                    First Name is required
                                  </p>
                                )}
                              </div>
                            </Col>

                            <Col md={6} className="mb-5">
                              <div className="main_outer_input">
                                <label>Contact Number*</label>

                                <input
                                  type="tel"
                                  id="phone"
                                  maxLength={10}
                                  onKeyDown={handleKeyDown}
                                  // placeholder="e.g. 1234567890"
                                  {...register("phone", {
                                    required: true,
                                    minLength: 10,
                                    maxLength: 10,
                                  })}
                                />
                                {errors.phone && (
                                  <p className="text-danger mt-2 stop_warning">
                                    <i className="fa-solid fa-triangle-exclamation me-3"></i>{" "}
                                    Phone Number is required
                                  </p>
                                )}
                              </div>
                            </Col>

                            <Col md={6} className="mb-5">
                              <div className="main_outer_input">
                                <label>Email Address*</label>

                                <input
                                  type="email"
                                  {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid email address",
                                    },
                                  })}
                                />
                                {errors.email && (
                                  <p className="text-danger mt-2 stop_warning">
                                    <i className="fa-solid fa-triangle-exclamation me-3"></i>
                                    {errors.email.type === "required"
                                      ? errors.email.message
                                      : "Invalid email address"}
                                  </p>
                                )}
                              </div>
                            </Col>

                            <Col md={6} className="mb-5">
                              <div className="main_outer_input">
                                <label>Company Website*</label>

                                <input
                                  type="text"
                                  id="website_link"
                                  {...register("website_link", {
                                    required: true,
                                  })}
                                />
                                {errors.website_link && (
                                  <p className="text-danger mt-2 stop_warning">
                                    <i className="fa-solid fa-triangle-exclamation me-3"></i>{" "}
                                    This field is required
                                  </p>
                                )}
                              </div>
                            </Col>

                            <Col md={6} className="mb-5">
                              <div className="main_outer_input">
                              <label className="d-none"  htmlFor="looking_for" aria-hidden="true">Select Service*</label>
                                <select
                                 aria-label="Select Service"  
                                  id="looking_for"
                                  {...register("looking_for", {
                                    required: true,
                                  })}
                                >
                                 
                                  <option value="">Select Service</option>
                                  <option value="Branding Design">Branding Design</option>
                                  <option value="Web site Design ">Web site Design </option>
                                  <option value="Web Site Development">Web Site Development</option>
                                  <option value="Mobile App Development">Mobile App Development</option>
                                  <option value="Digital Marketing ">Digital Marketing </option>
                                  <option value="Custom Website Development">Custom Website Development</option>
                                </select>
                                {errors.looking_for && (
                                  <p className="text-danger mt-2 stop_warning">
                                    <i className="fa-solid fa-triangle-exclamation me-3"></i>{" "}
                                    Please select a service
                                  </p>
                                )}
                              </div>
                            </Col>

                            <Col md={6} className="mb-5">
                              <div className="main_outer_input">
                                <label>What’s your budget?*</label>
                                <input
                                  type="text"
                                  id="budget"
                                  {...register("budget", { required: true })}
                                />
                                {errors.budget && (
                                  <p className="text-danger mt-2 stop_warning">
                                    <i className="fa-solid fa-triangle-exclamation me-3"></i>{" "}
                                    Budget is required
                                  </p>
                                )}
                              </div>
                            </Col>
                            <Col md={12} className="mb-2">
                              <div className="main_outer_input">
                                <label>Message*</label>

                                <textarea
                                  id="message"
                                  {...register("message", { required: true })}
                                />
                                {errors.message && (
                                  <p className="text-danger mt-2 stop_warning">
                                    <i className="fa-solid fa-triangle-exclamation me-3"></i>{" "}
                                    Message is required
                                  </p>
                                )}
                              </div>
                            </Col>
                            <Col md={12} className="mb-2">
                              <div className="condition">
                                <div className="check">
                                  <label className="p">
                                    <input
                                      type="checkbox"
                                      id="consentCheckbox"
                                      {...register("consent", {
                                        required: true,
                                      })}
                                      aria-label="option 1"
                                    />
                                    I consent to receive communications from
                                    Resourcifi and collect my submitted data.
                                    For more details, check out our privacy
                                    policy
                                  </label>
                                </div>
                              </div>
                              {errors.consent && (
                                <p className="text-danger stop_warning">
                                  <i className="fa-solid fa-triangle-exclamation me-3"></i>
                                  You must consent to receive communications
                                </p>
                              )}
                            </Col>

                            {/* <Col md={12} className="mb-5">
                          <div className="condition">
                            <div className="check">
                              <label className="p">
                                {" "}
                                <Form.Check aria-label="option 1" />I consent to
                                receive communications from Resourcifi and collect my
                                submitted data. For more details, check out our
                                privacy policy
                              </label>
                            </div>
                          </div>
                        </Col> */}

                            <Col md={12} className=" text-end">
                              <div className="globe_btn">
                                <button className="primery-btn" type="submit">
                                  <span>
                                    {" "}
                                    Submit{" "}
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="fas"
                                      data-icon="arrow-right"
                                      class="svg-inline--fa fa-arrow-right "
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
                            </Col>
                          </Row>
                          {messageSent && (
                            <div className="success-message ">
                              <img src={success} alt="success" />
                              <p className="main_pop_heading">
                                Your request has been sent successfully!
                              </p>

                              <p style={{ color: "green" }}>
                                This page will automatically refresh in{" "}
                                {timeLeft} seconds.
                              </p>
                            </div>
                          )}
                        </div>
                      </form>
                    </Col>
                    {/* form ends */}
                  </Row>
                </Container>
              </section>
            ) : null}
          </>
        )}

        {/* banner end */}
        <>
          {hireDeveloper && hireDeveloper.about_section ? (
            <section className="dev_service_main">
              <Container>
                <Row className="justify-content-center">
                  {/* Skeleton loading for about section */}

                  {hireDeveloper && hireDeveloper.about_section && (
                    <Col md={10}>
                      <div
                        class="global_heading text-center mb-5 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1000"
                      >
                        <div className="icon">
                          <img src={circleimg} alt="circleimg" />
                        </div>
                        <h2>{hireDeveloper.about_section.title}</h2>

                        <p>{hireDeveloper.about_section.content}</p>
                      </div>
                    </Col>
                  )}
                </Row>
                {/* Skeleton loading for dev services section */}

                <Row className="mt-4">
                  {hireDeveloper &&
                    hireDeveloper.about_section &&
                    hireDeveloper.about_section.box &&
                    hireDeveloper.about_section.box.map((item, index) => (
                      <>
                        <Col md={6} lg={4} className="mb-5">
                          <div className="dev_services servises_box">
                            <div className="img_Icon icon_service">
                              <div class="related_icon">
                                {" "}
                                <i className="fa-brands fa-android"></i>
                              </div>
                              <div class="arrow_icon">
                                <i class="fa-solid fa-arrow-right-long"></i>
                              </div>
                            </div>
                            <h2 className="services_name">{item.title}</h2>
                            <p>{item.content}</p>
                          </div>
                        </Col>
                      </>
                    ))}
                </Row>
              </Container>
            </section>
          ) : null}
        </>
        {/* Skeleton loading for flexible engagement models section */}
        {hireDeveloper && hireDeveloper.flexible_section && (
          <section className="Flexibleengagementmodels">
            <Container>
              <div className="Flexibleengagementmodels_inner">
                <Row className="align-items-center justify-content-between">
                  {/* Skeleton for individual dev_services */}

                  {hireDeveloper && hireDeveloper.flexible_section && (
                    <>
                      <Col lg={5}>
                        <div
                          className="left_cnt"
                          data-aos="fade-right"
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine"
                        >
                          <h2>{hireDeveloper.flexible_section.title}</h2>
                          <p>{hireDeveloper.flexible_section.content}</p>
                        </div>
                      </Col>
                      <Col lg={6}>
                        {hireDeveloper &&
                          hireDeveloper.flexible_section &&
                          hireDeveloper.flexible_section.points &&
                          hireDeveloper.flexible_section.points.map(
                            (item, index) => (
                              <div
                                className="point_bg mb-5"
                                key={index}
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                              >
                                <i className="fa-solid fa-circle-check me-3"></i>{" "}
                                {item.title}
                              </div>
                            )
                          )}
                      </Col>
                    </>
                  )}
                </Row>
              </div>
            </Container>
          </section>
        )}
        {/* Skeleton loading for why hire section */}
        {hireDeveloper && hireDeveloper.why_hire_section && (
          <section className="why_hire">
            <div
              className="big_image"
              style={{
                backgroundImage: `url(${hireDeveloper.why_hire_section?.image?.url})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            ></div>
            <Container>
              <div className="innerwhy_hire_heading">
                <Row>
                  {hireDeveloper && hireDeveloper.why_hire_section && (
                    <Col lg={5}>
                      <div className="about_heading">
                        <h2>{hireDeveloper.why_hire_section.title}</h2>
                      </div>
                    </Col>
                  )}
                </Row>

                <Row>
                  {hireDeveloper &&
                    hireDeveloper.why_hire_section &&
                    hireDeveloper.why_hire_section.boxes &&
                    hireDeveloper.why_hire_section.boxes.map((item, index) => (
                      <Col md={6} lg={4} className="mb-3">
                        <div className="why_hire_box" data-aos="zoom-in">
                          <div className="d-flex h_i">
                            <div className="icon_box">
                              <img src={whyicon} alt="icon" />
                            </div>
                            <div className="why_hire_point">{item.title}</div>
                          </div>

                          <p>{item.content}</p>
                        </div>
                      </Col>
                    ))}
                </Row>
              </div>
            </Container>
          </section>
        )}
        {/* Skeleton loading for FAQ section */}
        {hireDeveloper && hireDeveloper.faq_section && (
          <section className="faq">
            <Container>
              <Row className="justify-content-start">
                <Col md={8}>
                  <div
                    className="global_heading text-start mb-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000"
                  >
                    <div className="icon">
                      <img src={circleimg} alt="circleimg" />
                    </div>
                    <h2 className="mb-3 text-start">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={12} data-aos="fade-up" data-aos-duration="1000">
                  <Accordion>
                    {hireDeveloper &&
                      hireDeveloper.faq_section &&
                      hireDeveloper.faq_section.map((item, index) => (
                        <Accordion.Item key={index} eventKey={index.toString()}>
                          <Accordion.Header>{item.question}</Accordion.Header>
                          <Accordion.Body>{item.answer}</Accordion.Body>
                        </Accordion.Item>
                      ))}
                  </Accordion>
                </Col>
              </Row>
            </Container>
          </section>
        )}
      </>
    </HelmetProvider>
  );
};

export default HireDeveloper;
