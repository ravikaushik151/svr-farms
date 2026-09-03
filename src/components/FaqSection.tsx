'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
    FaLeaf,
    FaChevronUp,
    FaChevronDown,
    FaSeedling,
    FaArrowRight,
    FaQuestion
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const faqs = [
    {
        question: "Where are Little England’s managed farmland communities located?",
        answer: "Little England’s farmland communities are primarily positioned across the Thally belt in Krishnagiri district, Tamil Nadu - approximately 50 km from Bangalore’s Silk Board, around 25 km from Hosur and within convenient reach of Electronic City. The location offers the rare advantage of countryside living without feeling disconnected from Bangalore."
    },
    {
        question: "What does “managed farmland” mean?",
        answer: "Managed farmland allows you to own agricultural land while an experienced on-ground team takes care of essential activities such as cultivation, irrigation, routine maintenance and farm management. At Little England, the idea is to make farmland ownership more effortless - allowing owners to enjoy the land, its surroundings and its long-term potential without having to personally manage everyday agricultural operations."
    },
    {
        question: "Where is Little England Farms located, and how far is it from Bangalore?",
        answer: "Across the Thally belt in Krishnagiri district, Tamil Nadu - about 50 km from Bangalore's Silk Board, 25 km from Hosur, and roughly 45 km from Electronic City. For our own projects specifically, that’s about 55 minutes off NH-44."
    },
    {
        question: "What does “managed farmland” mean? (Tamara Valley)",
        answer: "Managed farmland allows you to own a defined parcel of land while an experienced on-ground team handles activities such as cultivation, irrigation, farm upkeep, security and common-area management. At Tamara Valley, the project states that farming is professionally managed through organic practices, allowing owners to enjoy the land without personally overseeing its everyday operations."
    },
    {
        question: "Why is Thally called “Little England”?",
        answer: "British planters settled here for the cool climate and rolling hills - closer to the English countryside than anywhere else in South India - and the name stuck with locals long after the British left. Kenilworth Fort, modeled on England’s own Kenilworth Castle, is the clearest physical trace of that history still standing."
    },
    {
        question: "Does Little England manage the farmland after purchase?",
        answer: "Little England’s managed farmland model is designed to support owners with the day-to-day care and cultivation of their land. Depending on the individual project and management plan, this can include agricultural operations, irrigation, routine upkeep and other essential farm-management activities. Specific inclusions and charges should always be reviewed in the respective project’s management agreement."
    },
    {
        question: "Is the land legally verified and individually registered?",
        answer: "Tamara Valley’s official website states that the project offers clear-title deeds and government-registered ownership. Before purchasing, buyers should still have an independent property lawyer examine the title history, encumbrance certificate, survey details, land classification, applicable revenue records, sale agreement and final sale deed for the specific plot being considered."
    },
    {
        question: "What makes Little England different from conventional plotted developments?",
        answer: "Little England is built around the idea that land ownership should offer more than a defined plot. Its managed farmland communities bring together productive land, professionally managed cultivation, natural landscapes and thoughtfully planned lifestyle experiences. The focus is on creating places that owners can genuinely spend time in - not merely parcels of land held for the future."
    },
    {
        question: "How does Little England approach land documentation and registration?",
        answer: "Land documentation and registration are handled on a project-specific basis, with buyers receiving the applicable ownership and property documents relating to their selected land parcel. As with any land purchase, buyers are encouraged to independently review the title history, encumbrance records, survey details, land classification and sale documentation with a qualified legal professional before completing the transaction."
    }
];

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Generate structured FAQPage schema for search engines (SEO/AEO)
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section
            className="py-5 position-relative"
            style={{
                backgroundColor: '#fcfbf7', // Premium warm cream background
                overflow: 'hidden'
            }}
        >
            {/* Inject JSON-LD FAQ Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Container className="py-lg-5 position-relative">

                {/* 1. Header Section */}
                <div className="text-center mb-4 mb-md-5 section-header-wrap">
                    <div className="d-flex justify-content-center align-items-center section-subtitle-wrap gap-2 mb-2">
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        <h6 className="section-subheading mb-0">
                            Help & Support
                        </h6>
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                    </div>

                    <h2 className="section-heading mb-2 text-sanjeevani">
                        Frequently Asked Questions
                    </h2>

                    <div className="section-divider-bar mx-auto"></div>

                    <p className="text-muted max-w-xl mx-auto" style={{ fontSize: 'clamp(0.9rem, 2vw, 0.98rem)' }}>
                        All your questions answered about Little England Farms
                    </p>
                </div>

                {/* 2. Content Row: Left Image Card & Right Custom Accordion Stack */}
                <Row className="gy-4 align-items-stretch">

                    {/* Left Side: Styled Vertical Farmland Image Card */}
                    <Col lg={4}>
                        <div
                            className="h-100 rounded-4 overflow-hidden shadow-sm position-relative d-flex flex-column justify-content-end p-3 p-md-4 border border-light faq-img-card"
                            style={{
                                border: '1.5px solid rgba(197, 160, 89, 0.2)'
                            }}
                        >
                            <Image
                                src="/Frequently-Asked-Questions.webp"
                                alt="Scenic view of organic managed farmland"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                            />

                            {/* Dark Green Gradient Overlay mask */}
                            <div
                                className="position-absolute start-0 top-0 w-100 h-100"
                                style={{
                                    backgroundImage: 'linear-gradient(to bottom, rgba(17, 73, 52, 0.2) 20%, rgba(17, 73, 52, 0.92) 100%)',
                                    zIndex: 1
                                }}
                            />

                            {/* Text overlay content */}
                            <div className="position-relative text-center text-white z-2 w-100 mb-1 mb-md-2">
                                <div
                                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-2 mb-md-3"
                                    style={{
                                        width: '42px',
                                        height: '42px',
                                        border: '1.5px solid #c5a059',
                                        color: '#c5a059'
                                    }}
                                >
                                    <FaLeaf size={16} />
                                </div>
                                <h3
                                    className="fw-bold mb-2 mb-md-3 text-white"
                                    style={{
                                        fontFamily: 'var(--font-serif)',
                                        fontSize: 'clamp(1.35rem, 4vw, 1.8rem)',
                                        lineHeight: '1.3'
                                    }}
                                >
                                    Nature. Ownership. <br />
                                    <span style={{ color: '#c5a059' }}>Peace of Mind.</span>
                                </h3>
                                <span style={{ width: '40px', height: '1.5px', backgroundColor: '#c5a059', display: 'inline-block', marginBottom: '10px' }}></span>
                                <p className="small text-white-50 mb-0 px-2" style={{ lineHeight: '1.5', fontSize: '0.82rem' }}>
                                    We take care of the land, so you can enjoy the returns.
                                </p>
                            </div>
                        </div>
                    </Col>

                    {/* Right Side: Custom Styled Accordion List */}
                    <Col lg={8}>
                        <div className="d-flex flex-column gap-3">
                            {faqs.map((faq, index) => {
                                const isActive = activeIndex === index;
                                const padIndex = (index + 1).toString().padStart(2, '0');

                                return (
                                    <div
                                        key={index}
                                        className="rounded-3 shadow-sm overflow-hidden"
                                        style={{
                                            border: isActive ? '1.5px solid #c5a059' : '1px solid rgba(197, 160, 89, 0.15)',
                                            transition: 'all 0.3s ease',
                                            backgroundColor: '#ffffff'
                                        }}
                                    >
                                        {/* Accordion Header bar */}
                                        <div
                                            onClick={() => toggleAccordion(index)}
                                            className="p-3 d-flex align-items-center justify-content-between"
                                            style={{
                                                backgroundColor: isActive ? '#114934' : '#ffffff',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                {/* Circular Number Indicator */}
                                                <div
                                                    className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                                    style={{
                                                        width: '32px',
                                                        height: '32px',
                                                        fontSize: '0.78rem',
                                                        border: isActive ? '1.5px solid rgba(255,255,255,0.4)' : '1.5px solid #c5a059',
                                                        color: isActive ? '#ffffff' : '#c5a059',
                                                        minWidth: '32px',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    {padIndex}
                                                </div>

                                                {/* Question Text */}
                                                <span
                                                    className="fw-bold text-start"
                                                    style={{
                                                        color: isActive ? '#ffffff' : '#114934',
                                                        fontSize: '0.92rem',
                                                        transition: 'all 0.3s ease',
                                                        lineHeight: '1.4'
                                                    }}
                                                >
                                                    {faq.question}
                                                </span>
                                            </div>

                                            {/* Toggle Chevron Arrow */}
                                            <div style={{ color: '#c5a059', transition: 'all 0.3s ease' }} className="ms-2">
                                                {isActive ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                                            </div>
                                        </div>

                                        {/* Accordion Body contents */}
                                        {isActive && (
                                            <div
                                                className="p-4 d-flex align-items-start gap-3 bg-white"
                                                style={{ borderTop: '1px solid rgba(197, 160, 89, 0.15)' }}
                                            >


                                                {/* Answer description */}
                                                <p className="text-secondary lh-lg mb-0 flex-grow-1" style={{ fontSize: '0.88rem' }}>
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}

                                    </div>
                                );
                            })}
                        </div>
                    </Col>

                </Row>

                {/* 3. Bottom Pill Card redirect to Inquiry Contact page */}
                <div
                    className="p-4 rounded-4 shadow-sm border"
                    style={{
                        backgroundColor: '#faf8f2', // Soft warm light beige
                        borderColor: 'rgba(197, 160, 89, 0.25)',
                        marginTop: '50px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
                    }}
                >
                    <Row className="gy-3 align-items-center text-center text-md-start">
                        <Col md={8} className="d-flex flex-column flex-md-row align-items-center gap-3">
                            {/* Leaf Icon Ring */}
                            <div
                                className="rounded-circle d-flex align-items-center justify-content-center text-white"
                                style={{
                                    width: '46px',
                                    height: '46px',
                                    backgroundColor: '#114934',
                                    border: '2px solid #c5a059',
                                    color: '#c5a059',
                                    minWidth: '46px'
                                }}
                            >
                                <FaQuestion size={16} />
                            </div>

                            <div className="d-flex flex-column">
                                <h5 className="fw-bold mb-1 text-dark small text-uppercase letter-spacing-1">Still have questions?</h5>
                                <p className="text-muted mb-0 small">We're here to help you make the right decision.</p>
                            </div>
                        </Col>

                        <Col md={4} className="text-md-end">
                            <Link
                                href="/contact"
                                className="btn text-white px-4 py-2.5 rounded-1 text-uppercase d-inline-flex align-items-center gap-2 fw-semibold"
                                style={{
                                    backgroundColor: '#114934',
                                    fontSize: '0.78rem',
                                    letterSpacing: '1px',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#1b2e1e'; }}
                                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#114934'; }}
                            >
                                Get In Touch <FaArrowRight size={11} style={{ color: '#c5a059' }} />
                            </Link>
                        </Col>
                    </Row>
                </div>

            </Container>
        </section>
    );
}
