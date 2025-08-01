import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

// components imports
import ScrollToTop from './components/solutions/ScrollToTop';
import Header from './components/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact/Contact';
import AppSolution from './components/solutions/AppSolution';
// import Industries from "./components/solutions/Industries.solution";
import Sitemap from './components/sitemap/Sitemap.jsx';
// import { industriesData } from "./components/solutions/Industries.solution";

// import { solutionData } from "./components/solutions/AppSolution";
// import { portfolioDetailsData } from "./components/portfolio/ProjectDeatils";
import CompanyProfile from './components/Company/CompanyProfile';
import Ifratecture from './components/Company/Ifratecture';
import WebNauticalLife from './components/Company/WebNauticalLife';
import Partnership from './components/Company/Partnership';
import WebNauticalBlog from './components/Company/WebNauticalBlog';
import WebNauticalCareer from './components/Company/WebNauticalCareer';
import FreeQuote from './components/Buttons-navigations/FreeQuote';
import DeveloperHiring from './components/Buttons-navigations/DeveloperHiring';
import MobileAppDevelopment from './components/services/mobile.development';
import PrivacyPolice from './components/Footer-Components/PrivacyPolice';
import TermsServices from './components/Footer-Components/TermsServices';
import BlogDetail from './components/Company/BlogDetail';
import Error from './components/error404/Error';
import Testimonilas from './components/Footer-Components/Testimonilas';
import Portfolio from './components/portfolio/Portfolio';
import ProjectDeatils from './components/portfolio/ProjectDeatils';
import Expertise from './components/ourexpertise/Expertise.jsx';
import AOS from 'aos';
import Success from './components/Success';
// import Formglobalquote from './components/Getquote/Formglobalquote.jsx';
import 'aos/dist/aos.css';
// import PortfolioBanner from './components/portfolio/portfolio-layout/PortfolioBanner';
import Lifewebnaticaldetails from './components/webnauticallife/LifeWebnaticalDetails.jsx';
// style imports
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import './style/responsive.css';
import { useEffect, useState } from 'react';
import Industries from './components/Industries/industry.jsx';
import HireDeveloper from './components/hireDevelopers/HireDeveloper.jsx';
import Banner from './components/Home/Banner.home.jsx';
import { DeveloperList } from './components/HireDevelopers/DeveloperList.jsx';
import { Front } from './Front.jsx';
import ServicesMain from './components/ServiceMain/ServicesMain.jsx';
import Digitalmarketing from './components/Digitalmarketing/Digitalmarketing.jsx';
import DigitalMarketing from './components/ServiceMain/DigitalMarketing.jsx';
import Support from './components/Footer-Components/Support.jsx';
import RefundPolicy from './components/Footer-Components/RefundPolicy.jsx';
import WebHosting from './components/Hosting/WebHosting.jsx';

function App() {

  useEffect(() => {
    AOS.init();

    AOS.refresh();
  }, []);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);



  return (
    <>

      <Router>
        <Routes>

          <Route path="/" element={<Front cmp={Home} />} />
          <Route path="/contact" element={<Front cmp={Contact} />} />
          <Route path="/Lifewebnaticaldetails" element={<Front cmp={Lifewebnaticaldetails} />} />
          <Route path="/Digitalmarketing" element={<Front cmp={Digitalmarketing} />} />
          <Route path="/company-profile" element={<Front cmp={CompanyProfile} />} />
          <Route path="/infrastructure" element={<Front cmp={Ifratecture} />} />
          <Route path="/life-web-nautical" element={<Front cmp={WebNauticalLife} />} />
          <Route path="/partnership" element={<Front cmp={Partnership }/>} />
          <Route path="/career" element={<Front cmp={WebNauticalCareer} />} />
     
          {/* <Route path="/get-a-quote" element={<Front cmp={FreeQuote} />} /> */}
          <Route path="/blog" element={<Front cmp={WebNauticalBlog }/>} />
          <Route path="/banner" element={<Front cmp={Banner }/>} />
          <Route path="/hire-developer/:slug" element={<Front cmp={HireDeveloper} />} />
          <Route path="/mobile-app-development" element={<Front cmp={MobileAppDevelopment} />} />
          <Route path="/privacy-policy" element={<Front cmp={PrivacyPolice} />} />
          <Route path="/term-of-service" element={<Front cmp={TermsServices }/>} />
          <Route path="/refund-policy" element={<Front cmp={RefundPolicy }/>} />
          <Route path="/support" element={<Front cmp={Support }/>} />
          {/* <Route path="/testimonials" element={<Front cmp={Testimonilas} />} /> */}
          <Route path="/work" element={<Front cmp={Portfolio} />} />
          <Route path="/case-study/:slug" element={<Front cmp={ProjectDeatils} />} />
          <Route path="/services/:slug" element={<Front cmp={AppSolution }/>} />
          {/* <Route path="/success" element={<Front cmp={Success}/>} /> */}
          <Route path="/expertise/:slug" element={<Front cmp={Industries} />} />
          <Route path="/hire-developers" element={<Front cmp={DeveloperList} />} />
          <Route path="/blogdetail/:post_slug" element={<Front cmp={BlogDetail }/>} />
          <Route path="/service-main/:slug" element={<Front cmp={ServicesMain} />} />
          <Route path="/*" element={<Front cmp={Error} />} />
          <Route path="/digital-marketing" element={<Front cmp={DigitalMarketing} />} />
          <Route path="/web-hosting" element={<Front cmp={WebHosting} />} />
          <Route path="/sitemap" element={<Front cmp={Sitemap} />} />
        </Routes>
        <ScrollToTop />
      </Router>

    </>
  );
}

export default App;
