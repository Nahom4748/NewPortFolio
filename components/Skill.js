import Link from "next/link";
import "./skill.css";
const items = [
  {
    id: 1,
    name: "React",
    image: "assets/images/skills/react-js-icon.png",
    value: "95",
  },
  {
    id: 2,
    name: "Next js",
    image: "assets/images/skills/nextjs-icon.png",
    value: "83",
  },

  {
    id: 4,
    name: "Node js",
    image: "assets/images/skills/node-js-icon.png",
    value: "84",
  },
  {
    id: 5,
    name: "Express js",
    image: "assets/images/skills/express-js-icon.png",
    value: "65",
  },
  {
    id: 6,
    name: "Mysql",
    image: "assets/images/skills/mysql-icon.png",
    value: "86",
  },
  {
    id: 7,
    name: "Mongodb",
    image: "assets/images/skills/mongodb-icon.png",
    value: "62",
  },
  {
    id: 8,
    name: "Git",
    image: "assets/images/skills/git-icon.png",
    value: "94",
  },
  {
    id: 9,
    name: "Github",
    image: "assets/images/skills/github-icon.png",
    value: "94",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-5">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">My Skills</span>
                  <h2>
                    Discover My <span>Skills & Experience</span>
                  </h2>
                  <p>
                    With hands-on experience in both front-end and back-end
                    development, I’m passionate about building efficient, modern
                    applications. Let’s dive into the key technologies and
                    frameworks I work with to bring ideas to life.
                  </p>
                </div>

                <Link legacyBehavior href="/about">
                  <a className="theme-btn">
                    Learn More <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-items-wrap">
                <div className="row">
                  {items.map((item) => (
                    <div
                      className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6"
                      key={item.name}
                    >
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        <img
                          className="skill-image"
                          src={item.image}
                          alt={item.name}
                        />
                        <h5>{item.name}</h5>
                      </div>
                    </div>
                  ))}
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
export default Skill;

export const Skill2 = () => {
  return (
    <section
      id="skills"
      className="skill-area-two rel z-1 pt-130 rpt-100 pb-105 rpb-70"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="skill-content-two rel z-2 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-60">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> professional skill of me
                </span>
                <h2>professional skill</h2>
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-8">
                  <img src="assets/images/skills/skill-man.png" alt="Skill" />
                </div>
                <div className="col-4">
                  <img src="assets/images/shape/skill-arrow.png" alt="Arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="skill-wrap-two">
              <div className="row gap-40">
                {items.map(
                  (item) =>
                    item.id <= 6 && (
                      <div className="col-md-4 col-sm-4 col-6" key={item.id}>
                        <div className="skill-item-two wow fadeInUp delay-0-3s">
                          <div className="icon-percent">
                            <img src={item.image} alt="Skill" />
                            <span className="percent">{item.value}%</span>
                          </div>
                          <h5 className="title">{item.name}</h5>
                        </div>
                      </div>
                    )
                )}
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
