'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { useState, MouseEvent } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function Footer() {
    const [showEnquireForm, setShowEnquireForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [note, setNote] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    const stopPropagation = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

    const handleClose = () => {
        setShowEnquireForm(false);
        setNote(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (phone: string) => {
        setFormData((prev) => ({ ...prev, phone: phone }));
    };

    const validateForm = () => {
        let isValid = true;
        if (!formData.name.match(/^[a-zA-Z ]+$/)) {
            setNote('Name must only contain letters and spaces.');
            isValid = false;
        } else if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            setNote('Please enter a valid email address.');
            isValid = false;
        } else if (formData.phone.length < 10) {
            setNote('Please enter a valid phone number.');
            isValid = false;
        } else {
            setNote(null);
        }
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setSubmitting(true);
        setNote('Please wait...');

        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message || 'interested',
            subject: 'Enquire From SVR Farms - Website',
            form_source: 'Enquire From SVR Farms - Website',
            additionalRecipients: ['lokesh@imsolutions.mobi', 'ravi.k@imsolutions.mobi'],
        };

        try {
            const res = await fetch('your-emailer-endpoint', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const msg = await res.text();

            if (msg.trim() === 'OK') {
                setNote('Email Sent Successfully!');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => handleClose(), 2000);
            } else {
                setNote(msg);
            }
        } catch (error) {
            setNote('Error sending email!');
        } finally {
            setSubmitting(false);
        }
    };
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
    `;

    return (
        <>
            <style>{floatingButtonStyles}</style>
        <footer className="text-white mt-auto position-relative" style={{ backgroundColor: '#051d15' }}>
            {/* Top Border Line */}
            <div className="w-100 bg-sanjeevani" style={{ height: '4px' }}></div>

            <Container className="py-5">
                <Row className="gy-5">
                    {/* Column 1: Brand & About */}
                    <Col lg={4} md={12}>
                        <div className="mb-4">
                            <h3 className="fw-bold text-white mb-3 letter-spacing-1 text-md-start text-center">Little England</h3>
                            <div className="bg-sanjeevani mb-4 mx-md-start mx-auto" style={{ width: '60px', height: '3px' }}></div>
                            <p className="text-white-50 lh-lg">
                                Premium Farm Land Developers dedicated to creating sustainable and beautiful living spaces. We blend nature with modern amenities to find your perfect managed farmland.
                            </p>
                            <div className="d-flex gap-3 mt-4 justify-content-md-start justify-content-center">
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
                    <Col lg={2} md={6} className='text-md-start text-center'>
                        <h5 className="fw-bold mb-4 ">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li className="mb-3">
                                <Link href="/" className="text-white-50 text-decoration-none d-flex align-items-center hover-sanjeevani transition-all  justify-content-md-start justify-content-center">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> Home
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/about" className="text-white-50 text-decoration-none d-flex align-items-center hover-sanjeevani transition-all  justify-content-md-start justify-content-center">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> About Us
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/projects" className="text-white-50 text-decoration-none d-flex align-items-center hover-sanjeevani transition-all  justify-content-md-start justify-content-center">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> Projects
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/blogs" className="text-white-50 text-decoration-none d-flex align-items-center hover-sanjeevani transition-all  justify-content-md-start justify-content-center">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> Blogs
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    {/* Column 3: Utility Links */}
                    <Col lg={2} md={6} className='text-md-start text-center'>
                        <h5 className="fw-bold mb-4">Support</h5>
                        <ul className="list-unstyled footer-links text-md-start text-center ">
                            <li className="mb-3">
                                <Link href="/contact" className="text-white-50 text-decoration-none d-flex align-items-center  justify-content-md-start justify-content-center hover-sanjeevani transition-all">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> Contact Us
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/testimonials" className="text-white-50 text-decoration-none d-flex align-items-center  justify-content-md-start justify-content-center hover-sanjeevani transition-all">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> Testimonials
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/careers" className="text-white-50 text-decoration-none d-flex align-items-center  justify-content-md-start justify-content-center hover-sanjeevani transition-all">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> Careers
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/privacy" className="text-white-50 text-decoration-none d-flex align-items-center  justify-content-md-start justify-content-center hover-sanjeevani transition-all">
                                    <FaArrowRight size={10} className="me-2 text-sanjeevani" /> Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    {/* Column 4: Contact Info */}
                    <Col lg={4} md={12} className='text-md-start text-center'>
                        <h5 className="fw-bold mb-4">Get In Touch</h5>
                        <div className="d-flex mb-3">
                            <div className="text-sanjeevani me-3 mt-1"><FaMapMarkerAlt size={20} /></div>
                            <p className="text-white-50 mb-0">
                                #1919, SVS Building, 21st Main Road, 25th Cross, 2nd Sector, HSR Layout, Bengaluru- 560 102
                            </p>
                        </div>
                        <div className="d-flex mb-3  justify-content-md-start justify-content-center">
                            <div className="text-sanjeevani me-3 mt-1"><FaPhoneAlt size={18} /></div>
                            <div>
                                <p className="text-white-50 mb-0">+91 99864 10709</p>
                                <p className="text-white-50 mb-0">+91 98459 59397</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-md-start justify-content-center">
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
                                &copy; {new Date().getFullYear()} Little England. All Rights Reserved.
                                <span className="mx-2">|</span>
                                Digital Partner: <a href="https://www.imsolutions.co/" target="_blank" rel="noopener noreferrer" className="text-white fw-normal text-decoration-none  hover-white">IM Solutions</a>
                            </small>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Floating Call & WhatsApp Buttons */}
            <div style={{
                position: 'fixed',
                right: '30px',
                bottom: '10%',
                display: 'flex',
                flexDirection: 'column',
                gap: '35px',
                zIndex: 1000
            }}>
                {/* Call Button */}
                <a 
                    href="tel:+919986410709" 
                    className="d-flex align-items-center justify-content-center rounded-circle text-white floating-btn-call"
                    style={{
                        width: '55px',
                        height: '55px',
                        backgroundColor: '#114934',
                        textDecoration: 'none',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                    }}
                    title="Call Us"
                >
                    <FaPhoneAlt size={24} />
                </a>

                {/* WhatsApp Button */}
                <a 
                    href="https://wa.me/919986410709" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle text-white floating-btn-whatsapp"
                    style={{
                        width: '55px',
                        height: '55px',
                        backgroundColor: '#25D366',
                        textDecoration: 'none',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                    }}
                    title="Chat on WhatsApp"
                >
                    <FaWhatsapp size={24} />
                </a>
            </div>

            {/* Enquire Now Button - Fixed Right Side Vertical Center */}
            <div style={{
                position: 'fixed',
                right: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1000
            }}>
                <button
                    onClick={() => setShowEnquireForm(true)}
                    className="enquire-now-btn"
                    title="Enquiry Now " 
                >
                    Enquiry Now
                </button>
            </div>

            {/* Enquire Form Modal Overlay */}
            {showEnquireForm && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999
                    }}
                    onClick={handleClose}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            padding: '30px',
                            maxWidth: '500px',
                            width: '90%',
                            maxHeight: '85vh',
                            overflowY: 'auto',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
                        }}
                        onClick={stopPropagation}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h5 style={{ margin: 0, color: '#114934', fontWeight: 'bold' }}>Get in Touch</h5>
                            <button
                                onClick={handleClose}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '24px',
                                    cursor: 'pointer',
                                    color: '#999'
                                }}
                            >
                                ×
                            </button>
                        </div>

                        {note && (
                            <p style={{
                                color: (note.includes('Error') || note.includes('valid') || note.includes('digits') || note.includes('contain')) ? 'red' : 'green',
                                fontWeight: 600,
                                marginBottom: '8px'
                            }}>
                                {note}
                            </p>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '8px' }}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={submitting}
                                />
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={submitting}
                                />
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <PhoneInput
                                    defaultCountry="in"
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    disabled={submitting}
                                    inputClassName="form-control w-100"
                                    style={{
                                        '--react-international-phone-height': '38px',
                                        '--react-international-phone-border-radius': '0.375rem',
                                    } as React.CSSProperties}
                                />
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    className="form-control"
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={submitting}
                                    rows={3}
                                />
                            </div>
                            <div className='text-center'>
                            <button
                                type="submit"
                                className="btn"
                                style={{
                                  
                                    backgroundColor: '#114934',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    border: 'none',
                                    padding: '10px 0'
                                }}
                                disabled={submitting}
                            >
                                {submitting ? 'Sending...' : 'Submit'}
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Custom styles for Enquire Now button */}
            <style>{`
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
