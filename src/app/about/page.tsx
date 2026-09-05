'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
    FaLeaf,
    FaSeedling,
    FaTree,
    FaHeart,
    FaShieldAlt,
    FaAward,
    FaSun,
    FaLandmark,
    FaTractor,
    FaGlobe,
    FaMountain,
    FaHome,
    FaHourglassHalf,
    FaArrowRight,
    FaQuoteLeft
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';

export default function About() {
    return (
        <>
            {/* 1. Hero / Page Banner Section with Breadcrumbs */}
            <PageBanner
                title="About Us"
                backgroundImage="/banner/About us_Banner.webp"
            />

            {/* Intro Section */}
            <div className="py-5" style={{ backgroundColor: '#ffffff' }}>
                <Container className="py-lg-5">
                    <Row className="justify-content-center">
                        <Col lg={10} className="text-center section-header-wrap">
                            <div className="d-flex align-items-center justify-content-center section-subtitle-wrap gap-2 mb-2">
                                <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                                <h6 className="section-subheading mb-0">
                                    About Little England
                                </h6>
                                <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                            </div>
                            <h2 className="section-heading text-sanjeevani mb-2">
                                Land, Reimagined <br />for a Life Well Lived.
                            </h2>
                            <div className="section-divider-bar mx-auto"></div>
                            <p className="lead text-secondary mb-3 lh-lg animate-fade-in" style={{ fontSize: '1.1rem' }}>
                                Little England creates thoughtfully planned managed farmland communities where nature, purposeful design and effortless ownership come together.
                            </p>
                            <p className="text-secondary mb-4 lh-lg" style={{ fontSize: '1.05rem' }}>
                                Set amid cool climates, mist-covered landscapes and expansive greenery, our communities offer a quieter, more meaningful way to own land - one rooted in wellbeing, responsible stewardship and enduring value.
                            </p>
                            <Link href="/projects" className="btn px-4 py-3 rounded-0 fw-semibold d-inline-flex align-items-center gap-2" style={{
                                border: '1px solid #c5a059',
                                color: '#c5a059',
                                backgroundColor: 'transparent',
                                fontSize: '0.85rem',
                                letterSpacing: '1.5px',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#c5a059'; e.currentTarget.style.color = '#fff'; }}
                                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#c5a059'; }}
                            >
                                Explore Our Communities <FaArrowRight size={12} />
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* 2. Brand Introduction Section */}
            <div className="py-5" style={{ backgroundColor: '#fcfbf7' }}>
                <Container className="py-lg-5">
                    <Row className="gy-5 align-items-center">
                        <Col lg={6} className="pe-lg-5 text-center text-lg-start section-header-wrap">
                            <div className="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start mb-2">
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start section-subtitle-wrap gap-2 mb-2">
                                    <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                                    <h6 className="section-subheading mb-0">
                                        Brand Introduction
                                    </h6>
                                    <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                                </div>
                                <h2 className="section-heading text-sanjeevani mb-2">
                                    A New Standard in <br className="d-none d-lg-block" />Managed Farmland
                                </h2>
                                <div className="section-divider-bar ms-lg-0 mx-auto"></div>
                            </div>
                            <p className="text-secondary lh-lg mb-3" style={{ fontSize: '1rem' }}>
                                At Little England, we believe land should offer more than ownership. It should provide a sense of belonging, a connection with nature and something meaningful to preserve for generations.
                            </p>
                            <p className="text-secondary lh-lg mb-3" style={{ fontSize: '1rem' }}>
                                We bring together carefully selected locations, ecological planning, responsible cultivation and professional land management to create farmland communities that feel deeply natural yet remarkably considered.
                            </p>
                            <p className="text-secondary lh-lg mb-0" style={{ fontSize: '1rem' }}>
                                From soil health and water conservation to shared spaces and long-term maintenance, every element is managed with intention - allowing owners to experience the rewards of land ownership without the operational burden.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <div className="position-relative">
                                <div className="rounded-4 overflow-hidden shadow" style={{ height: '420px', position: 'relative' }}>
                                    <Image
                                        src="/about-us/1.webp"
                                        alt="Little England Path"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>

                                <div className="bg-sanjeevani text-white p-4 rounded-4 shadow position-relative z-1" style={{ marginTop: '-40px', marginLeft: '15px', marginRight: '15px' }}>
                                    <Row className="g-3 text-center">
                                        <Col xs={6} md={3}>
                                            <div className="d-flex flex-column align-items-center">
                                                <div className="rounded-circle border border-warning border-opacity-50 p-2 mb-2 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', color: '#c5a059' }}>
                                                    <FaTree size={18} />
                                                </div>
                                                <span className="fw-semibold text-white text-uppercase" style={{ fontSize: '0.62rem', letterSpacing: '0.5px' }}>Purposeful by Design</span>
                                            </div>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <div className="d-flex flex-column align-items-center">
                                                <div className="rounded-circle border border-warning border-opacity-50 p-2 mb-2 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', color: '#c5a059' }}>
                                                    <FaHeart size={18} />
                                                </div>
                                                <span className="fw-semibold text-white text-uppercase" style={{ fontSize: '0.62rem', letterSpacing: '0.5px' }}>Managed with Care</span>
                                            </div>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <div className="d-flex flex-column align-items-center">
                                                <div className="rounded-circle border border-warning border-opacity-50 p-2 mb-2 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', color: '#c5a059' }}>
                                                    <FaShieldAlt size={18} />
                                                </div>
                                                <span className="fw-semibold text-white text-uppercase" style={{ fontSize: '0.62rem', letterSpacing: '0.5px' }}>Rooted in Responsibility</span>
                                            </div>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <div className="d-flex flex-column align-items-center">
                                                <div className="rounded-circle border border-warning border-opacity-50 p-2 mb-2 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', color: '#c5a059' }}>
                                                    <FaAward size={18} />
                                                </div>
                                                <span className="fw-semibold text-white text-uppercase" style={{ fontSize: '0.62rem', letterSpacing: '0.5px' }}>Enduring Value</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* 3. Brand Philosophy Section */}
            <div className="py-5" style={{ backgroundColor: '#f2f6f3', color: '#333333' }}>
                <Container className="py-lg-5">
                    <div className="text-center mb-4 mb-md-5 section-header-wrap">
                        <div className="d-flex align-items-center justify-content-center section-subtitle-wrap gap-2 mb-2">
                            <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                            <h6 className="section-subheading mb-0">
                                Brand Philosophy
                            </h6>
                            <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        </div>
                        <h2 className="section-heading text-sanjeevani mb-2">
                            In Harmony with Nature. For Generations to Come.
                        </h2>
                        <div className="section-divider-bar mx-auto"></div>
                    </div>

                    <Row className="gy-4">
                        {/* Left Card: A Truly Organic Haven */}
                        <Col lg={6} className="d-flex align-items-stretch">
                            <Card className="border-0 shadow-sm rounded-4 w-100 bg-white overflow-hidden" style={{
                                border: '1px solid rgba(17, 73, 52, 0.08)',
                                borderLeft: '5px solid #114934',
                                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                boxShadow: '0 8px 30px rgba(17, 73, 52, 0.03)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 15px 35px rgba(17, 73, 52, 0.08)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.boxShadow = '0 8px 30px rgba(17, 73, 52, 0.03)';
                            }}
                            >
                                <Card.Body className="p-4 p-md-5 d-flex flex-column justify-content-between">
                                    <div>
                                        {/* Veda Quote Block */}
                                        <div className="p-3 mb-4 rounded-3 text-start" style={{
                                            backgroundColor: '#faf8f2',
                                            borderLeft: '3px solid #c5a059',
                                        }}>
                                            <h5 className="fst-italic mb-2 text-sanjeevani fw-bold" style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.05rem', color: '#114934', lineHeight: '1.4' }}>
                                                “माता भूमि: पुत्रोऽहं पृथिव्याः। तौं मा हिंसीः।”
                                            </h5>
                                            <p className="text-secondary small mb-2 lh-relaxed">
                                                The Earth is my mother, and I am her son. May I not harm her.
                                            </p>
                                            <span className="d-block text-uppercase fw-bold text-end" style={{ color: '#c5a059', fontSize: '0.72rem', letterSpacing: '1px' }}>
                                                — Atharva Veda 12.1.12
                                            </span>
                                        </div>

                                        <h3 className="h4 fw-bold text-sanjeevani mb-3 text-start" style={{ fontFamily: '"Playfair Display", "Georgia", serif', color: '#114934' }}>
                                            A Truly Organic Haven
                                        </h3>
                                        
                                        <p className="text-muted lh-lg mb-3 text-start" style={{ fontSize: '0.92rem' }}>
                                            At Little England Farms, we do not just talk about organic living — we embody it. Our commitment to the land begins long before you make it your home. We meticulously manage each farm plot using 100% organic practices, ensuring the soil is free from harmful chemicals and rich with natural vitality.
                                        </p>
                                        
                                        <p className="text-muted lh-lg mb-0 text-start" style={{ fontSize: '0.92rem' }}>
                                            Imagine harvesting your own organic produce, knowing it is grown in soil nurtured with care and respect for nature. This is the foundation of health and wellness Little England Farms offers you and your family.
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Right Card: Our Eco-Conscious Vision */}
                        <Col lg={6} className="d-flex align-items-stretch">
                            <Card className="border-0 shadow-sm rounded-4 w-100 bg-white overflow-hidden" style={{
                                border: '1px solid rgba(17, 73, 52, 0.08)',
                                borderLeft: '5px solid #c5a059',
                                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                boxShadow: '0 8px 30px rgba(17, 73, 52, 0.03)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 15px 35px rgba(17, 73, 52, 0.08)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.boxShadow = '0 8px 30px rgba(17, 73, 52, 0.03)';
                            }}
                            >
                                <Card.Body className="p-4 p-md-5 d-flex flex-column justify-content-between">
                                    <div>
                                        <h3 className="h4 fw-bold text-sanjeevani mb-3 text-start" style={{ fontFamily: '"Playfair Display", "Georgia", serif', color: '#114934' }}>
                                            Our Eco-Conscious Vision
                                        </h3>
                                        
                                        <p className="text-muted lh-lg mb-3 text-start" style={{ fontSize: '0.92rem' }}>
                                            Choosing Little England Farms means embracing a lifestyle in harmony with nature. We do not just sell land; we offer a gateway to sustainable living. Our team provides expert guidance on eco-dream homes with grey and black water management, rainwater harvesting, and groundwater recharging solutions.
                                        </p>
                                        
                                        <p className="text-muted lh-lg mb-4 text-start" style={{ fontSize: '0.92rem' }}>
                                            By making Little England Farms your home, you are not just buying land — you are investing in a future where your daily life contributes positively to the environment.
                                        </p>

                                        {/* Mahabharata Quote Block */}
                                        <div className="p-3 rounded-3 text-start" style={{
                                            backgroundColor: '#f5f7f5',
                                            borderLeft: '3px solid #114934',
                                        }}>
                                            <h5 className="fst-italic mb-2 text-sanjeevani fw-bold" style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.05rem', color: '#114934', lineHeight: '1.4' }}>
                                                “दशपुत्रसमो द्रुमः”
                                            </h5>
                                            <p className="text-secondary small mb-2 lh-relaxed">
                                                A tree is equivalent to ten sons.
                                            </p>
                                            <span className="d-block text-uppercase fw-bold text-end" style={{ color: '#c5a059', fontSize: '0.72rem', letterSpacing: '1px' }}>
                                                — Mahabharata, Anushasana Parva 115.38
                                            </span>
                                        </div>
                                        
                                        <p className="text-muted lh-lg mt-4 mb-0 text-start" style={{ fontSize: '0.92rem' }}>
                                            Embracing this ancient wisdom, we are committed to extensive reforestation. When you choose Little England Farms, you become part of a legacy that will benefit generations to come.
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* 4. What We Do Section */}
            <div className="py-5" style={{ backgroundColor: '#ffffff' }}>
                <Container className="py-lg-5">
                    <div className="text-center mb-4 mb-md-5 section-header-wrap">
                        <div className="d-flex align-items-center justify-content-center section-subtitle-wrap gap-2 mb-2">
                            <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                            <h6 className="section-subheading mb-0">
                                What We Do
                            </h6>
                            <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        </div>
                        <h2 className="section-heading text-sanjeevani mb-2">
                            Responsible Land. Thoughtfully Managed.
                        </h2>
                        <div className="section-divider-bar mx-auto"></div>
                    </div>

                    <Row className="g-4">
                        {[
                            {
                                icon: <FaSeedling size={22} />,
                                title: "Responsible Land Stewardship",
                                desc: "We preserve the natural character of every location through soil-conscious cultivation, water-sensitive planning and mindful land use."
                            },
                            {
                                icon: <FaTree size={22} />,
                                title: "Thoughtful Master Planning",
                                desc: "Each community is shaped around terrain, climate, accessibility and long-term liveability—allowing the development to complement the landscape."
                            },
                            {
                                icon: <FaTractor size={22} />,
                                title: "Professionally Managed Ownership",
                                desc: "From cultivation and maintenance to essential on-ground operations, our experienced team manages the details so ownership remains effortless."
                            },
                            {
                                icon: <FaGlobe size={22} />,
                                title: "Balanced Ecosystems",
                                desc: "We create environments where agriculture, biodiversity, people and shared experiences can coexist in lasting harmony."
                            },
                            {
                                icon: <FaAward size={22} />,
                                title: "Enduring Value",
                                desc: "Our communities are planned not only around the needs of today, but around the long-term relevance, usability and value of the land."
                            },
                            {
                                icon: <FaHeart size={22} />,
                                title: "Community and Belonging",
                                desc: "Thoughtfully designed common spaces and curated experiences bring together people who share an appreciation for nature, wellness and intentional living."
                            }
                        ].map((card, i) => (
                            <Col lg={4} md={6} key={i}>
                                <Card className="h-100 border-0 shadow-sm p-4 text-center rounded-3 bg-white" style={{
                                    border: '1.5px solid rgba(197, 160, 89, 0.15)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'default'
                                }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-6px)';
                                        e.currentTarget.style.borderColor = '#c5a059';
                                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(197,160,89,0.1)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.15)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <Card.Body className="p-0 d-flex flex-column align-items-center">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center mb-4 text-sanjeevani" style={{
                                            width: '52px',
                                            height: '52px',
                                            backgroundColor: 'rgba(17, 73, 52, 0.05)',
                                            border: '1.5px solid rgba(17, 73, 52, 0.15)',
                                            color: '#114934'
                                        }}>
                                            {card.icon}
                                        </div>
                                        <h3 className="h6 fw-bold text-sanjeevani mb-3 text-uppercase letter-spacing-1">{card.title}</h3>
                                        <p className="text-secondary small mb-0 lh-lg" style={{ fontSize: '0.82rem' }}>{card.desc}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* 5. The Little England Difference Section */}
            <div className="py-5" style={{ backgroundColor: '#fcfbf7' }}>
                <Container className="py-lg-5">
                    <Row className="gy-5 align-items-center">
                        <Col lg={5}>
                            <div className="position-relative">
                                <div className="rounded-4 overflow-hidden shadow-lg" style={{ height: '400px', position: 'relative' }}>
                                    <Image
                                        src="/about-us/2.webp"
                                        alt="Gazebo in Little England"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>

                                <div className="position-absolute start-0 bottom-0 mb-4 ms-n3 bg-sanjeevani text-white p-3 rounded-4 shadow d-flex align-items-center gap-3 border border-warning border-opacity-25" style={{ maxWidth: '280px', marginLeft: '-20px' }}>
                                    <div className="rounded-circle d-flex align-items-center justify-content-center text-white" style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        minWidth: '40px'
                                    }}>
                                        <FaLeaf size={16} style={{ color: '#c5a059' }} />
                                    </div>
                                    <div className="lh-sm">
                                        <span className="fw-bold d-block text-white" style={{ fontSize: '0.8rem' }}>More than a piece of land.</span>
                                        <span className="small text-white-50" style={{ fontSize: '0.75rem' }}>It's a way of life.</span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7} className="ps-lg-5 text-center text-lg-start section-header-wrap">
                            <div className="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start mb-2">
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start section-subtitle-wrap gap-2 mb-2">
                                    <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                                    <h6 className="section-subheading mb-0">
                                        The Little England Difference
                                    </h6>
                                    <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                                </div>
                                <h2 className="section-heading text-sanjeevani mb-2">
                                    More Than a Piece of Land
                                </h2>
                                <div className="section-divider-bar ms-lg-0 mx-auto"></div>
                            </div>
                            <p className="text-secondary lh-lg mb-3" style={{ fontSize: '1rem' }}>
                                For some, it is a peaceful weekend escape. For others, it is a future home, a family legacy or a long-term investment.
                            </p>
                            <p className="text-sanjeevani fw-bold lh-lg mb-3" style={{ fontSize: '1.1rem' }}>
                                At Little England, it can be all of these.
                            </p>
                            <p className="text-secondary lh-lg mb-0" style={{ fontSize: '1rem' }}>
                                Our communities are located within reach of Bengaluru, yet comfortably removed from its constant pace. Surrounded by greenery, cooler climates and open landscapes, they offer space to slow down, reconnect and experience a more grounded way of living. Every Little England community is envisioned as a place that owners can enjoy today, nurture over time and proudly pass on tomorrow.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* 6. Why Little England Section */}
            <div className="py-5" style={{ backgroundColor: '#ffffff' }}>
                <Container className="py-lg-5">
                    <div className="text-center mb-4 mb-md-5 section-header-wrap">
                        <div className="d-flex align-items-center justify-content-center section-subtitle-wrap gap-2 mb-2">
                            <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                            <h6 className="section-subheading mb-0">
                                Why Little England
                            </h6>
                            <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        </div>
                        <h2 className="section-heading text-sanjeevani mb-2">
                            Own with Confidence. Live with Purpose.
                        </h2>
                        <div className="section-divider-bar mx-auto"></div>
                    </div>

                    <Row className="g-4 text-center justify-content-center">
                        {[
                            {
                                icon: <FaMountain size={24} />,
                                title: "Naturally Distinctive Locations",
                                desc: "We carefully select destinations known for their climate, greenery, scenic character and accessibility from the city."
                            },
                            {
                                icon: <FaHome size={24} />,
                                title: "Seamless Ownership",
                                desc: "Professional management allows owners to enjoy their farmland without being burdened by everyday cultivation and maintenance responsibilities."
                            },
                            {
                                icon: <FaSeedling size={24} />,
                                title: "Responsible Cultivation",
                                desc: "Our approach priorities soil health, resource efficiency, water conservation and environmentally conscious farming practices."
                            },
                            {
                                icon: <FaHeart size={24} />,
                                title: "Lifestyle-Led Communities",
                                desc: "Beyond farmland ownership, our communities are designed around recreation, wellness, hospitality and meaningful time spent in nature."
                            },
                            {
                                icon: <FaHourglassHalf size={24} />,
                                title: "Long-Term Perspective",
                                desc: "Every decision is guided by what will sustain the land, enrich the ownership experience and preserve its relevance for years to come."
                            }
                        ].map((col, i) => (
                            <Col lg={2} md={4} sm={6} className="mx-auto" key={i} style={{ minWidth: '220px' }}>
                                <div className="mb-3 text-sanjeevani d-flex justify-content-center">
                                    <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(17,73,52,0.05)', color: '#c5a059', width: '56px', height: '56px' }}>
                                        {col.icon}
                                    </div>
                                </div>
                                <h3 className="h6 fw-bold text-sanjeevani mb-2 text-uppercase letter-spacing-1" style={{ fontSize: '0.8rem', minHeight: '38px' }}>{col.title}</h3>
                                <div className="mb-2 mx-auto" style={{ width: '30px', height: '1.5px', backgroundColor: '#c5a059' }}></div>
                                <p className="text-muted small mb-0 lh-lg" style={{ fontSize: '0.76rem' }}>{col.desc}</p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* 7. Sustainability Section */}
            <div className="position-relative d-flex align-items-center py-5 text-white" style={{
                backgroundImage: 'url("/Home_page.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'scroll',
                minHeight: '480px'
            }}>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(11, 43, 31, 0.88)' }}></div>

                <Container className="position-relative z-1 py-lg-4 text-center section-header-wrap">
                    <div className="d-flex align-items-center justify-content-center section-subtitle-wrap gap-2 mb-2">
                        <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        <h6 className="section-subheading mb-0" style={{ color: '#c5a059' }}>
                            Sustainability
                        </h6>
                        <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                    </div>
                    <h2 className="section-heading text-white mb-2">
                        Stewardship That Begins with the Land
                    </h2>
                    <div className="section-divider-bar divider-gold mx-auto"></div>

                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <p className="text-white-50 lh-lg mb-3" style={{ fontSize: '0.98rem' }}>
                                We understand that every action taken on the land leaves a lasting impact. That is why Little England follows a considered approach to cultivation, water usage, infrastructure and ecosystem management. Wherever possible, natural features are preserved, resources are used responsibly and agricultural practices are planned around the long-term well-being of the land.
                            </p>
                            <p className="text-white-50 lh-lg mb-4" style={{ fontSize: '0.98rem' }}>
                                Our objective is not simply to create beautiful farmland communities. It is to create environments that remain productive, resilient and meaningful across generations.
                            </p>
                            <div className="d-flex justify-content-center align-items-center gap-2 fs-5 fst-italic mt-4 text-center flex-wrap" style={{ color: '#c5a059' }}>
                                <FaQuoteLeft size={16} className="me-2" />
                                <span>Because the finest form of ownership is one that gives something back.</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* 8. Our Vision Section */}
            <div className="py-5" style={{ backgroundColor: '#ffffff' }}>
                <Container className="py-lg-5">
                    <Row className="gy-5 align-items-center">
                        <Col lg={6} className="pe-lg-5 text-center text-lg-start section-header-wrap">
                            <div className="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start mb-2">
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start section-subtitle-wrap gap-2 mb-2">
                                    <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                                    <h6 className="section-subheading mb-0">
                                        Our Vision
                                    </h6>
                                    <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                                </div>
                                <h2 className="section-heading text-sanjeevani mb-2">
                                    Creating Legacies, Naturally
                                </h2>
                                <div className="section-divider-bar ms-lg-0 mx-auto"></div>
                            </div>
                            <p className="text-secondary lh-lg mb-3" style={{ fontSize: '1rem' }}>
                                Our vision is to redefine how people experience, own and preserve land. Through landmark managed farmland communities, Little England aspires to create a more thoughtful standard of ownership — one that brings together nature, hospitality, agriculture, wellness and long-term value.
                            </p>
                            <p className="text-secondary lh-lg mb-0" style={{ fontSize: '1rem' }}>
                                We are building places where people can retreat from the ordinary, reconnect with what matters and create a legacy that grows more meaningful with time.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <div className="rounded-4 overflow-hidden shadow-lg" style={{ height: '380px', position: 'relative' }}>
                                <Image
                                    src="/about-us/3.webp"
                                    alt="Little England lakeside"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* 9. Bottom CTA Strip */}
            <div className="py-4 text-center text-white" style={{ backgroundColor: '#09251b' }}>
                <Container>
                    <h3 className="h4 fw-bold mb-2 text-white" style={{ fontFamily: '"Playfair Display", "Georgia", serif', letterSpacing: '0.5px' }}>
                        Own Something That Grows Beyond Value.
                    </h3>
                    <p className="text-white-50 mb-0 small text-uppercase tracking-wider" style={{ letterSpacing: '1.5px', fontSize: '0.72rem' }}>
                        Discover a place to pause, grow and belong.
                    </p>
                </Container>
            </div>
        </>
    );
}
