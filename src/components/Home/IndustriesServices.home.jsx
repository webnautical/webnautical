import React from 'react'
import OwlCarousel from "react-owl-carousel";


//bootstrap imports
import { Container,Row,Col } from 'react-bootstrap'
//images imports
import img1 from '../../assets/industries-services-images/education-1.webp'
import img2 from '../../assets/industries-services-images/food.webp'
import img3 from '../../assets/industries-services-images/health-1.webp'
import img4 from '../../assets/industries-services-images/sports.webp'
import img5 from '../../assets/industries-services-images/banking.webp'
import img6 from '../../assets/industries-services-images/dating-1.webp'
import img7 from '../../assets/industries-services-images/real-estate.webp'
import img8 from '../../assets/industries-services-images/travel.webp'
import img9 from '../../assets/industries-services-images/e-commerce-1.webp'
import img10 from '../../assets/industries-services-images/entertenment-1.webp'

const servicesData1 = [
    {
      id: 1,
      image:img1,
    //   image: require('../../assets/industries-services-images/education-1.webp'),
      title: 'Learning & education',
    },
    {
      id: 2,
      image:img2,
    //   image: require('../../assets/industries-services-images/food.webp'),
      title: 'food',
    },
    {
      id: 3,
      image:img3,
    //   image: require('../../assets/industries-services-images/health-1.webp'),
      title: 'Health',
    },
    {
      id: 4,
      image:img4,
    //   image: require('../../assets/industries-services-images/sports.webp'),
      title: 'Sports',
    },
    {
      id: 5,
      image:img5,
    //   image: require('../../assets/industries-services-images/banking.webp'),
      title: 'banking',
    },
  ];

 const options = { 
  loop: true,
  center: true,
  items: 1,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 450,
  // nav: true,
  dots: false,
  };

  const servicesData2 =[ {
    id: 6,
    image:img6,
  //   image: require('../../assets/industries-services-images/dating-1.webp'),
    title: 'dating',
  },
  {
    id: 7,
    image:img7,
  //   image: require('../../assets/industries-services-images/real-estate.webp'),
    title: 'real state',
  },
  {
    id: 8,
    image:img8,
  //   image: require('../../assets/industries-services-images/travel.webp'),
    title: 'Travel',
  },
  {
    id: 9,
    image:img9,
  //   image: require('../../assets/industries-services-images/e-commerce.webp'),
    title: 'E-commerce',
  },
  {
      id: 10,
      image:img10,
      // image: require('../../assets/industries-services-images/entertenment-1.webp'),
      title: 'Entertenment',
}];
const IndustriesServices = () => {
  return (
    <section className='industries'>
        <Container className="animated fadeInUp">
            <Row>
                <Col>
                <h2>Industries We Serve</h2>
                </Col>                
            </Row>
            <Row>
                <Col>
                <div className='h-box hide-mob'> 
                    <ul>
                      {servicesData1.map((item)=>(<li key={item.id}><ServiceCart item={item} /> </li>))}
                    </ul>
                </div>
                <div className='h-box hide-mob'> 
                    <ul>
                      {servicesData2.map((item)=>(<li key={item.id}><ServiceCart item={item} /> </li>))}
                    </ul>
                </div>
                <div className="hide-desktop">
                  <div className='h-box'>
                  <OwlCarousel id="blog-slider" {...options} className="owl-theme">
               
               <div className="item">
                <ul>
                  <li>{<ServiceCart item={servicesData1[0]}/>}</li>
                  <li>{<ServiceCart item={servicesData1[1]}/>}</li>
                </ul>
               </div>
               <div className="item">
                <ul>
                  <li>{<ServiceCart item={servicesData1[2]}/>}</li>
                  <li>{<ServiceCart item={servicesData1[3]}/>}</li>
                </ul>
               </div>  <div className="item">
                <ul>
                  <li>{<ServiceCart item={servicesData1[4]}/>}</li>
                  <li>{<ServiceCart item={servicesData2[0]}/>}</li>
                </ul>
               </div>  <div className="item">
                <ul>
                  <li>{<ServiceCart item={servicesData2[1]}/>}</li>
                  <li>{<ServiceCart item={servicesData2[2]}/>}</li>
                </ul>
               </div>
               <div className="item">
                <ul>
                  <li>{<ServiceCart item={servicesData2[3]}/>}</li>
                  <li>{<ServiceCart item={servicesData2[4]}/>}</li>
                </ul>
               </div>
            </OwlCarousel>
                  </div>
                </div>
                </Col>

            </Row>

        </Container>
    </section>
  )
}

export default IndustriesServices


const ServiceCart = ({item}) =>{
 const  {image,title } = item;
 return(
  <div>
    <a href="">
    <img src={image} alt={title} />
      <span>{title}</span>
    </a>
  </div>
 )
}

