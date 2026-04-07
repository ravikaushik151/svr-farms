'use client';

import SectionTitle from '@/components/SectionTitle';
import PageBanner from '@/components/PageBanner';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <>
            <PageBanner title="Contact Us" backgroundImage="/banner/Contact us_Banner.webp" />
            <Container className="py-2">
            <SectionTitle title="Contact Us" subtitle="Get Intouch" />
            <Row className="mt-5 g-5">
                <Col md={6}>
                    <h4 className="fw-bold mb-4">Send us a message</h4>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Your Email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" rows={5} placeholder="Message" />
                        </Form.Group>
                        <Button variant="success" type="submit" className="w-100 py-2">
                            Send Message
                        </Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <h4 className="fw-bold mb-4">Contact Information</h4>
                    <div className="d-flex align-items-start mb-4">
                        <FaMapMarkerAlt className="text-success fs-4 me-3 mt-1" />
                        <div>
                            <h6 className="fw-bold mb-1">Our Location</h6>
                            <p className="text-muted mb-0">123 Farmville Lane, Greenhouse District, Bangalore, 560001</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-start mb-4">
                        <FaPhoneAlt className="text-success fs-4 me-3 mt-1" />
                        <div>
                            <h6 className="fw-bold mb-1">Call Us</h6>
                            <p className="text-muted mb-0">+91 98765 43210</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-start mb-4">
                        <FaEnvelope className="text-success fs-4 me-3 mt-1" />
                        <div>
                            <h6 className="fw-bold mb-1">Email Us</h6>
                            <p className="text-muted mb-0">info@svrfarms.com</p>
                        </div>
                    </div>

                    <div className="mt-5 rounded overflow-hidden shadow-sm" style={{ height: '250px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.989255060824!2d77.5912443152697!3d12.97251899085521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1654157582823!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
