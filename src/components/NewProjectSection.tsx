'use client';

import { Container, Row, Col } from 'react-bootstrap';
import {
    FaLeaf,
    FaSeedling,
    FaLock,
    FaMap,
    FaTag,
    FaMapMarkerAlt,
    FaBuilding,
    FaShieldAlt,
    FaCheckCircle,
    FaCalendarAlt,
    FaAward
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function NewProjectSection() {
    return (
        <section
            className="py-3 py-lg-4 position-relative d-flex align-items-center"
            style={{
                backgroundColor: '#fcfbf7', // Premium warm cream background
                overflow: 'hidden'
            }}
        >
            <Container className="position-relative">
                {/* 1. Centered Section Title Header */}
                <div className="text-center mb-3 mb-md-3 section-header-wrap">
                    <div className="d-flex justify-content-center align-items-center section-subtitle-wrap gap-2 mb-1">
                        <span style={{ width: '35px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        <h6 className="section-subheading mb-0" style={{ fontSize: '0.74rem' }}>
                            Project Highlight
                        </h6>
                        <span style={{ width: '35px', height: '1px', backgroundColor: '#c5a059' }}></span>
                    </div>

                    <h2 className="section-heading mb-0 text-sanjeevani" style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.05rem)' }}>
                        TAMARA VALLEY
                    </h2>

                    <h5
                        className="text-uppercase letter-spacing-2 mb-1 fw-semibold"
                        style={{ color: '#c5a059', fontSize: '0.8rem' }}
                    >
                        The One We'd Show You First
                    </h5>

                    <div className="section-divider-bar mx-auto" style={{ marginTop: '0.35rem', marginBottom: '0.65rem', height: '2.5px', width: '50px' }}></div>

                    <p className="text-muted mx-auto mb-0" style={{ fontSize: '0.9rem', maxWidth: '720px', lineHeight: 1.45 }}>
                        Three hundred acres, one gate, one standard — what Little England looks like at full scale.
                    </p>
                </div>

                {/* 2. Content Row: Left Aerial Image Card & Right Project Specs Card */}
                <Row className="gy-3 align-items-stretch justify-content-center">

                    {/* Left Column: Landscaping Aerial Image Card with Highlight Pills */}
                    <Col lg={6} className="d-flex flex-column">
                        <div
                            className="position-relative rounded-4 overflow-hidden shadow-sm aerial-frame w-100 h-100 d-flex flex-column justify-content-end"
                            style={{
                                border: '1.5px solid rgba(197, 160, 89, 0.25)',
                                minHeight: '320px'
                            }}
                        >
                            <Image
                                src="/TAMARA-VALLEY.webp"
                                alt="Tamara Valley sunset aerial layout view"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                            />

                            {/* Overlapping Triple Highlight Overlay Pill Box */}
                            <div
                                className="position-relative z-2 py-2 px-2 rounded-3 shadow-sm mx-auto mb-3"
                                style={{
                                    backgroundColor: 'rgba(17, 73, 52, 0.94)',
                                    backdropFilter: 'blur(4px)',
                                    border: '1px solid rgba(197, 160, 89, 0.45)',
                                    width: '92%',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
                                }}
                            >
                                <Row className="text-center align-items-center g-1 text-white">
                                    <Col xs={4} className="border-end border-white-50 px-1">
                                        <div className="d-flex flex-column align-items-center">
                                            <FaSeedling className="mb-1" size={13} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: 'clamp(0.58rem, 1.6vw, 0.65rem)', fontWeight: 600, letterSpacing: '0.3px', lineHeight: 1.2 }} className="text-uppercase text-white-80">Managed Farmland</span>
                                        </div>
                                    </Col>

                                    <Col xs={4} className="border-end border-white-50 px-1">
                                        <div className="d-flex flex-column align-items-center">
                                            <FaLock className="mb-1" size={13} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: 'clamp(0.58rem, 1.6vw, 0.65rem)', fontWeight: 600, letterSpacing: '0.3px', lineHeight: 1.2 }} className="text-uppercase text-white-80">Gated Community</span>
                                        </div>
                                    </Col>

                                    <Col xs={4} className="px-1">
                                        <div className="d-flex flex-column align-items-center">
                                            <FaLeaf className="mb-1" size={13} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: 'clamp(0.58rem, 1.6vw, 0.65rem)', fontWeight: 600, letterSpacing: '0.3px', lineHeight: 1.2 }} className="text-uppercase text-white-80">Sustainable Living</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                    </Col>

                    {/* Right Column: Prominent & Eye-Catching "AT A GLANCE" Information Card */}
                    <Col lg={6} className="d-flex flex-column">
                        <div
                            className="rounded-4 bg-white position-relative overflow-hidden w-100 h-100 d-flex flex-column justify-content-between p-3 p-lg-3 px-xl-4"
                            style={{
                                border: '1.5px solid rgba(197, 160, 89, 0.35)',
                                boxShadow: '0 12px 35px -8px rgba(17, 73, 52, 0.12), 0 0 0 1px rgba(197, 160, 89, 0.15)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {/* Luxury Top Gradient Accent Bar */}
                            <div
                                style={{
                                    height: '4px',
                                    width: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    background: 'linear-gradient(90deg, #114934 0%, #c5a059 50%, #114934 100%)'
                                }}
                            />

                            {/* Card Header with Inline Specs Badge */}
                            <div className="d-flex align-items-center justify-content-between gap-2 mb-2 pt-1">
                                <div className="d-flex align-items-center gap-2">
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center shadow-sm flex-shrink-0"
                                        style={{
                                            width: '38px',
                                            height: '38px',
                                            background: 'linear-gradient(135deg, #114934 0%, #1a6547 100%)',
                                            border: '2px solid #c5a059',
                                            color: '#c5a059'
                                        }}
                                    >
                                        <FaMap size={15} />
                                    </div>
                                    <div>
                                        <h4
                                            className="fw-bold mb-0 text-sanjeevani text-uppercase letter-spacing-1"
                                            style={{
                                                fontFamily: 'var(--font-serif)',
                                                fontSize: '1.08rem',
                                                lineHeight: '1.2'
                                            }}
                                        >
                                            Project At A Glance
                                        </h4>
                                        <span className="text-muted" style={{ fontSize: '0.72rem' }}>
                                            Tamara Valley • Master-Planned Managed Farmland
                                        </span>
                                    </div>
                                </div>
                                <div className="d-inline-flex align-items-center gap-1 px-2.5 py-0.5 rounded-pill" style={{ backgroundColor: 'rgba(197, 160, 89, 0.12)', border: '1px solid rgba(197, 160, 89, 0.35)' }}>
                                    <FaAward size={11} style={{ color: '#977227' }} />
                                    <span className="text-uppercase fw-bold" style={{ color: '#826019', fontSize: '0.65rem', letterSpacing: '1px' }}>
                                        Specs
                                    </span>
                                </div>
                            </div>

                            {/* Feature Specifications Table List */}
                            <div
                                className="rounded-3 overflow-hidden mb-2"
                                style={{
                                    border: '1px solid rgba(197, 160, 89, 0.25)',
                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)'
                                }}
                            >
                                {/* Row 1: Land Area */}
                                <div className="d-flex align-items-stretch border-bottom" style={{ borderColor: 'rgba(197, 160, 89, 0.15)' }}>
                                    <div className="spec-label-col text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934' }}>
                                        <FaMap size={12} style={{ color: '#c5a059', minWidth: '12px' }} />
                                        <span style={{ fontSize: '0.72rem', fontWeight: 600 }} className="text-uppercase">Total Land Area</span>
                                    </div>
                                    <div className="spec-value-col bg-light flex-grow-1 d-flex align-items-center justify-content-between" style={{ fontSize: '0.82rem', color: '#1a202c' }}>
                                        <span className="fw-semibold">400 Acres</span>
                                        <span className="badge px-2 py-0.5 rounded-pill ms-1" style={{ backgroundColor: 'rgba(17, 73, 52, 0.1)', color: '#114934', fontSize: '0.65rem' }}>
                                            Phase 1 Open
                                        </span>
                                    </div>
                                </div>

                                {/* Row 2: Plot Type */}
                                <div className="d-flex align-items-stretch border-bottom" style={{ borderColor: 'rgba(197, 160, 89, 0.15)' }}>
                                    <div className="spec-label-col text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934' }}>
                                        <FaSeedling size={12} style={{ color: '#c5a059', minWidth: '12px' }} />
                                        <span style={{ fontSize: '0.72rem', fontWeight: 600 }} className="text-uppercase">Plot Type</span>
                                    </div>
                                    <div className="spec-value-col bg-white flex-grow-1 d-flex align-items-center" style={{ fontSize: '0.82rem', color: '#1a202c' }}>
                                        <span>Managed Organic Farmland</span>
                                    </div>
                                </div>

                                {/* Row 3: Starting Price (PROMINENT HIGHLIGHT ROW) */}
                                <div
                                    className="d-flex align-items-stretch border-bottom position-relative"
                                    style={{
                                        backgroundColor: '#faf5ea',
                                        borderTop: '1.5px solid rgba(197, 160, 89, 0.5)',
                                        borderBottom: '1.5px solid rgba(197, 160, 89, 0.5)'
                                    }}
                                >
                                    <div
                                        className="spec-label-col text-white d-flex align-items-center gap-2"
                                        style={{
                                            background: 'linear-gradient(135deg, #114934 0%, #0d3828 100%)'
                                        }}
                                    >
                                        <FaTag size={12} style={{ color: '#e5b869', minWidth: '12px' }} />
                                        <div className="d-flex flex-column">
                                            <span style={{ fontSize: '0.72rem', fontWeight: 700 }} className="text-uppercase">Starting Price</span>
                                            <span style={{ fontSize: '0.55rem', color: '#c5a059', letterSpacing: '0.4px' }} className="fw-semibold">LIMITED AVAILABILITY</span>
                                        </div>
                                    </div>
                                    <div
                                        className="spec-value-col flex-grow-1 d-flex align-items-center justify-content-between"
                                        style={{
                                            background: 'linear-gradient(90deg, #fdf9f0 0%, #f7eedb 100%)'
                                        }}
                                    >
                                        <div>
                                            <span className="fw-bold" style={{ fontSize: '1.05rem', color: '#114934' }}>
                                                ₹79.9L*
                                            </span>
                                            <span className="text-muted fw-semibold ms-1" style={{ fontSize: '0.78rem' }}>/ Acre</span>
                                        </div>
                                        <span
                                            className="badge px-2 py-0.5 rounded text-uppercase fw-bold ms-1"
                                            style={{
                                                backgroundColor: '#c5a059',
                                                color: '#ffffff',
                                                fontSize: '0.62rem',
                                                letterSpacing: '0.5px'
                                            }}
                                        >
                                            Best Value
                                        </span>
                                    </div>
                                </div>

                                {/* Row 4: Distance from Bangalore */}
                                <div className="d-flex align-items-stretch border-bottom" style={{ borderColor: 'rgba(197, 160, 89, 0.15)' }}>
                                    <div className="spec-label-col text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934' }}>
                                        <FaMapMarkerAlt size={12} style={{ color: '#c5a059', minWidth: '12px' }} />
                                        <span style={{ fontSize: '0.72rem', fontWeight: 600 }} className="text-uppercase">Distance: Bangalore</span>
                                    </div>
                                    <div className="spec-value-col bg-light flex-grow-1 d-flex align-items-center" style={{ fontSize: '0.82rem', color: '#1a202c' }}>
                                        <span><strong>55 km</strong> (55 mins, off NH 44)</span>
                                    </div>
                                </div>

                                {/* Row 5: Distance from Electronic City */}
                                <div className="d-flex align-items-stretch border-bottom" style={{ borderColor: 'rgba(197, 160, 89, 0.15)' }}>
                                    <div className="spec-label-col text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934' }}>
                                        <FaBuilding size={12} style={{ color: '#c5a059', minWidth: '12px' }} />
                                        <span style={{ fontSize: '0.72rem', fontWeight: 600 }} className="text-uppercase">Distance: E-City</span>
                                    </div>
                                    <div className="spec-value-col bg-white flex-grow-1 d-flex align-items-center" style={{ fontSize: '0.82rem', color: '#1a202c' }}>
                                        <span><strong>35 km</strong> via Hosur Belt</span>
                                    </div>
                                </div>

                                {/* Row 6: Title Status */}
                                <div className="d-flex align-items-stretch">
                                    <div className="spec-label-col text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934' }}>
                                        <FaShieldAlt size={12} style={{ color: '#c5a059', minWidth: '12px' }} />
                                        <span style={{ fontSize: '0.72rem', fontWeight: 600 }} className="text-uppercase">Title Status</span>
                                    </div>
                                    <div className="spec-value-col bg-light flex-grow-1 d-flex align-items-center gap-2" style={{ fontSize: '0.8rem', color: '#1a202c' }}>
                                        <FaCheckCircle size={13} style={{ color: '#114934', minWidth: '13px' }} />
                                        <span className="fw-semibold">Clear Freehold – Patta Chitta Documented</span>
                                    </div>
                                </div>
                            </div>

                            {/* Direct Action CTA Buttons */}
                            <div className="d-flex flex-column flex-sm-row gap-2 mt-2">
                                <Link
                                    href="/tamara"
                                    className="btn flex-grow-1 py-2 px-3 fw-bold text-center rounded-2 shadow-sm d-flex align-items-center justify-content-center gap-2"
                                    style={{
                                        background: 'linear-gradient(135deg, #114934 0%, #1a6547 100%)',
                                        color: '#ffffff',
                                        fontSize: '0.82rem',
                                        letterSpacing: '0.6px',
                                        border: '1px solid rgba(197, 160, 89, 0.4)',
                                        boxShadow: '0 4px 12px rgba(17, 73, 52, 0.2)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <span>EXPLORE TAMARA VALLEY</span>
                                    <span style={{ color: '#c5a059', fontSize: '0.95rem', fontWeight: 'bold' }}>&rarr;</span>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="btn py-2 px-3 fw-bold text-center rounded-2 d-flex align-items-center justify-content-center gap-2"
                                    style={{
                                        borderColor: '#c5a059',
                                        borderWidth: '1.5px',
                                        borderStyle: 'solid',
                                        color: '#114934',
                                        backgroundColor: '#fdfbf7',
                                        fontSize: '0.82rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = '#c5a059';
                                        e.currentTarget.style.color = '#ffffff';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = '#fdfbf7';
                                        e.currentTarget.style.color = '#114934';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <FaCalendarAlt size={13} style={{ color: '#c5a059' }} />
                                    <span>Book Site Visit</span>
                                </Link>
                            </div>

                            {/* Trust Proof Bar below Buttons */}
                            <div className="mt-2 pt-2 border-top d-flex flex-wrap align-items-center justify-content-center gap-2 text-muted" style={{ fontSize: '0.7rem', borderColor: 'rgba(197, 160, 89, 0.2) !important' }}>
                                <span className="d-flex align-items-center gap-1">
                                    <FaCheckCircle size={11} style={{ color: '#114934' }} /> Freehold Ownership
                                </span>
                                <span className="text-muted d-none d-sm-inline">•</span>
                                <span className="d-flex align-items-center gap-1">
                                    <FaCheckCircle size={11} style={{ color: '#114934' }} /> 24/7 Gated Security
                                </span>
                                <span className="text-muted d-none d-sm-inline">•</span>
                                <span className="d-flex align-items-center gap-1">
                                    <FaCheckCircle size={11} style={{ color: '#114934' }} /> Full Stewardship
                                </span>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>

            <style jsx>{`
                .aerial-frame {
                    min-height: 280px;
                }
                .spec-label-col {
                    width: 135px;
                    min-width: 135px;
                    padding: 7px 10px;
                }
                .spec-value-col {
                    padding: 7px 10px;
                }
                @media (min-width: 768px) {
                    .aerial-frame {
                        min-height: 380px;
                    }
                    .spec-label-col {
                        width: 175px;
                        min-width: 175px;
                        padding: 7px 12px;
                    }
                    .spec-value-col {
                        padding: 7px 12px;
                    }
                }
                @media (min-width: 992px) {
                    .aerial-frame {
                        height: 100%;
                        min-height: 100%;
                    }
                }
            `}</style>
        </section>
    );
}