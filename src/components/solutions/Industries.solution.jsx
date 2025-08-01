import React from "react";
import IndustriesServices from "../Home/IndustriesServices.home";
import LayoutPrimerySec from "../layout-sections/LayoutPrimerySec";
//components imports
import BasicBanner from "../layout-sections/BasicBanner";
import education from "../../assets/educaton.png";
import food from "../../assets/food.png";
import health from "../../assets/health.png";
import sports from "../../assets/sports.png";
import { Col, Container, Row } from "react-bootstrap";
//images imports
import entertainmentImg from "../../assets/solutions-images/entertainment.png";
import industrieImg from "../../assets/solutions-images/industries.png";
import educationImg from "../../assets/solutions-images/learning.png";
import healthImg from "../../assets/solutions-images/healthcare.png";
import sportsImg from "../../assets/solutions-images/sports.png";
import datingImg from "../../assets/solutions-images/dating.png";
import realEstateImg from "../../assets/solutions-images/real-estate.png";
import travelImg from "../../assets/solutions-images/travel.png";
import ecommerceImg from "../../assets/solutions-images/e-commerce.png";
import bankingImg from "../../assets/solutions-images/banking.png";
import foodImg from "../../assets/solutions-images/food.png";
// import educationImg

export const industriesData = [
  {
    id: "education",
    indusImage: educationImg,
    heading: "Learning & Education",
    title:
      "We use profoundly intuitive eLearning and Educational Apps and Management Portals to reshape education.",
    subHeading: "Learning & Education Industry Solutions",
    text1:
      "The education sector is the most growing sector and the growth in this sector is ensured or even can be multiplied if the technologies are properly utilized. As the education industry is taking a step forward in digitization, e-learning becomes the most important tool for growth.",
    text2:
      "Web Nautical understands the capability of innovation in the training and eLearning industry, and we give inventive arrangements at the exceptionally base end. Beginning from intelligent study halls to finely-molded, innovation-empowered learning techniques, we convey the up-and-coming age of learning. With our answers, you gain admittance to further develop and improving learning strategies, remote learning, portable learning, better administration of establishment exercises, and considerably more.",
    text3: "",
  },
  {
    id: "entertainment",
    indusImage: entertainmentImg,
    heading: "Entertainment Industry",
    title:
      "Investigate our center amusement arrangements that are engaged from creation till dissemination.",
    subHeading: "Entertainment Industry Solutions",
    text1:
      "With our high-level mechanical ramifications, we foster media and diversion applications that are very quick, accompany fewer capacity abilities and save your web simultaneously. We make portable applications that permit you to mess around, book tickets for the live shows and shows, permit making impeccable correspondence, and considerably more.",
    text2:
      "Our On-request entries are made very got and don’t permit any sort of hot connecting and chips away at the single idea snap and offer. We focus on it for making them viable across every one of the media stages so that, to cause your business to overcome a huge client base.",
    text3: "",
  },
  {
    id: "food",
    indusImage: foodImg,
    heading: "Food Industry",
    title:
      "We make creative answers for changing your Food and Restaurant Businesses.",
    subHeading: "Food Industry Solutions",
    text1:
      "The arising idea of portable applications had surprised the idea of advancement. Each little portion of the business is taking on the ideation of having a versatile application for serving their client base. The Food business is arising as a significant name in this situation as it permits them to serve their food and contributions to individuals sitting at a far-off place.",
    text2:
      "Considering the opposition that is occurring across the globe, we make applications for your cafés that permit your client to investigate every one of the related subtleties directly from the atmosphere and menu to the conveyances. In this way, presently request your #1 food and it will be there as soon as humanly possible on your doorsteps, with the versatile applications that are sewed to your administrations.",
    text3: "",
  },
  {
    id: "health",
    indusImage: healthImg,
    heading: "Health Industry",
    title:
      "Our innovation arrangements help Healthcare and Medical Industry work on tolerant consideration through productive Software, Mobile App and Web Solutions.",
    subHeading: "Health Industry Solutions",
    text1:
      "Versatile applications have upset the way, individuals keep up with their wellness, medical clinics analyze their patients, wellbeing reports are being sent. Right from deciding the nature of rest to estimating your heartbeat and heartbeat rate, the portable applications are covering all of you.",
    text2:
      "The second the patient strides into the emergency clinic, the telephone number is being confirmed and you share every one of the solutions, reports, diet, next meeting with an update as well. Indeed, the portable applications have made it very simple and we at Web Nautical IT arrangement are making it a lot simpler with the assistance of wellbeing and wellness applications,that will show all the data at a solitary touch and will follow your orders even while you are on a go. Along these lines, we are making every one of the fundamental strides that will precisely coordinate with your wellness objectives and wellbeing necessities.",
    text3: "",
  },
  {
    id: "sports",
    indusImage: sportsImg,
    heading: "Sports Industry",
    title:
      "Sports Betting is a prominent industry and is capable of generating billion-dollar business.",
    subHeading: "Sports Industry Solutions",
    text1:
      "We make Powerful games wagering applications, Cricket wagering application advancement, Soccer wagering application improvement, Football wagering application advancement, Baseball wagering application advancement, and Horseracing wagering application improvement loaded with amazing elements, intuitive plans, and extraordinary straightforwardness.",
    text2: "",
    text3: "",
  },
  {
    id: "banking",
    indusImage: bankingImg,
    heading: "Banking Industry",
    title:
      "Tap the upsides of Technology with Innovative Solutions for Banks and Financial Institutions.",
    subHeading: "Banking Industry Solutions",
    text1:
      "The Banking and Finance Solutions given by Web Nautical IT Solution smooth out the installment framework, exchange cycles, and portable banking to assist with working on the work process. We take into account the necessities of banking establishments, finance organizations, and insurance agencies to coordinate with the innovation needs of the business.",
    text2:
      "Directly from fostering a net banking application to e-Wallet and information the executive’s arrangements, we ensure that the monetary organizations utilize innovation in their everyday exercises. We have helped many associations in investigating inventive procedures to further develop the work processes, decrease costs and smooth out their activities. Our answers are fit for conveying similar advantages for your organization.",
    text3: "",
  },
  {
    id: "dating",
    indusImage: datingImg,
    heading: "Dating Industry",
    title:
      "Searching for a dating site improvement group to transform your thought into a functioning reality? Recruit top engineers who acquire the market a dating entry that unites the right matches.",
    subHeading: "Dating Industry Solutions",
    text1:
      "With the dispatch of Tinder, a surge is seen in mobile application administrations. Prior individuals utilized an announcement to meet outsiders who were searching for long-haul connections. Portable Dating applications like Tinder, Bumble, and Happen have made it simple for individuals to discover a match in their bustling timetables. These applications assisted individuals to start a talk with someone else they are keen on and can design a get-together when they are keen on taking the discussion further.",
    text2:
      "Thinking about the developing pace of this industry, our portable application developers convey custom dating application answers for organizations that keep them on top among enormous players. Assuming you are intending to foster a dating application, you have arrived in the perfect spot. With Diligence as a specialist organization, your ROI will develop past limits.",
    text3:
      "We put Best Features that make your App Best on the App Score Board each day.",
  },
  {
    id: "real-estate",
    indusImage: realEstateImg,
    heading: "Real Estate Industry",
    title:
      "Amazing Solutions to Transform the Real Estate and Housing Industry.",
    subHeading: "Real Estate Industry Solutions",
    text1:
      "Being perhaps the biggest business on the planet, Real Estate has a colossal capability of innovation fuse. While the enormous piece of the land business actually relies on conventional instruments and strategies, Web Nautical IT Solution attempts to make imaginative and progressed answers for the Real Estate and Housing Industry.",
    text2:
      "We make state-of-the-art arrangements like online interfaces, programming arrangements, and portable applications for the land and lodging industry. We make arrangements like Auction/Property Portals, Auction Software/Reverse Auction Software, CRM/ERP Solutions, Web Applications and Portal Development, Real Estate Mobile Applications, Property Buy/Sell Portals, Tenant Management Solutions, Online Property Booking and so forth.",
    text3: "",
  },
  {
    id: "travel",
    indusImage: travelImg,
    heading: "Travel Industry",
    title: "A streamlined method to achieve your voyaging prerequisites.",
    subHeading: "Travel Industry Solutions",
    text1:
      "Understanding the worries of the voyaging enterprises, we make versatile applications that not just permit you to book the tickets or plans for your excursion, yet additionally give you the alternative for booking the rooms, or leasing the vehicle and helps you in discovering every one of the connected discoverable spots.",
    text2:
      "We at Web Nautical IT Solution design the best and dominated travel applications that permit you to move or trade the money, the objections that are to be found, discover the movement guide and permits you to coordinate with the time regions, in the event that you are voyaging abroad, in this manner making your excursion very streamlined and bother free.",
    text3: "",
  },
  {
    id: "e-commerce",
    indusImage: ecommerceImg,
    heading: "E-commerce Industry",
    title:
      "While a larger part of makers looking for the best item, they additionally need to track down the most ideal approach to connect with their clients. Without a stage, they cannot sell their exceptional item. This is the place where e-commerce is used.",
    subHeading: "E-commerce Industry Solutions",
    text1:
      "At Web Nautical, we give adaptable internet-based business arrangements across every electronic stage. Utilizing our involvement with first-rate quality plan and advancement, the group is inspired to fabricate tasks to elevate web-based shopping to B2B and B2C adventures so they can sell their best items on the right stages.",
    text2: "",
    text3: "",
  },
];

function Industries({ id }) {
  const { heading, title, subHeading, indusImage, text1, text2, text3 } =
    industriesData.find((item) => id === item.id);

  const basicBannerData = {
    heading: heading,
    title: title,
    image: industrieImg,
    title1: "",
  };

  const layoutPrimeryData = {
    id: id,
    subHeading: subHeading,
    image: indusImage,
    text1: text1,
    text2: text2,
    text3: text3,
  };
  return (
    <>
      <BasicBanner data={basicBannerData} />

      <LayoutPrimerySec data={layoutPrimeryData} />


      

      <section className="exerp_in">
      <Container>
        <div
          className="global_heading mb-5"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
            <div className="icon">
                        <img src={circleimg} alt="Expertise" />
                      </div>
          <span>Expertise</span>
          <h2>Industries We Serve</h2>
        </div>
        <Row className="mt-5">
          <Col md="3" className="mb-3">
            <div className="industry_box">
              <div className="icon_box">
                <img src={education} alt="Education" />
              </div>

              <div className="name mt-3">Education</div>
              <p className="mt-3">
                Find out how we’re helping future-proof safety and security.
              </p>

              <button className="Read_more mt-5">Read More</button>
            </div>
          </Col>
          <Col md="3" className="mb-3">
            <div className="industry_box">
              <div className="icon_box">
                <img src={food} alt="Food" />
              </div>

              <div className="name mt-3">Food</div>
              <p className="mt-3">
                Find out how we’re helping future-proof safety and security.
              </p>

              <button className="Read_more mt-5">Read More</button>
            </div>
          </Col>
          <Col md="3" className="mb-3">
            <div className="industry_box">
              <div className="icon_box">
                <img src={health} alt="Health" />
              </div>

              <div className="name mt-3">Health</div>
              <p className="mt-3">
                Find out how we’re helping future-proof safety and security.
              </p>

              <button className="Read_more mt-5">Read More</button>
            </div>
          </Col>
          <Col md="3" className="mb-3">
            <div className="industry_box">
              <div className="icon_box">
                <img src={sports} alt="Sports" />
              </div>

              <div className="name mt-3">Sports</div>
              <p className="mt-3">
                Find out how we’re helping future-proof safety and security.
              </p>

              <button className="Read_more mt-5">Read More</button>
            </div>
          </Col>
          <Col md="3" className="mb-3">
            <div className="industry_box">
              <div className="icon_box">
                <img src={education} alt="Education" />
              </div>

              <div className="name mt-3">Education</div>
              <p className="mt-3">
                Find out how we’re helping future-proof safety and security.
              </p>

              <button className="Read_more mt-5">Read More</button>
            </div>
          </Col>
          <Col md="3" className="mb-3">
            <div className="industry_box">
              <div className="icon_box">
                <img src={food} alt="Food" />
              </div>

              <div className="name mt-3">Food</div>
              <p className="mt-3">
                Find out how we’re helping future-proof safety and security.
              </p>

              <button className="Read_more mt-5">Read More</button>
            </div>
          </Col>
          <Col md="3" className="mb-3">
            <div className="industry_box">
              <div className="icon_box">
                <img src={health} alt="Health" />
              </div>

              <div className="name mt-3">Health</div>
              <p className="mt-3">
                Find out how we’re helping future-proof safety and security.
              </p>

              <button className="Read_more mt-5">Read More</button>
            </div>
          </Col>
          <Col md="3" className="mb-3">
            <div className="industry_box">
              <div className="icon_box">
                <img src={sports} alt="Sports" />
              </div>

              <div className="name mt-3">Sports</div>
              <p className="mt-3">
                Find out how we’re helping future-proof safety and security.
              </p>

              <button className="Read_more mt-5">Read More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
      {/* <IndustriesServices /> */}
    </>
  );
}

export default Industries;
