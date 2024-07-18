
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const HomePage: React.FC = () => {
  return (
    <div className="container mt-4">

{/* <section className="container">
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="imgs/qualities/linux.png" className="d-block w-100" alt="Linux logo" />
              <h1 className="myslideheader">Slide Title 1</h1>
              <h3>Slide Description</h3>
            </div>
            <div className="carousel-item">
              <img src="imgs/qualities/intel.png" className="d-block w-100" alt="Intel logo" />
            </div>
            <div className="carousel-item">
              <img src="imgs/qualities/microsoft.png" className="d-block w-100" alt="Microsoft logo" />
            </div>
            <div className="carousel-item">
              <img src="imgs/qualities/samsung.png" className="d-block w-100" alt="Samsung logo" />
            </div>
          </div>
          <a href="#carouselExampleIndicators" className="carousel-control-prev" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a href="#carouselExampleIndicators" className="carousel-control-next" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
 */}
      <section className="container">
        <Carousel fade interval={50}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="imgs/qualities/linux.png"
              alt="Linux logo"
            />
            <Carousel.Caption>
              <h1 className="myslideheader">Slide Title 1</h1>
              <h3>Slide Description</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="imgs/qualities/intel.png"
              alt="Intel logo"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="imgs/qualities/microsoft.png"
              alt="Microsoft logo"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="imgs/qualities/samsung.png"
              alt="Samsung logo"
            />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="top-hero-section pt-4 pb-5 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <h4>Quality - support - Value</h4>
              <h1>Best In Class IT Services </h1>
              <h5>If its a Website or an APP or graphics, we can develop it for you at affordable rates{" "}
              </h5><br />
              <button style={{ color: "#fff", backgroundColor: "#004d80" }}
               className="btn btn-primary btn-lg">Get Started</button>
              <a href="#">Read More..</a>
            </div>
            <div className="col-md-7">
              <img src="imgs/programming.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-4 ">
        <div className="container">
          <div className="row ">
            <div className="col-12 text-center">
              <h3>Lots Of IT Companies in town. why you should choose us?</h3>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4  text-center ">
              <img
                className="img-fluid qualities-img p-5"
                src="imgs/qualities/ui-design.png"
                alt=""
              />
              <h5>Customized Requirements</h5>
              <p>
                Every Idea is unique and thats why we craft it as per your requirements
              </p>
            </div>
            <div className="col-md-4  text-center">
              <img
                className="img-fluid qualities-img p-5"
                src="imgs/qualities/ux.png"
                alt=""
              />
              <h5>Customized Requirements</h5>
              <p>
                Every Idea is unique and thats why we craft it as per your
                requirements
              </p>
            </div>
            <div className="col-md-4  text-center ">
              {" "}
              <img
                className="img-fluid qualities-img p-5"
                src="imgs/qualities/web-art.png"
                alt=""
              />
              <h5>Customized Requirements</h5>
              <p>
                Every Idea is unique and thats why we craft it as per your
                requirements
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4  text-center ">
              <img
                className="img-fluid qualities-img p-5 "
                src="imgs/qualities/web-design.png"
                alt=""
              />
              <h5>Customized Requirements</h5>
              <p>
                Every Idea is unique and thats why we craft it as per your
                requirements
              </p>
            </div>
            <div className="col-md-4  text-center  ">
              <img
                className="img-fluid qualities-img p-5"
                src="imgs/qualities/website-design.png"
                alt=""
              />
              <h5>Customized Requirements</h5>
              <p>
                Every Idea is unique and thats why we craft it as per your
                requirements
              </p>
            </div>
            <div className="col-md-4  text-center ">
              {" "}
              <img
                className="img-fluid qualities-img p-5"
                src="imgs/qualities/website-layout.png"
                alt=""
              />
              <h5>Customized Requirements</h5>
              <p>
                Every Idea is unique and thats why we craft it as per your
                requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="requirements-section pt-1 pb-4 pt-md-3  pb-md-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="text-center col-md-9">
              <h3>Do you have any requirements? we can do it for you!</h3>
            </div>
            <div className="col-md-3">
              <button className="btn btn-lg btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      <section className="p-3 pt-md-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>About Simple Snippets</h2>
              <h6>
                Optional JavaScript jQuery first, then Popper.js, then Bootstrap
                JS "https://code.jquery.com/jquery-3.5.1.min.js"
                "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
                "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
              </h6>
              <button className="btn btn-lg btn-primary">Read more</button>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid p-4"
                src="imgs/qualities/artificial-intelligence.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-newsletter">
        <div className="row">
          <div className="col-12 text-center">
            <h3>Subscribe to our Newsletter</h3>
            <div className="input-group pb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <span className="input-group-btn">
                <button className="btn btn-theme" type="submit">
                  Subscrib
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5-section">
        <div className="container">
          <div className="row mt-4">
            <div className="col-12 text-center">
              <h3>Out Best in Class Services</h3>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4  text-center ">
              <img
                className="img-fluid qualities-img p-5"
                src="imgs/bitcoin.png"
                alt=""
              />
              <h5>Customized Requirements</h5>
              <p>
                Every Idea is unique and thats why we craft it as per your
                requirements
              </p>
            </div>
            <div className="col-md-4  text-center ">
              <img
                className="img-fluid qualities-img p-5"
                src="imgs/bitcoin.png"
                alt=""
              />
              <h5>Customized Requirements</h5>
              <p>
                Every Idea is unique and thats why we craft it as per your
                requirements
              </p>
            </div>
            <div className="col-md-4  text-center ">
              {" "}
              <img
                className="img-fluid qualities-img p-5"
                src="imgs/bitcoin.png"
                alt=""
              />
              <h5>Customized Requirements</h5>
              <p>
                Every Idea is unique and thats why we craft it as per your
                requirements
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4  text-center ">
              <img
                className="img-fluid qualities-img p-5 "
                src="imgs/bitcoin.png"
                alt=""
              />
              <h5>Customized Requirements</h5>
              <p>
                Every Idea is unique and thats why we craft it as per your
                requirements
              </p>
            </div>
            <div className="col-md-4  text-center  ">
              <img
                className="img-fluid qualities-img p-5"
                src="imgs/bitcoin.png"
                alt=""
              />
              <h5>Customized Requirements</h5>
              <p>
                Every Idea is unique and thats why we craft it as per your
                requirements
              </p>
            </div>
            <div className="col-md-4  text-center ">
              {" "}
              <img
                className="img-fluid qualities-img p-5"
                src="imgs/bitcoin.png"
                alt=""
              />
              <h5>Customized Requirements</h5>
              <p>
                Every Idea is unique and thats why we craft it as per your
                requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-3 pb-4 clients-section">
        <div className="container">
          <div className="row mt-4">
            <div className="col-12 text-center">
              <h3>Some of our trusted clients.</h3>
            </div>
            <hr/>

          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-6">
            <img
              className="img-fluid feature-img p-2"
              src="imgs/qualities/doc.png"
              alt="Card image cap"
            />
          </div>
          <div className="col-md-2 col-6">
            <img
              className="img-fluid feature-img p-2"
              src="imgs/qualities/hp.png"
              alt="Card image cap"
            />
          </div>
          <div className="col-md-2 col-6">
            <img
              className="img-fluid feature-img p-2"
              src="imgs/qualities/intel.png"
              alt="Card image cap"
            />
          </div>
          <div className="col-md-2 col-6">
            <img
              className="img-fluid feature-img p-2"
              src="imgs/qualities/linux.png"
              alt="Card image cap"
            />
          </div>
          <div className="col-md-2 col-6">
            <img
              className="img-fluid feature-img p-2"
              src="imgs/qualities/microsoft.png"
              alt="Card image cap"
            />
          </div>
          <div className="col-md-2 col-6">
            <img
              className="img-fluid feature-img p-2"
              src="imgs/qualities/samsung.png"
              alt="Card image cap"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
