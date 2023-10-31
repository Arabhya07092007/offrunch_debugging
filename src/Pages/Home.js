import React from "react";
import "./CSS/Home.css";
import ImageOne from "../Assets/pexels-pok-rie-6471927.jpg";
import HomeIconOne from "../Assets/img97.jpg";
import ImageThree from "../Imgs/ImageOne/imgTwo.jpg";
import ImageTwo from "../Assets/imageremotes.jpg";

import StartupTN from "../Assets/startup-tn-logo.png";
import TNSeal from "../Assets/800px-TamilNadu_Logo.svg.png";
import GUSEC from "../Assets/gusec.png";
const Home = () => {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="container">
            <div className="row home-row-one">
              <div className="col-sm">
                <div className="container xcd32r">
                  <h1>
                    Transforming Governance, <br></br> your company <br></br>{" "}
                    better Society
                  </h1>
                  <h4 className="e3rtx">
                    We are a smart governance company empowering central and
                    local government decision makers by providing dynamic
                    technology solutions to enhance state machinery.
                  </h4>

                  <div>
                    <button type="button" className="btn btn-primary">
                      How it works
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm screenOneImage">
                <div>
                  <img src={HomeIconOne} width="100%" height="auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="quote">
        <h3 className="heading-space">
          Good Governance cannot remain merely a philosophy. <br></br> Concrete
          steps have to be taken for realizing its goals.
        </h3>
      </div>

      <div className="container">
        <div className="row zm87y">
          <div className="col-sm">
            <img
              src={ImageOne}
              alt=""
              className="cvb56r xc11er"
              width="100%"
              height="auto"
            />
          </div>

          <div className="col-sm">
            <h1 className="re45t">Solving the Flood through Offcrunch OpenX Model</h1>
            <h5>
              At Offcrunch, we've developed the OpenX Model to address this
              pressing challenge. The OpenX Model is a sophisticated,
              data-driven solution that combines the power of technology,
              artificial intelligence, and geospatial analysis to revolutionize
              flood management. Our approach is multifaceted, addressing key
              aspects of flood management:
            </h5>
            <div>
              <button type="button" className="btn btn-primary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row zm87y">
          <div className="col-sm">
            <h1 className="re45t">
              Satellite Imagery: Explore the World from Above
            </h1>
            <h5>
              At Offcrunch, we recognize the immense potential of satellite
              imagery and are committed to leveraging it to address diverse
              challenges. Our expertise lies in collecting, processing, and
              analyzing satellite data to generate meaningful insights for our
              clients. Whether it's supporting environmental conservation,
              disaster response, or urban development, we use satellite imagery
              to drive positive change and innovation.
            </h5>

            <div>
              <button type="button" className="btn btn-primary">
                Learn More
              </button>
            </div>
          </div>

          <div className="col-sm">
            <img
              src={ImageTwo}
              width="100%"
              alt=""
              className="cvb56r xc11er"
            />
          </div>
        </div>
      </div>
      <section>
        <div className="container-fluid our-eng">
          <div className="container pt-5 pb-5 ">
            <div className="our-eng-heading">
              <h2>
                Empowering Government. Connecting Communities. <br></br>
                Offcrunch: Where Innovation Meets Impact.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div className="gfhjk">
        <div className="container">
          <div className="row m-2">
            <div>
              <h1 className="re4z">
                Our work spans a number of domains and <br></br> industries
              </h1>
            </div>
            <div className="col-sm fdcx">
              <h4 className="dc">Smart City Management</h4>
            </div>
            <div className="col-sm fdcx">
              <h4>Data and Analytics</h4>
            </div>

            <div className="col-sm fdcx">
              <h4>EdTech</h4>
            </div>
          </div>

          <div className="row m-2">
            <div className="col-sm fdcx">
              <h4 className="dc">Defense and Paramilitary</h4>
            </div>
            <div className="col-sm fdcx">
              <h4>Law and Enforcement</h4>
            </div>

            <div className="col-sm fdcx">
              <h4>Cyber Security</h4>
            </div>
          </div>

          <div className="row m-2">
            <div className="col-sm fdcx">
              <h4 className="dc">MarketingTech</h4>
            </div>
            <div className="col-sm fdcx">
              <h4>MediTech</h4>
            </div>

            <div className="col-sm fdcx">
              <h4>FinTech</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="smart-gov">
        <h1>Smart Governance</h1>
        <div className="container">
          <h4 className="heading-space">
            Over the years we have worked with many governments and helped them
            embrace innovation in ways that were never imagined, and it was only
            possible because of the smart and innovative technologies and
            methods that we could bring in. After careful deliberation, we
            coined the term “Smart Governance” which identifies our work in the
            governance space.
          </h4>
        </div>

        <div>
          <button type="button" className="btn btn-primary">
            Learn More
          </button>
        </div>
      </div>

      <div className="fluid-container  pt-5 pb-5">
        <div className="container">
          <h1>Backed By</h1>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-sm">
              {" "}
              <div>
                <img src={StartupTN} width="100%" height="auto" />
              </div>
            </div>
            <div className="col-sm">
              {" "}
              <div>
                <img src={TNSeal} width="100px" height="auto" />
              </div>
            </div>
            <div className="col-sm">
              {" "}
              <div>
                <img src={GUSEC} width="100%" height="auto" />
              </div>
            </div>
            <div className="col-sm"></div>
            <div className="col-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
