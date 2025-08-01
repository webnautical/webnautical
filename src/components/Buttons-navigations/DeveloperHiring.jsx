import React from "react";

//components imports
import BasicAppBanner from "../solutions/BasicAppBanner";
import SecondButton from "../Buttons/SecondButton";
//bootstrap imports
import { Container, Row, Col } from "react-bootstrap";

//images imports
import chatImg from "../../assets/solutions-images/chat-app.png";
import bannerImg from "../../assets/solutions-images/mobile-d.png";

const basicBannerData = {
  title: `Hire Developers`,
  titleDiscription: `We are an experience design and innovation company that identifies new opportunities and designs innovative products and services that are grounded in real, human needs. Our approach helps your business develop authentic, meaningful customer relationships—and will drive commercial results.`,
  bannerImg: bannerImg,
};

const developerCartData = [
{
    imgSrc : chatImg,
    title:'Hire Android Developer',
    discription:'Web Nautical has a creative and knowledgeable team which provides the mobile app development.',
    bgColor:'#ffdfda'
},
{
    imgSrc : chatImg,
    title:'Hire Android Developer',
    discription:'Web Nautical has a creative and knowledgeable team which provides the mobile app development.',
    bgColor:'#dae9ff'
},
{
    imgSrc : chatImg,
    title:'Hire Web App Development',
    discription:'Web Nautical has a creative and knowledgeable team which provides the mobile app development.',
    bgColor:'#d6fdec'
},
{
    imgSrc : chatImg,
    title:'Hire Android Developer',
    discription:'Web Nautical has a creative and knowledgeable team which provides the mobile app development.',
    bgColor:'#e6e6e6'
},
{
    imgSrc : chatImg,
    title:'Hire Android Developer',
    discription:'Web Nautical has a creative and knowledgeable team which provides the mobile app development.',
    bgColor:'#d6fdec'
},
{
    imgSrc : chatImg,
    title:'Hire Android Developer',
    discription:'Web Nautical has a creative and knowledgeable team which provides the mobile app development.',
    bgColor:'#ffdfda'
},

]

function DeveloperHiring() {
  return (
    <>
      <BasicAppBanner data={basicBannerData} />

      <section className="about mb-4">
        <Container>
          <Row>
                {developerCartData.map((item,i)=><Col lg={4}><DeveloperCart key={i} cartdata={item}/></Col>)}
          </Row>
        </Container>
      </section>
    </>
  );
}

const DeveloperCart = ({ cartdata }) => {
    console.log(cartdata)
  const { imgSrc, title, discription,bgColor} = cartdata;

  return (
    <div className="webnauthireing" style={{backgroundColor:`${bgColor}`}}>
      <img src={imgSrc} className="updown" alt="image" />
      <h4>{title}</h4>
      <p>{discription}</p>
      <div className="hire-btn">
        <SecondButton>
        Hire Now
        </SecondButton>
        
      </div>
     
    </div>
  );
};

export default DeveloperHiring;
