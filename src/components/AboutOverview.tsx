'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkedAlt, FaFileSignature, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';

const features = [
    {
        icon: FaMapMarkedAlt,
        title: "Prime Corridor",
        description: "Thally-Hosur belt, 45 mins from NH 44 & 35 km off Electronic City."
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
            <Container className="py-lg-4 position-relative">
                <Row className="gy-5 align-items-center">

                    {/* Left Column: Title, Copy Text & Scenic Landscaping Frame */}
                    <Col lg={6}>
                        <div className="pe-lg-3 text-center text-lg-start">
                            <div className="d-flex flex-column align-items-center align-items-lg-start mb-2">
                                {/* Little England Experience Badge */}
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start section-subtitle-wrap gap-2 mb-2">
                                    <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                                    <h6 className="section-subheading mb-0">
                                        The Little England Experience
                                    </h6>
                                    <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                                </div>

                                {/* Section Header */}
                                <div className="d-inline-flex flex-column align-items-center text-center">
                                    <h2 className="section-heading mb-2">
                                        <span style={{ color: '#114934' }}>What Little England </span> <br />
                                        <span style={{ color: '#c5a059' }}>Farms Actually Is</span>
                                    </h2>
                                    <div className="section-divider-bar mx-auto"></div>
                                </div>
                            </div>

                            {/* Formatted Double Paragraph Block */}
                            <p
                                className="text-muted mb-3 lh-lg"
                                style={{ fontSize: '0.98rem' }}
                            >
                                Little England Farms is a managed organic farmland brand operating across the Thally-Hosur corridor, about 45 minutes off NH 44 and roughly 35 km from Electronic City.
                            </p>

                            <p
                                className="text-muted mb-4 pb-2 lh-lg"
                                style={{ fontSize: '0.98rem' }}
                            >
                                Every plot comes with clear, freehold title — Patta Chitta documented — and is professionally farmed on the owner's behalf: irrigation, security, and cultivation included.
                            </p>

                            {/* Scenic Landscaping Image Wrapper */}
                            <div
                                className="position-relative rounded-4 overflow-hidden shadow-sm mt-3 about-scenic-img"
                                style={{
                                    border: '1.5px solid rgba(197, 160, 89, 0.2)'
                                }}
                            >
                                <Image
                                    src="/What-Little-England.webp"
                                    alt="White cottage in organic managed farmland belt"
                                    fill
                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                />
                            </div>

                        </div>
                    </Col>

                    {/* Right Column: Stacked Premium Feature Cards */}
                    <Col lg={6}>
                        <div className="d-flex flex-column gap-3 gap-md-4 mt-4 mt-lg-0">
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
                                            className="d-flex align-items-center justify-content-center feature-icon-block"
                                            style={{
                                                backgroundColor: '#114934',
                                                borderRadius: '16px 36px 36px 16px',
                                                position: 'relative'
                                            }}
                                        >
                                            {/* Dashed Gold Circle Icon Ring */}
                                            <div
                                                className="rounded-circle d-flex align-items-center justify-content-center text-white feature-icon-ring"
                                                style={{
                                                    border: '1.5px dashed #c5a059',
                                                    color: '#c5a059'
                                                }}
                                            >
                                                <feat.icon size={22} className="feature-icon" />
                                            </div>
                                        </div>

                                        {/* Right Side: Feature Details */}
                                        <div className="p-3 p-sm-4 p-md-4 flex-grow-1 d-flex flex-column justify-content-center text-start">
                                            {/* Title */}
                                            <h4
                                                className="fw-bold mb-1 text-dark"
                                                style={{
                                                    fontSize: '0.92rem',
                                                    letterSpacing: '0.5px',
                                                    textTransform: 'uppercase'
                                                }}
                                            >
                                                {feat.title}
                                            </h4>

                                            {/* Tiny golden-brown line and dot indicator */}
                                            <div className="d-flex align-items-center gap-1 my-1.5">
                                                <span style={{ width: '22px', height: '1.5px', backgroundColor: '#c5a059' }}></span>
                                                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#c5a059' }}></span>
                                            </div>

                                            {/* Description */}
                                            <p
                                                className="text-muted mb-0 lh-base"
                                                style={{ fontSize: '0.84rem' }}
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

            <style jsx>{`
                .about-scenic-img {
                    height: 240px;
                }
                .feature-icon-block {
                    width: 85px;
                    min-width: 85px;
                }
                .feature-icon-ring {
                    width: 48px;
                    height: 48px;
                }
                @media (min-width: 768px) {
                    .about-scenic-img {
                        height: 280px;
                    }
                    .feature-icon-block {
                        width: 125px;
                        min-width: 125px;
                    }
                    .feature-icon-ring {
                        width: 64px;
                        height: 64px;
                    }
                }
            `}</style>
        </section>
    );
}
