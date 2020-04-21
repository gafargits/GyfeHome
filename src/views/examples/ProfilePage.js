import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";

function ProfilePage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("../../assets/img/faces/gafar.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Gafar Raji <br />
              </h4>
              <h6 className="description">Software Engineer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                A Tech-savvy and details-oriented Software Engineer
                with about 3 years of progressive experience in web application design and development,
                database design and development, and continuous service integration and delivery within ever-changing environments.
              </p>
              <br />
              <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Reach Out?
              </Button>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    </>
  );
}

export default ProfilePage;
