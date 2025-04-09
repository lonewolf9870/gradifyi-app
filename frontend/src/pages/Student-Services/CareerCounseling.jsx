import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import counselingHero from '../../assets/carrerc.jpg';
import '../../styles/CareerCounseling.css';
import detailedReport from '../../assets/detailed-report.jpg';

function CareerCounseling() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const benefits = [
    "Career Guidance and Counseling",
    "Effective Recruitment and Selection",
    "Personal Development & Skill Enhancement",
    "Educational Planning & Academic Success",
    "Promotion and Career Advancement",
    "Objective Assessment",
    "Enhanced Self-Awareness",
    "Adaptability & Future Planning",
    "Competitive Advantage"
  ];

  const testTypes = [
    {
      id: 1,
      title: "Aptitude",
      description: "Valuable tool that provides insights into an individual's abilities, strengths, personal growth and potential in various areas. It plays a crucial role in guiding career decisions, facilitating effective recruitment, enhancing personal development, and fostering success and satisfaction in education, work, and personal growth."
    },
    {
      id: 2,
      title: "Interest",
      description: "An interest test, often referred to as an 'interest inventory' or 'interest assessment', is a tool used to identify an individual's preferences, likes, and dislikes related to various activities, subjects, and career fields."
    },
    {
      id: 3,
      title: "Personality",
      description: "A personality test is a tool designed to assess and evaluate various aspects of an individual's personality. These tests aim to uncover patterns of behavior, preferences, and traits that characterize a person."
    },
    {
      id: 4,
      title: "Multiple Intelligence",
      description: "Multiple Intelligence (MI) tests are psychological assessments designed to identify and measure an individual's strengths and preferences across various types of intelligence proposed by Howard Gardner's theory of multiple intelligence."
    }
  ];

  const processSteps = [
    {
      title: "Online Testing",
      description: "Take the test from the comfort of your home eliminating the need to travel anywhere for the assessment.",
      icon: "💻",
    },
    {
      title: "Test Duration",
      description: "The aptitude test is designed to be completed in approximately 2.5 hours at a leisurely pace.",
      icon: "⏱️"
    },
    {
      title: "Expert Review",
      description: "The test report is carefully checked and then shared with the student by a clinical psychologist.",
      icon: "🔍"
    },
    {
      title: "Detailed Test Report",
      description: "Includes an explanation of the report and how to use it with suggested study/work options.",
      icon: "📊",
    }
  ];

  const faqs = [
    {
      question: "When should we take the Academic Pathway Program?",
      answer: "The ideal time is during high school (grades 9-12) when students are making crucial decisions about their academic and career paths."
    },
    {
      question: "How long does it take to generate the test report?",
      answer: "Typically 3-5 working days after test completion, including expert analysis and review."
    },
    {
      question: "How do the tests help in career planning?",
      answer: "They provide objective data about your strengths, interests, and personality traits that align with specific career paths."
    },
    {
      question: "Are tests important for career counseling?",
      answer: "Yes, they provide scientific, unbiased data that complements the counselor's expertise for more accurate guidance."
    },
    {
      question: "What is the main objective of career counseling for students?",
      answer: "To help students make informed decisions about their education and career paths based on their unique abilities and interests."
    },
    {
      question: "Can the test be taken online?",
      answer: "Yes, our tests are available online and can be taken from anywhere with a stable internet connection."
    },
    {
      question: "How long does it take to complete the test?",
      answer: "Approximately 2.5 hours, but you can take breaks and complete it at your own pace."
    }
  ];

  return (
    <div className="career-counseling-page">
      {/* Hero Section */}
      <section className="counseling-hero">
        <div className="hero-content">
          <h1>Career Counseling and Aptitude Test</h1>
          <p>Discover your true potential and make informed career decisions with expert guidance</p>
          <Link to="/contact" className="cta-button">Free Expert Consultation</Link>
        </div>
        <div className="hero-image">
          <img src={counselingHero} alt="Career Counseling" loading="lazy" />
        </div>
      </section>

      {/* Counseling Introduction */}
      <section className="counseling-intro">
        <div className="container">
          <h2>Career Counseling</h2>
          <p>Career counseling, also known as career guidance or career coaching, is a process that assists individuals in making informed decisions about their career development and future employment opportunities.</p>
          
          <div className="academic-pathway">
            <h3>Academic Pathway Planning</h3>
            <p>Academic Pathway Planning is a structured process that helps students map out their educational journey to achieve career goals. Our expert counselors for study abroad will then assist you in setting objectives, selecting courses and create a roadmap for success.</p>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="importance-section">
        <div className="container">
          <h2>Importance of Aptitude Tests</h2>
          <p>Aptitude tests play a significant role in various areas, including counseling for studying abroad, career development, recruitment, and personal growth. They are designed to assess an individual's inherent or acquired abilities, strengths, and potential in specific areas.</p>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-number">0{index + 1}</div>
                <h4>{benefit}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Types */}
      <section className="test-types">
        <div className="container">
          <h2>Types of Aptitude Tests</h2>
          
          <div className="test-types-grid">
            {testTypes.map((test) => (
              <div key={test.id} className="test-type-card">
                <div className="test-type-header">
                  <div className="test-number">0{test.id}</div>
                  <h3>{test.title}</h3>
                </div>
                <p>{test.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Process of Testing</h2>
          
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Details */}
      <section className="report-details">
        <div className="container">
          <h2>Detailed Test Report Includes</h2>
          <ul>
            <li>Explanation of the report and how to use it</li>
            <li>Illustration of the scores of the aptitude, interest, and personality tests</li>
            <li>Overview of the narrative report and summary of the results</li>
            <li>Suggested study/work options</li>
            <li>Report consultation can be done in person, via a virtual meeting or by phone</li>
            <li>The results are not a benchmark but an indicator which gives you a platform to work on</li>
          </ul>
          <div className="report-image">
            <img src={detailedReport} alt="Sample Test Report" loading="lazy" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                <button 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  {faq.question}
                  <span className="toggle-icon">
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  style={{
                    maxHeight: activeIndex === index ? '500px' : '0',
                    opacity: activeIndex === index ? '1' : '0'
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareerCounseling;