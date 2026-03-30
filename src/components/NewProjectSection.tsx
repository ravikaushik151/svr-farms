'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLeaf } from 'react-icons/fa';
import Link from 'next/link';

export default function NewProjectSection() {
    return (
        <section className="bg-light">
            <Row className="g-0">
                <Col lg={6} className="position-relative min-vh-50">
                    {/* Placeholder for the Buddha/Arch image */}
                    <div
                        className="w-100 h-100"
                        style={{
                            backgroundImage: 'url("/Tamara%20valley2.webp")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minHeight: '400px'
                        }}
                    ></div>
                </Col>
                <Col lg={6} className="bg-sanjeevani text-white d-flex align-items-center p-5">
                    <div className="p-lg-4">
                        <div className="mb-4">
                            <FaLeaf size={40} className="text-white-50" style={{ transform: 'rotate(-45deg)' }} />
                        </div>
                        <h6 className="section-subheading mb-2 text-white-50" style={{ color: 'rgba(255,255,255,0.7) !important' }}>New Projects</h6>
                        <h2 className="section-heading mb-4 text-white" style={{ color: '#fff !important' }}>Tamara Valley</h2>
                        <p className="lead fw-light mb-4 lh-lg text-white-50">
                            Spread across an expansive 300 acres in the serene landscapes of Thalli, Tamara Valley is where nature unfolds in its purest form
                        </p>
                        <p className="lead fw-light mb-4 lh-lg text-white-50">
                            Set amidst lush greenery and a peaceful landscape, it offers a blend of organic farming and curated lifestyle amenities, including a resort, wellness spaces, and recreational facilities.
                        </p>
                        <p className="mb-5 lead fw-light mb-4 lh-lg text-white-50">
                            Whether it’s a quiet weekend retreat or a long-term investment, Tamara Valley offers a space that grows with you - in value and in experience.
                        </p>

                        <Link href="/projects/tamara-valley" passHref legacyBehavior>
                            <Button variant="outline-light" size="lg" className="btn-outline-white px-5 py-3">EXPLORE TAMARA VALLEY</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </section>
    );
}
