import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ContactUsImage from "../Imgs/ImageOne/contact is.jpg";
import "animate.css";
import "./CSS/Contact.css";
export default function Contact() {
  return (
    <Container fluid className="bubu">
      <Container d-flex>
        <div className="contact-head">
          <h2>Hey வணக்கம்!</h2>
          <h4>We’re more than happy to have a conversation.</h4>
        </div>

        <div className="row">
          <div className="col-sm contact-row-card">
            <p>Project Enquiry.</p>
            <h3 className="dc">Let us help you realise your vision.</h3>

            <h5 className="contact-span-design">Let's Talk</h5>
          </div>
          <div className="col-sm contact-row-card">
            <p>Career Enquiry</p>
            <h3> Want to be the part of our tribe?</h3>

            <h5 className="contact-span-design">Join Us</h5>
          </div>

          <div className="col-sm contact-row-card">
            <p>General Enquiry</p>
            <h3>Can't find what you are looking for?</h3>

            <h5 className="contact-span-design">Say Hi!</h5>
          </div>
        </div>
      </Container>

      <section className="wrapper">
        <div className="content">
          <div className="social-logos-heading">
            <h4>
              Didnt find a role, No worries<br></br> Email your CV/Resume at{" "}
              <u>careers@elarise.co</u>
            </h4>
          </div>
        </div>
      </section>

      <Container fluid>
        <Row className="sec_sp des34c">
          <Col lg="5" >
            <div className="create-progress">
              <img src={ContactUsImage} width="100%" height="auto" />
            </div>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100">
              <Row className="row-one">
                <div>
                  <h4>Your Details</h4>
                  <p>Project related discussions only, please!</p>
                </div>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>

              <Row className="row-one">
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="telephone"
                    name="telephone"
                    placeholder="Telephone"
                    type="tel"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="location"
                    name="location"
                    placeholder="Location"
                    type="text"
                    required
                  />
                </Col>
              </Row>

              <div>
                <h4>Tell us about your project requirement</h4>
              </div>

              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Type Project Details"
                rows="5"
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <div>
                    <button type="button" className="btn btn-primary">
                      Submit Request
                    </button>
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
