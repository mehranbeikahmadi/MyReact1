import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div>
<section className="breadcrumbs-section">
<div className="container p-1 p-sm-3">
  <div className="row">
    <div className="col-12">
      <h2>Portfolio</h2>
      <ol className="breadcrumb-section">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        <li className="breadcrumb-item active">Portfolio</li>
      </ol>
    </div>
  </div>
</div>
</section>

<section className="portfolio-section">
<div className="container">
  <div className="row">
    <div className="col-12">
      <h2>Portfolio</h2>
     <p>
     PortfoliUI is a modern, responsive portfolio template ideal for web developers, designers, and professionals wanting to showcase their work effectively. Key features include customizable layouts, project showcases, an "About Me" section, skills and experience displays, interactive elements, a contact form, SEO optimization, and cross-browser compatibility. Components comprise a clean
     </p>
     <hr />

    </div>
  </div>
</div>
</section>
<section className="portfolio-section">
<div className="container">
  <div className="row text-center">
    <div className="col-12 text-center">
        <h3>
            Some of our work
        </h3>
    </div>

  </div>
  <div className="row">
    <div className="col-md-4 text-center">
        <img className="img-fluid p-2 p-sm-3" src="" alt="" />
        <h5>YYZ XOM</h5>
        <p>
            <i>Static Website</i>
        </p>

    </div>
    <div className="col-md-4 text-center">
    <img className='img-fluid p-2 p-sm-3' src="" alt="" />
        <h5>YYZ XOM</h5>
        <p>
            <i>Static Website</i>
        </p>
    </div>
    <div className="col-md-4 text-center">
    <img className='img-fluid p-2 p-sm-3' src="" alt="" />
        <h5>YYZ XOM</h5>
        <p>
            <i>Static Website</i>
        </p>
    </div>

  </div>
  <div className="row">
    <div className="col-md-4 text-center">
        <img className='img-fluid p-2 p-sm-3' src="" alt="" />
        <h5>YYZ XOM</h5>
        <p>
            <i>Static Website</i>
        </p>

    </div>
    <div className="col-md-4 text-center">
    <img className='img-fluid p-2 p-sm-3' src="" alt="" />
        <h5>YYZ XOM</h5>
        <p>
            <i>Static Website</i>
        </p>
    </div>
    <div className="col-md-4 text-center">
    <img className='img-fluid p-2 p-sm-3' src="" alt="" />
        <h5>YYZ XOM</h5>
        <p>
            <i>Static Website</i>
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

export default Portfolio;
