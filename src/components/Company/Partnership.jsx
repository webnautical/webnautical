import React from 'react'

//components imports
import BasicBanner from "../layout-sections/BasicBanner";
import CompanyAboutLayout from "./CompanyAboutLayout";

//images imports
import bannerImg from "../../assets/company-images/about.png";

//ojects for different components
const aboutData ={
    text1:'At Web Nautical, we provide you with partnership projects to interface with us and advantage from worthwhile business models. Our thought behind organization program is to work together with uniting powers and make critical value out of it – for an aggregate growth. We value association. We orchestrate process up-gradations as well as acquire new dares to appropriately fit with the partner program. We generally point towards a mutually advantageous arrangement and support esteem driven practices by offering modified association projects to our accomplices – for SMEs to enormous organizations. We trust in utilizing the worth of business by uniting assets and plans on a solitary stage. We do this with our far reaching organization alternatives.',
    text2:''
  }
  
const basicBannerData = {
    heading: "Partnership",
    title1:
      "   We have an excellent team of skilled and experienced professionals, Engineers, Analysts and consultants who are well qualified and experienced in their respective fields.",
    title: `Give A Complete Web And App Solutions `,
    image: bannerImg,
  };
function Partnership() {
  return (
    <>
      <BasicBanner data={basicBannerData} />
      <CompanyAboutLayout textData={aboutData}/>

    </>
  )
}

export default Partnership