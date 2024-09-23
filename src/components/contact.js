import Card from "react-bootstrap/Card";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-text-heading">Contact Me</div>
      <div className="container">
        <div className="row d-flex justify-content-center flex-wrap">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6 margin">
            <Card className="contact-card-style">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <img
                    src="assets/email1.svg"
                    width="50"
                    height="50"
                    className="contact-iamge"
                    alt="Email Icon"
                  />
                  <span className="contact-text ml-3">
                    chetandhand031967@gmail.com
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6 margin">
            <Card className="contact-card-style">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <img
                    src="assets/phone.svg"
                    width="50"
                    height="50"
                    className="contact-iamge"
                    alt="Email Icon"
                  />
                  <span className="contact-text ml-3">+918824790850</span>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6 margin">
            <Card className="contact-card-style">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <img
                    src="assets/linkedin.svg"
                    width="50"
                    height="50"
                    className="contact-iamge"
                    alt="Email Icon"
                  />
                  <a
                    href="https://www.linkedin.com/in/chetandhand"
                    className="contact-text ml-3"
                  >
                    CHETAN DHAND
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
