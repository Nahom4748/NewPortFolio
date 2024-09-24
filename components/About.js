import Counter from "./Counter";

const About = () => {
  return (
    <section id="about" className="about-area rel z-1">
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Me</span>
                  <h2>
                    I'm a full-stack web developer{" "}
                    <span>with a focus on continuous learning</span> and
                    problem-solving.
                  </h2>
                  <p>
                    strong focus on building dynamic, user-friendly
                    applications. Skilled in both front-end and back-end
                    development, I enjoy solving complex problems and
                    continuously improving my skills in technologies like React,
                    Node.js, and databases. I thrive in collaborative
                    environments and am always eager to learn new tools and
                    techniques to enhance my development work.
                  </p>
                </div>
                <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                  <li>Communication</li>
                  <li>Critical Thinking</li>
                  <li>Problem Solving</li>
                  <li>Team Collaboration</li>
                </ul>

                <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
                  <div className="info-box-item">
                    <i className="far fa-envelope" />
                    <div className="content">
                      <span>Email Me</span>
                      <br />
                      <a href="Nahom4748@gmail.com">Nahom4748@gmail.com</a>
                    </div>
                  </div>
                  <div className="info-box-item">
                    <i className="far fa-phone" />
                    <div className="content">
                      <span>Make A Call</span>
                      <br />
                      <a href="callto:+251922174894">+251922174894</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-image-part wow fadeInUp delay-0-3s">
                <img src="assets/images/about/about.jpg" alt="About Me" />

                <div className="dot-shape">
                  <img src="assets/images/shape/about-dot.png" alt="Shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default About;
