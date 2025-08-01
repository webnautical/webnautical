import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PortfolioBanner from './portfolio-layout/PortfolioBanner';
import PortfolioTextSec from './portfolio-layout/PortfolioTextSec';
import PortfolioOwlCrousel from './portfolio-layout/PortfolioOwlCrousel';
import config from '../../config';
import Skeleton from '@mui/material/Skeleton';
import { Navigate, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function ProjectDeatils() {
  const { slug } = useParams();
  console.log('slug', slug);
  const [loading, setLoading] = useState(true);
  const [caseStudy, setCaseStudy] = useState({});
  const helmetContext = {};
  const navigate=useNavigate();
  const caseStudyRecored = async () => {
    try {
      const params = { page_slug: slug };
      console.log(params, 'params');
      const response = await fetch(`${config.url}/v1/get_casestudy`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const apidata = await response.json();
      console.log('Case Study apidata', apidata);

      if (apidata.status === 'success') {
        setCaseStudy(apidata.data);
      }
      setLoading(false);
    } catch (error) {
      navigate('/*')
      setLoading(false);
      console.error('Error:', error);
    }
  };

  useLayoutEffect(() => {
    caseStudyRecored();
  }, [slug]);

  useEffect(() => {
    console.log(caseStudy, 'caseStudyRecored');
  }, [caseStudy]);

  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{caseStudy.meta_title}</title>
          <meta name="description" content={caseStudy.meta_description} />
        </Helmet>
        {/* Loader */}
        {loading && (
          <>
            <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />
            <Skeleton variant="text" width="70%" height={30} animation="wave" />
            <Skeleton variant="text" width="40%" height={30} animation="wave" />
            <Skeleton variant="text" width="50%" height={30} animation="wave" />
          </>
        )}

        {/* Main content */}
        {!loading && (
          <>
            {caseStudy && caseStudy.gallery && caseStudy.background_image && <PortfolioBanner caseStudy={caseStudy} />}
            {caseStudy && <PortfolioTextSec caseStudy={caseStudy.content_1} />}
            {caseStudy && caseStudy.gallery && <PortfolioOwlCrousel caseStudy={caseStudy} />}

            <PortfolioTextSec caseStudy={caseStudy.content_2} />
          </>
        )}
      </>
    </HelmetProvider>
  );
}

export default ProjectDeatils;
