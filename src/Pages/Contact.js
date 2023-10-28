import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CreateProgress from "../Assets/icons/progress.png";
import 'animate.css';
import "./CSS/Contact.css";
export default function Contact() {
  return (
    <Container fluid  className="bubu">
      <Container d-flex >
      <div className="contact-head">
          <h2>Hey there!</h2>
          <h4>We’re more than happy to have a conversation.</h4>
        </div>

        <div class="row">
          <div class="col-sm contact-row-card">
            <p>Project Enquiry.</p>
            <h3 class="dc">Let us help you realise your vision.</h3>

            <h5 className="contact-span-design">Let's Talk</h5>
          </div>
          <div class="col-sm contact-row-card">
            <p>Career Enquiry</p>
            <h3> Want to be the part of our tribe?</h3>

            <h5 className="contact-span-design">Join Us</h5>
          </div>

          <div class="col-sm contact-row-card">
            <p>General Enquiry</p>
            <h3>Can't find what you are looking for?</h3>

            <h5 className="contact-span-design">Say Hi!</h5>
          </div>
        </div>
      </Container>

      <section class="wrapper">
        <div class="content">
          <div className="social-logos-heading">
            <h1>We're here for you, no matter what.</h1>
          </div>
        </div>
      </section>

      <Container fluid>
        <Container>
          <Row className="sec_sp des34c">
            <Col lg="5" className="mb-5">
              <div className="create-progress">
                <img src={CreateProgress} width="auto" height="250" />
              </div>
              <h1 className=" progress-together-heading" >
                Let’s create<br></br> progress together
              </h1>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <form className="contact__form w-100">
                <Row className="row-one">
                  <div>
                    <h2>Your Details</h2>
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
                  <h2>Tell us about your project requirement</h2>
                  <p>
                    Looking for UX/UI research or product branding? Post your
                    query now, and we'll get in touch with you soon!
                  </p>
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
                  <button type="button" class="btn btn-primary">
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
    </Container>
  );
}
