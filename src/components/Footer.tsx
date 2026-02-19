'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="text-white mt-auto position-relative" style={{ backgroundColor: '#051d15' }}>
            {/* Top Border Line */}
            <div className="w-100 bg-sanjeevani" style={{ height: '4px' }}></div>

            <Container className="py-5">
                <Row className="gy-5">
                    {/* Column 1: Brand & About */}
                    <Col lg={4} md={12}>
                        <div className="mb-4">
                            <h3 className="fw-bold text-white mb-3 letter-spacing-1">SVR FARMS</h3>
                            <div className="bg-sanjeevani mb-4" style={{ width: '60px', height: '3px' }}></div>
                            <p className="text-white-50 lh-lg">
                                Premium Farm Land Developers dedicated to creating sustainable and beautiful living spaces. We blend nature with modern amenities to find your perfect managed farmland.
                            </p>
                            <div className="d-flex gap-3 mt-4">
                                <a href="https://www.facebook.com/svrfarms" target="_blank" rel="noopener noreferrer" className="social-icon-btn d-flex align-items-center justify-content-center rounded-circle text-white bg-white bg-opacity-10" style={{ width: '40px', height: '40px' }}>
                                    <FaFacebookF size={16} />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn d-flex align-items-center justify-content-center rounded-circle text-white bg-white bg-opacity-10" style={{ width: '40px', height: '40px' }}>
                                    <FaTwitter size={16} />
                                </a>
                                <a href="https://www.instagram.com/svrfarmsbangalore/" target="_blank" rel="noopener noreferrer" className="social-icon-btn d-flex align-items-center justify-content-center rounded-circle text-white bg-white bg-opacity-10" style={{ width: '40px', height: '40px' }}>
                                    <FaInstagram size={16} />
                                </a>
                                <a href="https://www.linkedin.com/company/svr-farms-official/" target="_blank" rel="noopener noreferrer" className="social-icon-btn d-flex align-items-center justify-content-center rounded-circle text-white bg-white bg-opacity-10" style={{ width: '40px', height: '40px' }}>
                                    <FaLinkedinIn size={16} />
                                </a>
                            </div>
                        </div>
                    </Col>

                    {/* Column 2: Quick Links */}
                    <Col lg={2} md={6}>
                        <h5 className="fw-bold mb-4">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li className="mb-3">
                                <Link href="/" className="text-white-50 text-decoration-none d-flex align-items-center hover-sanjeevani transition-all">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> Home
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/about" className="text-white-50 text-decoration-none d-flex align-items-center hover-sanjeevani transition-all">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> About Us
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/projects" className="text-white-50 text-decoration-none d-flex align-items-center hover-sanjeevani transition-all">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> Projects
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/blogs" className="text-white-50 text-decoration-none d-flex align-items-center hover-sanjeevani transition-all">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> Blogs
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    {/* Column 3: Utility Links */}
                    <Col lg={2} md={6}>
                        <h5 className="fw-bold mb-4">Support</h5>
                        <ul className="list-unstyled footer-links">
                            <li className="mb-3">
                                <Link href="/contact" className="text-white-50 text-decoration-none d-flex align-items-center hover-sanjeevani transition-all">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> Contact Us
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/testimonials" className="text-white-50 text-decoration-none d-flex align-items-center hover-sanjeevani transition-all">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> Testimonials
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/careers" className="text-white-50 text-decoration-none d-flex align-items-center hover-sanjeevani transition-all">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> Careers
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/privacy" className="text-white-50 text-decoration-none d-flex align-items-center hover-sanjeevani transition-all">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    {/* Column 4: Contact Info */}
                    <Col lg={4} md={12}>
                        <h5 className="fw-bold mb-4">Get In Touch</h5>
                        <div className="d-flex mb-3">
                            <div className="text-sanjeevani me-3 mt-1"><FaMapMarkerAlt size={20} /></div>
                            <p className="text-white-50 mb-0">
                                #1919, SVS Building, 21st Main Road, 25th Cross, 2nd Sector, HSR Layout, Bengaluru- 560 102
                            </p>
                        </div>
                        <div className="d-flex mb-3">
                            <div className="text-sanjeevani me-3 mt-1"><FaPhoneAlt size={18} /></div>
                            <div>
                                <p className="text-white-50 mb-0">+91 99864 10709</p>
                                <p className="text-white-50 mb-0">+91 98459 59397</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="text-sanjeevani me-3 mt-1"><FaEnvelope size={18} /></div>
                            <p className="text-white-50 mb-0">info@svrfarms.com</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Copyright Area */}
            <div className="py-4 border-top border-secondary border-opacity-25" style={{ backgroundColor: '#03120d' }}>
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} className="text-center text-md-center">
                            <small className="text-white-50">
                                &copy; {new Date().getFullYear()} SVR Farms. All Rights Reserved.
                                <span className="mx-2">|</span>
                                Digital Partner: <a href="https://www.imsolutions.co/" target="_blank" rel="noopener noreferrer" className="text-sanjeevani text-decoration-none fw-bold hover-white">IM Solutions</a>
                            </small>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}
