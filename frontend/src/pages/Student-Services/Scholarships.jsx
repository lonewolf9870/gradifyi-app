import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Scholarships.css';

function Scholarships() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    courses: '',
    consent: false
  });

  const countries = ["USA", "UK", "Canada", "Australia", "India", "Germany", "France", "Singapore", "Netherlands"];
  const courses = ["Computer Science", "Electronics & Communication", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Information Technology"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for applying! We will contact you shortly.');
  };

  const scholarshipTypes = [
    {
      id: 1,
      title: "Merit-based scholarships",
      description: "Awarded for academic, athletic, artistic, or extracurricular achievements."
    },
    {
      id: 2,
      title: "Student-specific scholarships",
      description: "These foreign scholarship for Indian students are available to applicants of specific genders, races, religions, ethnicities, or medical histories."
    },
    {
      id: 3,
      title: "Need-based scholarships",
      description: "Awarded to students based on financial need."
    },
    {
      id: 4,
      title: "Program-based scholarships",
      description: "These study abroad scholarships are provided by individual programs or universities based on academic and personal achievements."
    }
  ];

  const scholarshipCategories = [
    {
      id: 1,
      title: "Indian Scholarships",
      description: "Aimed at empowering talented Indian students to reach their full academic potential. Eligibility based on financial need."
    },
    {
      id: 2,
      title: "University Scholarships",
      description: "University Scholarships are grants, tuitions wavers etc awarded by the institution on grounds of institutions preferences. They are sought by students who indulge in a specific area of interest of study."
    },
    {
      id: 3,
      title: "Need-based scholarships",
      description: "Need-based scholarships are granted on the basis of the assets and income of the prospective student and his/her family. Factors such as test scores or athletic ability have little influence on the awarding of the aid."
    }
  ];

  const faqs = [
    {
      question: "What are the best scholarships available for studying abroad?",
      answer: "Some of the top scholarships for international students include: Fulbright Scholarships, Chevening Scholarships (UK), Erasmus Mundus (EU), Australia Awards, Commonwealth Scholarships, and country-specific programs like DAAD (Germany) and MEXT (Japan). We can help you identify the best options based on your destination and field of study."
    },
    {
      question: "How can I apply for scholarships to study abroad as an international student?",
      answer: "The application process typically involves: 1) Researching suitable scholarships, 2) Checking eligibility criteria, 3) Preparing required documents (transcripts, recommendation letters, SOP), 4) Completing application forms, and 5) Meeting deadlines. Our advisors can guide you through each step and help strengthen your application."
    },
    {
      question: "What are the eligibility criteria for study abroad scholarships?",
      answer: "Common eligibility requirements include: academic excellence (minimum GPA requirements), language proficiency (IELTS/TOEFL scores), acceptance at a recognized institution, nationality restrictions, and field of study. Some scholarships also consider financial need, leadership qualities, or community involvement."
    },
    {
      question: "How do I find scholarships for international students to study abroad?",
      answer: "You can find scholarships through: 1) University websites, 2) Government portals of your target country, 3) International organizations, 4) Our scholarship database, and 5) Country-specific education websites. We maintain an updated list of 500+ scholarships across all popular study destinations."
    },
    {
      question: "Can I get a full scholarship to study abroad?",
      answer: "Yes, full scholarships (covering tuition + living expenses) are available through programs like Rhodes Scholarships, Gates Cambridge, Fulbright, and many university-specific awards. However, these are highly competitive. We can help identify full-funding opportunities matching your profile and suggest backup partial scholarship options."
    },
    {
      question: "What are the top countries offering scholarships to study abroad?",
      answer: "Countries offering generous scholarships include: Germany (DAAD), UK (Chevening, Commonwealth), USA (Fulbright), Australia (Australia Awards), Canada (Vanier), Netherlands (Orange Tulip), Sweden (SI), and Japan (MEXT). Many universities in these countries also offer institution-specific funding."
    },
    {
      question: "What documents are required for a scholarship application to study abroad?",
      answer: "Typically you'll need: 1) Academic transcripts, 2) Proof of language proficiency, 3) Statement of purpose, 4) Recommendation letters, 5) CV/resume, 6) Research proposal (for postgraduate), 7) Valid passport copy, and 8) Proof of extracurricular achievements. Requirements vary by scholarship."
    },
    {
      question: "Are there scholarships specifically for Indian students to study abroad?",
      answer: "Yes! Special scholarships for Indian students include: Inlaks Scholarships, Tata Scholarships (Cornell), Narotam Sekhsaria Scholarships, KC Mahindra Scholarships, and JN Tata Endowment. Many countries also offer India-specific awards like Commonwealth Scholarships for India."
    },
    {
      question: "Can I apply for multiple scholarships to study abroad?",
      answer: "Absolutely! We recommend applying to 8-10 scholarships to maximize your chances. Just ensure you meet all eligibility criteria and can manage the application timelines. Some scholarships allow stacking (combining multiple awards), while others don't - we can advise you on the best combination."
    },
    {
      question: "How can I apply for government-funded scholarships to study abroad?",
      answer: "Government scholarships usually require: 1) Direct application through their portal, 2) Nomination by your home country (for bilateral programs), 3) University admission proof, and 4) Sometimes an interview. We're familiar with all major government scholarship processes and can help prepare competitive applications."
    }
  ];

  return (
    <div className="scholarships-page">
      {/* Hero Section */}
      <section className="scholarships-hero bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Scholarships to Study Abroad</h1>
          <p className="lead">Total Study Abroad Scholarship Edwise Students have Received <span className="highlight">9 crore+</span></p>
          <button className="btn btn-light btn-lg mt-3">Free Expert Consultation</button>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {scholarshipTypes.map((type) => (
              <div key={type.id} className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{type.id}. {type.title}</h5>
                    <p className="card-text">{type.description}</p>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <button className="btn btn-outline-primary">Free Expert Consultation</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Categories */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Types of Scholarships</h2>
          <p className="text-center mb-5">Scholarships can be broadly categorized into three main types:</p>
          
          <div className="row">
            {scholarshipCategories.map((category) => (
              <div key={category.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="category-number mb-3">0{category.id}</div>
                    <h3 className="card-title">{category.title}</h3>
                    <p className="card-text">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Apply for Scholarship</h2>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email ID</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Country</label>
                  <select 
                    className="form-select" 
                    name="country" 
                    value={formData.country} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Select Courses</label>
                  <select 
                    className="form-select" 
                    name="courses" 
                    value={formData.courses} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">Select Courses</option>
                    {courses.map((courses, index) => (
                      <option key={index} value={courses}>{courses}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3 form-check">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    name="consent" 
                    checked={formData.consent} 
                    onChange={handleChange} 
                    required
                  />
                  <label className="form-check-label">
                    I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5">Frequently Asked Questions</h2>
    <div className="accordion" id="faqAccordion">
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-item">
          <h3 className="accordion-header" id={`heading${index}`}>
            <button 
              className="accordion-button collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target={`#collapse${index}`}
              aria-expanded="false" 
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </h3>
          <div 
            id={`collapse${index}`} 
            className="accordion-collapse collapse" 
            aria-labelledby={`heading${index}`} 
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
              {index === 0 && (
                <button className="btn btn-primary mt-3">
                  View Current Scholarship Opportunities
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}

export default Scholarships;