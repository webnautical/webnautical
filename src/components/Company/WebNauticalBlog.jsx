import React, { useState, useEffect, useLayoutEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "@mui/material/Skeleton";
// import BlogProvider from '../../contexts/BlogContext';
import { useNavigate, useParams } from "react-router-dom";
import { blogContext } from "../../contexts/BlogContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import config from "../../config";

// bootstrap imports
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

//components imports
import BasicBanner from "../layout-sections/BasicBanner";
import SecondButton from "../Buttons/SecondButton";
//images imports
import bannerImg from "../../assets/blog-images/blog-01-1.png";
import BasicAppBanner from "../solutions/BasicAppBanner";
//fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
const basicBannerData = {
  heading: "Webnautical Blogs",
  title1: "",
  title: `Discover the most outstanding articles in all topics of Web.s `,
  image: bannerImg,
};

function WebNauticalBlog() {
  const navigate = useNavigate();
  const { realTimeData, loadMoreHandler, hideButton, postCartData } =
    useContext(blogContext);
  const { page_no } = useParams();
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollData, setScrollData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const helmetContext = {};
  console.log(scrollData, "scrolldata");
  console.log(blogData, "blogdata");
  const blogContent = {
    background_image: blogData?.background_image,
    subtitle: blogData?.subtitle,
    title: blogData?.title,
  };

  const fetchBlogData = async (page_no) => {
    try {
      const params = { page_no: page_no };
      const response = await fetch(`${config.url}/v1/get_posts`, {
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

      if (data.status === "success") {
        // Update the blogData state with the metadata
        setBlogData(data.data);

        // Update the scrollData state with the posts
        if (data.data && data.data.posts) {
          // If it's the first page, set scrollData directly
          if (page_no === 1) {
            setScrollData(data.data.posts);
          } else {
            // If it's not the first page, append new posts to scrollData
            setScrollData((prevData) => [...prevData, ...data.data.posts]);
          }
        }

        // Check if there are more pages to load
        if (!data.data.posts || data.data.posts.length === 0) {
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
    fetchBlogData(1);
  }, []);

  const callScroll = () => {
    setLoading(true);
    fetchBlogData(currentPage + 1);
  };

  const viewDetails = (item) => {
    navigate(`/blogdetail/${item.post_slug}`, {
      state: { post_id: item.post_id },
    });
  };
  console.log(viewDetails, "vdddd");

  const
currentUrl = window.location.href;

  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{blogData.meta_title}</title>
          <meta name="description" content={blogData.meta_description} />
          <link rel="canonical" href={currentUrl} />
        </Helmet>
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
          <BasicAppBanner content={blogContent} />
        )}

        {loading ? (
          <section className="blog_section">
            <Container>
              <Row>
                <Col md={6} lg={4} className="mb-5 gm">
                  <div className=" text-start">
                    <div className="">
                      <Skeleton
                        variant="circular"
                        height={196}
                        style={{
                          borderRadius: "20px", // Makes it circular
                          width: "100%", // Width of the circular skeleton
                          height: 196, // Height of the circular skeleton
                        }}
                      />
                    </div>

                    <div className="about_blog_box align-items-center mt-3">
                      <div>
                        {" "}
                        <span>
                          <Skeleton
                            // className="mt-3"
                            variant="circular"
                            width={106}
                            height={34}
                            style={{
                              borderRadius: "20px", // Makes it circular
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        {" "}
                        <p className="m-0">
                          <Skeleton
                            variant="rectangular"
                            width={132}
                            height={26}
                          />
                        </p>
                      </div>
                    </div>

                    <h3 className="mt-3 mb-3">
                      <Skeleton
                        variant="rectangular"
                        height={26}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "65%",
                        }}
                      />
                    </h3>

                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="mb-5 gm">
                  <div className=" text-start">
                    <div className="">
                      <Skeleton
                        variant="circular"
                        height={196}
                        style={{
                          borderRadius: "20px", // Makes it circular
                          width: "100%", // Width of the circular skeleton
                          height: 196, // Height of the circular skeleton
                        }}
                      />
                    </div>

                    <div className="about_blog_box align-items-center mt-3">
                      <div>
                        {" "}
                        <span>
                          <Skeleton
                            // className="mt-3"
                            variant="circular"
                            width={106}
                            height={34}
                            style={{
                              borderRadius: "20px", // Makes it circular
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        {" "}
                        <p className="m-0">
                          <Skeleton
                            variant="rectangular"
                            width={132}
                            height={26}
                          />
                        </p>
                      </div>
                    </div>

                    <h3 className="mt-3 mb-3">
                      <Skeleton
                        variant="rectangular"
                        height={26}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "65%",
                        }}
                      />
                    </h3>

                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="mb-5 gm">
                  <div className=" text-start">
                    <div className="">
                      <Skeleton
                        variant="circular"
                        height={196}
                        style={{
                          borderRadius: "20px", // Makes it circular
                          width: "100%", // Width of the circular skeleton
                          height: 196, // Height of the circular skeleton
                        }}
                      />
                    </div>

                    <div className="about_blog_box align-items-center mt-3">
                      <div>
                        {" "}
                        <span>
                          <Skeleton
                            // className="mt-3"
                            variant="circular"
                            width={106}
                            height={34}
                            style={{
                              borderRadius: "20px", // Makes it circular
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        {" "}
                        <p className="m-0">
                          <Skeleton
                            variant="rectangular"
                            width={132}
                            height={26}
                          />
                        </p>
                      </div>
                    </div>

                    <h3 className="mt-3 mb-3">
                      <Skeleton
                        variant="rectangular"
                        height={26}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "65%",
                        }}
                      />
                    </h3>

                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="mb-5 gm">
                  <div className=" text-start">
                    <div className="">
                      <Skeleton
                        variant="circular"
                        height={196}
                        style={{
                          borderRadius: "20px", // Makes it circular
                          width: "100%", // Width of the circular skeleton
                          height: 196, // Height of the circular skeleton
                        }}
                      />
                    </div>

                    <div className="about_blog_box align-items-center mt-3">
                      <div>
                        {" "}
                        <span>
                          <Skeleton
                            // className="mt-3"
                            variant="circular"
                            width={106}
                            height={34}
                            style={{
                              borderRadius: "20px", // Makes it circular
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        {" "}
                        <p className="m-0">
                          <Skeleton
                            variant="rectangular"
                            width={132}
                            height={26}
                          />
                        </p>
                      </div>
                    </div>

                    <h3 className="mt-3 mb-3">
                      <Skeleton
                        variant="rectangular"
                        height={26}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "65%",
                        }}
                      />
                    </h3>

                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="mb-5 gm">
                  <div className=" text-start">
                    <div className="">
                      <Skeleton
                        variant="circular"
                        height={196}
                        style={{
                          borderRadius: "20px", // Makes it circular
                          width: "100%", // Width of the circular skeleton
                          height: 196, // Height of the circular skeleton
                        }}
                      />
                    </div>

                    <div className="about_blog_box align-items-center mt-3">
                      <div>
                        {" "}
                        <span>
                          <Skeleton
                            // className="mt-3"
                            variant="circular"
                            width={106}
                            height={34}
                            style={{
                              borderRadius: "20px", // Makes it circular
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        {" "}
                        <p className="m-0">
                          <Skeleton
                            variant="rectangular"
                            width={132}
                            height={26}
                          />
                        </p>
                      </div>
                    </div>

                    <h3 className="mt-3 mb-3">
                      <Skeleton
                        variant="rectangular"
                        height={26}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "65%",
                        }}
                      />
                    </h3>

                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="mb-5 gm">
                  <div className=" text-start">
                    <div className="">
                      <Skeleton
                        variant="circular"
                        height={196}
                        style={{
                          borderRadius: "20px", // Makes it circular
                          width: "100%", // Width of the circular skeleton
                          height: 196, // Height of the circular skeleton
                        }}
                      />
                    </div>

                    <div className="about_blog_box align-items-center mt-3">
                      <div>
                        {" "}
                        <span>
                          <Skeleton
                            // className="mt-3"
                            variant="circular"
                            width={106}
                            height={34}
                            style={{
                              borderRadius: "20px", // Makes it circular
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        {" "}
                        <p className="m-0">
                          <Skeleton
                            variant="rectangular"
                            width={132}
                            height={26}
                          />
                        </p>
                      </div>
                    </div>

                    <h3 className="mt-3 mb-3">
                      <Skeleton
                        variant="rectangular"
                        height={26}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "65%",
                        }}
                      />
                    </h3>

                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                  </div>
                </Col>
                <Col md={6} lg={4} className="mb-5 gm">
                  <div className=" text-start">
                    <div className="">
                      <Skeleton
                        variant="circular"
                        height={196}
                        style={{
                          borderRadius: "20px", // Makes it circular
                          width: "100%", // Width of the circular skeleton
                          height: 196, // Height of the circular skeleton
                        }}
                      />
                    </div>

                    <div className="about_blog_box align-items-center mt-3">
                      <div>
                        {" "}
                        <span>
                          <Skeleton
                            // className="mt-3"
                            variant="circular"
                            width={106}
                            height={34}
                            style={{
                              borderRadius: "20px", // Makes it circular
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        {" "}
                        <p className="m-0">
                          <Skeleton
                            variant="rectangular"
                            width={132}
                            height={26}
                          />
                        </p>
                      </div>
                    </div>

                    <h3 className="mt-3 mb-3">
                      <Skeleton
                        variant="rectangular"
                        height={26}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "65%",
                        }}
                      />
                    </h3>

                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                    <p>
                      <Skeleton
                        variant="rectangular"
                        height={16}
                        style={{
                          backgroundColor: "rgb(0 0 0 / 29%)",
                          width: "100%",
                        }}
                      />
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        ) : scrollData?.length > 0 ? (
          <section className="blog_section">
            <Container>
              <InfiniteScroll
                dataLength={scrollData.length}
                next={callScroll}
                hasMore={hasMore}
              >
                <Row>
                  <Col md={12} lg={12}>
                    <Row>
                      {scrollData.map((item) => (
                        <Col md={6} lg={4} className="mb-5 gm">
                          <button
                            className="w-100 h-100 border-0 bg-transparent"
                            onClick={() => viewDetails(item)}
                          >
                            <div
                              className="b-box text-start"
                              onClick={() => viewDetails(item)}
                            >
                              <div className="blog_img">
                                <img
                                  src={item.featured_image}
                                  alt="Blog img"
                                  className="thumb-size"
                                />
                              </div>
                              <div className="about_blog_box">
                                <div>
                                  {" "}
                                  <span>{item.categories}</span>
                                </div>
                                <div>
                                  {" "}
                                  <p>{item.posted_date}</p>
                                </div>
                              </div>
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>

                              <p></p>
                            </div>
                          </button>
                        </Col>
                      ))}
                      <div
                        onClick={loadMoreHandler}
                        className={`load-btn-container ${
                          hideButton && "d-none"
                        } `}
                      >
                        <SecondButton>Load More</SecondButton>
                      </div>
                      {/* </div> */}
                    </Row>
                  </Col>
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

export default WebNauticalBlog;

export const PostCart = ({ cartData }) => {
  const { heading, image, id, detail } = cartData;
  return (
    <>
      <div className="b-left-box">
        <h5> {heading}</h5>
        <ul>
          <li>
            <a className={image ? "" : "p-0 m-0"} href="">
              {image && <img src={image} alt={`${id}-image`} />}
              {detail.title}
              <span>{detail.titleDiscrption}</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
