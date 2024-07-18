import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div>
      <section className="breadcrumbs-section">
        <div className="container p-1 p-sm-3">
          <div className="row">
            <div className="col-12">
              <h2>About Us</h2>
              <ol className="breadcrumb-section">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active">About Us</li>
              </ol>
            </div>
          </div>
        </div>
      </section>


<section className="about-company-section">
    <div className="container p-1 p-sm-3">
        <div className="row">
            <div className="col-12 text-center">
                <h2>
                    About Mehran Beikahmadi
                </h2>
                <hr />
            </div>
            <div className="col-md-3">
                <img src="imgs/id-card-clip-alt.png" alt="" className="img-fluid" />

            </div>
            <div className="col-md-9">
                <p>
                A computer engineer is a professional who combines expertise in electrical engineering and computer science to design, develop, and maintain computer systems and hardware. They play a crucial role in creating the technology that drives modern society, from personal computers and smartphones to complex networks and data centers. Computer engineers are involved in every stage of the hardware development process, including the conceptualization of new components, the creation of circuit designs, the implementation of software to test and manage hardware functions, and the integration of systems to ensure seamless operation. Their work requires a deep understanding of both the hardware and software aspects of computing, allowing them to develop innovative solutions that enhance performance, efficiency, and user experience. In addition to technical skills, computer engineers often need strong problem-solving abilities, creativity, and the capacity to work collaboratively on large, interdisciplinary projects. With the ever-growing reliance on technology in all aspects of life, the role of a computer engineer continues to be essential and highly valued.
                </p>
            </div>
        </div>

    </div>
</section>
<section className="home-newsletter p-2 pt-md-4 pb-md-4">
        <div className="row">
          <div className="col-12 text-center">
            <h3>Subscribe to our Newsletter</h3>
            <div className="input-group p-3">
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
      <section className="pt-5 pb-5">
  <div className="container">
    <div className="row mt-4">
      <div className="col text-center">
        <h3>Our Awesome team</h3>
      </div>
      <hr />
    </div>
    <div className="row">
      <div className="col-md-4 text-center">
        <img
          className="img-fluid qualities-img p-4"
          src="imgs/colliguees/architecture.png"
          alt="SEO"
        />
        <h5>Customized Requirements</h5>
        <p><i></i>Tanmay Sakpal</p>
      </div>
      <div className="col-md-4 text-center">
        <img
          className="img-fluid qualities-img p-4"
          src="imgs/colliguees/briefcase.png"
          alt="Innovative Solutions"
        />
        <h5>Innovative Solutions</h5>
        <p>We provide innovative solutions to meet your business needs.</p>
      </div>
      <div className="col-md-4 text-center">
        <img
          className="img-fluid qualities-img p-4"
          src="imgs/colliguees/business.png"
          alt="24/7 Support"
        />
        <h5>24/7 Support</h5>
        <p>Our team is available around the clock to support you.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 text-center">
        <img
          className="img-fluid qualities-img p-4"
          src="imgs/colliguees/company.png"
          alt="Top-notch Security"
        />
        <h5>Top-notch Security</h5>
        <p>Your data is secure with our state-of-the-art security measures.</p>
      </div>
      <div className="col-md-4 text-center">
        <img
          className="img-fluid qualities-img p-4"
          src="imgs/colliguees/strategy.png"
          alt="Scalability"
        />
        <h5>Scalability</h5>
        <p>Our solutions are scalable to grow with your business.</p>
      </div>
      <div className="col-md-4 text-center">
        <img
          className="img-fluid qualities-img p-4"
          src="imgs/colliguees/suitcase (1).png"
          alt="Efficiency"
        />
        <h5>Efficiency</h5>
        <p>We ensure efficiency in all our processes to deliver the best results.</p>
      </div>
    </div>
  </div>
</section>

      <div className="content">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default AboutUs;
