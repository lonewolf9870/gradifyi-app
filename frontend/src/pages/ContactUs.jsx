import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ContactUs.css";

function ContactUs() {
 
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

  const countries = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "India",
    "Germany",
    "France",
    "Singapore",
    "Other",
  ];
  
  const courses = [
    "Computer Science",
    "Electronics & Communication",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Information Technology",
    "Other",
  ];

  // Clean up timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});
  
    try {
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/contact-us/`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          email: formData.email.toLowerCase().trim(),
        }),
      });
  
      const responseText = await response.text();

      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch {
        throw new Error(
          response.ok
            ? "Received unexpected response format"
            : `Server error: ${response.status} ${response.statusText}`
        );
      }
  
      if (!response.ok) {
        if (responseData.errors) {
          setErrors(responseData.errors);
        }
        throw new Error(
          responseData.message || `Request failed with status ${response.status}`
        );
      }
  
      // Success case - reset form and show success message
      setSubmitStatus({
        success: true,
        message: responseData.message || "Thank you for your message! We'll contact you soon.",
      });
      
      // Reset form data
      setFormData(initialFormState);
      
      // Auto-hide success message after 5 seconds
      timerRef.current = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
  
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        success: false,
        message: error.message || "An error occurred while submitting the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="container mt-5 contact-form-container">
      <h2 className="text-center mb-4">Contact Us</h2>

      {submitStatus && (
        <div
          className={`alert alert-${
            submitStatus.success ? "success" : "danger"
          } fade show`}
          role="alert"
        >
          {submitStatus.message}
          {submitStatus.success && (
            <button
              type="button"
              className="btn-close float-end"
              aria-label="Close"
              onClick={() => setSubmitStatus(null)}
            ></button>
          )}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow-sm bg-white"
        noValidate
      >
        {/* Form fields remain the same as your original */}
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
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

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
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
          )}
        </div>

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
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && (
            <div className="invalid-feedback">{errors.country}</div>
          )}
        </div>

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
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
          {errors.course && (
            <div className="invalid-feedback">{errors.course}</div>
          )}
        </div>

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

        <button
          type="submit"
          className="btn btn-primary w-100 py-2 mt-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
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