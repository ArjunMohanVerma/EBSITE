import React from "react";
import background from "../Assets/background.jpg";
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
    
  };
      return (<>
        <div className="home-container" style={{ backgroundImage: `url(${background})` ,width:'97vw'}}>
        <Navbar />
        <div className="home-banner-container" >
          <div className="home-text-section">
            <h1 className="primary-heading">
              <marquee>
              Find Top-Rated Salons & Exclusive Deals with VYLEE!
              </marquee>
            </h1>
            <p className="primary-text">
              Healthy switcher chefs do all the prep work, like peeding, chopping
              & marinating, so you can cook a fresh food.
              sample text sample text sample text sample text sample text sample text sample text <br/>
              sample text sample text sample text sample text sample text sample text sample textsample text sample text sample text sample text  <br/>
              sample text sample text sample text sample text sample text sample text sample text <br/>
            
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
  