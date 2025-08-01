import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
//bootstrap imports
import { Container, Row, Col } from "react-bootstrap";

//images imports
import img1 from '../../assets/blog-images/mobile-app-development-img-2.png';
import img2 from '../../assets/blog-images/blog-01-1.png';
import img3 from '../../assets/blog-images/software-development-services.png'

const blogData = [
  {
    id:'food-blog',
    image:img1,
    title:'Food App Development',
    date:'29 November 2022',
    description:'Ravi & his team are an excellent developer; has been very resourceful in this project. Unlike other developers, speed is their strength. Very quick delivery and accuracy.',
    btn:'Read More',
  },
  {
    id:'flutter-blog',
    image:img2,
    title:' Flutter App Development',
    date:'29 November 2022',
    description:'Ravi & his team are an excellent developer; has been very resourceful in this project. Unlike other developers, speed is their strength. Very quick delivery and accuracy.',
    btn:'Read More',
  },
  {
    id:'beacon-blog',
    image:img2,
    title:' Beacon App Development',
    date:'29 November 2022',
    description:'Ravi & his team are an excellent developer; has been very resourceful in this project. Unlike other developers, speed is their strength. Very quick delivery and accuracy.',
    btn:'Read More',
  },{
    id:'angular-blog',
    image:img2,
    title:' AngularJs Development',
    date:'29 November 2022',
    description:'Ravi & his team are an excellent developer; has been very resourceful in this project. Unlike other developers, speed is their strength. Very quick delivery and accuracy.',
    btn:'Read More',
  },{
    id:'anroid-blog',
    image:img3,
    title:' Android app development',
    date:'29 November 2022',
    description:'Ravi & his team are an excellent developer; has been very resourceful in this project. Unlike other developers, speed is their strength. Very quick delivery and accuracy.',
    btn:'Read More',
  },
  {
    id:'mobile-app-blog',
    image:img2,
    title:'Mobile App Development Process',
    date:'29 November 2022',
    description:'Ravi & his team are an excellent developer; has been very resourceful in this project. Unlike other developers, speed is their strength. Very quick delivery and accuracy.',
    btn:'Read More',
  },


]

const options = {
  dots: false,
  responsive: {
    0: {
        items: 1
    },
    600: {
        items: 2
    },
    1000: {
        items: 3
    }
}
};

function Blog() {
  return (
    <section className="h-blog">
        <Container className="animated fadeInUp">
        <Row>
          <Col md={12}>
            <h2>Our Blog</h2>
          </Col>
          <Col md={12}>
            <OwlCarousel id="blog-slider" {...options} className="owl-theme">
              {blogData.map(item=><  BlogCart key={item.id} item={item} />)}
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Blog;


const BlogCart  = ({item}) =>{
 const  {image,title,date,description,btn,id} = item;
  return(
    <div className="item px-4">
    <div className="blog-box">
      <div className="blog-img">
        <img src={image}  loading="lazy" />
      </div>
      <div className="blog-text">
        <h3>
          <a href="">
            {title}  
          </a>
        </h3>
        <span>{date}</span>
        <p>
          {description}
        </p>
        <Link
          to={`/${id}`}
          className="yellow-rd-btn hvr-shutter-out-horizontal"
        >
          {btn}
        </Link>
      </div>
    </div>
  </div>
  )
}