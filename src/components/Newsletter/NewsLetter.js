import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || email.indexOf("@") === -1) return;

    setStatus("sending");

   emailjs.send(
  "service_pjfls0f",    
  "template_i1965v9",    
  { subscriber_email: email },
  "PR6G4AqV_fvoBZzqY"      
)
    .then(() => {
      setStatus("success");
      setEmail("");
    })
    .catch((err) => {
  console.log("EmailJS Error Status:", err.status);
  console.log("EmailJS Error Text:", err.text);
  console.log("Full error:", err);
  setStatus("error");
});
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br /> & Never miss latest updates</h3>

            {status === "sending" && (
              <Alert>Sending...</Alert>
            )}
            {status === "success" && (
              <Alert variant="success">Subscribed successfully! Thank you.</Alert>
            )}
            {status === "error" && (
              <Alert variant="danger">Something went wrong. Please try again.</Alert>
            )}
          </Col>

          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};