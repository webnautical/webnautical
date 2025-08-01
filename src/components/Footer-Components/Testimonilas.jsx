import React from 'react'
import BasicBanner from '../layout-sections/BasicBanner'
//bootstrap imports 

import { Container,Row,Col } from 'react-bootstrap'

//images imports
import testimonialImg from '../../assets/footer-images/testimonials-img.png' 

const basicBannerData = {
    heading:`Testimonials`,
    title:'Web Nautical provides a wide range of solutions to a variety of industries. Please choose from specific industries in which area of your business.',
    image:testimonialImg,
    title1:''
}
function Testimonilas() {
  return (
    <>
        <BasicBanner data={basicBannerData}/>
    </>

  )
}

export default Testimonilas