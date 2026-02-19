'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLeaf } from 'react-icons/fa';
import Link from 'next/link';

export default function AboutSection() {
    return (
        <section className="py-5 bg-white position-relative overflow-hidden">
            {/* Decorative leaf elements could be added here as background SVG/Images if available */}
            <Container className="py-lg-5">
                <Row className="justify-content-center">
                    <Col lg={10} className="text-center">
                        <h6 className="section-subheading mb-3">Discover SVR Farms</h6>
                        <h2 className="section-heading mb-4">ABOUT SVR FARMS</h2>
                        <div className="mx-auto mb-5 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>

                        <p className="lead text-secondary mb-5 lh-lg">
                            SVR Groups was founded in the year 2009 and from the year 2014 we started farmland development in the name of <span className="fw-bold text-sanjeevani">SVR farms</span>. At SVR farms, we strive towards maintaining a sustainable ecosystem, dedicated towards a steady commitment of invention and innovation. Our major factors involve portray the agriculture excellence of embracing eco-friendly methodologies, enlightenment of organic cultivation methods and seeking the active engagement of our local community.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center g-4 mb-5">
                    <Col md={10}>
                        <div className="d-flex flex-column gap-3">
                            <div className="d-flex align-items-start gap-3">
                                <FaLeaf className="text-sanjeevani flex-shrink-0 mt-1" size={24} />
                                <p className="mb-0 text-secondary fs-5">In our modern farms, experience luxury and sustainability.</p>
                            </div>
                            <div className="d-flex align-items-start gap-3">
                                <FaLeaf className="text-sanjeevani flex-shrink-0 mt-1" size={24} />
                                <p className="mb-0 text-secondary fs-5">While admiring nature on our finest farmlands, stay connected to technology.</p>
                            </div>
                            <div className="d-flex align-items-start gap-3">
                                <FaLeaf className="text-sanjeevani flex-shrink-0 mt-1" size={24} />
                                <p className="mb-0 text-secondary fs-5">Our farms combine agriculture with technology to create a unique and lavish ecosystem.</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="text-center">
                    <Link href="/about" passHref legacyBehavior>
                        <Button variant="outline-primary" size="lg" className="px-5 border-2">READ MORE</Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
