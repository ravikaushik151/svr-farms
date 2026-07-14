'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
    FaFileContract, 
    FaTint, 
    FaHome, 
    FaWalking, 
    FaClipboardList, 
    FaTree,
    FaShieldAlt,
    FaUsers,
    FaSeedling,
    FaLock,
    FaLeaf
} from 'react-icons/fa';

const points = [
    {
        number: "01",
        icon: FaFileContract,
        title: "You Own It, We Run It",
        description: "Title is in your name from day one. The land, the crop, the returns — all yours. We handle the farming."
    },
    {
        number: "02",
        icon: FaTint,
        title: "Someone's Always There",
        description: "Drip irrigation, organic fertilization, fencing, security — checked daily, not when something breaks."
    },
    {
        number: "03",
        icon: FaHome,
        title: "Build When You're Ready",
        description: "Want a cottage on your plot? On most projects, go ahead. Our team will help you plan and build it."
    },
    {
        number: "04",
        icon: FaWalking,
        title: "You Can Show Up Anytime",
        description: "No appointment needed. It's your land. Walk it whenever you want."
    },
    {
        number: "05",
        icon: FaClipboardList,
        title: "Monthly Reports, Not Guesswork",
        description: "You'll know what's growing, what's earning, and what's next — without having to ask."
    },
    {
        number: "06",
        icon: FaTree,
        title: "Two Ways to Earn",
        description: "Short-term crop income while the trees mature. Long-term timber and land value after."
    }
];

export default function WhatManagedMeansSection() {
    return (
        <section 
            className="py-5 position-relative overflow-hidden"
            style={{
                backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url("/Home_page.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'scroll'
            }}
        >
            {/* Top Leaf Accent Decorator */}
            <div 
                className="position-absolute d-md-block d-none" 
                style={{ top: '20px', right: '40px', opacity: 0.15, transform: 'rotate(20deg)', pointerEvents: 'none' }}
            >
                <FaLeaf size={80} style={{ color: '#114934' }} />
            </div>
            
            {/* Bottom Leaf Accent Decorator */}
            <div 
                className="position-absolute d-md-block d-none" 
                style={{ bottom: '20px', left: '40px', opacity: 0.15, transform: 'rotate(-45deg)', pointerEvents: 'none' }}
            >
                <FaLeaf size={80} style={{ color: '#114934' }} />
            </div>

            <Container className="py-lg-5 position-relative">
                
                {/* 1. Header Section */}
                <div className="text-center mb-5">
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        <h6 
                            className="text-uppercase letter-spacing-2 mb-0 small fw-bold"
                            style={{ color: '#114934', fontSize: '0.85rem' }}
                        >
                            Managed Farmland Advantages
                        </h6>
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                    </div>
                    
                    <h2 
                        className="display-4 fw-bold mb-3"
                        style={{
                            fontFamily: '"Playfair Display", "Georgia", serif',
                            lineHeight: '1.2'
                        }}
                    >
                        <span style={{ color: '#114934' }}>Own the Land.</span> <br />
                        <span style={{ color: '#c5a059' }}>Leave the Farming to Experts.</span>
                    </h2>
                    
                    <p className="text-muted max-w-2xl mx-auto mb-1" style={{ fontSize: '1.05rem' }}>
                        We make farmland ownership simple, secure, and truly rewarding.
                    </p>
                    <p className="fw-semibold mb-0" style={{ color: '#114934', fontSize: '1.1rem' }}>
                        You own the land. We take care of the rest.
                    </p>
                </div>

                {/* 2. Grid of 6 Advantage Cards */}
                <Row className="g-4 mb-5">
                    {points.map((point, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card 
                                className="border-0 shadow-sm p-4 text-center rounded-4 position-relative hover-lift bg-white h-100"
                                style={{
                                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
                                }}
                            >
                                {/* Circle Badge Number in Top Left */}
                                <div 
                                    className="position-absolute d-flex align-items-center justify-content-center text-white rounded-circle"
                                    style={{
                                        width: '28px',
                                        height: '28px',
                                        backgroundColor: '#114934',
                                        top: '-10px',
                                        left: '20px',
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold',
                                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                                    }}
                                >
                                    {point.number}
                                </div>

                                {/* Icon Circle wrapper */}
                                <div 
                                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center mb-4 mt-2"
                                    style={{
                                        width: '72px',
                                        height: '72px',
                                        backgroundColor: '#f6fbf8',
                                        border: '1.5px solid rgba(17, 73, 52, 0.1)',
                                        color: '#114934'
                                    }}
                                >
                                    <point.icon size={30} style={{ opacity: 0.9 }} />
                                </div>

                                {/* Title */}
                                <h4 
                                    className="fw-bold mb-3 text-dark"
                                    style={{
                                        fontFamily: '"Playfair Display", "Georgia", serif',
                                        fontSize: '1.25rem'
                                    }}
                                >
                                    {point.title}
                                </h4>

                                {/* Description */}
                                <p className="text-muted small lh-relaxed mb-0" style={{ fontSize: '0.88rem' }}>
                                    {point.description}
                                </p>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* 3. Horizontal Highlights Bar */}
                <div 
                    className="p-4 rounded-4 shadow-sm border mb-4"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                        borderColor: 'rgba(197, 160, 89, 0.25)',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)'
                    }}
                >
                    <Row className="gy-4 text-start justify-content-center align-items-center">
                        <Col xs={12} sm={6} md={3} className="bar-column">
                            <div className="d-flex align-items-center px-lg-3">
                                <div className="p-2 rounded-circle bg-sanjeevani bg-opacity-10 text-sanjeevani me-3 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
                                    <FaShieldAlt size={22} style={{ color: '#114934' }} />
                                </div>
                                <div>
                                    <h6 className="fw-bold text-dark mb-1 small text-uppercase letter-spacing-1">Clear Ownership</h6>
                                    <p className="text-muted mb-0" style={{ fontSize: '0.75rem' }}>100% legal & transparent titles</p>
                                </div>
                            </div>
                        </Col>
                        
                        <Col xs={12} sm={6} md={3} className="bar-column">
                            <div className="d-flex align-items-center px-lg-3">
                                <div className="p-2 rounded-circle bg-sanjeevani bg-opacity-10 text-sanjeevani me-3 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
                                    <FaUsers size={22} style={{ color: '#114934' }} />
                                </div>
                                <div>
                                    <h6 className="fw-bold text-dark mb-1 small text-uppercase letter-spacing-1">Expert Team</h6>
                                    <p className="text-muted mb-0" style={{ fontSize: '0.75rem' }}>Agriculture & ops experts</p>
                                </div>
                            </div>
                        </Col>
                        
                        <Col xs={12} sm={6} md={3} className="bar-column">
                            <div className="d-flex align-items-center px-lg-3">
                                <div className="p-2 rounded-circle bg-sanjeevani bg-opacity-10 text-sanjeevani me-3 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
                                    <FaSeedling size={22} style={{ color: '#114934' }} />
                                </div>
                                <div>
                                    <h6 className="fw-bold text-dark mb-1 small text-uppercase letter-spacing-1">Sustainable</h6>
                                    <p className="text-muted mb-0" style={{ fontSize: '0.75rem' }}>Organic, eco-friendly farming</p>
                                </div>
                            </div>
                        </Col>
                        
                        <Col xs={12} sm={6} md={3} className="bar-column border-0">
                            <div className="d-flex align-items-center px-lg-3">
                                <div className="p-2 rounded-circle bg-sanjeevani bg-opacity-10 text-sanjeevani me-3 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
                                    <FaLock size={22} style={{ color: '#114934' }} />
                                </div>
                                <div>
                                    <h6 className="fw-bold text-dark mb-1 small text-uppercase letter-spacing-1">Secure Returns</h6>
                                    <p className="text-muted mb-0" style={{ fontSize: '0.75rem' }}>Income & value appreciation</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* 4. Footer Accent line & Leaf Flank */}
                <div className="text-center mt-5 pt-3">
                    <div className="d-flex justify-content-center align-items-center gap-3">
                        <span style={{ width: '60px', height: '1px', backgroundColor: 'rgba(197, 160, 89, 0.4)' }}></span>
                        <FaLeaf className="mx-1" size={14} style={{ color: '#c5a059' }} />
                        <span 
                            className="fw-bold text-uppercase" 
                            style={{ 
                                fontFamily: '"Playfair Display", "Georgia", serif', 
                                color: '#114934', 
                                letterSpacing: '2px',
                                fontSize: '0.85rem'
                            }}
                        >
                            You Own the Land. We Make It Prosper.
                        </span>
                        <FaLeaf className="mx-1" size={14} style={{ color: '#c5a059' }} />
                        <span style={{ width: '60px', height: '1px', backgroundColor: 'rgba(197, 160, 89, 0.4)' }}></span>
                    </div>
                </div>

            </Container>

            {/* Custom Responsive styling rules */}
            <style jsx>{`
                @media (min-width: 768px) {
                    .bar-column {
                        border-right: 1.5px solid rgba(197, 160, 89, 0.25);
                    }
                }
            `}</style>
        </section>
    );
}
