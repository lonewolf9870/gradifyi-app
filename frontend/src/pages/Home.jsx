import React from "react";
import "../styles/Home.css";
import mainimage from "../assets/mainimage.jpg";
import whatsapp from "../assets/whatsapp.svg";
import topCountryImage from "../assets/image2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Dream Big, Study Smart & Succeed Globally with Expert Guidance!
          </h1>
          <p>
            Connect with our experts and take the first step toward studying
            abroad.
          </p>

          <div className="action-buttons">
            <Link to={"/contact-us"}><button className="consult-btn">Book Free Consultation</button>
            </Link>
            <a
              href="https://wa.me/919966642053?text=Hello%20I%27m%20interested%20in%20your%20study%20programs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="whatsapp-btn">
                <img src={whatsapp} alt="whatsapp" /> WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={mainimage} alt="Study Abroad" />
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="universities-section">
        <h2>Top Universities Partnered With</h2>
        <div className="universities-grid">
          <div className="university-card">
            <img src="./images/universities/usa1.webp" alt="University 1" />
            <p>University of North Alabama</p>
          </div>
          <div className="university-card">
            <img src="./images/universities/france2.webp" alt="University 2" />
            <p>TOULOUSE BUSINESS SCHOOL</p>
          </div>
          <div className="university-card">
            <img src="./images/universities/okanagan5.jpeg" alt="University 3" />
            <p>Okanagan College</p>
          </div>
          <div className="university-card">
            <img src="./images/universities/auburnuniversity.webp" alt="University 4" />
            <p>Auburn University at Montgomery</p>
          </div>
          <div className="university-card">
            <img src="./images/universities/nz3.jpg" alt="University 4" />
            <p>THE UNIVERSITY OF OTAGO</p>
          </div>
          <div className="university-card">
            <img src="./images/universities/germany5.jpg" alt="University 4" />
            <p>ARDEN UNIVERSITY</p>
          </div>
          <div className="university-card">
            <img src="./images/universities/singapore4.jpg" alt="University 4" />
            <p>PSB ACADEMY</p>
          </div>
        </div>
      </section>

      {/* Top Countries Section */}
      <section className="top-countries-section">
        <div className="top-countries-content">
          <h2>Explore Top Study Destinations</h2>
          <p>
            Discover the best countries for your higher education and future
            career growth. Let us help you choose the right destination based on
            your preferences and career aspirations.
          </p>
          <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="top-countries-image">
          <img src={topCountryImage} alt="Top Study Destinations" />
        </div>
      </section>
    </div>
  );
}

export default Home;
