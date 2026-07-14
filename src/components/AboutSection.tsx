'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLeaf, FaCompass, FaTint, FaRoad, FaSeedling, FaQuoteLeft } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section 
            className="py-5 position-relative" 
            style={{ 
                backgroundColor: '#fcfbf7', // Premium warm cream background
                overflow: 'hidden'
            }}
        >
            {/* Subtle floating leaves on the left edge */}
            <div 
                className="position-absolute d-none d-lg-block" 
                style={{ left: '-30px', top: '25%', opacity: 0.1, pointerEvents: 'none', transform: 'rotate(-15deg)' }}
            >
                <FaLeaf size={140} style={{ color: '#114934' }} />
            </div>

            <Container className="py-lg-4 position-relative">
                <Row className="gy-5 align-items-center">
                    
                    {/* Left Column: Heading, Multi-paragraphs & CTA Button */}
                    <Col lg={6} className="pe-lg-4 text-center text-lg-start">
                        
                        {/* Discover Little England Badge */}
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-3">
                            <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                            <FaLeaf size={14} style={{ color: '#c5a059' }} />
                            <h6 
                                className="text-uppercase letter-spacing-2 mb-0 small fw-bold"
                                style={{ color: '#c5a059', fontSize: '0.8rem' }}
                            >
                                Discover Little England
                            </h6>
                            <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        </div>

                        {/* Title Heading */}
                        <h2 
                            className="display-4 fw-bold mb-3"
                            style={{ 
                                fontFamily: '"Playfair Display", "Georgia", serif',
                                lineHeight: '1.2'
                            }}
                        >
                            <span style={{ color: '#114934' }}>A Life Beyond</span> <br />
                            <span style={{ color: '#c5a059' }}>The City</span>
                        </h2>

                        {/* Leaf divider */}
                        <div className="d-flex justify-content-center justify-content-lg-start mb-4">
                            <FaLeaf size={14} style={{ color: '#c5a059', opacity: 0.8 }} />
                        </div>

                        {/* Paragraph Copy Text */}
                        <p className="text-muted mb-3 lh-lg" style={{ fontSize: '0.92rem' }}>
                            Tucked away in the scenic landscapes of Thalli, fondly known as Little England for its cool climate and misty charm, this is where nature slows you down – and life begins to feel more meaningful.
                        </p>
                        
                        <p className="text-muted mb-3 lh-lg" style={{ fontSize: '0.92rem' }}>
                            Designed as a gated managed farmland community, Little England blends the richness of fertile land, abundant water sources, and breathtaking greenery with the ease of modern accessibility. Just a short drive from Bangalore, it offers the perfect balance between escape and connection.
                        </p>

                        <p className="text-muted mb-4 pb-2 lh-lg" style={{ fontSize: '0.92rem' }}>
                            This is not just land you own – it’s a space you grow into. Whether it’s a weekend retreat, a long-term investment, or a lifestyle rooted in nature, Little England gives you the freedom to build, cultivate, and experience life differently.
                        </p>

                        {/* Read More Button */}
                        <div className="text-center text-lg-start mb-4">
                            <Link 
                                href="/about" 
                                className="btn px-4 py-3 text-white rounded-1 d-inline-flex align-items-center gap-2 fw-semibold"
                                style={{
                                    backgroundColor: '#1b2e1e', // Dark green background
                                    fontSize: '0.85rem',
                                    letterSpacing: '1px',
                                    border: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor = '#114934';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor = '#1b2e1e';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                READ MORE <span style={{ color: '#c5a059', fontWeight: 'bold' }}>&rarr;</span>
                            </Link>
                        </div>
                    </Col>
                    
                    {/* Right Column: Circular Crop Landscape Image & Floating Overlay Row */}
                    <Col lg={6} className="position-relative">
                        <div className="d-flex flex-column align-items-center align-items-lg-end">
                            
                            {/* Circular Curved Landscape Image Frame */}
                            <div 
                                className="position-relative"
                                style={{
                                    width: '100%',
                                    maxWidth: '480px',
                                    height: '380px',
                                    borderRadius: '190px 0 0 190px', // Bulging curve from right side
                                    borderLeft: '4px solid #c5a059',
                                    borderTop: '4px solid #c5a059',
                                    borderBottom: '4px solid #c5a059',
                                    overflow: 'hidden',
                                    boxShadow: '-5px 5px 25px rgba(0,0,0,0.08)',
                                    marginBottom: '40px'
                                }}
                            >
                                <Image 
                                    src="/Home_page.webp" 
                                    alt="Little England managed organic farmland scenery"
                                    fill
                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                />
                            </div>

                            {/* Floating Highlights Box overlapping the bottom */}
                            <div 
                                className="p-4 rounded-4 shadow-sm border position-relative z-2"
                                style={{
                                    backgroundColor: '#faf8f2', // Soft warm light beige
                                    borderColor: 'rgba(197, 160, 89, 0.25)',
                                    width: '100%',
                                    maxWidth: '560px',
                                    marginTop: '-80px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                                }}
                            >
                                <Row className="g-3 text-center">
                                    <Col xs={6} md={3}>
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="p-2 rounded-circle mb-2 text-sanjeevani d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', backgroundColor: 'rgba(17,73,52,0.08)', border: '1px solid rgba(17,73,52,0.1)' }}>
                                                <FaCompass size={18} style={{ color: '#114934' }} />
                                            </div>
                                            <h6 className="fw-bold mb-1 text-dark text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '0.5px' }}>Scenic & Serene</h6>
                                            <p className="text-muted mb-0" style={{ fontSize: '0.65rem', lineHeight: '1.3' }}>Cool climate, misty valleys & natural beauty.</p>
                                        </div>
                                    </Col>
                                    
                                    <Col xs={6} md={3}>
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="p-2 rounded-circle mb-2 text-sanjeevani d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', backgroundColor: 'rgba(17,73,52,0.08)', border: '1px solid rgba(17,73,52,0.1)' }}>
                                                <FaTint size={18} style={{ color: '#114934' }} />
                                            </div>
                                            <h6 className="fw-bold mb-1 text-dark text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '0.5px' }}>Rich & Abundant</h6>
                                            <p className="text-muted mb-0" style={{ fontSize: '0.65rem', lineHeight: '1.3' }}>Fertile land with abundant water sources.</p>
                                        </div>
                                    </Col>
                                    
                                    <Col xs={6} md={3}>
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="p-2 rounded-circle mb-2 text-sanjeevani d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', backgroundColor: 'rgba(17,73,52,0.08)', border: '1px solid rgba(17,73,52,0.1)' }}>
                                                <FaRoad size={18} style={{ color: '#114934' }} />
                                            </div>
                                            <h6 className="fw-bold mb-1 text-dark text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '0.5px' }}>Well Connected</h6>
                                            <p className="text-muted mb-0" style={{ fontSize: '0.65rem', lineHeight: '1.3' }}>Short drive from Bangalore - close yet peaceful.</p>
                                        </div>
                                    </Col>
                                    
                                    <Col xs={6} md={3}>
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="p-2 rounded-circle mb-2 text-sanjeevani d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', backgroundColor: 'rgba(17,73,52,0.08)', border: '1px solid rgba(17,73,52,0.1)' }}>
                                                <FaSeedling size={18} style={{ color: '#114934' }} />
                                            </div>
                                            <h6 className="fw-bold mb-1 text-dark text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '0.5px' }}>Grow Your Life</h6>
                                            <p className="text-muted mb-0" style={{ fontSize: '0.65rem', lineHeight: '1.3' }}>A space to build and create your dream lifestyle.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                    </Col>
                </Row>

                {/* Bottom Quote Banner Bar */}
                <div 
                    className="p-4 rounded-4 mt-5 d-flex align-items-center justify-content-center"
                    style={{
                        backgroundColor: '#faf8f2', // Soft warm light beige
                        border: '1px solid rgba(197, 160, 89, 0.25)',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)'
                    }}
                >
                    <Row className="w-100 justify-content-center align-items-center py-2 text-center text-md-start">
                        <Col xs={12} md={10} className="d-flex flex-column flex-md-row align-items-center gap-3">
                            <div className="d-flex align-items-center">
                                <FaQuoteLeft size={36} style={{ color: '#c5a059', opacity: 0.7 }} />
                                <span style={{ width: '1.5px', height: '30px', backgroundColor: 'rgba(197, 160, 89, 0.4)', margin: '0 15px' }} className="d-none d-md-block"></span>
                            </div>
                            <p 
                                className="mb-0 text-dark italic font-serif flex-grow-1"
                                style={{
                                    fontFamily: '"Playfair Display", "Georgia", serif',
                                    fontSize: '1.18rem',
                                    color: '#2d3748',
                                    lineHeight: '1.4'
                                }}
                            >
                                A place where nature welcomes you, peace stays with you, and every moment feels like home.
                            </p>
                            <div className="d-none d-lg-block">
                                <Image src="/icons/leaves.png" alt="" width={45} height={40} className="opacity-25" style={{ objectFit: 'contain' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </section>
    );
}
