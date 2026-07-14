'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkedAlt, FaFileSignature, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import Image from 'next/image';

const features = [
    {
        icon: FaMapMarkedAlt,
        title: "Prime Corridor",
        description: "Thally-Hosur belt, ~55 mins from NH-44 & 45 km off Electronic City."
    },
    {
        icon: FaFileSignature,
        title: "Freehold Titles",
        description: "Fully documented and clear freehold ownership with Patta Chitta."
    },
    {
        icon: FaShieldAlt,
        title: "Full Stewardship",
        description: "Professional farming, water irrigation, and 24/7 security handled for you."
    }
];

export default function AboutOverview() {
    return (
        <section
            className="py-5 position-relative"
            style={{
                backgroundColor: '#fcfbf7', // Premium warm cream background
                overflow: 'hidden'
            }}
        >
            {/* Top Leaf Accent Decorator */}
            <div
                className="position-absolute d-none d-lg-block"
                style={{ top: '30px', left: '30px', opacity: 0.1, pointerEvents: 'none' }}
            >
                <FaLeaf size={90} style={{ color: '#114934' }} />
            </div>

            <Container className="py-lg-4 position-relative">
                <Row className="gy-5 align-items-center">

                    {/* Left Column: Title, Copy Text & Scenic Landscaping Frame */}
                    <Col lg={6}>
                        <div className="pe-lg-3">

                            {/* Little England Experience Badge */}
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <FaLeaf size={14} style={{ color: '#c5a059' }} />
                                <h6
                                    className="text-uppercase letter-spacing-2 mb-0 small fw-bold"
                                    style={{ color: '#c5a059', fontSize: '0.8rem' }}
                                >
                                    The Little England Experience
                                </h6>
                                <span style={{ width: '40px', height: '1px', backgroundColor: 'rgba(197, 160, 89, 0.4)' }}></span>
                            </div>

                            {/* Section Header */}
                            <h2
                                className="display-5 fw-bold mb-3"
                                style={{
                                    fontFamily: '"Playfair Display", "Georgia", serif',
                                    lineHeight: '1.2'
                                }}
                            >
                                <span style={{ color: '#114934' }}>What Little England </span> <br />
                                <span style={{ color: '#c5a059' }}>Farms Actually Is</span>
                            </h2>


                            {/* Formatted Double Paragraph Block */}
                            <p
                                className="text-muted mb-3 lh-lg"
                                style={{ fontSize: '0.98rem' }}
                            >
                                Little England Farms is a managed organic farmland brand operating across the Thally-Hosur corridor, about 55 minutes off NH-44 and roughly 45 km from Electronic City.
                            </p>

                            <p
                                className="text-muted mb-4 pb-2 lh-lg"
                                style={{ fontSize: '0.98rem' }}
                            >
                                Every plot comes with clear, freehold title — Patta Chitta documented — and is professionally farmed on the owner's behalf: irrigation, security, and cultivation included.
                            </p>

                            {/* Scenic Landscaping Image Wrapper with Embedded Pill Box */}
                            <div
                                className="position-relative rounded-4 overflow-hidden shadow-sm mt-3"
                                style={{
                                    height: '280px',
                                    border: '1.5px solid rgba(197, 160, 89, 0.2)'
                                }}
                            >
                                <Image
                                    src="/Home_page.webp"
                                    alt="White cottage in organic managed farmland belt"
                                    fill
                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                />

                                {/* Floating Premium Accent Pill box */}
                                <div
                                    className="position-absolute shadow-sm d-none"
                                    style={{
                                        backgroundColor: '#114934',
                                        border: '1.5px solid #c5a059',
                                        borderRadius: '16px',
                                        padding: '12px 20px',
                                        bottom: '20px',
                                        left: '20px',
                                        maxWidth: '90%',
                                        zIndex: 2,
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            backgroundColor: 'rgba(255,255,255,0.08)',
                                            border: '1px solid rgba(197, 160, 89, 0.5)',
                                            color: '#c5a059',
                                            minWidth: '36px'
                                        }}
                                    >
                                        <FaLeaf size={14} />
                                    </div>
                                    <span
                                        className="text-white fw-medium"
                                        style={{
                                            fontSize: '0.78rem',
                                            letterSpacing: '0.5px',
                                            lineHeight: '1.4'
                                        }}
                                    >
                                        We don't just sell land, we deliver peace of mind and long-term prosperity.
                                    </span>
                                </div>
                            </div>

                        </div>
                    </Col>

                    {/* Right Column: Stacked Premium Feature Cards */}
                    <Col lg={6}>
                        <div className="d-flex flex-column gap-4">
                            {features.map((feat, index) => (
                                <Card
                                    key={index}
                                    className="border-0 shadow-sm rounded-4 overflow-hidden bg-white"
                                    style={{
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div className="d-flex flex-row align-items-stretch">

                                        {/* Left Side: Curved Green Block */}
                                        <div
                                            className="d-flex align-items-center justify-content-center"
                                            style={{
                                                backgroundColor: '#114934',
                                                width: '125px',
                                                minWidth: '125px',
                                                borderRadius: '16px 36px 36px 16px', // Premium bulging curve
                                                position: 'relative'
                                            }}
                                        >
                                            {/* Dashed Gold Circle Icon Ring */}
                                            <div
                                                className="rounded-circle d-flex align-items-center justify-content-center text-white"
                                                style={{
                                                    width: '64px',
                                                    height: '64px',
                                                    border: '1.5px dashed #c5a059',
                                                    color: '#c5a059'
                                                }}
                                            >
                                                <feat.icon size={26} />
                                            </div>
                                        </div>

                                        {/* Right Side: Feature Details */}
                                        <div className="p-5 flex-grow-1 d-flex flex-column justify-content-center">
                                            {/* Title */}
                                            <h4
                                                className="fw-bold mb-1 text-dark"
                                                style={{
                                                    fontSize: '0.95rem',
                                                    letterSpacing: '1px',
                                                    textTransform: 'uppercase'
                                                }}
                                            >
                                                {feat.title}
                                            </h4>

                                            {/* Tiny golden-brown line and dot indicator */}
                                            <div className="d-flex align-items-center gap-1 my-2">
                                                <span style={{ width: '25px', height: '1.5px', backgroundColor: '#c5a059' }}></span>
                                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#c5a059' }}></span>
                                            </div>

                                            {/* Description */}
                                            <p
                                                className="text-muted mb-0 lh-relaxed"
                                                style={{ fontSize: '0.85rem' }}
                                            >
                                                {feat.description}
                                            </p>
                                        </div>

                                    </div>
                                </Card>
                            ))}
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}
