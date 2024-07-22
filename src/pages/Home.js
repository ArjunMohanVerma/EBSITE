import React from "react";
import background1 from "../Assets/background1.jpg";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import Footer from"./Footer";
import { FiArrowRight } from "react-icons/fi";
import './Home.css'

import ImageSlider from "./ImageSlider";




const Home = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
    
  ];
  const containerStyles = {
    border: '3px solid rgba(0, 0, 0, 0.05)',
    width: "700px",
    height: "280px",
    margin: "0 auto",
    marginTop: "200px",
    boxShadow: '5px 5px 5px black',
    
  };
      return (<>
        <div className="home-container" style={{ backgroundImage: `url(${background1})` ,width:'97vw'}}>
        <Navbar />
        <div className="home-banner-container" >
          <div className="home-text-section">
            <h1 className="primary-heading">
              <marquee>
              Find Top-Rated Salons & Exclusive Deals with VYLEE!
              </marquee>
            </h1>
            <p className="primary-text" style={{width:"75vw",marginLeft:"12vw",}}>
            <br/><br/><br/>
            STKT Beauty & Technology is a company fueled by a singular mission: revolutionizing the salon industry through our innovative platform, VYLEE.<br/> VYLEE serves as a bridge, seamlessly connecting exceptional salon services with discerning customers seeking an empowering beauty experience.
            <br/>At STKT, we envision a thriving beauty ecosystem where both salons and clients flourish. <br/>In today's digital age, attracting new clients and streamlining operations are critical to success.<br/> That's why we created VYLEE, a comprehensive platform specifically designed to empower salon owners and elevate their businesses.

            <h3>Our Vision:</h3>
            To be the leading digital platform that transforms the salon industry by empowering salon owners and providing customers with exceptional beauty experiences.
            <h3>Our Mission:</h3>
            To revolutionize the salon industry by seamlessly connecting salon owners with discerning customers through innovative, convenient, and high-quality digital solutions, ensuring access to top-notch salon services for everyone.
            <br/><br/><br/><br/>
            </p>
            
          </div>
          <div className="home-image-section">
          <div style={containerStyles}>
                <ImageSlider slides={slides} />
          </div>
          </div>
        </div><br/>
      </div>
      </>
    );
  };
  
  export default Home;
  