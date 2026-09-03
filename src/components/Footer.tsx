'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { useState, MouseEvent } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
export default function Footer() {

    const floatingButtonStyles = `
        @keyframes pulse-float {
            0% {
                transform: translateY(0px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }
            50% {
                transform: translateY(-8px);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
            }
            100% {
                transform: translateY(0px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }
        }

        @keyframes spin-pulse {
            0% {
                transform: rotate(0deg) scale(1);
            }
            50% {
                transform: rotate(5deg) scale(1.05);
            }
            100% {
                transform: rotate(0deg) scale(1);
            }
        }

        @keyframes glow-shine {
            0%, 100% {
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }
            50% {
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
            }
        }

        .floating-btn-call {
            animation: pulse-float 3s ease-in-out infinite;
        }

        .floating-btn-whatsapp {
            animation: pulse-float 3s ease-in-out infinite;
            animation-delay: 0.3s;
        }

        .floating-btn-call:hover {
            animation: spin-pulse 0.6s ease-in-out;
        }

        .floating-btn-whatsapp:hover {
            animation: spin-pulse 0.6s ease-in-out;
        }

        .text-warm-white {
            color: #fcfbf7 !important;
        }
    `;

    return (
        <>
            <style>{floatingButtonStyles}</style>
            <footer className="text-white mt-auto position-relative" style={{ backgroundColor: '#114934' }}>
                {/* Top Border Line */}
                <div className="w-100 bg-sanjeevani" style={{ height: '4px' }}></div>

                <Container className="py-5">
                    <Row className="gy-5">
                        {/* Column 1: Brand & About */}
                        <Col lg={4} md={12}>
                            <div className="mb-4">
                                {/* <h3 className="fw-bold text-white mb-3 letter-spacing-1 text-md-start text-center">Little England</h3> */}
                                <div className="d-flex justify-content-md-start justify-content-center mb-1">
                                    <Image src="/LE_Web Logo.png" alt="Little England Logo" width={300} height={80} className="mb-0 img-fluid" style={{ width: '300px', height: 'auto' }} />
                                </div>
                                <p className="text-white lh-lg text-md-start text-center px-1">
                                    Premium Farm Land Developers dedicated to creating sustainable and beautiful living spaces. We blend nature with modern amenities to find your perfect managed farmland.
                                </p>
                                <div className="d-flex gap-3 mt-4 justify-content-md-start justify-content-center">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon-btn d-flex align-items-center justify-content-center rounded-circle text-white bg-white bg-opacity-10" style={{ width: '40px', height: '40px' }}>
                                        <FaFacebookF size={16} />
                                    </a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn d-flex align-items-center justify-content-center rounded-circle text-white bg-white bg-opacity-10" style={{ width: '40px', height: '40px' }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            width="16"
                                            height="16"
                                            className="text-white"
                                            fill="currentColor"
                                        >
                                            <path d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon-btn d-flex align-items-center justify-content-center rounded-circle text-white bg-white bg-opacity-10" style={{ width: '40px', height: '40px' }}>
                                        <FaInstagram size={16} />
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon-btn d-flex align-items-center justify-content-center rounded-circle text-white bg-white bg-opacity-10" style={{ width: '40px', height: '40px' }}>
                                        <FaLinkedinIn size={16} />
                                    </a>
                                </div>
                            </div>
                        </Col>

                        {/* Column 2: Quick Links */}
                        <Col lg={2} md={6} className='text-md-start text-center'>
                            <h5 className="fw-bold mb-4 ">Quick Links</h5>
                            <ul className="list-unstyled footer-links">
                                <li className="mb-3">
                                    <Link href="/" className="text-white text-decoration-none d-flex align-items-center hover-sanjeevani transition-all  justify-content-md-start justify-content-center">
                                        <FaArrowRight size={10} className="md-md-2 me-2 text-warm-white" /> Home
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/about" className="text-white text-decoration-none d-flex align-items-center hover-sanjeevani transition-all  justify-content-md-start justify-content-center">
                                        <FaArrowRight size={10} className="md-md-2 me-2 text-warm-white" /> About Us
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/tamara" className="text-warning text-decoration-none d-flex align-items-center hover-sanjeevani transition-all  justify-content-md-start justify-content-center fw-semibold">
                                        <FaArrowRight size={10} className="md-md-2 me-2 text-warning" /> Tamara Valley ⭐
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/projects" className="text-white text-decoration-none d-flex align-items-center hover-sanjeevani transition-all  justify-content-md-start justify-content-center">
                                        <FaArrowRight size={10} className="md-md-2 me-2 text-warm-white" /> Projects
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/location-advantages" className="text-white text-decoration-none d-flex align-items-center hover-sanjeevani transition-all  justify-content-md-start justify-content-center">
                                        <FaArrowRight size={10} className="md-md-2 me-2 text-warm-white" /> Location Advantages
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/blogs" className="text-white text-decoration-none d-flex align-items-center hover-sanjeevani transition-all  justify-content-md-start justify-content-center">
                                        <FaArrowRight size={10} className="md-md-2 me-2 text-warm-white" /> Blogs
                                    </Link>
                                </li>
                            </ul>
                        </Col>

                        {/* Column 3: Utility Links */}
                        <Col lg={2} md={6} className='text-md-start text-center'>
                            <h5 className="fw-bold mb-4">Support</h5>
                            <ul className="list-unstyled footer-links text-md-start text-center ">
                                <li className="mb-3">
                                    <Link href="/contact" className="text-white text-decoration-none d-flex align-items-center  justify-content-md-start justify-content-center hover-sanjeevani transition-all">
                                        <FaArrowRight size={10} className="md-md-2 me-2 text-warm-white" /> Contact Us
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/faq" className="text-white text-decoration-none d-flex align-items-center  justify-content-md-start justify-content-center hover-sanjeevani transition-all">
                                        <FaArrowRight size={10} className="md-md-2 me-2 text-warm-white" /> FAQ
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/testimonials" className="text-white text-decoration-none d-flex align-items-center  justify-content-md-start justify-content-center hover-sanjeevani transition-all">
                                        <FaArrowRight size={10} className="md-md-2 me-2 text-warm-white" /> Testimonials
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/careers" className="text-white text-decoration-none d-flex align-items-center  justify-content-md-start justify-content-center hover-sanjeevani transition-all">
                                        <FaArrowRight size={10} className="md-md-2 me-2 text-warm-white" /> Careers
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/privacy-policy" className="text-white text-decoration-none d-flex align-items-center  justify-content-md-start justify-content-center hover-sanjeevani transition-all">
                                        <FaArrowRight size={10} className="md-md-2 me-2 text-warm-white" /> Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </Col>

                        {/* Column 4: Contact Info */}
                        <Col lg={4} md={12} className='text-md-start text-center'>
                            <h5 className="fw-bold mb-4">Get In Touch</h5>
                            <div className="d-flex mb-3">
                                <div className="text-sanjeevani md-md-3 me-2 mt-1 "><FaMapMarkerAlt size={20} className="text-warm-white" /></div>
                                <p className="text-white mb-0 ">
                                    509, Third Floor, 17th Main, 6th Cross Rd, 6th Block, Koramangala, Bengaluru, Karnataka – 560095
                                </p>
                            </div>
                            <div className="d-flex mb-3  justify-content-md-start justify-content-center">
                                <div className="text-sanjeevani md-md-3 me-2 mt-1"><FaPhoneAlt size={18} className="text-warm-white" /></div>
                                <div>
                                    <p className="text-white mb-0"><a href="tel:+919688777793" className="text-white text-decoration-none">+91 96887 77793</a></p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-md-start justify-content-center">
                                <div className="text-sanjeevani md-md-3 me-2 mt-1"><FaEnvelope size={18} className="text-warm-white" /></div>
                                <p className="text-white mb-0"><a href="mailto:info@littleengland.cm" className="text-white text-decoration-none">info@littleengland.cm</a></p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* Copyright Area */}
                <div className="py-4 border-top border-secondary border-opacity-25" style={{ backgroundColor: '#03120d' }}>
                    <Container>
                        <Row className="align-items-center">
                            <Col md={12} className="text-center text-md-center">
                                <small className="text-white">
                                    &copy; {new Date().getFullYear()} Little England. All Rights Reserved.
                                    <span className="mx-2">|</span>
                                    Digital Partner: <a href="https://www.imsolutions.co/" target="_blank" rel="noopener noreferrer" className="text-white fw-normal text-decoration-none  hover-white">IM Solutions</a>
                                </small>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* Floating Call & WhatsApp Buttons */}
                <div className="floating-action-cluster">
                    {/* Call Button */}
                    <a
                        href="tel:+919688777793"
                        className="d-flex align-items-center justify-content-center rounded-circle text-white floating-btn-call"
                        title="Call Us"
                    >
                        <FaPhoneAlt size={19} />
                    </a>

                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/919688777793"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center justify-content-center rounded-circle text-white floating-btn-whatsapp"
                        title="Chat on WhatsApp"
                    >
                        <FaWhatsapp size={22} />
                    </a>
                </div>

                {/* Enquire Now Button - Desktop Only to prevent mobile crowding */}
                <div 
                    className="d-none d-lg-block"
                    style={{
                        position: 'fixed',
                        right: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1000
                    }}
                >
                    <ContactForm
                        button={true}
                        popup={true}
                        triggerButtonClassName='enquire-now-btn'
                        formInputClass='py-2 mb-0 form-control'
                    />
                </div>

                {/* Custom styles for floating action cluster and Enquire Now button */}
                <style>{`
                .floating-action-cluster {
                    position: fixed;
                    right: 24px;
                    bottom: 28px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    z-index: 1000;
                }

                .floating-action-cluster a {
                    width: 50px;
                    height: 50px;
                    text-decoration: none;
                    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.28);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .floating-action-cluster .floating-btn-call {
                    background-color: #114934;
                }

                .floating-action-cluster .floating-btn-whatsapp {
                    background-color: #25D366;
                }

                @media (max-width: 767.98px) {
                    .floating-action-cluster {
                        right: 14px;
                        bottom: 16px;
                        gap: 10px;
                    }
                    .floating-action-cluster a {
                        width: 44px;
                        height: 44px;
                        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.22);
                    }
                }

                .enquire-now-btn {
                    width: 40px !important;
                    height: 140px !important;
                    background-color: #114934 !important;
                    border: none !important;
                    color: white !important;
                    font-weight: bold !important;
                    font-size: 12px !important;
                    letter-spacing: 1px !important;
                    border-radius: 4px 0 0 4px !important;
                    writing-mode: vertical-rl !important;
                    text-orientation: mixed !important;
                    padding: 10px 0 !important;
                    box-shadow: -4px 4px 12px rgba(0, 0, 0, 0.3) !important;
                    transition: all 0.3s ease !important;
                    cursor: pointer !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                }

                .enquire-now-btn:hover {
                    transform: translateX(-5px) !important;
                    box-shadow: -6px 6px 16px rgba(0, 0, 0, 0.4) !important;
                }
            `}</style>
            </footer>
        </>
    );
}
