import React, { useState, useEffect, useLayoutEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import config from "../../config";
import Skeleton from "@mui/material/Skeleton";
import { Container, Row, Col } from "react-bootstrap";
// import HireDetailsbg from "../../assets/bghiredetails";
import BasicAppBanner from "../solutions/BasicAppBanner";
import { Link } from "react-router-dom";
import circleimg from "../../assets/circle.png";
// import archimg from "../../assets/arch";
import Accordion from "react-bootstrap/Accordion";
import CaseStudy from "../Home/CaseStudy.home";
import { useForm } from "react-hook-form";
import arrowimg from "../../assets/resource-looking.svg";

export const DeveloperList = () => {
  const [developerList, setDeveloperList] = useState({});
  const [loading, setLoading] = useState(true);
  const helmetContext = {};
  const developerContent = {
    background_image: developerList?.banner_section?.background,
    subtitle: developerList?.banner_section?.subtitle,
    title: developerList?.banner_section?.title,
  };

  const DeveloperRecored = async () => {
    try {
      const response = await fetch(`${config.url}/v1/get_hiring_developer`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      if (data.status === "success") {
        setDeveloperList(data.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    setLoading(true);
    DeveloperRecored();
  }, []);
  const currentUrl = window.location.href;


  // form function add 
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


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
  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{developerList.meta_title}</title>
          <meta name="description" content={developerList.meta_description} />
          <link rel="canonical" href={currentUrl} />
        </Helmet>

        <div className="hire_dev_details">
          {loading ? (
            <div className="bg_top">
              <Container>
                {" "}
                <Skeleton
                  variant="rectangular"
                  height={20}
                  className=" mb-3"
                  style={{
                    width: "50%",
                    backgroundColor: " rgb(25 97 181 / 28%)",
                  }} // Inline CSS to set width to 40% and background color to blue
                />
                <Skeleton
                  variant="rectangular"
                  height={50}
                  className=""
                  style={{
                    width: "30%",
                    backgroundColor: " rgb(25 97 181 / 28%)",
                  }} // Inline CSS to set width to 40% and background color to blue
                />
              </Container>
            </div>
          ) : (
            <>
              {developerList && developerList.banner_section && (
                <section
                  className="full zoom banner app-solution-banner devloerlist_form"
                  style={{
                    backgroundImage: `url(${developerList.banner_section?.background_icon?.url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <Container className="animated fadeInUp">
                    <Row className="banner-row align-items-center">
                      <Col lg={6} className="col-md-6">
                        {developerList.banner_section.subtitle && (
                          <p className="liner_class">
                            {developerList.banner_section.subtitle}
                          </p>
                        )}
                        {developerList.banner_section.title && (
                          <h1>{developerList.banner_section.title}</h1>
                        )}
                      </Col>

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
              )}
            </>
          )}
          {loading ? (
            <section className="hire_dev">
              <Container>
                <Row className="justify-content-center ">
                  <Col lg={6}>
                    <div
                      class="global_heading text-center mb-5 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    >
                      <Skeleton
                        variant="rectangular"
                        height={50}
                        className=" mb-3"
                        style={{
                          width: "70%",

                          margin: "auto",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                      <Skeleton
                        variant="rectangular"
                        height={20}
                        className=" mb-3"
                        style={{
                          width: "100%",

                          margin: "auto",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                      <Skeleton
                        variant="rectangular"
                        height={20}
                        className=" mb-3"
                        style={{
                          width: "100%",

                          margin: "auto",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  {[...Array(3)].map((_, index) => (
                    <Col md={6} lg={4} className="mb-5">
                      <div className="dev_services">
                        <div>
                          <Skeleton
                            variant="rectangular"
                            height={60}
                            className=" mb-3"
                            style={{
                              width: "20%",
                              marginTop: "-60px",
                            }}
                          />
                        </div>
                        <Skeleton
                          variant="rectangular"
                          height={20}
                          className=" mb-3"
                          style={{
                            width: "80%",
                          }} // Inline CSS to set width to 40% and background color to blue
                        />
                        <Skeleton
                          variant="rectangular"
                          height={10}
                          className=" mb-3"
                          style={{
                            width: "100%",

                            margin: "auto",
                          }} // Inline CSS to set width to 40% and background color to blue
                        />
                        <Skeleton
                          variant="rectangular"
                          height={10}
                          className=" mb-3"
                          style={{
                            width: "100%",

                            margin: "auto",
                          }} // Inline CSS to set width to 40% and background color to blue
                        />
                        <Skeleton
                          variant="rectangular"
                          height={10}
                          className=" mb-3"
                          style={{
                            width: "100%",

                            margin: "auto",
                          }} // Inline CSS to set width to 40% and background color to blue
                        />
                        <Skeleton
                          variant="rectangular"
                          height={10}
                          className=" mb-3"
                          style={{
                            width: "100%",

                            margin: "auto",
                          }} // Inline CSS to set width to 40% and background color to blue
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>
          ) : (
            <section className="hire_dev">
              <Container>
                <Row className="justify-content-center ">
                  {developerList && developerList.developers_section && (
                    <Col lg={6}>
                      <div
                        class="global_heading text-center mb-5 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1000"
                      >
                        <div className="icon">
                          <img src={circleimg} alt="circleimg" />
                        </div>
                        <h2> {developerList.developers_section.title}</h2>
                        <p>{developerList.developers_section.description}</p>
                      </div>
                    </Col>
                  )}
                </Row>
                <Row className="mt-3">
                  {developerList &&
                    developerList.developers_section &&
                    developerList.developers_section.technologies &&
                    developerList.developers_section.technologies.map(
                      (item, index) => (
                        <Col
                          md={6}
                          lg={4}
                          className="mb-4 mb-md-5 "
                          data-aos="zoom-in"
                        >
                          <div className="dev_services servises_box">
                            <div className="img_Icon icon_service">
                              {/* <img src={item.icon?.url} /> */}
                              <div className="related_icon">
                                {" "}
                                <i className={item.icon}></i>
                              </div>
                              <div className="arrow_icon">
                                <i class="fa-solid fa-arrow-right-long"></i>
                              </div>
                            </div>
                            <h2 className="services_name">{item.title}</h2>
                            <p>{item.content}</p>
                          </div>
                        </Col>
                      )
                    )}
                </Row>
              </Container>
            </section>
          )}

          <section className="hire_why">
            <Container>
              <Row className="justify-content-center ">
                {developerList && developerList.faq_section && (
                  <Col
                    lg={6}
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                  >
                    <div
                      class="global_heading text-center mb-5 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    >
                      <div className="icon">
                        <img src={circleimg} alt="circleimg" />
                      </div>
                      <h2>{developerList.faq_section.title}</h2>
                    </div>
                  </Col>
                )}
              </Row>

              <Row>
                <Col
                  md={12}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  {developerList &&
                    developerList.faq_section &&
                    developerList.faq_section.faq &&
                    developerList.faq_section.faq.map((item, index) => (
                      <div>
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>{item.question}</Accordion.Header>
                            <Accordion.Body>{item.answer}</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    ))}
                </Col>
              </Row>
            </Container>
          </section>

          <section className="hire_process">
            <Container>
              <Row className="justify-content-start ">
                {developerList && developerList.hiring_process_section && (
                  <Col lg={6}>
                    <div
                      class="global_heading mb-5 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    >
                      <div className="icon">
                        <img src={circleimg} alt="circleimg" />
                      </div>
                      <h2>{developerList.hiring_process_section.title}</h2>

                      <p>{developerList.hiring_process_section.subtitle} </p>
                    </div>
                  </Col>
                )}
              </Row>

              <Row className="border_top">
                {developerList &&
                  developerList.hiring_process_section &&
                  developerList.hiring_process_section.steps &&
                  developerList.hiring_process_section.steps.map(
                    (item, index) => (
                      <Col lg={4} className="p-0" data-aos="zoom-in">
                        <div className="hire_procces_box">
                          <h2>{item.title}</h2>
                          <p>{item.content}</p>
                          <div className="cont_box">{index + 1}</div>
                        </div>
                      </Col>
                    )
                  )}
              </Row>
            </Container>
          </section>

          {developerList &&
            developerList.projects_section &&
            developerList.projects_section.projects && (
              <CaseStudy data={developerList.projects_section} />
            )}
        </div>
      </>
    </HelmetProvider>
  );
};
