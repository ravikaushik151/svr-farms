'use client';
import { Row, Col } from 'react-bootstrap';
import { FaLeaf, FaArrowRight, FaSpa, FaSeedling } from 'react-icons/fa';
import Link from 'next/link';

export default function NewProjectSection() {
    return (
        <section style={{ backgroundColor: '#3b4d3c', position: 'relative', overflow: 'hidden' }}>
            {/* Optional Background Watermark Pattern overlay can go here */}

            <Row className="g-0 align-items-center">
                {/* Left Side: Image with Brush/Wave Edge Effect */}
                <Col lg={6} className="position-relative min-vh-50">
                    <div
                        className="w-100 h-100"
                        style={{
                            backgroundImage: 'url("/Tamara%20valley2.webp")', // Apni actual image path daalein
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minHeight: '600px',
                            position: 'relative'
                        }}
                    >
                        {/* CSS-based soft edge masking (Fallback for brush stroke) */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: '-2px',
                                width: '300px',
                                background: 'linear-gradient(to right, transparent, #3b4d3c)',
                                zIndex: 2
                            }}
                        ></div>
                    </div>
                </Col>

                {/* Right Side: Premium Content */}
                <Col lg={6} className="text-white d-flex align-items-center p-5 position-relative">
                    <div className="p-lg-5 w-100" style={{ zIndex: 3 }}>

                        {/* Top Icon & Subheading */}
                        <div className="text-center text-lg-start mb-3">
                            <FaLeaf size={28} style={{ color: '#d2b98b', marginBottom: '10px' }} />
                            <p className="mb-0" style={{ fontSize: '0.9rem', letterSpacing: '1px', color: '#e0e0e0' }}>
                                New Projects
                            </p>
                        </div>

                        {/* Main Headings */}
                        <h2
                            className="mb-1"
                            style={{
                                fontFamily: '"Playfair Display", "Merriweather", serif',
                                fontSize: '3rem',
                                fontWeight: '600',
                                color: '#ffffff'
                            }}
                        >
                            TAMARA VALLEY
                        </h2>
                        <h5
                            className="mb-4"
                            style={{
                                fontFamily: '"Playfair Display", "Merriweather", serif',
                                fontSize: '1.2rem',
                                color: '#d2b98b',
                                letterSpacing: '2px'
                            }}
                        >
                            A CULTIVATED SANCTUARY
                        </h5>

                        {/* Intro Text */}
                        <p className="fw-light mb-4 lh-lg" style={{ color: '#e0e0e0', fontSize: '1.05rem' }}>
                            Discover the art of intentional living across 300 expansive acres in the serene landscapes of Thalli.
                        </p>

                        {/* Icon List Section */}
                        <div className="mb-4">
                            <div className="d-flex align-items-start mb-3">
                                <FaSeedling size={28} className="me-3 mt-1" style={{ color: '#d2b98b', minWidth: '28px' }} />
                                <p className="mb-0 fw-light" style={{ color: '#e0e0e0', lineHeight: '1.6' }}>
                                    <strong style={{ color: '#d2b98b', fontWeight: '500' }}>ORGANIC LEGACY</strong> – A blend of organic farming and a curated lifestyle.
                                </p>
                            </div>

                            <div className="d-flex align-items-start mb-3">
                                <FaSpa size={28} className="me-3 mt-1" style={{ color: '#d2b98b', minWidth: '28px' }} />
                                <p className="mb-0 fw-light" style={{ color: '#e0e0e0', lineHeight: '1.6' }}>
                                    <strong style={{ color: '#d2b98b', fontWeight: '500' }}>WELLNESS ESTATE</strong> - Resort, wellness spaces, and recreational facilities.
                                </p>
                            </div>
                        </div>

                        {/* Outro Text */}
                        <p className="fw-light mb-5 lh-lg" style={{ color: '#e0e0e0', fontSize: '1.05rem' }}>
                            An enduring investment in value and personal experience, whether for a quiet weekend or long-term growth.
                        </p>

                        {/* CTA Button */}
                        <Link
                            href="/tamara"
                            className="btn d-inline-flex align-items-center rounded-pill px-4 py-2"
                            style={{
                                border: '1px solid #d2b98b',
                                color: '#ffffff',
                                backgroundColor: 'transparent',
                                transition: 'all 0.3s ease',
                                fontSize: '0.9rem',
                                letterSpacing: '1px'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = '#d2b98b';
                                e.currentTarget.style.color = '#1a1a1a';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#ffffff';
                            }}
                        >
                            EXPLORE TAMARA VALLEY <FaArrowRight className="ms-3" />
                        </Link>

                    </div>

                    {/* Bottom Right Brand Tag */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            right: '30px',
                            fontSize: '0.75rem',
                            color: 'rgba(255,255,255,0.5)'
                        }}
                    >
                        By Tamara Developments
                    </div>
                </Col>
            </Row>
        </section>
    );
}