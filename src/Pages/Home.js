import React from "react";
import "./CSS/Home.css";
import ImageOne from "../Assets/pexels-pok-rie-6471927.jpg";
import HomeIconOne from "../Assets/ai.png";
import ImageThree from "../Imgs/ImageOne/imgTwo.jpg";
import ImageTwo from "../Assets/SatelliteImg.jpg";

import StartupTN from "../Assets/startup-tn-logo.png";
import TNSeal from "../Assets/800px-TamilNadu_Logo.svg.png";
import GUSEC from "../Assets/gusec.png";
const Home = () => {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div class="container">
            <div class="row home-row-one">
              <div class="col-sm">
                <div className="container xcd32r">
                  <h1>
                    Transforming Governance<br></br> Through Smart Solutions
                  </h1>
                  <p className="e3rtx">
                    We are a smart governance company empowering central and
                    local government decision makers by providing dynamic
                    technology solutions to enhance state machinery.
                  </p>

                  <div>
                    <button type="button" class="btn btn-primary">
                      Let's Get Started
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

      <div class="quote">
        <h3 class="heading-space">
          Good Governance cannot remain merely a philosophy. <br></br> Concrete
          steps have to be taken for realizing its goals.
        </h3>
      </div>

      <div class="container">
        <div class="row zm87y">
          <div class="col-sm">
            <img
              src={ImageOne}
              alt=""
              class="cvb56r"
              className="xc11er"
              srcset=""
              width="100%"
              height="auto"
            />
          </div>

          <div class="col-sm">
            <h1 class="re45t">
              Solving the Flood through Offcrunch OpenX Model
            </h1>
            <p>
              At Offcrunch, we've developed the OpenX Model to address this
              pressing challenge. The OpenX Model is a sophisticated,
              data-driven solution that combines the power of technology,
              artificial intelligence, and geospatial analysis to revolutionize
              flood management. Our approach is multifaceted, addressing key
              aspects of flood management:
            </p>
            <div>
              <button type="button" class="btn btn-primary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container-fluid our-eng">
          <div className="container pt-5 pb-5 ">
            <div className="our-eng-heading">
              <h2>Empowering Government. Connecting Communities. <br></br>Offcrunch: Where Innovation Meets Impact.</h2>
            </div>
            
          </div>
        </div>
      </section>

      <div class="container">
        <div class="row zm87y">
          <div class="col-sm">
            <h1 class="re45t">
              Satellite Imagery: Explore the World from Above
            </h1>
            <p>
              At Offcrunch, we recognize the immense potential of satellite
              imagery and are committed to leveraging it to address diverse
              challenges. Our expertise lies in collecting, processing, and
              analyzing satellite data to generate meaningful insights for our
              clients. Whether it's supporting environmental conservation,
              disaster response, or urban development, we use satellite imagery
              to drive positive change and innovation.
            </p>

            <div>
              <button type="button" class="btn btn-primary">
                Learn More
              </button>
            </div>
          </div>

          <div class="col-sm">
            <img
              src={ImageTwo}
              width="100%"
              alt=""
              class="cvb56r"
              className="xc11er"
              srcset=""
            />
          </div>
        </div>
      </div>

      <div class="gfhjk">
        <div class="container">
          <h1 class="re4z">
            Our work spans a number of <br />
            domains and industries
          </h1>

          <div class="row">
            <div class="col-sm fdcx">
              <h4 class="dc">Smart City Management</h4>
            </div>
            <div class="col-sm fdcx">
              <h4>Data and Analytics</h4>
            </div>

            <div class="col-sm fdcx">
              <h4>EdTech</h4>
            </div>
          </div>

          <div class="row">
            <div class="col-sm fdcx">
              <h4 class="dc">Defense and Paramilitary</h4>
            </div>
            <div class="col-sm fdcx">
              <h4>Law and Enforcement</h4>
            </div>

            <div class="col-sm fdcx">
              <h4>Cyber Security</h4>
            </div>
          </div>

          <div class="row">
            <div class="col-sm fdcx">
              <h4 class="dc">MarketingTech</h4>
            </div>
            <div class="col-sm fdcx">
              <h4>MediTech</h4>
            </div>

            <div class="col-sm fdcx">
              <h4>FinTech</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="smart-gov">
        <h1>Smart Governance</h1>
        <div class="container">
          <h4 class="heading-space">
            Over the years we have worked with many governments and helped them
            embrace innovation in ways that were never imagined, and it was only
            possible because of the smart and innovative technologies and
            methods that we could bring in. After careful deliberation, we
            coined the term “Smart Governance” which identifies our work in the
            governance space.
          </h4>
        </div>

        <div>
          <button type="button" class="btn btn-primary">
            Learn More
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
