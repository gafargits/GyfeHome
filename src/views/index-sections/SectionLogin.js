import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionLogin() {
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mt-0"
                    color="facebook"
                    href="https://web.facebook.com/gafar.omoraji"
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="twitter"
                    href="https://twitter.com/gafartweets"
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  <label>Email</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" required />
                  </InputGroup>
                  <label>Message</label>
                  <InputGroup className="form-group-no-border">
                    <Input placeholder="Your message here..." type="textarea" />
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Send
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;
