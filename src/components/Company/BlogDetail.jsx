import React, { useState, useEffect, useLayoutEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BasicBanner from "../layout-sections/BasicBanner";
import SecondButton from "../Buttons/SecondButton";
import { PostCart } from "./WebNauticalBlog";
import { Link, useLocation } from "react-router-dom";
import config from "../../config";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//bootstrap imports
import { Container, Row, Col } from "react-bootstrap";
//images import
import defaultImg from "../../assets/client-review-images/dating-1.webp";
import bannerImg from "../../assets/blog-images/mobile-app-development-img-2.png";
import mobileImg from "../../assets/blog-images/mobile-app-development-img-2.png";
import androidImg from "../../assets/blog-images/software-development-services.png";

//fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";

function BlogDetail({ data }) {
  const post_id = useLocation();

  console.log(post_id.state.post_id, "iddd");
  const [blogDetail, setBlogDetail] = useState({});
  const helmetContext = {};
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const BlogDetailRecord = async () => {
    try {
      const params = { post_id: post_id.state.post_id };
      console.log(params, "params");
      const response = await fetch(`${config.url}/v1/get_post_details`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const apidata = await response.json();
      console.log("blog detail apidata", apidata);

      if (apidata.status === "success") {
        setBlogDetail(apidata.data);
      }
      setLoading(false);
    } catch (error) {
      navigate("/*");
      setLoading(false);
      console.error("Error:", error);
    }
  };
  useLayoutEffect(() => {
    setLoading(true);
    BlogDetailRecord();
  }, [post_id.state.post_id]);
  useEffect(() => {
    console.log(blogDetail, "blogDetailRecord");
  }, [blogDetail]);
  const viewDetails = (item) => {
    navigate(`/blogdetail/${item.post_slug}`, {
      state: { post_id: item.post_id },
    });
  };

  const
currentUrl = window.location.href;
  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{blogDetail.meta_title}</title>
          <meta name="description" content={blogDetail.meta_description} />
          <link rel="canonical" href={currentUrl} />
        </Helmet>

        <section className="blog_details">
          {loading ? ( // Render loading spinner if loading is true
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "50vh" }}
            >
              <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              <div className="top_blog_details">
                <Container className="p-0">
                  {blogDetail && (
                    <div className="blog_about_box">
                      <div className="top_links">
                        <ul>
                          <li>Home</li>
                        </ul>
                      </div>

                      <div className="blog_tittle">{blogDetail.post_title}</div>

                      <div className="fate_time">
                        <ul>
                          <li>{blogDetail.post_date}</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </Container>
              </div>

              <Container>
                <div className="about_content_blog">
                  <Row>
                    <Col lg={8}>
                      <Row className="blogs-box">
                        <Col sm={12} className="text-center">
                          <img src={blogDetail.featured_image} alt="image" />
                        </Col>
                        <Col sm={12} className="text-start">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: blogDetail.post_content,
                            }}
                          ></p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={4}>
                      <div className="recent_post">
                        <h3>Recently Posted</h3>
                        {blogDetail &&
                          blogDetail.related_posts &&
                          blogDetail.related_posts.map((item, index) => (
                            // <Link to={`/blogdetail/${item.post_slug}`}>
                            <li onClick={() => viewDetails(item)}>
                              <h2 style={{ color: "black" }}>
                                {item.post_title}
                              </h2>
                            </li>
                            // </Link>
                          ))}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </>
          )}
        </section>
      </>
    </HelmetProvider>
  );
}

export default BlogDetail;
