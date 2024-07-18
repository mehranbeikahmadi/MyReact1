import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"; // Adjusted import for CSS
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <div className="p-1" id="topHeader">
        <div className="container">
          <div className="row">
            <div className="col-12 text-right">
              <a className="p-1" href="tel:+12365184709">
                <i className="fas fa-phone">+(1)2365184709</i>
              </a>
              <a className="p-1" href="mailto:mehranbeikahmadi@gmail.com">
                <i className="fas fa-envelope">mehranbeikahmadi@gmail.com</i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="bottomHeader">
        <div className="container-fluid">
          <nav
            className="navbar navbar-dark navbar-expand-lg"
            style={{ backgroundColor: "#004d80" }}
          >
            <a href="sharif.edu" className="navbar-brand">
              <img
                className="img-fluid"
                src="imgs/mehran-fotor-20240711162226.png"
                width="250px"
                alt="Simple Snippets Logo"
              />
            </a>
            <button
              data-toggle="collapse"
              data-target="#navbarToggler"
              type="button"
              className="navbar-toggler"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    href="#"
                  >
                    Services
                  </a>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item active" to="/webdesigning">
                      Web Designing
                    </Link>
                    <Link className="dropdown-item" to="/webdevelopment">
                      Web Development Services
                    </Link>
                    <Link className="dropdown-item" to="/seo">
                      SEO Services
                    </Link>
                    <Link className="dropdown-item" to="/softwaredevelopment">
                      Software Development
                    </Link>
                    <Link className="dropdown-item" to="/mobileappdevelopment">
                      Mobile App Development
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/graphicdesigning">
                      Graphic Designing
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
