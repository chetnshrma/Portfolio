import About from "./about";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Portfolio from "./portfolio";
import Contact from "./contact";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ background: "#413e3e" }} className="row align-items-center">
        <div className="col-md-6">
          <span style={{ fontSize: "30px", fontWeight: "400", color: "white" }}>
            I'M
          </span>
          <span
            style={{ fontSize: "50px", fontWeight: "bold", color: "goldenrod" }}
          >
            {" "}
            CHETAN DHAND
          </span>
          <br />

          <span style={{ fontSize: "30px", fontWeight: "400", color: "white" }}>
            Software Developer
          </span>
          <br />
          <br />
          <Button
            variant="outline-warning"
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </Button>
        </div>
        <div className="col-md-6 ">
          {" "}
          <img
            src="assets/Chetan Photo.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top profile-image"
            alt="React Bootstrap logo"
          />
        </div>
      </div>
      <div className="homepage-sectionchange-margin">
        <About />
      </div>
      <div className="homepage-sectionchange-margin">
        <Portfolio />
      </div>
      <div className="homepage-sectionchange-margin">
        <Contact />
      </div>
    </div>
  );
};
export default Home;
