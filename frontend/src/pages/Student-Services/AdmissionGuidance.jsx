

import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../styles/Admission.css";

const AdmissionGuidance = () => {
 
    const steps = [
        {
          id: 1,
          title: "Identify Course, Country And University",
          description:
            "We help the students identify the destination country most suited for them, the institution as well as the course. For those who are undecided about the course we administer a test to determine the interests and abilities of the student.",
            direction:"left",
          image: "/images/admissionguidance/admissionguidance1.jpeg",
        },
        {
          id: 2,
          title: "International Test Prep",
          description:
            "We offer coaching for key standardized tests like TOEFL, PTE, IELTS, GMAT, GRE, SAT, and ACT, with personalized guidance provided by our expert faculty. Our comprehensive courseware and regular internal testing ensure that students achieve their target scores for admission to their desired institutions.",
            direction:"right",
          image: "/images/admissionguidance/admissionguidance2.jpg",
        },
        {
          id: 3,
          title: "Document Editing",
          description:
            "We prioritize delivering optimal results by meticulously processing each student's application to eliminate errors. We focus on essential areas, provide feedback, and ensure all documents are properly compiled and sealed. Our counselors keep students updated on their application status, and our experts analyze documents to meet university-specific requirements, enhancing success rates and speeding up responses.",
            direction:"left",
          image: "/images/admissionguidance/adimissionguidance3.jpg",
        },
        {
          id: 4,
          title: "Application Process",
          description:
            "We give special attention to every application for admission, whether it is paper based or online. Students and counselors collaborate to thoroughly check and improve documents before submission. Additionally, we provide personalized assessments to institutions, highlighting the student's strengths and suitability for a successful match.",
            direction:"right",
          image: "/images/admissionguidance/Application Process.jpeg",
        },
        {
          id: 5,
          title: "Interview Preparation",
          description:
            "Interviews are needed for admission, visa eligibility and for visa grant too. We help prepare students with answers to questions that universities are likely to ask. These mock interview sessions are led by specialists who are highly familiar with the typical questions asked by universities.",
            direction:"left",
          image: "/images/admissionguidance/Interview Preparation.jpeg",
        },
        {
          id: 6,
          title: "Visa Guidance",
          description:
            "Visa guidance is free for all Edwise students for all countries. We maintain a 99% success rate in visa applications through updated consulate advice. Our special services includes mock visa interviews to prepare students for common questions and provide guidance on the dos and don'ts. We assist with the entire visa process, from application submission to document preparation, ensuring smooth navigation and minimizing delays.",
            direction:"right",
          image: "/images/admissionguidance/Visa Guidance.jpeg",
        },
    ];

  const StepCard = ({ step }) => {
    const cardRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const { isIntersecting } = entry;
          if (isIntersecting) {
            cardRef.current.classList.add("slide-in");
            cardRef.current.classList.remove("slide-out");
          } else {
            cardRef.current.classList.remove("slide-in");
            cardRef.current.classList.add("slide-out");
          }
        },
        { threshold: 0.3 }
      );

      if (cardRef.current) observer.observe(cardRef.current);

      return () => {
        if (cardRef.current) observer.unobserve(cardRef.current);
      };
    }, []);

    return (
      <div
        ref={cardRef}
        className={`step-card ${step.direction === "left" ? "from-left" : "from-right"}`}
      >
        <Row className="align-items-center">
          {step.direction === "left" ? (
            <>
              <Col md={6} className="content-col">
                <Card.Body>
                  <div className="step-number">{step.id.toString().padStart(2, "0")}</div>
                  <Card.Title>{step.title}</Card.Title>
                  <Card.Text>{step.description}</Card.Text>
                </Card.Body>
              </Col>
              <Col md={6} className="image-col">
                <img src={step.image} alt={step.title} className="img-fluid step-image" />
              </Col>
            </>
          ) : (
            <>
              <Col md={6} className="image-col">
                <img src={step.image} alt={step.title} className="img-fluid step-image" />
              </Col>
              <Col md={6} className="content-col">
                <Card.Body>
                  <div className="step-number">{step.id.toString().padStart(2, "0")}</div>
                  <Card.Title>{step.title}</Card.Title>
                  <Card.Text>{step.description}</Card.Text>
                </Card.Body>
              </Col>
            </>
          )}
        </Row>
      </div>
    );
  };

  return (
    <div className="admission-journey">
      <Container>
        {/* Header Section */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Seamless Admission Journey</h2>
            <button className="section-button">Free Expert Consulation</button>
          </Col>
          <Col>
          <img src="/images/admissionguidance/admission-guidance-women.jpg" alt="Admission Journey" className="img-fluid" />
          </Col>
        </Row>

        {/* Steps Section */}
        <div className="steps-container">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AdmissionGuidance;