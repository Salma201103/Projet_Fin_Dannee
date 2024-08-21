// About.tsx

import { Link } from "react-router-dom";
import "../pages/About.css"
// import image1 from "../assets/about-img-1.png";
import image2 from "../assets/about-img-6.jpg";
import image1 from "../assets/about-img-5.jpg";

import pic1 from "../assets/pic-1.png";
import pic2 from "../assets/pic-2.png";
import pic3 from "../assets/pic-3.png";
import pic4 from "../assets/pic-4.png";
import pic5 from "../assets/pic-5.png";
import pic6 from "../assets/pic-6.png";
 



const About = () => {
  return (
    // <section className="about-section-page">
    <section className="heading">
       
      
      <section className="about">

        <div className="flex">
          <div className="image">
            {/* Adjust width and height properties to make the image bigger */}
            <img src={image1} alt="image1" style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="content">
            <h3>why choose us?</h3>
            <p>
            At Beyond Horizon, we are dedicated to providing travelers with a seamless booking experience from start to finish. 
            Our platform offers a wide range of accommodations, an intuitive interface, and transparent reviews to help users find their perfect stay. 
            With a secure booking system and round-the-clock customer support, we ensure peace of mind throughout the booking process. 
            Additionally, our exclusive deals and flexible booking options add extra value to every traveler's experience.

            </p>
            <Link to="/register" className="btn">
              register now
            </Link>
          </div>
        </div>
      </section>
      
      <section className="about">

        <div className="flex">
         
          <div className="content">
            <h3>who we are?</h3>
            <p>
            We're not just another booking platform; we're your travel companions, here to streamline the process and empower you to discover hidden gems and revisit cherished destinations.  Imagine a world where booking your dream getaway is a breeze – that's the Beyond Horizon experience. We're here to bridge the gap between you and unforgettable adventures.
            </p>
            <a href="#reviews" className="btn">clients reviews</a>
          </div>

          <div className="image">
            <img src={image2} alt="" />
          </div>
        </div>
      </section>

      <section className="reviews" id="reviews">
      <h1 className="title">Stay Planners</h1>

      <div className="box-container">
        <div className="box">
          <img src={pic2} alt="pic2" />
          <h3>Sara Ben Aissa</h3>
          <p>
          History buff Sara specializes in unearthing hidden gems near your chosen hotel. Explore ancient ruins and charming medinas, all within easy reach of your comfortable stay, curated by Sara.
          </p>
           
          
        </div>

        <div className="box">
          <img src={pic1} alt="pic1" />
          <h3>Yassine Ben Youssef</h3>
          <p>
          Adventurer Yassine unlocks off-the-beaten-path experiences.  Imagine camel rides through the Sahara, or the vibrant energy of local markets.Yassine can add these unique adventures to your hotel booking.
          </p>
        </div>

        <div className="box">
          <img src={pic4} alt="pic4" />
          <h3>Rym Lathif</h3>
          <p>
          Epicurean Rym elevates your culinary journey. Discover local flavors and traditions with in-app recommendations for cooking classes or nearby family-run restaurants, all with a refreshing cup of mint tea suggested by Rym.
          </p>
        </div>

        <div className="box">
          <img src={pic3} alt="pic3" />
          <h3>Omar Trabelsi</h3>
          <p>
          Nature enthusiast Omar helps you explore beyond your hotel. Hike breathtaking mountains, swim in crystal-clear waters, and connect with stunning landscapes – all recommended by Omar, accessible directly within your Beyond Horizons app.
          </p>
        </div>
         
      </div>
    </section>
    </section>
   
  );
};

export default About;
