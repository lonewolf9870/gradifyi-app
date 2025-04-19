import React from "react";
import { Link } from "react-router-dom";
import "../styles/studyabroad.css";
import mainimage from '../assets/studyabroad.jpg';
import ukImage from '../assets/uk.jpg';
import usaImage from '../assets/usa.jpg';
import canadaImage from '../assets/canada.jpg';
import australiaImage from '../assets/australia.jpg';
import newzealandImage from '../assets/newzimage.jpg';
import singaporeImage from '../assets/singapore.jpg';
import irelandImage from '../assets/irelandimage.webp';
import franceImage from '../assets/franceimage.jpeg';
import germanyImage from '../assets/germanyimage.webp';
import switzerlandImage from '../assets/switzimage.jpg';
import dubaiImage from '../assets/dubaiimage.jpg';
import spainImage from '../assets/spainimage.webp';
import malaysiaImage from '../assets/malaysiaimages.jpg';
import mauritiusImage from '../assets/mauimage.jpg';
import italyImage from '../assets/italyimage.jpg';
import netherlandsImage from '../assets/netherlands.jpg';
import indiaImage from '../assets/indiaimage.jpg';

function Home() {
  const countries = [
    { name: "UK", image: ukImage, path: "/study-abroad/uk" },
    { name: "USA", image: usaImage, path: "/study-abroad/usa" },
    { name: "Canada", image: canadaImage, path: "/study-abroad/canada" },
    { name: "Australia", image: australiaImage, path: "/study-abroad/australia" },
    { name: "New Zealand", image: newzealandImage, path: "/study-abroad/newzealand" },
    { name: "Singapore", image: singaporeImage, path: "/study-abroad/singapore" },
    { name: "Ireland", image: irelandImage, path: "/study-abroad/ireland" },
    { name: "France", image: franceImage, path: "/study-abroad/france" },
    { name: "Germany", image: germanyImage, path: "/study-abroad/germany" },
    { name: "Switzerland", image: switzerlandImage, path: "/study-abroad/switzerland" },
    { name: "Dubai", image: dubaiImage, path: "/study-abroad/dubai" },
    { name: "Spain", image: spainImage, path: "/study-abroad/spain" },
    { name: "Malaysia", image: malaysiaImage, path: "/study-abroad/malaysia" },
    { name: "Mauritius", image: mauritiusImage, path: "/study-abroad/mauritius" },
    { name: "Italy", image: italyImage, path: "/study-abroad/italy" },
    { name: "Netherlands", image: netherlandsImage, path: "/study-abroad/netherlands" },
    { name: "India", image: indiaImage, path: "/study-abroad/india" },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Dream Big, Study Smart & Succeed Globally with Expert Guidance!</h1>
          <p>Connect with our experts and take the first step toward studying abroad.</p>

          <div className="action-buttons">
            <Link to={"/contact-us"}><button className="consult-btn">Free expert Consultation</button>
            </Link>
            <button className="download-btn">
              download brouchure
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={mainimage} alt="Study Abroad" />
        </div>
      </section>

      {/* Study Abroad Destinations Section */}
      <section className="study-abroad-section">
        <h2>Your Dream Study Abroad Destination Awaits</h2>
        <p>Explore the countries with the best education in the world! Learn more about top universities, scholarships, cost of living, post-study work rights, and more.</p>
        <div className="countries-grid">
          {countries.map((country, index) => (
            <Link to={country.path} key={index} className="country-card-link">
              <div className="country-card">
                <img
                  src={country.image}
                  alt={`Study in ${country.name}`}
                  className="country-image"
                />
                <div className="country-info">
                  <h3>Study in {country.name}</h3>
                  <span className="explore-text">Explore →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="cta-button">
          <Link to="/contact-us">
          <button className="consult-btn">Book a Free Consultation</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;