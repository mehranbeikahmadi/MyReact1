import React from "react";

import "./Footer.css";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container top-footer p-md-3 p-1">
        <div className="row">
          <div className="col-md-3 pl-4 pr-4 text-left">
            <img
              className="img-fluid"
              src="imgs/mehran-fotor-20240711162226.png"
              alt="Simple Snippets Logo"
            />
            <p>
              Simple Snippets is a Tech-Educational Channel / Platform / Blog /
              Medium for anyone and everyone ...
              <a href="#">Read more...</a>
            </p>
            <a style={{ color: "silver" }} className="p-1" href="#">
              <i className="fab fa-2x fa-facebook-square"></i>
            </a>
            <a style={{ color: "silver" }} className="p-1" href="#">
              <i className="fab fa-2x fa-google-plus-square"></i>
            </a>
            <a style={{ color: "silver" }} className="p-1" href="#">
              <i className="fab fa-2x fa-twitter-square"></i>
            </a>
            <a style={{ color: "silver" }} className="p-1" href="#">
              <i className="fab fa-2x fa-instagram"></i>
            </a>
          </div>
          <div className="col-md-3 text-left">
            <h3>Important Links</h3>
            <a href="#">Privacy Policy</a>
            <br />
            <a href="#">YouTube Channel Link</a>
            <br />
            <a href="#">Blog Articles</a>
            <br />
            <a href="#">Social Media</a>
          </div>
          <div className="col-md-3 text-left">
            <h3>Our Services</h3>
            <a href="#">Web Designing</a>
            <br />
            <a href="#">Web Development</a>
            <br />
            <a href="#">SEO Services</a>
            <br />
            <a href="#">Software Development</a>
            <br />
            <a href="#">Mobile App Development</a>
            <br />
            <a href="#">Graphic Designing</a>
          </div>
          <div className="col-md-3 text-left">
            <h3>Contact Us</h3>
            <a href="tel:+12365184709">
              <i className="fas fa-phone"></i> +12365184709
            </a>
            <br />
            <a href="mailto:mehranbeikahmadi@gmail.com">
              <i className="fas fa-envelope"></i> mehranbeikahmadi@gmail.com
            </a>
            <br />
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167148.98204695096!2d-122.96584452390485!3d49.111285407469424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485dc034d3fa75b%3A0xd28b4898abd598e0!2sSurrey%2C%20BC!5e0!3m2!1sen!2sca!4v1717292731697!5m2!1sen!2sca"
                frameBorder="0"
                allowFullScreen
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bottom-footer p-2">
        <div className="row">
          <div className="col-12">
            <p>Copyright @ 2018 -All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
