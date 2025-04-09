import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import logo from "./assets/logo.png";
import Home from "./pages/Home";
import Whatwedo from "./pages/Whatwedo";
import StudentServices from "./pages/StudentServices";
import ContactUs from "./pages/ContactUs";
import StudyAbroad from "./pages/StudyAbroad";
import CountryPage from "./pages/CountryPage";
import arrow from "/Vector.svg";
import Scholarships from "./pages/Student-Services/Scholarships";
import TravelAssistance from "./pages/Student-Services/TravelAssistance";
import CareerCounseling from "./pages/Student-Services/CareerCounseling";

function App() {
  const [dropdowns, setDropdowns] = useState({
    studyAbroad: false,
    whatWeDo: false,
    studentServices: false,
  });

  const [mobileDropdowns, setMobileDropdowns] = useState({
    studyAbroad: false,
    whatWeDo: false,
    studentServices: false,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setDropdowns((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdowns((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    {
      label: "Study Abroad",
      path: "/study-abroad",
      key: "studyAbroad",
      links: [
        { label: "USA", path: "/study-abroad/usa" },
        { label: "Canada", path: "/study-abroad/canada" },
        { label: "UK", path: "/study-abroad/uk" },
        { label: "Australia", path: "/study-abroad/australia" },
        { label: "Germany", path: "/study-abroad/germany" },
        { label: "New Zealand", path: "/study-abroad/newzealand" },
        { label: "Singapore", path: "/study-abroad/singapore" },
        { label: "Ireland", path: "/study-abroad/ireland" },
        { label: "France", path: "/study-abroad/france" },
        { label: "Switzerland", path: "/study-abroad/switzerland" },
        { label: "Dubai", path: "/study-abroad/dubai" },
        { label: "Spain", path: "/study-abroad/spain" },
        { label: "Malaysia", path: "/study-abroad/malaysia" },
        { label: "Mauritius", path: "/study-abroad/mauritius" },
        { label: "India", path: "/study-abroad/india" },
        { label: "Netherlands", path: "/study-abroad/netherlands" },
        { label: "Italy", path: "/study-abroad/italy" },
      ],
    },
    {
      label: "Student Services",
      path: "/student-services",
      key: "studentServices",
      links: [
        { label: "Scholarships", path: "/student-services/scholarships" },
        { label: "Travel & Forex Assistance", path: "/student-services/travel-assistance" },
        { label: "Career Counseling", path: "/student-services/career-counseling" },
        { label: "Admission Guidance", path: "/student-services/admission-guidance" },
      ],
    },
    {
      label: "What We Do",
      path: "/what-we-do",
      key: "whatWeDo",
      links: [
        { label: "Counseling", path: "/what-we-do/counseling" },
        { label: "Application Process", path: "/what-we-do/application-process" },
        { label: "Visa Guidance", path: "/what-we-do/visa-guidance" },
        { label: "About Us", path: "/what-we-do/about-us" },
        { label: "Partnered Universities", path: "/what-we-do/partnered" }
      ],
    },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <Link to="/">
          <img src={logo} alt="Gradifyi Logo" className="logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          {menuItems.map(({ label, path, key, links }) => (
            <div
              key={key}
              className="dropdown-container"
              onMouseEnter={() => toggleDropdown(key)}
              onMouseLeave={() => toggleDropdown(key)}
            >
              <Link to={path} className="dropdown-toggle">
                {label}{" "}
                <img src={arrow} alt="dropdown arrow" className={`arrow ${dropdowns[key] ? "rotated" : ""}`} />
              </Link>
              {dropdowns[key] && (
                <div className="dropdown-menu">
                  {links.map(({ label, path }) => (
                    <Link key={path} to={path}>
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="nav-buttons">
          <Link to="/contact-us" className="btn contact-btn">
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="hamburger" onClick={toggleMobileMenu}>
          <span className={isMobileMenuOpen ? "open" : ""}></span>
          <span className={isMobileMenuOpen ? "open" : ""}></span>
          <span className={isMobileMenuOpen ? "open" : ""}></span>
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        {menuItems.map(({ label, key, links }) => (
          <div key={key} className="dropdown-container">
            <div 
              className="dropdown-toggle"
              onClick={() => toggleMobileDropdown(key)}
            >
              {label}
              <img 
                src={arrow} 
                alt="dropdown arrow" 
                className={`arrow ${mobileDropdowns[key] ? "rotated" : ""}`} 
              />
            </div>
            <div className={`dropdown-menu ${mobileDropdowns[key] ? "active" : ""}`}>
              {links.map(({ label, path }) => (
                <Link 
                  key={path} 
                  to={path} 
                  onClick={closeMobileMenu}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
        
        <div className="nav-buttons">
          <Link 
            to="/contact-us" 
            className="btn contact-btn"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/study-in/:countryName" element={<CountryPage />} />
        <Route path="/study-abroad/:countryName" element={<CountryPage />} />
        <Route path="/what-we-do" element={<Whatwedo />} />
        <Route path="/student-services" element={<StudentServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* Student Services */}
        <Route path="/student-services/scholarships" element={<Scholarships />} />
        <Route path="/student-services/travel-assistance" element={<TravelAssistance />} />
        <Route path="/student-services/career-counseling" element={<CareerCounseling />} />
      </Routes>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-header">
          <h3>Stay Connected with Gradifyi</h3>
          <button className="subscribe-button">Subscribe</button>
        </div>
        
        <div className="footer-container">
          <div className="footer-section">
            <h5>Important Links</h5>
            <ul>
              <li><Link to="/what-we-do" onClick={closeMobileMenu}>What We Do</Link></li>
              <li><Link to="/about-us" onClick={closeMobileMenu}>About Us</Link></li>
              <li><Link to="/work-with-us" onClick={closeMobileMenu}>Work with Us</Link></li>
              <li><Link to="/university-visits" onClick={closeMobileMenu}>University Visits</Link></li>
              <li><Link to="/media-press" onClick={closeMobileMenu}>Media & Press</Link></li>
              <li><Link to="/events" onClick={closeMobileMenu}>Events</Link></li>
              <li><Link to="/brochure" onClick={closeMobileMenu}>E-Brochure Download</Link></li>
              <li><Link to="/refer-friend" onClick={closeMobileMenu}>Refer a Friend</Link></li>
              <li><Link to="/pay-online" onClick={closeMobileMenu}>Pay Online</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Test Prep</h5>
            <ul>
              {["TOEFL", "PTE", "IELTS", "GMAT", "GRE", "SAT", "CAEL", "CELPIP", "Duolingo", "ACT"].map((test) => (
                <li key={test}><Link to={`/test-prep/${test.toLowerCase()}`} onClick={closeMobileMenu}>{test}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h5>Study Destinations</h5>
            <ul>
              {["UK", "USA", "Canada", "Australia", "New-Zealand", "Singapore", "Ireland", "France", "Germany", "Switzerland", "Dubai", "Spain", "Malaysia", "Mauritius", "India", "Netherlands", "Italy"].map((country) => (
                <li key={country}><Link to={`/study-in/${country.toLowerCase().replace(/\s/g, "-")}`} onClick={closeMobileMenu}>Study in {country}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h5>Student Services</h5>
            <ul>
              {["Visa Guidance", "Admission Guidance", "Career Counseling", "Finance Assistance", "Travel Assistance", "Forex Assistance", "Scholarship"].map((service) => (
                <li key={service}><Link to={`/student-services/${service.toLowerCase().replace(/\s/g, "-")}`} onClick={closeMobileMenu}>{service}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gradifyi. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;