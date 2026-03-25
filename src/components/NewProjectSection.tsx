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
                            Tamara Valley is a 300-acre high-demand land parcel in Thalli, crafted for those who value space, nature, and a better way to live.
                        </p>
                        <p className="mb-5 lh-lg text-white-50">
                            With luxury amenities set in a peaceful green landscape, it’s the ideal spot for sustainable living and mindful farming. Whether you’re building a quiet retreat or investing in a future rooted in nature, Tamara Valley offers the space to grow on your terms.
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
