import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import mainimage from "../assets/studentservice.jpg";
import service1 from "../assets/scholarships.jpeg";
import service2 from "../assets/financial.png";
import service3 from "../assets/forex.webp";
import service4 from "../assets/testp.jpg";
import service5 from "../assets/visa.jpeg";
import service6 from "../assets/carrerc.jpg";
import topCountryImage from "../assets/image2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
  faAward,
  faMoneyBillWave,
  faExchangeAlt,
  faBook,
  faPassport,
  faUserTie
} from "@fortawesome/free-solid-svg-icons";
import "../styles/studentservices.css";

function StudentServices() {
  const services = [
    { 
      id: 1,
      title: "Scholarships",
      path: "scholarships",
      description: "Discover funding opportunities for your international education",
      icon: faAward,
      image: service1
    },
    { 
      id: 2,
      title: "Financial Aid",
      path: "financial-aid",
      description: "Guidance on loans and financial support options",
      icon: faMoneyBillWave,
      image: service2
    },
    { 
      id: 3,
      title: "Forex Assistance",
      path: "forex-assistance",
      description: "Help with currency exchange and international transactions",
      icon: faExchangeAlt,
      image: service3
    },
    { 
      id: 4,
      title: "Test Preparation",
      path: "test-prep",
      description: "Resources for IELTS, TOEFL, GRE, and other exams",
      icon: faBook,
      image: service4
    },
    { 
      id: 5,
      title: "Visa Guidance",
      path: "visa-guidance",
      description: "Expert assistance with visa applications",
      icon: faPassport,
      image: service5
    },
    { 
      id: 6,
      title: "Career Consultancy",
      path: "career-consultancy",
      description: "Personalized career path recommendations",
      icon: faUserTie,
      image: service6
    }
  ];

  return (
    <div className="student-services-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Dream Big, Study Smart & Succeed Globally with Expert Guidance!</h1>
          <p>
            Connect with our experts and take the first step toward studying
            abroad.
          </p>
          <div className="action-buttons">
            <button className="consult-btn">Free Expert Consultation</button>
            <button className="whatsapp-btn">Download Brochure</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={mainimage} alt="Study Abroad" />
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-section">
        <h2>Our Student Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <Link to={service.path} key={service.id} className="service-card">
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
              </div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="learn-more-btn">Learn More →</button>
              </div>
            </Link>
          ))}
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
          <div className="social-section">
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
        </div>
        <div className="top-countries-image">
          <img src={topCountryImage} alt="Top Study Destinations" />
        </div>
      </section>
    </div>
  );
}

export default StudentServices;