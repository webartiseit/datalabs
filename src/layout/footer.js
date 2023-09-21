import { Container, Row, Col } from "react-bootstrap"
import LogoLight from '../images/logo-light.png'
import Facebook from '../images/facebook.png'
import Instagram from '../images/instagram.png'
import Linkedin from '../images/linkedin.png'
import Twitter from '../images/twitter.png'

function MainFooter() {
    return (
        <footer className="footer py-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <img src={LogoLight} alt="footer logo" className="w-75 mb-4" />
                        <p className="text-light">At Data Labs Corporation, we understand that in today's data-driven world, the success of your business depends on your ability to harness the power of data. </p>
                        <div className="d-flex">
                            <a href="##">
                                <img src={Facebook}  alt="facebook" className="social-icon"/>
                            </a>
                            <a href="##">
                                <img src={Instagram}  alt="instagram" className="social-icon"/>
                            </a>
                            <a href="##">
                                <img src={Linkedin}  alt="Linkedin" className="social-icon"/>
                            </a>
                            <a href="##">
                                <img src={Twitter}  alt="Twitter" className="social-icon"/>
                            </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h4 className="text-white mb-3">Quick Links</h4>
                        <div className="footer-links">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about">About Us</a>
                                </li>
                                <li>
                                    <a href="/B]blog">Blog</a>
                                </li>
                                <li>
                                    <a href="/careers">Careers</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h4 className="text-white mb-3">Contact Us</h4>
                        <div className="footer-links">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about">About Us</a>
                                </li>
                                <li>
                                    <a href="/B]blog">Blog</a>
                                </li>
                                <li>
                                    <a href="/careers">Careers</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr className="border-light" />
                <p className="pt-3 mb-0 text-white text-center">Copyright © 2023 Data Labs Corporation.</p>
            </Container>
        </footer>
    )
}
export default MainFooter;

