import Navbar from "./Navbar"
import Footer from"./Footer";
import img2 from "../Assets/img2.jpg";
import CardContent from '@mui/material/CardContent';
import Button from 'react-bootstrap/Button';
import { Card } from "../pages/Card";

export default function Services() {
  const stl=
      {
          height: '100%',
          display: 'inline-block',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }
        const stl2={
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#faf9f6',
        }
    return (
    <>
    <Navbar/>
    <div style={{backgroundColor: "rgba(128, 0, 128, 0.5)"}}>
    <h1 style={{fontSize:"45px"}}><u>Our Services!</u></h1>
    <div className="App">
      <div className="col" style={stl}>
        
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
      />
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
      />
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
      />
    </div>
    <div className="col" style={stl}>
    <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
      />
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
      />
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
      />
    </div>
    
    </div>
    </div>
    </>
    
    );
  }
  