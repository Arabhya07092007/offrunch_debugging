import React from "react";
import "./CSS/Footer.css";
import slackLogo from "../Assets/icons/Slack-mark-RGB.png";
import DiscordLogo from "../Assets/icons/discord-mark-blue.png";
import GithubLogo from "../Assets/icons/GitHub_Logo_White.png";
import WhatsAppLogo from "../Assets/icons/Digital_Glyph_Green.png";

const Footer = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <div class="container-fluid footer-main-class">
        <div class="container">
          <h1 class="footer-heading">
            Experience the Change,
            <br />
            You want to see.
          </h1>

          <div class="row footer-social-head">
            <div class="col-sm">
              <h3>
                <a onClick={() => openInNewTab('https://linkedin.com/offcrunch')}> LinkedIn</a>
              </h3>
            </div>
            <div class="col-sm">
              <h3 onClick={() => openInNewTab('https://facebook.com/offcrunch')}><a>Facebook</a></h3>
            </div>
            <div class="col-sm">
              
              <h3><a onClick={() => openInNewTab('https://instagram.com/offcrunch')}>Instagram</a></h3>
            </div>
            <div class="col-sm">
              <h3><a onClick={() => openInNewTab('https://twitter.com/offcrunch')}>Twitter</a></h3>
            </div>
            <div class="col-sm">
              <h3><a onClick={() => openInNewTab('https://medium.com/offcrunch')}>Medium</a></h3>
            </div>
          </div>

          <div class="row row-gap">
            <div class="col-sm footer-list">
              <div class="footer-small-head">
                <b>Join our Community</b>
              </div>

              <div class="col-sm">
                <div className="footer-logos">
                  <div>
                    <img src={slackLogo} width="auto" height="42" />
                  </div>

                  <div>
                    <img src={DiscordLogo} width="auto" height="37" />
                  </div>

                  <div>
                    <img src={GithubLogo} width="auto" height="37" />
                  </div>

                  <div>
                    <img src={WhatsAppLogo} width="auto" height="37" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm footer-list">
              <div class="footer-small-head">
                <b>Offcrunch For</b>
              </div>
              <li>Governments</li>
              <li>Institutes</li>
              <li>Industries</li>
            </div>

            <div class="col-sm footer-list">
              <div class="footer-small-head">
                <b>Legal</b>
              </div>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>GDPR</li>
            </div>

            <div class="col-sm footer-list">
              <div class="footer-small-head">
                <b>Company</b>
              </div>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>GDPR</li>
            </div>

            <div class="col-sm">
              <div class="footer-small-head">
                <b> Corporate Address</b>
              </div>
              <p>Chennai, Tamil Nadu - 600001</p>
            </div>
            <hr />
            <div class="footer-copyright">
              <p>© 2019-2023 Offcrunch India Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
