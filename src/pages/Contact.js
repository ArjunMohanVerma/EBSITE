import Navbar from "./Navbar";
import img2 from"../Assets/img2.jpg"
import React from "react";
import Footer from "./Footer";


export default function Contact(){
  {/*const addr={
    display:'inline-block',
    width:'97vw',
    height: '30vw',
    color:"white",

  }
  const forms={
    verticalAlign: 'top',
    marginTop:"5vw",
    float:'right',
    display:'inline-block',
    width:"50vw",
    height:"40vw",
    backgroundColor:'red',
  }*/}
  return(
    <>
    <Navbar/>
    <div style={{backgroundColor:'purple'}}>
      <h1><u>Contact Us</u></h1>
      <div>
        <div>
          <p>
          We are dedicated to transforming the salon industry by seamlessly connecting salon owners with customers through innovative and convenient solutions.
        Our platform acts as a bridge, offering exceptional salon services to discerning customers who seek high-quality experiences.
        </p>
        <h2><u>Address:</u></h2><br/><br/><br/>
        <p>
        STKT BEAUTY AND TECHNOLOGY PVT LTD<br/>
        FF-229, FIRST FLOOR, TOWER A ANSAL API, PALAM<br/>
        CORPORATEPLAZA, GURUGRAM, HARYANA 122017<br/>
        PHONE:9311220116, EMAIL: SUPPORT@VYLEESALON.IN<br/>
        CIN No.:U96905HR2024PTC119569
        </p>
        </div>
      </div>
      <div>
        <form>
          <label>Name :  </label>
          <input type="text" placeholder="Enter Your Name"/><br/>
          <label>Email :  </label>
          <input type="email" placeholder="Enter Your Email ID"/><br/>
          <label>Contact No. :  </label>
          <input type="number" placeholder="Enter Your Contact Number"/><br/>
          <label>Message :  </label><br/>
          <input type="textbox" placeholder="Enter Your Message"/>

        </form>
      </div>

    </div>


    </>
  )
}