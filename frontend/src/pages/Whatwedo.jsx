import React from 'react';
import { Link } from 'react-router-dom';
import mainimage from '../assets/whatwedo.png';
import '../styles/whatwedo.css';
import image1 from '../assets/carrerc.jpg';
import image2 from '../assets/universitypartners.jpg';
import image3 from '../assets/scholarships.jpeg';
import topCountryImage from "../assets/image2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Whatwedo() {
    const cards = [
        { image: image1, title: "Personalized Counseling", text: "We provide one-on-one counseling to help you choose the right country, university, and course." },
        { image: image2, title: "Application Assistance", text: "Our experts guide you through the application process, ensuring all documents are in place." },
        { image: image3, title: "Visa & Pre-Departure Guidance", text: "From visa processing to travel arrangements, we ensure a smooth journey for you." }
    ];

    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>Dream Big, Study Smart & Succeed Globally with Expert Guidance!</h1>
                    <p>Connect with our experts and take the first step toward studying abroad.</p>
                    <div className="action-buttons">
                        <Link to="/contact-us"><button className="consult-btn">Free Expert Consultation</button></Link>
                        <button className="whatsapp-btn">Download Brochure</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={mainimage} alt="Study Abroad" />
                </div>
            </section>

            {/* Info Section with Alternating Cards */}
            <section className="info-section">
                {cards.map((card, index) => (
                    <div key={index} className={`info-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
                        <div className="info-content">
                            <h2>{card.title}</h2>
                            <p>{card.text}</p>
                        </div>
                        <div className="info-image">
                            <img src={card.image} alt={card.title} />
                        </div>
                    </div>
                ))}
            </section>

            <section className="top-countries-section">
                    <div className="top-countries-content">
                      <h2>Explore Top Study Destinations</h2>
                      <p>
                        Discover the best countries for your higher education and future
                        career growth. Let us help you choose the right destination based on
                        your preferences and career aspirations.
                      </p>
                      <div className="social-icons">
                      <Link to="/contact-us" className="contact-button"><button>
                      Contact Us</button></Link>
                        <a href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.instagram.com/gradifyi?igsh=MWlhZnI5aHd6cWQ3Mg==">
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
        </>
    );
}

export default Whatwedo;