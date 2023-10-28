import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CSS/Work.css";
import Areas from "../Assets/icons/areas.png";
export default function Work() {
  return (
    <Container fluid className="work-class">
      <Container fluid className="work-class-two">
        <Container>
          <Row className="sec_sp work-sec-one">
            <Col lg="7" className="d-flex align-items-center">
              <form className=" w-100">
                <Row>
                  <Col lg="6" className="work-group">
                    <h5>Application Developement</h5>
                  </Col>
                  <Col lg="6" className="work-group">
                    <h5>Website Developement</h5>
                  </Col>
                </Row>

                <Row>
                  <Col lg="6" className="work-group">
                    <h5>UI/UX</h5>
                  </Col>
                  <Col lg="6" className="work-group">
                    <h5>Website Design</h5>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6" className="work-group">
                    <h5>Digital Marketing</h5>
                  </Col>
                  <Col lg="6" className="work-group">
                    <h5>Digitization</h5>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6" className="work-group">
                    <h5>Prototyping & Interaction</h5>
                  </Col>
                  <Col lg="6" className="work-group">
                    <h5>Software Developement </h5>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6" className="work-group">
                    <h5>IT Consulting</h5>
                  </Col>
                  <Col lg="6" className="work-group">
                    <h5>Cloud Services</h5>
                  </Col>
                </Row>
              </form>
            </Col>
            <Col lg="5" className="work-area-image">
              <div className="">
                <img src={Areas} width="auto" height="100" />
              </div>
              <div>
                <h1>Technologies and Services</h1>
              </div>
              <div>
              <p>
                  The Institute has from time to time identified thrust areas of
                  research, around which several research projects and studies
                  are designed cutting across disciplinary boundaries.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
