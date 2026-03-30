'use client';

import SectionTitle from '@/components/SectionTitle';
import AboutSection from '@/components/AboutSection';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function About() {
    return (
        <div className="pt-5">
            <Container className="mb-5 pb-5">
                <SectionTitle title="About Us" subtitle="Who We Are" />
                <p className="lead text-center text-muted mb-5">
                    Little England is built on a simple idea - to bring people closer to nature without disconnecting them from the life they’ve created
                    <br />Set in the serene landscapes of Thalli, this gated managed farmland community is designed for those who seek calm, clarity, and a more meaningful way of living. With its cool climate, lush greenery, and open spaces, it offers an environment where life feels slower, healthier, and more intentional.
                    <br />Here, ownership goes beyond land - it becomes an experience of reconnecting with nature, building something of your own, and investing in a future that holds both peace and potential.
                </p>
            </Container>

            {/* Section 2 */}
            <div className="py-5 bg-light">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-5 mb-lg-0 pe-lg-5">
                            <h6 className="section-subheading text-uppercase fw-semibold mb-3" style={{ color: '#28a745', letterSpacing: '2px' }}>Discover Little England</h6>
                            <h2 className="section-heading fw-bold mb-4 display-6">A Thoughtfully Built Ecosystem</h2>
                            <div className="mb-4 bg-success" style={{ width: '80px', height: '3px' }}></div>

                            <p className="lead text-secondary mb-4 lh-lg fs-5">
                                With over 15 years of experience in farmland development and a strong foundation built on trust, Little England brings together sustainable practices, careful land selection, and a commitment to quality.
                            </p>
                            <p className="text-secondary mb-4 lh-lg">
                                Every parcel is chosen based on soil fertility, water availability, and long-term potential, ensuring that what you own today continues to grow in value over time. The approach combines organic farming principles with structured planning to create a balanced and enduring ecosystem.
                            </p>

                            <ul className="list-unstyled mb-5">
                                <li className="d-flex align-items-start mb-3">
                                    <FaCheckCircle className="text-success mt-1 me-3 flex-shrink-0" size={20} />
                                    <span className="text-secondary">Experience a setting that blends nature, comfort, and long-term value</span>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <FaCheckCircle className="text-success mt-1 me-3 flex-shrink-0" size={20} />
                                    <span className="text-secondary">Enjoy the peace of owning land that is carefully planned and responsibly developed</span>
                                </li>
                                <li className="d-flex align-items-start">
                                    <FaCheckCircle className="text-success mt-1 me-3 flex-shrink-0" size={20} />
                                    <span className="text-secondary">Be part of a community built around sustainability and mindful living</span>
                                </li>
                            </ul>

                            <Link href="/contact" passHref legacyBehavior>
                                <Button variant="outline-success" size="lg" className="px-5 border-2 rounded-pill fw-semibold">READ MORE</Button>
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <div className="position-relative overflow-hidden rounded-4 shadow-sm" style={{ height: '500px', backgroundColor: '#e9ecef', border: '1px dashed #ced4da' }}>
                                {/* Image Placeholder */}
                                <div className="d-flex flex-column w-100 h-100 align-items-center justify-content-center text-muted">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-image text-secondary mb-3 opacity-50" viewBox="0 0 16 16">
                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                    </svg>
                                    <span className="fs-5 fw-semibold text-secondary opacity-75">Image Placeholder</span>
                                    <span className="small text-secondary opacity-50 mt-2">600 x 500 px</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
