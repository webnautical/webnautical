import React, { useState, useEffect, useLayoutEffect } from 'react';
import config from "../../config"
import Expert from '../Home/Expert';
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
//bootstrap imports
import { Container,Row,Col } from 'react-bootstrap';
import IndustriesServices from '../Home/IndustriesServices.home';

import bannerImg from '../../assets/button-navigation-images/terms-image.png'
import BasicAppBanner from '../solutions/BasicAppBanner';



function TermsServices() {
    const [supportData, setSupportData] = useState({})
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const helmetContext = {};
    const supportContent = {
        background_image: supportData?.banner_section?.background_image,
        subtitle: supportData?.banner_section?.subtitle,
        title: supportData?.banner_section?.title
      };
      const supportRecord = async () => {
        try {
          setLoading(true);
         
         
          const response = await fetch(`${config.url}/v1/get_term_service_details`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
           
          });
     
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const apidata = await response.json();
         
     
          if (apidata.status === 'success') {
            setSupportData(apidata.data);
            setLoading(false);
          }
        } catch (error) {
          setLoading(false);
          console.error('Error:', error);
          navigate('/*')
         
        }
      };
      useLayoutEffect(() => {
       supportRecord();
      }, []);
  return (
    <HelmetProvider context={helmetContext}>
    <>
      <Helmet>
       
        <title>{supportData.meta_title}</title>
        <meta name="description" content={supportData.meta_description} />
      </Helmet>
      <BasicAppBanner content={supportContent}/>
        <section className='glabal_text_page mt-5'>
            <Container>
                <Row>
                    <Col dangerouslySetInnerHTML={{ __html: supportData.content}}>
                  
                    {/* {termsData.map((item,index)=><SupportCart key={index} cartData={item}/>)} */}
                   
                    </Col>
                </Row>
            </Container> 
        </section>

        {supportData && supportData.expertise_section && supportData.expertise_section.certified_services && (
              <Expert data={supportData.expertise_section} />
            )}
  </>
    </HelmetProvider>
  )
}

const TermsServicesCart = ({cartData}) =>{
    const {heading,text1,text2,text3,text4,text5}= cartData;
    return(
        <div>
            {heading&& <h5>{heading}</h5>}
             {text1&& <p>{text1}</p>}
             {text2&& <p>{text2}</p>}
             {text3&& <p>{text3}</p>}
             {text4&& <p>{text4}</p>}
             {text5&& <p>{text5}</p>}
        </div>
    )
}

export default TermsServices