'use client';

import React, { useState } from 'react';
import PageBanner from '@/components/PageBanner';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import {
    FaLeaf,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaPen,
    FaPaperPlane,
    FaMapMarkerAlt,
    FaShieldAlt,
    FaUsers,
    FaSeedling,
    FaExternalLinkAlt
} from 'react-icons/fa';
import Link from 'next/link';

export default function ContactPage() {
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for reaching out! Our team will get back to you shortly.");
    };

    return (
        <>
            <PageBanner title="Contact Us" backgroundImage="/banner/Contact us_Banner.webp" />


            <div
                className="py-5 position-relative"
                style={{
                    backgroundImage: 'linear-gradient(to right, #fcfbf7 40%, rgba(255, 255, 255, 0.2) 100%), url("/Home_page.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right center',
                    backgroundAttachment: 'scroll',
                    minHeight: '100vh'
                }}
            >
                {/* Subtle floating leaves on the left edge */}
                <div
                    className="position-absolute d-none d-lg-block"
                    style={{ left: '-30px', top: '12%', opacity: 0.15, pointerEvents: 'none' }}
                >
                    <FaLeaf size={110} style={{ color: '#114934' }} />
                </div>

                <Container className="py-lg-5 position-relative" style={{ marginTop: '80px' }}>


                    {/* 1. Top Title Header */}
                    <div className="text-center mb-5">
                        <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                            <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                            <h6
                                className="text-uppercase letter-spacing-2 mb-0 small fw-bold"
                                style={{ color: '#c5a059', fontSize: '0.8rem' }}
                            >
                                We'd love to hear from you
                            </h6>
                            <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        </div>

                        <h1
                            className="display-4 fw-bold mb-3 text-sanjeevani"
                            style={{
                                fontFamily: '"Playfair Display", "Georgia", serif',
                                lineHeight: '1.2'
                            }}
                        >
                            Get in Touch
                        </h1>

                        <div className="d-flex justify-content-center mb-4">
                            <FaLeaf size={16} style={{ color: '#c5a059', opacity: 0.8 }} />
                        </div>

                        <p className="text-muted max-w-xl mx-auto mb-1" style={{ fontSize: '0.98rem' }}>
                            Have questions or need more information?
                        </p>
                        <p className="fw-semibold mb-0" style={{ color: '#114934', fontSize: '1.02rem' }}>
                            We're here to help you build your dream, naturally.
                        </p>
                    </div>

                    {/* 2. Main Two Column Section Grid */}
                    <Row className="gy-4 align-items-stretch mb-5">

                        {/* Left: Send us a message Card */}
                        <Col lg={7}>
                            <Card
                                className="border-0 shadow-sm p-4 p-md-5 rounded-4 h-100 bg-white"
                                style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)' }}
                            >
                                <Card.Body className="p-0">
                                    {/* Header with gold outline */}
                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <div
                                            className="rounded-3 d-flex align-items-center justify-content-center text-white"
                                            style={{
                                                width: '48px',
                                                height: '48px',
                                                backgroundColor: '#114934',
                                                borderRadius: '12px'
                                            }}
                                        >
                                            <FaEnvelope size={20} style={{ color: '#c5a059' }} />
                                        </div>
                                        <div>
                                            <h3
                                                className="fw-bold mb-0 text-dark"
                                                style={{ fontFamily: '"Playfair Display", "Georgia", serif', fontSize: '1.5rem' }}
                                            >
                                                Send us a message
                                            </h3>
                                            <p className="text-muted small mb-0 mt-1">Fill in the details and our team will get back to you soon.</p>
                                        </div>
                                    </div>

                                    <div className="bg-sanjeevani mb-4" style={{ width: '40px', height: '2px', backgroundColor: '#c5a059' }}></div>

                                    {/* Form Fields */}
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="g-3 mb-3">
                                            <Col md={6}>
                                                <InputGroup>
                                                    <InputGroup.Text style={{ backgroundColor: '#fff', borderRight: 'none', color: '#adb5bd' }}>
                                                        <FaUser size={14} />
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Full Name"
                                                        style={{ borderLeft: 'none', fontSize: '0.88rem' }}
                                                        required
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col md={6}>
                                                <InputGroup>
                                                    <InputGroup.Text style={{ backgroundColor: '#fff', borderRight: 'none', color: '#adb5bd' }}>
                                                        <FaEnvelope size={14} />
                                                    </InputGroup.Text>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Email Address"
                                                        style={{ borderLeft: 'none', fontSize: '0.88rem' }}
                                                        required
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>

                                        {/* Phone Number Field */}
                                        <Form.Group className="mb-3">
                                            <InputGroup>
                                                <InputGroup.Text style={{ backgroundColor: '#fff', borderRight: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: '#495057' }}>
                                                    <span>🇮🇳 +91</span>
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    style={{ fontSize: '0.88rem' }}
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>

                                        {/* Message Textarea */}
                                        <Form.Group className="mb-4">
                                            <InputGroup>
                                                <InputGroup.Text style={{ backgroundColor: '#fff', borderRight: 'none', color: '#adb5bd', alignItems: 'flex-start', paddingTop: '12px' }}>
                                                    <FaPen size={14} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={5}
                                                    placeholder="Your Message"
                                                    style={{ borderLeft: 'none', fontSize: '0.88rem' }}
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>

                                        {/* Consent Checkbox */}
                                        <Form.Group className="mb-4 text-start">
                                            <Form.Check
                                                type="checkbox"
                                                id="privacy-checkbox"
                                                checked={agreed}
                                                onChange={(e) => setAgreed(e.target.checked)}
                                                label={
                                                    <span className="small text-muted">
                                                        I agree to the <Link href="/privacy-policy" className="text-dark text-decoration-underline fw-medium">Privacy Policy</Link>
                                                    </span>
                                                }
                                                className="custom-checkbox"
                                            />
                                        </Form.Group>

                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            className="w-100 py-3 text-white rounded-1 d-flex align-items-center justify-content-center gap-2"
                                            style={{
                                                backgroundColor: '#114934',
                                                border: 'none',
                                                fontWeight: 'bold',
                                                letterSpacing: '1px',
                                                fontSize: '0.85rem'
                                            }}
                                        >
                                            <FaPaperPlane size={14} style={{ color: '#c5a059' }} />
                                            <span>SEND MESSAGE</span>
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Right: Contact Information Card with Map */}
                        <Col lg={5}>
                            <Card
                                className="border-0 shadow-sm p-4 p-md-5 rounded-4 h-100 text-white"
                                style={{
                                    backgroundColor: '#114934', // Dark green card background
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)'
                                }}
                            >
                                <Card.Body className="p-0 d-flex flex-column h-100">
                                    {/* Header with gold circle leaf */}
                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center text-white"
                                            style={{
                                                width: '42px',
                                                height: '42px',
                                                backgroundColor: 'rgba(255,255,255,0.08)',
                                                border: '1.5px solid #c5a059',
                                                color: '#c5a059',
                                                minWidth: '42px'
                                            }}
                                        >
                                            <FaLeaf size={16} />
                                        </div>
                                        <h3
                                            className="fw-bold mb-0 text-white"
                                            style={{ fontFamily: '"Playfair Display", "Georgia", serif', fontSize: '1.5rem' }}
                                        >
                                            Contact Information
                                        </h3>
                                    </div>

                                    <div style={{ height: '1.5px', backgroundColor: 'rgba(197, 160, 89, 0.2)', marginBottom: '30px' }}></div>

                                    {/* Information Items */}
                                    <div className="d-flex flex-column gap-4 mb-4">
                                        {/* Location Info */}
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="p-2 rounded-circle bg-white bg-opacity-10 text-white d-flex align-items-center justify-content-center mt-1" style={{ width: '36px', height: '36px', minWidth: '36px', border: '1px solid rgba(197, 160, 89, 0.3)', color: '#c5a059' }}>
                                                <FaMapMarkerAlt size={16} />
                                            </div>
                                            <div className="text-start">
                                                <h6 className="fw-bold mb-1" style={{ color: '#c5a059', fontSize: '0.88rem' }}>Our Location</h6>
                                                <p className="text-white-50 mb-0 small" style={{ lineHeight: '1.4' }}>
                                                    #1919, SVS Building, 21st Main Road, 25th Cross, 2nd Sector, HSR Layout, Bengaluru - 560102
                                                </p>
                                            </div>
                                        </div>

                                        {/* Phone Info */}
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="p-2 rounded-circle bg-white bg-opacity-10 text-white d-flex align-items-center justify-content-center mt-1" style={{ width: '36px', height: '36px', minWidth: '36px', border: '1px solid rgba(197, 160, 89, 0.3)', color: '#c5a059' }}>
                                                <FaPhone size={16} />
                                            </div>
                                            <div className="text-start">
                                                <h6 className="fw-bold mb-1" style={{ color: '#c5a059', fontSize: '0.88rem' }}>Call Us</h6>
                                                <p className="text-white-50 mb-0 small" style={{ lineHeight: '1.4' }}>
                                                    <a href="tel:+919986410709" className="text-decoration-none text-white-50">+91 99864 10709</a> <br />
                                                    <a href="tel:+919845959397" className="text-decoration-none text-white-50">+91 98459 59397</a>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Email Info */}
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="p-2 rounded-circle bg-white bg-opacity-10 text-white d-flex align-items-center justify-content-center mt-1" style={{ width: '36px', height: '36px', minWidth: '36px', border: '1px solid rgba(197, 160, 89, 0.3)', color: '#c5a059' }}>
                                                <FaEnvelope size={16} />
                                            </div>
                                            <div className="text-start">
                                                <h6 className="fw-bold mb-1" style={{ color: '#c5a059', fontSize: '0.88rem' }}>Email Us</h6>
                                                <p className="text-white-50 mb-0 small">
                                                    <a href="mailto:info@svrfarms.com" className="text-decoration-none text-white-50">info@svrfarms.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Map Iframe block */}
                                    <div
                                        className="position-relative mt-auto rounded-3 overflow-hidden shadow-sm"
                                        style={{ height: '230px', border: '1.5px solid rgba(197, 160, 89, 0.3)' }}
                                    >
                                        {/* Open in Maps Overlay button */}
                                        <a
                                            href="https://maps.google.com/?q=SVS+Building,+21st+Main+Road,+HSR+Layout,+Bengaluru"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="position-absolute d-flex align-items-center gap-2 text-decoration-none shadow-sm z-3"
                                            style={{
                                                top: '15px',
                                                left: '15px',
                                                backgroundColor: '#ffffff',
                                                color: '#114934',
                                                borderRadius: '4px',
                                                padding: '6px 12px',
                                                fontSize: '0.72rem',
                                                fontWeight: 'bold',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                                            }}
                                        >
                                            <span>Open in Maps</span>
                                            <FaExternalLinkAlt size={10} style={{ color: '#c5a059' }} />
                                        </a>

                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7523992389926!2d77.636665!3d12.923611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14878a87adcf%3A0x600ff50212fc8514!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1689234567890!5m2!1sen!2sin"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen={true}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="z-1"
                                        />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* 3. Bottom Highlights Bar */}
                    <div
                        className="p-4 rounded-4 shadow-sm border mt-5"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            borderColor: 'rgba(197, 160, 89, 0.25)',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)'
                        }}
                    >
                        <Row className="gy-4 text-start justify-content-center align-items-center">
                            <Col xs={12} sm={6} md={3} className="border-end-md px-4">
                                <div className="d-flex align-items-center">
                                    <div className="p-2 rounded-circle bg-sanjeevani bg-opacity-10 text-sanjeevani me-3 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
                                        <FaLeaf size={20} style={{ color: '#114934' }} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold text-dark mb-1 small text-uppercase letter-spacing-1">Quick Response</h6>
                                        <p className="text-muted mb-0" style={{ fontSize: '0.72rem' }}>We respond within 24 hours.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={6} md={3} className="border-end-md px-4">
                                <div className="d-flex align-items-center">
                                    <div className="p-2 rounded-circle bg-sanjeevani bg-opacity-10 text-sanjeevani me-3 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
                                        <FaShieldAlt size={20} style={{ color: '#114934' }} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold text-dark mb-1 small text-uppercase letter-spacing-1">Trusted & Secure</h6>
                                        <p className="text-muted mb-0" style={{ fontSize: '0.72rem' }}>Your data is safe and protected.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={6} md={3} className="border-end-md px-4">
                                <div className="d-flex align-items-center">
                                    <div className="p-2 rounded-circle bg-sanjeevani bg-opacity-10 text-sanjeevani me-3 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
                                        <FaUsers size={20} style={{ color: '#114934' }} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold text-dark mb-1 small text-uppercase letter-spacing-1">Expert Support</h6>
                                        <p className="text-muted mb-0" style={{ fontSize: '0.72rem' }}>Guidance from our farming experts.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} sm={6} md={3} className="px-4">
                                <div className="d-flex align-items-center">
                                    <div className="p-2 rounded-circle bg-sanjeevani bg-opacity-10 text-sanjeevani me-3 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
                                        <FaSeedling size={20} style={{ color: '#114934' }} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold text-dark mb-1 small text-uppercase letter-spacing-1">Naturally Committed</h6>
                                        <p className="text-muted mb-0" style={{ fontSize: '0.72rem' }}>Building eco-friendly communities.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>

                {/* Custom Responsive styling rules */}
                <style jsx>{`
                @media (min-width: 768px) {
                    .border-end-md {
                        border-right: 1.5px solid rgba(197, 160, 89, 0.25);
                    }
                }
            `}</style>
            </div>
        </>
    );
}
