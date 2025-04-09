import React from 'react';
import { Link } from 'react-router-dom';
import travelHero from '../../assets/travelhero.jpeg';
import flightBooking from '../../assets/flight-booking.avif';
import forexExchange from '../../assets/forex.webp';
import expertAdvice from '../../assets/financial.png';
import '../../styles/TravelForex.css';

function TravelAssistance() {
  const services = [
    {
      title: "Hassle-free Flight Bookings",
      description: "Our experienced travel consultants will help you find the most convenient and cost-effective flights to your destination.",
      icon: "✈️",
      image: flightBooking
    },
    {
      title: "Expert Travel Advice",
      description: "Get valuable information about preparing for life in your destination country, including cultural norms and local customs.",
      icon: "🧳",
      image: expertAdvice
    },
    {
      title: "Competitive Forex Rates",
      description: "We work with trusted partners to offer exchange rates that beat traditional banks and currency outlets.",
      icon: "💱",
      image: forexExchange
    }
  ];

  const testimonials = [
    {
      quote: "Edwise got me the best flight deal to Canada, saving me over ₹15,000 compared to what I found online!",
      name: "Rahul Sharma",
      destination: "University of Toronto, Canada"
    },
    {
      quote: "Their forex services helped me save significantly on my tuition fee conversion. Highly recommended!",
      name: "Priya Patel",
      destination: "University of Birmingham, UK"
    }
  ];

  return (
    <div className="travel-forex-page">
      {/* Hero Section */}
      <section className="travel-hero">
        <div className="hero-content">
          <h1>Seamless Travel & Forex Assistance</h1>
          <p>Let us handle the logistics while you focus on your study abroad journey</p>
          <Link to="/contact" className="cta-button">Free Expert Consultation</Link>
        </div>
        <div className="hero-image">
          <img src={travelHero} alt="Travel and Forex Assistance" loading="lazy" />
        </div>
      </section>

      {/* Travel Assistance Section */}
      <section className="travel-assistance">
        <div className="section-header">
          <h2>Travel Assistance</h2>
          <p>Edwise has a dedicated team to assist you at every step of your journey abroad</p>
        </div>
        
        <div className="service-highlights">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Forex Assistance Section */}
      <section className="forex-assistance">
        <div className="section-header">
          <h2>Forex Assistance</h2>
          <p>Get the most advantageous currency exchange rates for your study abroad needs</p>
        </div>
        
        <div className="forex-content">
          <div className="forex-image">
            <img src={forexExchange} alt="Forex Exchange" loading="lazy" />
          </div>
          <div className="forex-details">
            <h3>Transparent & Competitive Rates</h3>
            <ul>
              <li>Better rates than banks and traditional exchange outlets</li>
              <li>No hidden charges or surprises</li>
              <li>Assistance with tuition fees and living expenses</li>
              <li>Secure transactions with trusted partners</li>
            </ul>
            <Link to="/contact" className="cta-button-outline">Get Forex Quote</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Students Say About Our Services</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>"{testimonial.quote}"</p>
              <div className="student-info">
                <span className="name">{testimonial.name}</span>
                <span className="destination">{testimonial.destination}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TravelAssistance;