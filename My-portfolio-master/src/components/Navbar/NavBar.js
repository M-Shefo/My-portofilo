import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import linkedin from './assets/linkedin-icon-logo-png-transparent.png';
import facebook from './assets/2023_Facebook_icon.svg.webp';
import instagram from './assets/Instagram_logo_2016.svg.png';
import Fue from './assets/Fue-removebg-preview.png';
import { useState, useEffect } from "react";


function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])


  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <Navbar className="navbar">
      <Container>
        
        <img className="Icons" src={Fue} alt="FUELogo"></img>

       <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>

        <span className="nav-icons">
         <img className="Icons" src={linkedin} alt="Linkedin" />
         <img className="Icons" src={facebook} alt="Facebook" />
        <img className="Icons" src={instagram} alt="Instagram" />
        </span>

        <button onClick={() => console.log("Pressed")}>
          <span>Let's Connect</span>
        </button>

      </Container>
    </Navbar>
  );
}

export default NavBar;