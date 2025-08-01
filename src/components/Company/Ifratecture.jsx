import React from 'react'

//components imports
import BasicBanner from '../layout-sections/BasicBanner'
import LayoutPrimerySec2 from '../layout-sections/LayoutPrimerySec2';
import LayoutSecondarySec from '../layout-sections/LayoutSecondarySec';

//images imports
import bannerImg from "../../assets/company-images/about.png";
import groupImg from "../../assets/company-images/group.png";
import secureImg from "../../assets/company-images/secure.png";



const basicBannerData = {
    heading:'Infrastructure',
    title:'Situated in one of the most encouraging urban communities of India – Jaipur has progressed infrastructural comforts clubbed with the innovative skill to offer the best of programming services and solutions.',
    image:bannerImg,
    title1:''
}

const layoutPrimeryData2= {
    id:'team',
    heading:'Our Stringent',
    upDownImg:groupImg,
    text1:'Our all-around planned and powerful foundation is skillful to help and manage contemporary administrations and top-rated applications. Our stringent spotlight on security, quality, and toughness of the whole framework arrangement keeps us a level ahead with regards to conveying programming arrangements and administrations in an opportune, quality-rich way',
    text2:'Focused on increasing the value of your business, our office premises are adequately furnished with the most current conveniences, sitting space, and network to guarantee an agreeable, happy work culture for our experts. We have free divisions that are sorted dependent on technologies and services that we offer yet are divided near one another, for amicable cooperation in the middle. Our canteen, conference rooms, and indoor games region are very much dispersed and fit impeccably to suit the prerequisites of our specialists. We have a protected server room, independently oversaw under close security and control.',
    text3:'',
}

const secondSection = {
  image: secureImg,
  heading: `Security`,
  heading2:'',
  text1: "Our attention towards information security is prime. We guarantee a perfect information security component with the latest equipment, guaranteeing total wellbeing and protection of data. Our inner correspondence components are clear cut and wonderful to make cooperative energy between offices with the significant data stream and report move. Our project management portal helps the whole association in managing and keeping up with everyday activities with a straightforward perspective on projects, their advancement, and stage shrewd status.",

}

function Ifratecture() {
  return (
    <>
        <BasicBanner data={basicBannerData}/>
        <LayoutPrimerySec2 data ={layoutPrimeryData2}/>
        <LayoutSecondarySec data={secondSection}/>
    </>
  )
}

export default Ifratecture