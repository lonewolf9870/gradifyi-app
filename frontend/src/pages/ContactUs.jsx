import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ContactUs.css";

function ContactUs({title = "contact us" }) {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    country: "",
    course: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const timerRef = useRef(null);

  const countries = ["USA", "UK", "Canada", "Australia", "India", "Germany", "France", "Singapore", "Other"];
  const courses = ["Computer Science", "Electronics & Communication", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Information Technology", "Other"];

  useEffect(() => {
    const timeoutId = timerRef.current; 
  
    return () => {
      if (timeoutId) clearTimeout(timeoutId); 
    };
  }, []);
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});
  
    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
      const apiUrl = `${apiBase}/contact-us/`;
      
      // Clear any previous timeout
      if (timerRef.current) clearTimeout(timerRef.current);
  
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add if using CSRF protection:
          // "X-CSRFToken": getCookie("csrftoken"),
        },
        // credentials: "include", // Uncomment if using session auth
        body: JSON.stringify({
          ...formData,
          email: formData.email.toLowerCase().trim(),
        }),
      });
  
      const responseText = await response.text();
  
      // Handle HTML responses (server errors)
      if (/^\s*</.test(responseText)) {
        throw new Error("Server is currently unavailable. Please try again later.");
      }
  
      // Parse JSON response
      const data = JSON.parse(responseText);
  
      if (!response.ok) {
        // Handle field validation errors
        if (data.errors) {
          setErrors(data.errors);
          const firstError = Object.values(data.errors)[0];
          throw new Error(firstError || "Please correct the form errors");
        }
        throw new Error(data.message || "Submission failed. Please try again.");
      }
  
      // Success handling
      setSubmitStatus({
        success: true,
        message: data.message || "Thank you for contacting us! We'll respond shortly.",
      });
      setFormData(initialFormState);
  
      // Auto-dismiss success message
      timerRef.current = setTimeout(() => setSubmitStatus(null), 5000);
  
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        success: false,
        message: error.message.includes("JSON.parse") 
          ? "Server returned invalid response" 
          : error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="container mt-5 contact-form-container">
      <h2 className="text-center mb-4">{title}</h2>

      {submitStatus && (
        <div className={`alert alert-${submitStatus.success ? "success" : "danger"}`} role="alert">
          {submitStatus.message}
          {submitStatus.success && (
            <button type="button" className="btn-close float-end" onClick={() => setSubmitStatus(null)}></button>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white" noValidate>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Full Name*</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email*</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="form-label">Phone Number*</label>
          <input
            type="tel"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+1234567890"
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        {/* Country */}
        <div className="mb-3">
          <label className="form-label">Country*</label>
          <select
            className={`form-select ${errors.country ? "is-invalid" : ""}`}
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select your country</option>
            {countries.map((country, idx) => (
              <option key={idx} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <div className="invalid-feedback">{errors.country}</div>}
        </div>

        {/* Course */}
        <div className="mb-3">
          <label className="form-label">Course Interest*</label>
          <select
            className={`form-select ${errors.course ? "is-invalid" : ""}`}
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a course</option>
            {courses.map((course, idx) => (
              <option key={idx} value={course}>
                {course}
              </option>
            ))}
          </select>
          {errors.course && <div className="invalid-feedback">{errors.course}</div>}
        </div>

        {/* Message */}
        <div className="mb-3">
          <label className="form-label">Your Message</label>
          <textarea
            className="form-control"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Optional details about your inquiry..."
          />
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary w-100 py-2 mt-3" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
