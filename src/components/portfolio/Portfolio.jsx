import React, { useState, useEffect, useLayoutEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import BasicAppBanner from "../solutions/BasicAppBanner";
import { Link } from "react-router-dom";
import config from "../../config";
import Skeleton from "@mui/material/Skeleton";

//bootstrap imports
import { Container, Row, Col } from "react-bootstrap";
import link from "../../assets/link.png";
function Portfolio() {
  const { page_no } = useParams();
  const [portfolio, setPortfolio] = useState({});
  const [scrollData, setScrollData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true); // Add loading state
  const helmetContext = {};
  const portfolioContent = {
    background_image: portfolio?.background_image,
    subtitle: portfolio?.subtitle,
    title: portfolio?.title,
  };
  //console.log(scrollData, 'scrolldata');
  const PortfolioPageRecored = async (page_no) => {
    try {
      const params = { page_no: page_no };
      const response = await fetch(`${config.url}/v1/portfolios`, {
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
      //console.log("portfolioData", data);

      if (data.status === "success") {
        setPortfolio(data.data);
        if (data.data && data.data.portfolios) {
          if (page_no === 1) {
            setScrollData(data.data.portfolios);
          } else {
            setScrollData((prevData) => [...prevData, ...data.data.portfolios]);
          }
        }
        if (!data.data.portfolios || data.data.portfolios.length === 0) {
          setHasMore(false);
        } else {
          setCurrentPage(page_no);
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    PortfolioPageRecored(1);
  }, []);

  const callScroll = () => {
    PortfolioPageRecored(currentPage + 1);
  };

  const
currentUrl = window.location.href;

  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{portfolio.meta_title}</title>
          <meta name="description" content={portfolio.meta_description} />
          <link rel="canonical" href={currentUrl} />
        </Helmet>

        {/* Loader */}
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
          <BasicAppBanner content={portfolioContent} />
        )}

        {loading ? (
          <>
            <div className="work-list ">
              <div className="proj-box">
                <Container>
                  <Row>
                    <Col md={6} className="mb-4">
                      <Skeleton
                        variant="rectangular"
                        height={350}
                        className=" mb-3"
                        style={{
                          width: "100%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                          borderRadius: "10px",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />

                      <Skeleton
                        variant="rectangular"
                        height={42}
                        className=" mb-3"
                        style={{
                          width: "60%",
                          backgroundColor: "#bfd3ea",
                          borderRadius: "10px",
                          margin: "auto",
                          marginTop: "-30px",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                    </Col>

                    <Col md={6} className="mb-4">
                      <Skeleton
                        variant="rectangular"
                        height={350}
                        className=" mb-3"
                        style={{
                          width: "100%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                          borderRadius: "10px",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />

                      <Skeleton
                        variant="rectangular"
                        height={42}
                        className=" mb-3"
                        style={{
                          width: "60%",
                          backgroundColor: "#bfd3ea",
                          borderRadius: "10px",
                          margin: "auto",
                          marginTop: "-30px",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                    </Col>

                    <Col md={6} className="mb-4">
                      <Skeleton
                        variant="rectangular"
                        height={350}
                        className=" mb-3"
                        style={{
                          width: "100%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                          borderRadius: "10px",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />

                      <Skeleton
                        variant="rectangular"
                        height={42}
                        className=" mb-3"
                        style={{
                          width: "60%",
                          backgroundColor: "#bfd3ea",
                          borderRadius: "10px",
                          margin: "auto",
                          marginTop: "-30px",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                    </Col>

                    <Col md={6} className="mb-4">
                      <Skeleton
                        variant="rectangular"
                        height={350}
                        className=" mb-3"
                        style={{
                          width: "100%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                          borderRadius: "10px",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />

                      <Skeleton
                        variant="rectangular"
                        height={42}
                        className=" mb-3"
                        style={{
                          width: "60%",
                          backgroundColor: "#bfd3ea",
                          borderRadius: "10px",
                          margin: "auto",
                          marginTop: "-30px",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </>
        ) : scrollData?.length > 0 ? (
          <section className="work-list ">
            <Container>
              <InfiniteScroll
                dataLength={scrollData.length}
                next={callScroll}
                hasMore={hasMore}
              >
                <Row>
                  {scrollData.map((item, index) => (
                    <Col
                      key={index}
                      sm={12}
                      md={6}
                      lg={6}
                      className="proj-col mb-5"
                    >
                      <PortfolioCart cartData={item} />{" "}
                    </Col>
                  ))}
                </Row>
              </InfiniteScroll>
            </Container>
          </section>
        ) : (
          <h4 className="text-center">There Are No Data To Display</h4>
        )}
      </>
    </HelmetProvider>
  );
}

export default Portfolio;

const PortfolioCart = ({ cartData }) => {
  const {
    title,
    image,
    logo,
    description,
    live_url,
    color,
    play_store_url,
    app_store_url,

    technology,
  } = cartData;
  console.log(color, "color");
  console.log(cartData, "cd");
  return (
    <div className="proj-box">
      <div className="project">
        {/* <Link to={live_url}> */}

        <div className="proj-img-box" style={{ background: `${color}` }}>
          <img src={image.url} alt={`${image.alt}-image`} />
          <div className="overlay_box"></div>
          <div className="content_text_box">
            <div className="project_logo">
              <img src={logo.url} alt={`${logo.alt}-image`} />
            </div>
            <div className="tech">
              Technology: <span className="details_tittle">{technology}</span>{" "}
            </div>
            <p className="project-description">{description}</p>
            <div className="project_link">
              {live_url && (
                <Link to={live_url} target="_blank">
                  <i className="fa-solid fa-globe me-1"></i> visit Website
                </Link>
              )}
              {play_store_url && (
                <Link to={play_store_url} target="_blank">
                  <i className="fa-brands fa-android"></i> Playstore
                </Link>
              )}
              {app_store_url && (
                <Link to={app_store_url} target="_blank">
                  <i className="fa-brands fa-apple"></i> App Store
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="tech_about">
          <h2 className="project-name">{title}</h2>
        </div>
      </div>
    </div>
  );
};
