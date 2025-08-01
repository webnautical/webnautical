import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
export const Front = ({ cmp }) => {
  const Component = cmp

  const location = useLocation();
  const currentPath = location.pathname;

  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, [currentPath]);

  return (
    <>
      {
        loading ? <>
          <div className="loading-spinner"></div>
        </>
          :
          <>
            <Header />
            <Component />
            <Footer />
          </>
      }
    </>
  )
}
