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
        question: 'What is Little England Farms?',
        answer: 'A managed organic farmland brand on the Thally-Hosur corridor, about 55 minutes from Bangalore. Every plot comes with clear, freehold title, professionally farmed on the owner\'s behalf.'
    },
    {
        question: 'Where is Little England Farms located, and how far is it from Bangalore?',
        answer: 'Across the Thally belt in Krishnagiri district, Tamil Nadu — about 50 km from Bangalore\'s Silk Board, 25 km from Hosur, and roughly 45 km from Electronic City. For our own projects specifically, that\'s about 55 minutes off NH-44.'
    },
    {
        question: 'Is Thally in Karnataka or Tamil Nadu?',
        answer: 'Tamil Nadu. Thally falls under Krishnagiri district, right across the border from Karnataka — most of the drive from Bangalore runs through Karnataka before crossing into Tamil Nadu near the end. It\'s a common point of confusion, since almost every buyer is coming from Bangalore.'
    },
    {
        question: 'Why is Thally called "Little England"?',
        answer: 'British planters settled here for the cool climate and rolling hills — closer to the English countryside than anywhere else in South India — and the name stuck with locals long after the British left. Kenilworth Fort, modeled on England\'s own Kenilworth Castle, is the clearest physical trace of that history still standing.'
    },
    {
        question: 'What\'s the climate like in Thally?',
        answer: 'Cool and consistent. At around 1,000 feet elevation, Thally stays comfortable through most of the year, genuinely pleasant in summer when Bangalore is heating up — which is part of why organic farming and off-grid cottage living both work here.'
    },
    {
        question: 'Is the title actually clear?',
        answer: 'Yes. Every plot comes with freehold title, Patta Chitta documented before you sign anything. You\'re not buying shares in a pooled scheme — you own your specific plot, on paper, from day one.'
    },
    {
        question: 'Can I build a house on my land?',
        answer: 'On most projects, yes. Cottage and farmhouse construction is allowed, and our team can help you plan and build it. A few projects have restrictions, so ask about the specific one before you buy.'
    },
    {
        question: 'Do I have to farm it myself?',
        answer: 'No — that\'s the point of "managed." Our team handles irrigation, fertilization, security, and crop planning. You show up when you want to.'
    },
    {
        question: "What is the difference between managed farmland and buying land directly? ",
        answer: "Buying land directly means you handle everything yourself — irrigation, security, cultivation, legal upkeep. Managed farmland means a professional team does that for you while you hold the title and collect the returns."
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

            {/* Top Right Leaf Accent Decorator */}
            <div
                className="position-absolute d-none d-lg-block"
                style={{ top: '20px', right: '40px', opacity: 0.12, pointerEvents: 'none' }}
            >
                <FaLeaf size={110} style={{ color: '#114934' }} />
            </div>

            {/* Bottom Left Leaf Accent Decorator */}
            <div
                className="position-absolute d-none d-lg-block"
                style={{ bottom: '20px', left: '20px', opacity: 0.08, transform: 'rotate(-45deg)', pointerEvents: 'none' }}
            >
                <FaLeaf size={90} style={{ color: '#114934' }} />
            </div>

            <Container className="py-lg-5 position-relative">

                {/* 1. Header Section */}
                <div className="text-center mb-5">
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        <h6
                            className="text-uppercase letter-spacing-2 mb-0 small fw-bold"
                            style={{ color: '#c5a059', fontSize: '0.8rem' }}
                        >
                            Help & Support
                        </h6>
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                    </div>

                    <h2
                        className="display-4 fw-bold mb-3 text-sanjeevani"
                        style={{
                            fontFamily: '"Playfair Display", "Georgia", serif',
                            lineHeight: '1.2'
                        }}
                    >
                        Frequently Asked Questions
                    </h2>

                    <div className="d-flex justify-content-center mb-3">
                        <FaLeaf size={16} style={{ color: '#c5a059', opacity: 0.8 }} />
                    </div>

                    <p className="text-muted max-w-xl mx-auto" style={{ fontSize: '0.98rem' }}>
                        All your questions answered about Little England Farms
                    </p>
                </div>

                {/* 2. Content Row: Left Image Card & Right Custom Accordion Stack */}
                <Row className="gy-4 align-items-stretch">

                    {/* Left Side: Styled Vertical Farmland Image Card */}
                    <Col lg={4}>
                        <div
                            className="h-100 rounded-4 overflow-hidden shadow-sm position-relative d-flex flex-column justify-content-end p-4 border border-light"
                            style={{
                                minHeight: '440px',
                                border: '1.5px solid rgba(197, 160, 89, 0.2)'
                            }}
                        >
                            <Image
                                src="/projects/Tamara Valley (Upcoming).webp"
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
                            <div className="position-relative text-center text-white z-2 w-100 mb-2">
                                <div
                                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        border: '1.5px solid #c5a059',
                                        color: '#c5a059'
                                    }}
                                >
                                    <FaLeaf size={18} />
                                </div>
                                <h3
                                    className="fw-bold mb-3 text-white"
                                    style={{
                                        fontFamily: '"Playfair Display", "Georgia", serif',
                                        fontSize: '1.8rem',
                                        lineHeight: '1.3'
                                    }}
                                >
                                    Nature. Ownership. <br />
                                    <span style={{ color: '#c5a059' }}>Peace of Mind.</span>
                                </h3>
                                <span style={{ width: '40px', height: '1.5px', backgroundColor: '#c5a059', display: 'inline-block', marginBottom: '15px' }}></span>
                                <p className="small text-white-50 mb-0 px-2" style={{ lineHeight: '1.5' }}>
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
                                                {/* Left Green Icon Badge */}
                                                <div
                                                    className="rounded-circle d-none d-sm-flex align-items-center justify-content-center text-white"
                                                    style={{
                                                        width: '56px',
                                                        height: '56px',
                                                        backgroundColor: 'rgba(17, 73, 52, 0.06)',
                                                        border: '1.5px solid rgba(17, 73, 52, 0.15)',
                                                        color: '#114934',
                                                        minWidth: '56px'
                                                    }}
                                                >
                                                    <FaSeedling size={22} />
                                                </div>

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
