import React from 'react'

//components imports 
import About from '../Home/About.home';
import BasicAppBanner from '../solutions/BasicAppBanner';
//images imports
import bannerImg from "../../assets/solutions-images/mobile-d.png";
import chatImg from "../../assets/solutions-images/chat-app.png";
import iphonImg from "../../assets/solutions-images/iphon.png";
import webAppImg from "../../assets/sevices-images/Mobile-app-development.png";
import ipadAppImg from "../../assets/sevices-images/ipad.png";

const appBannerData = {
    title: `Mobile App Development`,
    titleDiscription: `We are an experience design and innovation company that identifies new opportunities and designs innovative products and services that are grounded in real, human needs. Our approach helps your business develop authentic, meaningful customer relationships—and will drive commercial results.`,
    bannerImg: bannerImg,
}

const iphonAppData={
    reverse:'true',
    imgUrl: iphonImg,
    heading: `iPhone App Development`,
    discrption:'Web Nautical has a creative and knowledgeable team which provides the mobile app development for mobile devices such as personal digital assistants, enterprise digital assistants or mobile phones.',  
    btnPath:'/iphone-app-development',

}

const anroidAppData = {
  reverse:'',
  imgUrl:chatImg,
  heading:'Android App Development',
  discrption:'Web Nautical has a creative and knowledgeable team which provides the mobile app development for mobile devices such as personal digital assistants, enterprise digital assistants or mobile phones.',
  btnPath:'/android-app-development'
}

const webAppData={
  reverse:'',
  imgUrl:webAppImg,
  heading:'Web App Development',
  discrption:'Web Nautical has a creative and knowledgeable team which provides the mobile app development for mobile devices such as personal digital assistants, enterprise digital assistants or mobile phones.',
  // btnPath:'/android-app-development' 
}

const ipadAppData={
  reverse:'true',
  imgUrl:ipadAppImg,
  heading:'iPad App Development',
  discrption:'Web Nautical has a creative and knowledgeable team which provides the mobile app development for mobile devices such as personal digital assistants, enterprise digital assistants or mobile phones.',
  btnPath:'/ipad-app-development/' 
}

function MobileAppDevelopment() {
  return (
    <>
        <BasicAppBanner data={appBannerData}/>
        <br /><br />
        {/* <About data={anroidAppData} />
        <br /><br /> */}
        {/* <About data={iphonAppData} />
        <br /><br />
        <About data={webAppData} />
        <br /><br /><br />
        <About data={ipadAppData} />
        <br /><br /> */}


    </>
  )
}

export default MobileAppDevelopment