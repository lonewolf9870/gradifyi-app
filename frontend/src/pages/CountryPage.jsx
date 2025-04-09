import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { countries } from "../data/countries";
import styles from '../styles/CountryPage.module.css';

// Custom hook for intersection observation
const useOnScreen = (options = {}) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!options.triggerOnce) {
          setIsVisible(false);
        }
      },
      options
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isVisible];
};

// Fixed AnimatedCounter component
const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useOnScreen({ threshold: 0.1, triggerOnce: true });
  const animationRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    const end = parseInt(value.toString().replace(/\D/g, '')) || 0;
    if (end === 0) {
      setCount(0);
      return;
    }

    // Clear any existing animation
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }

    const startTime = Date.now();
    const startValue = 0;
    const endValue = end;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentValue = Math.floor(progress * (endValue - startValue) + startValue);
      
      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, value, duration]);

  return (
    <span ref={ref}>
      {isVisible ? count.toLocaleString() : "0"}
    </span>
  );
};
  

// University card component with lazy rank display
const UniversityCard = ({ uni, index }) => {
  const [ref, isVisible] = useOnScreen({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={styles['university-card']}>
      <div className={styles['university-rank']}>
        {isVisible ? index + 1 : '...'}
      </div>
      <img
        src={`/images/universities/${uni.image}`}
        alt={uni.name}
        className={styles['university-logo']}
      />
      <div className={styles['university-info']}>
        <h3>{uni.name}</h3>
        <p className={styles['university-location']}>{uni.location}</p>

        <button className={styles['view-details-btn']}>View Details</button>
      </div>
    </div>
  );
};

const CountryPage = () => {
  const { countryName } = useParams();
  const country = countries.find(
    (c) => c.name.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) {
    return (
      <div className={styles['country-not-found']}>
        <h2>Country not found</h2>
        <p>The country you're looking for doesn't exist in our database.</p>
      </div>
    );
  }

  return (
    <div className={styles['country-page-container']}>
      {/* Hero Banner Section */}
      <section className={styles['country-hero']}>
        <div className={styles['hero-content']}>
          <h1>Study in {country.name}</h1>
          <div className={styles['country-stats']}>
            <div className={styles['stat-item']}>
              <span className={styles['stat-label']}>Capital:</span>
              <span className={styles['stat-value']}>{country.capital}</span>
            </div>
            <div className={styles['stat-item']}>
              <span className={styles['stat-label']}>Population:</span>
              <span className={styles['stat-value']}>
                <AnimatedCounter value={country.population} />
              </span>
            </div>
            <div className={styles['stat-item']}>
              <span className={styles['stat-label']}>Currency:</span>
              <span className={styles['stat-value']}>{country.currency}</span>
            </div>
          </div>
        </div>
        <img
          src={`/images/flags/${country.banner}`}
          alt={`${country.name} banner`}
          className={styles['hero-image']}
        />
      </section>

      {/* Country Overview Section */}
      <section className={styles['country-overview']}>
        <h2>About {country.name}</h2>
        <p>{country.description}</p>
        
        <div className={styles['quick-facts']}>
          <h3>Quick Facts</h3>
          <ul>
            <li><strong>Language:</strong> {country.language}</li>
            <li><strong>Climate:</strong> {country.climate}</li>
            <li><strong>Time Zone:</strong> {country.timeZone}</li>
            <li>
              <strong>International Students:</strong> 
              <AnimatedCounter value={country.internationalStudents} />
            </li>
          </ul>
        </div>
      </section>

      {/* Education System Section */}
      <section className={styles['education-system']}>
        <h2>Education System in {country.name}</h2>
        <div className={styles['system-details']}>
          <p>{country.educationSystem.description}</p>
          <div className={styles['education-stats']}>
            {country.educationSystem.stats.map((stat, index) => (
              <div key={index} className={styles['education-stat']}>
                <span className={styles['stat-number']}>
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className={styles['stat-label']}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className={styles['top-universities']}>
        <h2>Top Universities in {country.name}</h2>
        <div className={styles['universities-grid']}>
          {country.universities.map((uni, index) => (
            <UniversityCard key={uni.name} uni={uni} index={index} />
          ))}
        </div>
      </section>

      {/* Why Study Here Section */}
      <section className={styles['why-study-here']}>
        <h2>Why Study in {country.name}?</h2>
        <div className={styles['benefits-grid']}>
          {country.benefits.map((benefit, index) => (
            <div key={index} className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <img src={`/icons/${benefit.icon}.jpg`} alt={benefit.title} />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Admission Requirements Section */}
      <section className={styles['admission-requirements']}>
        <h2>Admission Requirements</h2>
        <div className={styles['requirements-container']}>
          <div className={styles['general-requirements']}>
            <h3>General Requirements</h3>
            <ul>
              {country.admissionRequirements.general.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <div className={styles['document-checklist']}>
            <h3>Document Checklist</h3>
            <ul>
              {country.admissionRequirements.documents.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cost of Living Section */}
      <section className={styles['cost-of-living']}>
        <h2>Cost of Living in {country.name}</h2>
        <div className={styles['cost-grid']}>
          {country.costOfLiving.map((item, index) => (
            <div key={index} className={styles['cost-item']}>
              <span className={styles['cost-category']}>{item.category}</span>
              <span className={styles['cost-amount']}>{item.amount}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Student Visa Section */}
      <section className={styles['student-visa']}>
        <h2>Student Visa Information</h2>
        <div className={styles['visa-details']}>
          <div className={styles['visa-process']}>
            <h3>Visa Process</h3>
            <ol>
              {country.visa.process.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          <div className={styles['visa-requirements']}>
            <h3>Requirements</h3>
            <ul>
              {country.visa.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles['visa-notes']}>
          <p>
            <strong>Processing Time:</strong> {country.visa.processingTime}
          </p>
          <p>
            <strong>Success Rate:</strong> {country.visa.successRate}
          </p>
        </div>
      </section>

      {/* Scholarship Section */}
      {country.scholarships.length > 0 && (
        <section className={styles['scholarships']}>
          <h2>Available Scholarships</h2>
          <div className={styles['scholarships-grid']}>
            {country.scholarships.map((scholarship, index) => (
              <div key={index} className={styles['scholarship-card']}>
                <h3>{scholarship.name}</h3>
                <p className={styles['scholarship-amount']}>{scholarship.amount}</p>
                <p className={styles['scholarship-deadline']}>
                  Deadline: {scholarship.deadline}
                </p>
                <div className={styles['scholarship-eligibility']}>
                  <h4>Eligibility:</h4>
                  <ul>
                    {scholarship.eligibility.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <button className={styles['apply-btn']}>Apply Now</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={styles['cta-section']}>
        <h2>Ready to start your journey in {country.name}?</h2>
        <p>
          Our expert counselors are ready to guide you through every step of the
          process.
        </p>
        <div className={styles['cta-buttons']}>
          <button className={styles['btn-primary']}>Book Free Consultation</button>
          <button className={styles['btn-secondary']}>Download Brochure</button>
        </div>
      </section>
    </div>
  );
};

export default CountryPage;