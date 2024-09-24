import Link from "next/link";

const Projects = () => {
  return (
    <>
      <section
        id="portfolio"
        className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Latest Works</span>
                <h2>
                  Explore My <span>Top Projects</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center pb-25">
            <div className="col-lg-6">
              <div className="project-image wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/projects/Abe-Gerage.JPG"
                  alt="Project"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="project-content wow fadeInRight delay-0-2s">
                <span className="sub-title">Abe Garage Management System</span>
                <h3>
                  <Link legacyBehavior href="https://abe-gerage.netlify.app/">
                    <a target="_blank"> Full-stack Garage Management System </a>
                  </Link>
                </h3>
                <p>
                  Abe Garage is a full-stack garage management system developed
                  by a team I led. <br />
                  <span className="sub-title">
                    <b>Front-end:</b>{" "}
                    <span className="text-white">
                      Designed and implemented using React.js, CSS, and
                      Bootstrap to deliver a clean, responsive, and
                      user-friendly interface.
                    </span>
                  </span>
                  <span className="sub-title">
                    <b> Back-end:</b>{" "}
                    <span className="text-white">
                      Developed using Node.js and Express to handle server-side
                      logic, while MySQL was used as the database for securely
                      managing data.
                    </span>
                  </span>
                </p>
                <Link legacyBehavior href="https://abe-gerage.netlify.app/">
                  <a className="details-btn" target="_blank">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row align-items-center pb-25">
            <div className="col-lg-6 order-lg-2">
              <div className="project-image wow fadeInLeft delay-0-2s">
                <img src="assets/images/projects/Evangadi.jpeg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 ms-auto">
              <div className="project-content wow fadeInRight delay-0-2s">
                <span className="sub-title">Full-stack Forum Application</span>
                <h3>
                  <Link legacyBehavior href="">
                    Evangadi Forum App
                  </Link>
                </h3>
                <p>
                  The Evangadi Forum App is a full-stack discussion platform
                  developed by a team I led. . <br />
                  <span className="sub-title">
                    <b>Front-end:</b>{" "}
                    <span className="text-white">
                      Implemented using React.js and Tailwind CSS, providing a
                      user-friendly interface with streamlined styling for easy
                      navigation of posts and discussions.
                    </span>
                  </span>
                  <span className="sub-title">
                    <b> Back-end:</b>{" "}
                    <span className="text-white">
                      Powered by Node.js and Express for handling server-side
                      logic, with MySQL as the database for securely managing
                      user information, posts, and comments.
                    </span>
                  </span>
                </p>
                <Link
                  legacyBehavior
                  href="https://evangadi-forum-fullstack.netlify.app/"
                >
                  <a className="details-btn" target="_blank">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row align-items-center pb-25">
            <div className="col-lg-6">
              <div className="project-image wow fadeInLeft delay-0-2s">
                <img src="assets/images/projects/Amazon.png" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="project-content wow fadeInRight delay-0-2s">
                <span className="sub-title">Amazon Clone</span>
                <h4>
                  <Link
                    legacyBehavior
                    href="https://amazon-clone-by-nahom.netlify.app/"
                  >
                    <a target="_blank">
                      {" "}
                      Full-stack E-commerce Platform (Amazon Clone){" "}
                    </a>
                  </Link>
                </h4>
                <p>
                  I independently developed the Amazon Clone, a full-stack
                  e-commerce platform featuring:
                  <br />
                  <span className="sub-title">
                    <b>Front-end:</b>{" "}
                    <span className="text-white">
                      Built with React.js and CSS for a responsive user
                      interface.
                    </span>
                    <span className="sub-title">
                      <b> User Authentication:</b>{" "}
                      <span className="text-white">
                        Integrated Firebase for secure login and registration
                      </span>
                    </span>
                    <span className="sub-title">
                      <b> Order Management: </b>{" "}
                      <span className="text-white">
                        Utilized Firebase to store and manage orders.
                      </span>
                    </span>
                    <span className="sub-title">
                      <b> Payments: </b>{" "}
                      <span className="text-white">
                        Implemented Stripe for secure payment processing.
                      </span>
                    </span>
                    <span className="sub-title">
                      <b>Back-end:</b>{" "}
                      <span className="text-white">
                        Developed using Node.js for server-side logic.
                      </span>
                    </span>
                  </span>
                </p>
                <Link
                  legacyBehavior
                  href="https://amazon-clone-by-nahom.netlify.app/"
                >
                  <a className="details-btn " target="_blank">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row align-items-center pb-25">
            <div className="col-lg-6 order-lg-2">
              <div className="project-image wow fadeInLeft delay-0-2s">
                <img src="assets/images/projects/netflix.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 ms-auto">
              <div className="project-content wow fadeInRight delay-0-2s">
                <span className="sub-title">Netflix Clone</span>
                <h4>
                  <Link
                    legacyBehavior
                    href="https://nahom4748.github.io/netflixClone/"
                  >
                    <a target="_blank"> Front-end Netflix Website Clone </a>
                  </Link>
                </h4>
                <p>
                  I independently developed the **Netflix Clone**, a front-end
                  replica of the Netflix platform featuring:
                  <br />
                  <span className="sub-title">
                    <b>Front-end:</b>{" "}
                    <span className="text-white">
                      Built with **React.js** and **CSS** to deliver a
                      responsive user interface that mimics Netflix.
                    </span>
                  </span>
                  <span className="sub-title">
                    <b>Movie Data Fetching:</b>{" "}
                    <span className="text-white">
                      Used **API integration** to fetch and display movies
                      dynamically.
                    </span>
                  </span>
                  <span className="sub-title">
                    <b>Trailer Integration:</b>{" "}
                    <span className="text-white">
                      Utilized the **YouTube API** for displaying movie
                      trailers.
                    </span>
                  </span>
                </p>
                <Link
                  legacyBehavior
                  href="https://nahom4748.github.io/netflixClone/"
                >
                  <a className="details-btn " target="_blank">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row align-items-center pb-25">
            <div className="col-lg-6">
              <div className="project-image wow fadeInLeft delay-0-2s">
                <img src="assets/images/projects/ios2.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="project-content wow fadeInRight delay-0-2s">
                <span className="sub-title">Apple Website Clone</span>
                <h4>
                  <Link legacyBehavior href="https://clone2024.netlify.app/">
                    <a target="_blank"> Front-end Apple Website Clone </a>
                  </Link>
                </h4>
                <p>
                  I independently developed the **Apple Website Clone**,
                  focusing on the front-end design and functionality:
                  <br />
                  <span className="sub-title">
                    <b>Front-end:</b>{" "}
                    <span className="text-white">
                      Built using **React.js** and **CSS**, replicating the
                      sleek and responsive design of Apple's website.
                    </span>
                  </span>
                  <span className="sub-title">
                    <b>UI/UX:</b>{" "}
                    <span className="text-white">
                      Emphasized on delivering a pixel-perfect, minimalistic,
                      and intuitive user interface.
                    </span>
                  </span>
                  <span className="sub-title">
                    <b>Responsiveness:</b>{" "}
                    <span className="text-white">
                      Ensured a fully responsive layout that adapts seamlessly
                      across devices.
                    </span>
                  </span>
                </p>
                <Link legacyBehavior href="https://clone2024.netlify.app/">
                  <a
                    className="details-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
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
    </>
  );
};
export default Projects;

export const Projects2 = () => {
  return (
    <section
      id="projects"
      className="projects-area-four pt-135 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" /> Explore my projects
              </span>
              <h2>Explore My Projects</h2>
            </div>
          </div>
        </div>
        <div className="row gap-50">
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two1.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two2.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two3.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two4.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-3">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two5.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="project-details-btn mb-50">
              <Link legacyBehavior href="/project-details">
                <a className="more-btn wow zoomIn delay-0-2s">
                  <span>More</span>
                  <i className="fal fa-arrow-up" />
                </a>
              </Link>
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
