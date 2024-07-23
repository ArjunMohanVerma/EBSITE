import Navbar from "./Navbar"
import "./About.css";
import video from './video.mp4';
import Footer from "./Footer";

export default function About() {
 return (
 <>
 <Navbar/>
 <div className="about" style={{width:'97vw'}}>
      <h1>About Company!</h1>
      <p>Find Top-Rated Salons & Exclusive Deals with VYLEE!</p>
      <br/>
      <p>We are dedicated to transforming the
          salon industry by seamlessly connecting
          salon owners with customers through
          innovative and convenient solutions.<br/>
          Our platform acts as a bridge, offering
          exceptional salon services to discerning
          customers who seek high-quality
          experiences.</p>
    
      <br />
      <p>
        <h2>Our Vision!</h2>
        <p>To be the leading digital platform that transforms
            the salon industry by empowering salon owners
                and providing customers with exceptional beauty
            experiences.</p>
      </p>
      <br />
      <p>
        <h2>Our Mission!</h2>
        <p>To revolutionize the salon industry by seamlessly
            connecting salon owners with discerning
            customers through innovative, convenient, and
            high-quality digital solutions, ensuring access to
            top-notch salon services for everyone</p>
      </p>
      <br />

      <h3>Browse through some of our videos!</h3>
      <br />
      <div className="videos" style={{width:'97vw'}}>
      <video
          width="560"
          height="315"
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen controls
        ></video>
        <video
          width="560"
          height="315"
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen controls
        ></video>
        <video
          width="560"
          height="315"
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen controls
        ></video>
        <video
          width="560"
          height="315"
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen controls
        ></video>
        {/*<iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DFRdZZYwljc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pfECwILwlrg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3pzKY6tqf9c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>*/}
      </div>
    </div>
 </>
 )
}
