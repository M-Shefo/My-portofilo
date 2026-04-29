import { Container, Row, Col } from "react-bootstrap";
import logo from "../Navbar/assets/Fue-removebg-preview.png";
import navIcon1 from "../Navbar/assets/linkedin-icon-logo-png-transparent.png";
import navIcon2 from "../Navbar/assets/2023_Facebook_icon.svg.webp";
import navIcon3 from "../Navbar/assets/Instagram_logo_2016.svg.png";
import { Newsletter } from "../Newsletter/NewsLetter";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}