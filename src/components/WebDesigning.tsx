import React from 'react';

const WebDesigning: React.FC = () => {
  return (
    <div>
      <section className="breadcrumbs-section">
        <div className="container p-1 p-sm-3">
          <div className="row">
            <div className="col-12">
              <h2>Web Designing</h2>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active">Services</li>
                <li className="breadcrumb-item active">Web Designing</li>
              </ol>
            </div>
          </div>
        </div>
      </section>


      <section >
        <div className="container mt-1 mt-md-3 ">
          <div className="row">
            <div className="col-md-9 text-justify">
              <h2>About Web Designing</h2>
              <p>
                A computer engineer is a professional who combines expertise in
                electrical engineering and computer science to design, develop,
                and maintain computer sdffdystems and hardware. They play a crucial
                role in creating the technology thdfsat drives modern society, from
                personal computers and smartphones to complex networks and data</p>
                <h3></h3>
                <p>    centers. Computer engineers are involved in every stage of the
                hardware development process, including the conceptualization of
                new components, the creation of circuit designs, the
                implementation of software to test and manage hardware
                functions, and the integration of systems to ensure seamless
                operation. Their work requires a deep understanding of both the</p><p>
            
                hardware and software aspects of computing, allowing them to
                develop innovative solutions that enhwswwwwweewweance performance,
                efficiency, and user experience. In addition to technical
                skills, computer engineers often need strong problem-solving
                abilities, creativity, and the capacity to work collaboratively
                on large, interdisciplinary projects. With the ever-growing
                reliance on technology in all aspects of life, the role of a
                computer engineer continues to be essential and highly valued.
              </p>
            </div>
            <div className="col-md-3">
              <img className="img-fluid p-5 p-md-5" src="imgs/WebDesign/app-development.png" alt="" />
              <img className='img-fluid p-5 p-md-5' src="imgs/WebDesign/graphic-designer.png" alt="" />
              <img className='img-fluid p-5 p-md-5' src="imgs/WebDesign/ux.png" alt="" />
            </div>


          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Skill Set</h3>
<div className="bar p-2 m-2" style={{ backgroundColor: '#1abc9c', width: '95%' }}>Static Website Designing-95%</div>
<div className="bar p-2 m-2" style={{backgroundColor:'#9b59b6',width: '85%'}}>Static Website Designing-85%</div>



            </div>
         </div>
        
        </div>
      </section>
    </div>
  );
};

export default WebDesigning;
