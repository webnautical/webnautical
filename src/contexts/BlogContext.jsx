import React from "react";
import { useState, createContext } from "react";
import blogImg from "../assets/blog-images/mobile-app-development-img-2.webp";
import defaultImg from "../assets/client-review-images/dating-1.webp";
import bannerImg from "../assets/blog-images/blog-01-1.png";

// import blogImg from "..assets/blog-images/mobile-app-development-img-2.png";
// import defaultImg from "../assets/client-review-images/dating-1.webp";

const postCartData = [
  {
    id: "web",
    heading: "Trending Topic",
    detail: {
      title: "web Design",
      titleDiscrption: "1 Artical",
    },
  },
];

const completeCartData = [
  {
    id: "food-blog",
    image: blogImg,
    writerImg: defaultImg,
    developmentSoft: "Mobile App",
    topic: "8 Killing Features of GPT models in Web ",
    artical:
      "Ravi & his team are an excellent developer; has been very resourceful in this project. Unlike other developers, speed is their strength. Very quick delivery and accuracy.",
    name: "Ravi Sharma",
    date: "8 months ago",
    // writerImg:developmentSoft:topic:artical:name:date:like:message:
  },

  {
    id: "flutter-blog",
    image: bannerImg,
    writerImg: defaultImg,
    developmentSoft: "Mobile App",
    topic: " Flutter App Development",
    artical:
      "Ravi & his team are an excellent developer; has been very resourceful in this project. Unlike other developers, speed is their strength. Very quick delivery and accuracy.",
    name: " Sharma",
    date: "8 months ago",
  },
  {
    id: "beacon-blog",
    image: blogImg,
    writerImg: defaultImg,
    developmentSoft: "Mobile App",
    topic: "Beacon App Development",
    artical:
      "Ravi & his team are an excellent developer; has been very resourceful in this project. Unlike other developers, speed is their strength. Very quick delivery and accuracy.",
    name: " Sharma",
    date: "8 months ago",
    // writerImg:developmentSoft:topic:artical:name:date:like:message:
  },
  {
    id: "angular-blog",
    image: blogImg,
    writerImg: defaultImg,
    developmentSoft: "Mobile App",
    topic: "Angular Js App Development",
    artical:
      "Ravi & his team are an excellent developer; has been very resourceful in this project. Unlike other developers, speed is their strength. Very quick delivery and accuracy.",
    name: " Sharma",
    date: "8 months ago",
    // writerImg:developmentSoft:topic:artical:name:date:like:message:
  },
  {
    id: "anroid-blog",
    image: blogImg,
    writerImg: defaultImg,
    developmentSoft: "Mobile App",
    topic: "Anroid App Development",
    artical:
      "Ravi & his team are an excellent developer; has been very resourceful in this project. Unlike other developers, speed is their strength. Very quick delivery and accuracy.",
    name: " Sharma",
    date: "8 months ago",
    // writerImg:developmentSoft:topic:artical:name:date:like:message:
  },
  {
    id: "mobile-app-blog",
    image: blogImg,
    writerImg: defaultImg,
    developmentSoft: "Mobile App",
    topic: "Mobile App Development Process",
    artical:
      "Ravi & his team are an excellent developer; has been very resourceful in this project. Unlike other developers, speed is their strength. Very quick delivery and accuracy.",
    name: " Sharma",
    date: "8 months ago",
  },
];

export const blogContext = createContext();

function BlogProvider({ children }) {
  const [index, setIndex] = useState(1);
  const [realTimeData, setRealTimeData] = useState(completeCartData);
  const tempArray = realTimeData;
  let hideButton = false;

  const loadMoreHandler = () => {
    tempArray.push(completeCartData[index]);
    setRealTimeData(tempArray);
    setIndex(index + 1);
  };

  if (tempArray.length === 6) {
    hideButton = true;
  }

  const value = { loadMoreHandler, realTimeData, hideButton, postCartData };
  return <blogContext.Provider value={value}>{children}</blogContext.Provider>;
}

export default BlogProvider;
