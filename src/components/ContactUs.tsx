import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div>
      <section className="breadcrumbs-section">
        <div className="container pl-3 p-1 p-sm-3">
          <div className="row">
            <div className="col-12">
              <h2>Contact Us</h2>
              <ol className="breadcrumb-section">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Contact Us</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                A computer engineer is a professional who combines expertise in
                electrical engineering and computer science to design, develop,
                and maintain computer systems and hardware. They play a crucial
                role in creating the technology that drives modern society, from
                personal computers and smartphones to complex networks and data
                centers. Computer engineers are involved in every stage of the
                hardware development process, including the conceptualization of
                new components, the creation of circuit designs, the
                implementation of software to test and manage hardware
                functions, and the integration of systems to ensure seamless
                operation. Their work requires a deep understanding of both the
                hardware and software aspects of computing, allowing them to
                develop innovative solutions that enhance performance,
                efficiency, and user experience. In addition to technical
                skills, computer engineers often need strong problem-solving
                abilities, creativity, and the capacity to work collaboratively
                on large, interdisciplinary projects. With the ever-growing
                reliance on technology in all aspects of life, the role of a
                computer engineer continues to be essential and highly valued.
              </p>
              <hr />
            </div>
         </div>
        
        </div>
      </section>


      <section className="form-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form action="">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name*"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address*"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Contact Number*"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <select name="" id="" className="form-control">
                    <option selected>Country</option>
                    <option>England</option>
                    <option>Iran</option>
                    <option >French</option>
                    <option value="">Germany</option>
                    <option value="">US</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject*"
                    />
                  </div>
  
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12 text-center">
                    <textarea  className='form-control' rows={3}>
               
                    </textarea>
                  </div>
  
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12 text-center">
              <button type='submit' className='btn btn-primary'>
                <i className='fas fa-paper-plane'></i>
                 Send Message</button>
                  </div>
  
                </div>

              </form>




            </div>

            <div className="col-md-6 address" >
              <h5>Call Us / WhatsApp</h5>
              <p><a href='tel:+12365184709'><i className='fas fa-phone'></i>+12365184709</a><br/></p>
              <h5>Email  / Website</h5>
              <p><a href="mailto:mehranbeikahmadi@gmail.com"><i className='fas fa-envelope'></i>mehranbeikahmadi@gmail.com</a> </p>
            
              <p><a href="https:beikahmadi.tech/"><i className='fas fa-globe'></i>www.beikahmadi.tech</a></p>
              <h5>Working Hours </h5>
              <p>Mon - Fri : 9am - 6pm(IST)</p>
              <h5>Address</h5>
              <p>Surey Center, BC, Canada</p>
            </div>
    
          </div>
        </div>



      </section>
<section>
<div className="container-fluid">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10677305.15395528!2d-131.87164306640625!3d49.20503726723142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d8729c135363%3A0x195c233cbf05e3e2!2sColumbia!5e0!3m2!1sen!2sca!4v1721168471219!5m2!1sen!2sca" frameBorder={1} width="100% " style={{border:2}}>



</iframe>


</div>


</section>


    </div>
  );
};

export default ContactUs;
