'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import {
    FaLeaf,
    FaSeedling,
    FaLock,
    FaMap,
    FaTag,
    FaMapMarkerAlt,
    FaBuilding,
    FaFileContract,
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
            className="py-5 position-relative"
            style={{
                backgroundColor: '#fcfbf7', // Premium warm cream background
                overflow: 'hidden'
            }}
        >
            <Container className="py-lg-5 position-relative">
                <Row className="gy-5 align-items-center">

                    {/* Left Column: Title Header & Landscaping Image Card */}
                    <Col lg={6} className="pe-lg-4 text-center text-lg-start">
                        {/* Project Highlight Badge */}
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-3">
                            <FaLeaf size={14} style={{ color: '#c5a059' }} />
                            <h6
                                className="text-uppercase letter-spacing-2 mb-0 small fw-bold"
                                style={{ color: '#c5a059', fontSize: '0.8rem' }}
                            >
                                Project Highlight
                            </h6>
                            <span style={{ width: '40px', height: '1px', backgroundColor: 'rgba(197, 160, 89, 0.4)' }}></span>
                        </div>

                        {/* Title Heading */}
                        <h2
                            className="display-4 fw-bold mb-2 text-sanjeevani"
                            style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: 'clamp(1.85rem, 5.5vw, 3rem)',
                                overflowWrap: 'break-word',
                                wordBreak: 'break-word'
                            }}
                        >
                            TAMARA VALLEY
                        </h2>

                        {/* Tagline */}
                        <h5
                            className="text-uppercase letter-spacing-2 mb-3 mb-md-4 fw-semibold"
                            style={{ color: '#c5a059', fontSize: 'clamp(0.82rem, 2.5vw, 0.92rem)' }}
                        >
                            The One We'd Show You First
                        </h5>

                        {/* Copy details */}
                        <p className="text-muted lh-lg mb-4" style={{ fontSize: '0.96rem' }}>
                            Three hundred acres, one gate, one standard. <br />
                            If someone asks what Little England looks like at full scale, this is the answer we point to.
                        </p>

                        {/* Landscaping Aerial Image Frame with Overlay Pill Box */}
                        <div
                            className="position-relative rounded-4 overflow-hidden shadow-sm aerial-frame"
                            style={{
                                border: '1.5px solid rgba(197, 160, 89, 0.2)'
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
                                className="position-absolute z-2 py-2 py-md-3 px-2 px-md-3 rounded-3 rounded-md-4 shadow-sm"
                                style={{
                                    backgroundColor: 'rgba(17, 73, 52, 0.95)',
                                    border: '1.5px solid rgba(197, 160, 89, 0.5)',
                                    width: '92%',
                                    bottom: '15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
                                }}
                            >
                                <Row className="text-center align-items-center g-1 g-md-2 text-white">
                                    <Col xs={4} className="border-end border-white-50 px-1">
                                        <div className="d-flex flex-column align-items-center">
                                            <FaSeedling className="mb-1 mb-md-2" size={14} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: 'clamp(0.6rem, 1.8vw, 0.68rem)', fontWeight: 500, letterSpacing: '0.3px', lineHeight: 1.2 }} className="text-uppercase text-white-80">Managed Organic Farmland</span>
                                        </div>
                                    </Col>

                                    <Col xs={4} className="border-end border-white-50 px-1">
                                        <div className="d-flex flex-column align-items-center">
                                            <FaLock className="mb-1 mb-md-2" size={14} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: 'clamp(0.6rem, 1.8vw, 0.68rem)', fontWeight: 500, letterSpacing: '0.3px', lineHeight: 1.2 }} className="text-uppercase text-white-80">Secure Gated Community</span>
                                        </div>
                                    </Col>

                                    <Col xs={4} className="px-1">
                                        <div className="d-flex flex-column align-items-center">
                                            <FaLeaf className="mb-1 mb-md-2" size={14} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: 'clamp(0.6rem, 1.8vw, 0.68rem)', fontWeight: 500, letterSpacing: '0.3px', lineHeight: 1.2 }} className="text-uppercase text-white-80">Sustainable Living</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                    </Col>

                    {/* Right Column: Prominent & Eye-Catching "AT A GLANCE" Information Card */}
                    <Col lg={6}>
                        <div className="d-flex flex-column align-items-center align-items-lg-end mt-4 mt-lg-0">

                            {/* Main Elevated Showcase Card */}
                            <div
                                className="rounded-4 bg-white position-relative overflow-hidden w-100"
                                style={{
                                    maxWidth: '560px',
                                    border: '1.5px solid rgba(197, 160, 89, 0.35)',
                                    boxShadow: '0 20px 45px -10px rgba(17, 73, 52, 0.14), 0 0 0 1px rgba(197, 160, 89, 0.15), 0 8px 24px rgba(197, 160, 89, 0.08)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {/* Luxury Top Gradient Accent Bar */}
                                <div
                                    style={{
                                        height: '5px',
                                        width: '100%',
                                        background: 'linear-gradient(90deg, #114934 0%, #c5a059 50%, #114934 100%)'
                                    }}
                                />

                                <div className="p-3 p-sm-4 p-md-5 pt-3 pt-md-4">
                                    {/* Card Header with Gold Ribbon & Badge */}
                                    <div className="text-center mb-3 mb-md-4">
                                        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2 mb-md-3" style={{ backgroundColor: 'rgba(197, 160, 89, 0.12)', border: '1px solid rgba(197, 160, 89, 0.35)' }}>
                                            <FaAward size={13} style={{ color: '#977227' }} />
                                            <span className="text-uppercase fw-bold" style={{ color: '#826019', fontSize: '0.72rem', letterSpacing: '1.5px' }}>
                                                Flagship Project Specs
                                            </span>
                                        </div>

                                        <div className="d-flex justify-content-center align-items-center gap-2 gap-md-3">
                                            {/* Glowing Green & Gold Badge */}
                                            <div
                                                className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                                                style={{
                                                    width: '46px',
                                                    height: '46px',
                                                    minWidth: '46px',
                                                    background: 'linear-gradient(135deg, #114934 0%, #1a6547 100%)',
                                                    border: '2.5px solid #c5a059',
                                                    color: '#c5a059'
                                                }}
                                            >
                                                <FaMap size={19} />
                                            </div>
                                            <div className="text-start">
                                                <h3
                                                    className="fw-bold mb-0 text-sanjeevani text-uppercase letter-spacing-1"
                                                    style={{
                                                        fontFamily: 'var(--font-serif)',
                                                        fontSize: 'clamp(1.05rem, 3.5vw, 1.25rem)',
                                                        lineHeight: '1.2'
                                                    }}
                                                >
                                                    Project At A Glance
                                                </h3>
                                                <span className="text-muted small" style={{ fontSize: '0.78rem' }}>
                                                    Tamara Valley • Master-Planned Managed Farmland
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Feature Specifications Table List */}
                                    <div
                                        className="rounded-3 overflow-hidden"
                                        style={{
                                            border: '1px solid rgba(197, 160, 89, 0.25)',
                                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)'
                                        }}
                                    >
                                        {/* Row 1: Land Area */}
                                        <div className="d-flex align-items-stretch border-bottom" style={{ borderColor: 'rgba(197, 160, 89, 0.15)' }}>
                                            <div className="spec-label-col text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934' }}>
                                                <FaMap size={13} style={{ color: '#c5a059', minWidth: '13px' }} />
                                                <span style={{ fontSize: '0.74rem', fontWeight: 600, letterSpacing: '0.5px' }} className="text-uppercase">Total Land Area</span>
                                            </div>
                                            <div className="spec-value-col bg-light flex-grow-1 d-flex align-items-center justify-content-between" style={{ fontSize: '0.85rem', color: '#1a202c' }}>
                                                <span className="fw-semibold">400 Acres</span>
                                                <span className="badge px-2 py-1 rounded-pill ms-1" style={{ backgroundColor: 'rgba(17, 73, 52, 0.1)', color: '#114934', fontSize: '0.68rem' }}>
                                                    Phase 1 Open
                                                </span>
                                            </div>
                                        </div>

                                        {/* Row 2: Plot Type */}
                                        <div className="d-flex align-items-stretch border-bottom" style={{ borderColor: 'rgba(197, 160, 89, 0.15)' }}>
                                            <div className="spec-label-col text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934' }}>
                                                <FaSeedling size={13} style={{ color: '#c5a059', minWidth: '13px' }} />
                                                <span style={{ fontSize: '0.74rem', fontWeight: 600, letterSpacing: '0.5px' }} className="text-uppercase">Plot Type</span>
                                            </div>
                                            <div className="spec-value-col bg-white flex-grow-1 d-flex align-items-center" style={{ fontSize: '0.85rem', color: '#1a202c' }}>
                                                <span>Managed Organic Farmland</span>
                                            </div>
                                        </div>

                                        {/* Row 3: Starting Price (PROMINENT HIGHLIGHT ROW) */}
                                        <div
                                            className="d-flex align-items-stretch border-bottom position-relative"
                                            style={{
                                                backgroundColor: '#faf5ea',
                                                borderTop: '2px solid rgba(197, 160, 89, 0.6)',
                                                borderBottom: '2px solid rgba(197, 160, 89, 0.6)'
                                            }}
                                        >
                                            <div
                                                className="spec-label-col text-white d-flex align-items-center gap-2"
                                                style={{
                                                    background: 'linear-gradient(135deg, #114934 0%, #0d3828 100%)'
                                                }}
                                            >
                                                <FaTag size={14} style={{ color: '#e5b869', minWidth: '14px' }} />
                                                <div className="d-flex flex-column">
                                                    <span style={{ fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.5px' }} className="text-uppercase">Starting Price</span>
                                                    <span style={{ fontSize: '0.6rem', color: '#c5a059', letterSpacing: '0.5px' }} className="fw-semibold">LIMITED AVAILABILITY</span>
                                                </div>
                                            </div>
                                            <div
                                                className="spec-value-col flex-grow-1 d-flex align-items-center justify-content-between"
                                                style={{
                                                    background: 'linear-gradient(90deg, #fdf9f0 0%, #f7eedb 100%)'
                                                }}
                                            >
                                                <div>
                                                    <span className="fw-bold" style={{ fontSize: '1.12rem', color: '#114934' }}>
                                                        ₹79.9L*
                                                    </span>
                                                    <span className="text-muted fw-semibold ms-1" style={{ fontSize: '0.82rem' }}>/ Acre</span>
                                                </div>
                                                <span
                                                    className="badge px-2 py-1 rounded text-uppercase fw-bold ms-1"
                                                    style={{
                                                        backgroundColor: '#c5a059',
                                                        color: '#ffffff',
                                                        fontSize: '0.64rem',
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
                                                <FaMapMarkerAlt size={13} style={{ color: '#c5a059', minWidth: '13px' }} />
                                                <span style={{ fontSize: '0.74rem', fontWeight: 600, letterSpacing: '0.5px' }} className="text-uppercase">Distance: Bangalore</span>
                                            </div>
                                            <div className="spec-value-col bg-light flex-grow-1 d-flex align-items-center" style={{ fontSize: '0.85rem', color: '#1a202c' }}>
                                                <span><strong>55 km</strong> (55 mins, off NH 44)</span>
                                            </div>
                                        </div>

                                        {/* Row 5: Distance from Electronic City */}
                                        <div className="d-flex align-items-stretch border-bottom" style={{ borderColor: 'rgba(197, 160, 89, 0.15)' }}>
                                            <div className="spec-label-col text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934' }}>
                                                <FaBuilding size={13} style={{ color: '#c5a059', minWidth: '13px' }} />
                                                <span style={{ fontSize: '0.74rem', fontWeight: 600, letterSpacing: '0.5px' }} className="text-uppercase">Distance: E-City</span>
                                            </div>
                                            <div className="spec-value-col bg-white flex-grow-1 d-flex align-items-center" style={{ fontSize: '0.85rem', color: '#1a202c' }}>
                                                <span><strong>35 km</strong> via Hosur Belt</span>
                                            </div>
                                        </div>

                                        {/* Row 6: Title Status (TRUST BADGE ROW) */}
                                        <div className="d-flex align-items-stretch">
                                            <div className="spec-label-col text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934' }}>
                                                <FaShieldAlt size={13} style={{ color: '#c5a059', minWidth: '13px' }} />
                                                <span style={{ fontSize: '0.74rem', fontWeight: 600, letterSpacing: '0.5px' }} className="text-uppercase">Title Status</span>
                                            </div>
                                            <div className="spec-value-col bg-light flex-grow-1 d-flex align-items-center gap-2" style={{ fontSize: '0.82rem', color: '#1a202c' }}>
                                                <FaCheckCircle size={14} style={{ color: '#114934', minWidth: '14px' }} />
                                                <span className="fw-semibold">Clear Freehold – Patta Chitta Documented</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Direct Action CTA Buttons */}
                                    <div className="d-flex flex-column flex-sm-row gap-2 gap-md-3 mt-4 pt-2">
                                        <Link
                                            href="/tamara"
                                            className="btn flex-grow-1 py-2.5 py-md-3 px-3 px-md-4 fw-bold text-center rounded-2 shadow-sm d-flex align-items-center justify-content-center gap-2"
                                            style={{
                                                background: 'linear-gradient(135deg, #114934 0%, #1a6547 100%)',
                                                color: '#ffffff',
                                                fontSize: '0.85rem',
                                                letterSpacing: '0.8px',
                                                border: '1px solid rgba(197, 160, 89, 0.4)',
                                                boxShadow: '0 8px 20px rgba(17, 73, 52, 0.25)',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = '0 12px 25px rgba(17, 73, 52, 0.35)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(17, 73, 52, 0.25)';
                                            }}
                                        >
                                            <span>EXPLORE TAMARA VALLEY</span>
                                            <span style={{ color: '#c5a059', fontSize: '1rem', fontWeight: 'bold' }}>&rarr;</span>
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="btn py-2.5 py-md-3 px-3 px-md-4 fw-bold text-center rounded-2 d-flex align-items-center justify-content-center gap-2"
                                            style={{
                                                borderColor: '#c5a059',
                                                borderWidth: '2px',
                                                borderStyle: 'solid',
                                                color: '#114934',
                                                backgroundColor: '#fdfbf7',
                                                fontSize: '0.85rem',
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
                                            <FaCalendarAlt size={14} style={{ color: '#c5a059' }} />
                                            <span>Book Site Visit</span>
                                        </Link>
                                    </div>

                                    {/* Trust Proof Bar below Buttons */}
                                    <div className="mt-3 mt-md-4 pt-3 border-top d-flex flex-wrap align-items-center justify-content-center gap-2 gap-md-3 text-muted" style={{ fontSize: '0.74rem', borderColor: 'rgba(197, 160, 89, 0.2) !important' }}>
                                        <span className="d-flex align-items-center gap-1">
                                            <FaCheckCircle size={12} style={{ color: '#114934' }} /> 100% Freehold Ownership
                                        </span>
                                        <span className="text-muted d-none d-sm-inline">•</span>
                                        <span className="d-flex align-items-center gap-1">
                                            <FaCheckCircle size={12} style={{ color: '#114934' }} /> 24/7 Gated Security
                                        </span>
                                        <span className="text-muted d-none d-sm-inline">•</span>
                                        <span className="d-flex align-items-center gap-1">
                                            <FaCheckCircle size={12} style={{ color: '#114934' }} /> End-to-End Stewardship
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Col>

                </Row>
            </Container>

            <style jsx>{`
                .aerial-frame {
                    height: 270px;
                }
                .spec-label-col {
                    width: 130px;
                    min-width: 130px;
                    padding: 10px 12px;
                }
                .spec-value-col {
                    padding: 10px 12px;
                }
                @media (min-width: 768px) {
                    .aerial-frame {
                        height: 360px;
                    }
                    .spec-label-col {
                        width: 190px;
                        min-width: 190px;
                        padding: 14px 16px;
                    }
                    .spec-value-col {
                        padding: 14px 16px;
                    }
            `}</style>
        </section>
    );
}