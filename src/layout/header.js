import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/logo.png'
import LogoLight from '../images/logo-light.png'
import {useState, useEffect} from 'react'

function MainHeader() {

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add a scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Navbar expand="lg" className={`${isScrolled? "bg-white shadow-sm" : "bg-transparent"} fixed-top navbar-dark`} >
      <Container>
        <Navbar.Brand href="#home">
          <img src={`${isScrolled? Logo : LogoLight}`} className='w-100' alt='logo'/>
            {/* <img src={LogoLight} className='w-100' alt='logo'/> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <NavDropdown title="Our Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/data-inegration">Data Integration</NavDropdown.Item>
              <NavDropdown.Item href="/etl">ETL (Extract, Transform, Load)</NavDropdown.Item>
              <NavDropdown.Item href="/data-werehousing">Data Warehousing</NavDropdown.Item>
              <NavDropdown.Item href="/big-data-processing">Big Data Processing </NavDropdown.Item>
              <NavDropdown.Item href="/data-pipeline-development">Data Pipeline Development</NavDropdown.Item>
              <NavDropdown.Item href="/data-governance">Data Governance</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/industies">Industries</Nav.Link>
            <Nav.Link href="/careers">Careers</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainHeader;
