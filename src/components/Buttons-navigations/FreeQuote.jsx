import React from 'react'
import BasicBanner from '../layout-sections/BasicBanner'
import FreeSteps from './free-quote-steps/FreeSteps';
//images imports 
import bannerImg from '../../assets/button-navigation-images/get-a-quote.png'

const basicBannerData = {
    heading: "Get a perfect quote",
    title1:
      "We’re eager to work with you. Please share your project goals and contact information. We respond to 97% of queries within 1-2 business days. Really!",
    title: `Give A Complete Web And App Solutions `,
    image: bannerImg,
  };
function FreeQuote() {
  return (
    <>
        <BasicBanner data={basicBannerData}/>
        <FreeSteps/>
    </>
  )
}

export default FreeQuote