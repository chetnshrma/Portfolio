import React from "react";
import Card from "react-bootstrap/Card";
import LeftAlignedTimeline from "./timeline";

const About = () => {
  const skills = [
    {
      id: "1",
      image: "assets/react-logo.svg",
      name: "React JS",
    },
    {
      id: "2",
      image: "assets/js.svg",
      name: "Javascript",
    },
    {
      id: "3",
      image: "assets/typescript.svg",
      name: "Typescript",
    },
    {
      id: "4",
      image: "assets/redux.svg",
      name: "Redux",
    },
    {
      id: "5",
      image: "assets/html.svg",
      name: "Html 5",
    },
    {
      id: "6",
      image: "assets/css.svg",
      name: "CSS 3",
    },
  ];
  return (
    <>
      <div className="about-container">
        <div className="about-text">About</div>
        <div className="about-description">
          An engineering aspirant, motivated to work in a challenging and
          congenial environment, seeking opportunities to apply coding,
          problem-solving, and teamwork skills to develop innovative software
          solutions and contribute to the success of a dynamic organization.
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-text">My Skills</div>
        <div className="container">
          <div className="row d-flexs justify-content-center flex-wrap">
            {skills.map((skill) => (
              <div
                className="col-xs-12 col-sm-6 col-md-4 col-lg-3 margin"
                key={skill.id}
              >
                <Card className="card-style">
                  <Card.Body>
                    <Card.Text>
                      <img
                        src={skill.image}
                        width="80"
                        height="80"
                        className="d-inline-block align-top skill-iamge"
                        alt="React Bootstrap logo"
                      />
                    </Card.Text>
                    <Card.Text className="skill-text">{skill.name}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="experience-container">
        <div className="experience-text">Experience</div>
        <LeftAlignedTimeline />
      </div>
    </>
  );
};

export default About;
