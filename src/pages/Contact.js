import Navbar from "./Navbar";
import img2 from"../Assets/img2.jpg"
import React from "react";
import contact1 from "../Assets/contact1.jpg";
import Footer from "./Footer";


export default function Contact(){
  const cont={
    display:"inline-block",
    height:"40vw",
    width:"40vw",
    marginLeft:"20px",
   
    float:'left',
  }
  const cont1={
    backgroundImage: `url(${contact1})`,
    boxShadow: '8px 8px 8px 8px black',
    width:'40vw',
    height:'39vw',
    float:'right',
    marginRight:"30px",
    borderRadius:"20px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

  }
  const lbl={
    fontSize:'25px',
    color:'black',
    padding:'60px',
    width:"20px"
  }
  return(
    <>
    <Navbar/>
    <div style={{backgroundColor:'purple' ,height:'45vw'}}>
      <h2 style={{fontSize:'35px'}}><u>Contact Us!</u></h2>
      <div style={cont}>
          <p style={{fontSize:'30px'}}> 
          We are dedicated to transforming the salon industry by seamlessly connecting salon owners with customers through innovative and convenient solutions.
        Our platform acts as a bridge, offering exceptional salon services to discerning customers who seek high-quality experiences.
        </p><br/><br/><br/><br/><br/>
        <h2><u>Address:</u></h2><br/><br/><br/>
        <p>
        STKT BEAUTY AND TECHNOLOGY PVT LTD<br/>
        FF-229, FIRST FLOOR, TOWER A ANSAL API, PALAM<br/>
        CORPORATEPLAZA, GURUGRAM, HARYANA 122017<br/>
        PHONE:9311220116, EMAIL: SUPPORT@VYLEESALON.IN<br/>
        CIN No.:U96905HR2024PTC119569
        </p>
        </div>
        <div style={cont1}>
          <div style={{color:"blue", fontSize:"40px",backgroundColor:"blue",color:"white",width:"16vw",margin: "0 auto",borderRadius:"5px",marginTop:"10px",boxShadow: '2px 2px 2px 2px black'}}><u>Contact Us!</u></div>
          <form style={{marginTop:"50px",marginLeft:"50px"}}>
            <table>
              <tr>
              <td>
              <label style={lbl}><u>Name :  </u></label>
              </td>
              <td>
              <input type="text" placeholder="Enter Your Name"/>
              </td>
              </tr><br/><br/>
              <tr>
              <td>
              <label style={lbl}><u>Email :  </u></label>
              </td>
              <td>
              <input type="email" placeholder="Enter Your Email ID"/>
              </td>
              </tr><br/><br/>
              <tr>
              <td>
              <label style={lbl}><u>Contact No. :  </u></label>
              </td>
              <td>
              <input type="number" placeholder="Enter Your Contact Number"/>
              </td>
              </tr><br/><br/>
              <tr>
              <td>
              <label style={lbl}><u>Message :  </u></label>
              </td>
              <td>
              <textarea type="textbox" placeholder="Enter Your Message" rows="5" cols="21" style={{resize:"none"}}/><br/><br/><br/><br/>
              </td>
              </tr><br/><br/>
            </table>
            <button style={{width:"160px", height:"60px", borderRadius:"5px",fontSize:"25px",backgroundColor:"blue",color:"white",boxShadow: '2px 2px 2px 2px black'}}>Submit</button>
          </form>
          
        </div>

    </div>
    </>
  )
}