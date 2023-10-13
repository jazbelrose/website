import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! Thank you for your message",
            variant: "success",
            show: true
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Failed to send!,${error.text}`,
            variant: "danger",
            show: true
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title} | Contact</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <section id="contact">
        <Container>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="12"></Col>
          </Row>

          <Row className="sec_sp">
            <Col lg="12">
              <Alert
                //show={formData.show}
                variant={formData.variant}
                className={`rounded-0 co_alert ${
                  formData.show ? "d-block" : "d-none"
                }`}
                onClose={() => setFormdata({ show: false })}
                dismissible
              >
                <p className="my-0">{formData.alertmessage}</p>
              </Alert>
            </Col>

            <Col lg="5" className="mb-5">
              <h3 className="color_sec py-4">Ready to rock your world?</h3>

              <p id="description">{contactConfig.description}</p>
              <address>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@mylg.com">info@mylg.com</a>
                <br />
                <br />
                <strong>Phone:</strong>{" "}
                <a href="tel:+19497018836">(949) 701-8836</a>
              </address>
            </Col>

            <Col lg="7" className="d-flex align-items-center">
              <form onSubmit={handleSubmit} className="contact__form w-100">
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formData.name || ""}
                      type="text"
                      required
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={formData.email || ""}
                      required
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <br />
                <Row>
                  <Col lg="12" className="form-group">
                    <button className="btn ac_btn" type="submit">
                      {formData.loading ? "Sending..." : "Send"}
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>

      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
