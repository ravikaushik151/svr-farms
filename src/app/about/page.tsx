'use client';

import SectionTitle from '@/components/SectionTitle';
import AboutSection from '@/components/AboutSection';
import PageBanner from '@/components/PageBanner';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <PageBanner title="We Are Little England" backgroundImage="/banner/About us_Banner.webp" />
            <Container className="py-5 mt-4">
                <Row className="gy-5 align-items-start">
                    <Col lg={5}>
                        <h2 className="mb-4 text-md-start text-center" style={{ color: '#4a5568', fontWeight: '600', letterSpacing: '1px' }}>
                            DEVELOPING <br />
                            <span style={{ color: '#c5a059' }}>GREENER</span> LIVES
                        </h2>

                        <div className="position-relative rounded-4 overflow-hidden shadow-lg mt-4" style={{ height: '350px' }}>
                            <div style={{
                                backgroundImage: 'url("/Home_page.webp")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '100%',
                                height: '100%'
                            }}></div>
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: '70px', height: '70px', cursor: 'pointer', border: '2px solid rgba(255,255,255,0.5)', backgroundClip: 'padding-box' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#333" className="bi bi-play-fill ms-1" viewBox="0 0 16 16">
                                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={7} className="ps-lg-5">
                        <div className="mt-2">
                            <p className="text-dark opacity-75 mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                                Little England embodies our dedication to creating a unique and profound bond among our clients and the natural environment by bridging the gap between urban life and rural peace.
                            </p>
                            <p className="text-dark opacity-75 mb-5" style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                                Little England is founded with a vision that nature holds invaluable significance and demands our immediate protection. We envisioned a meaningful solution that allows urban professionals to rediscover their bond with nature without stepping away from their city aspirations.
                            </p>

                            <h3 className="mb-4" style={{ color: '#4a5568', fontWeight: '300', letterSpacing: '1px' }}>
                                NATURE,<span style={{ color: '#c5a059' }}>NURTURE</span>,ADVENTURE.
                            </h3>

                            <p className="text-dark opacity-75 mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                                Guided by our foundational belief in Nature. Nurture. Adventure., each farm we develop reflects our unwavering dedication to sustainable living. We shape remarkable rural landscapes that cultivate inspiration, wellness, and the freedom to embrace life authentically. Our vision connects dynamic urban life with serene countryside retreats, creating a lifestyle where modern amenities coexist beautifully with natural tranquillity.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Section 2 */}
            <div className="py-5 bg-light">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-5 mb-lg-0 pe-lg-5">
                            <h6 className="section-subheading text-uppercase fw-semibold mb-3 text-md-start text-center" style={{ color: '#28a745', letterSpacing: '2px' }}>Discover Little England</h6>
                            <h2 className="section-heading fw-bold mb-4 display-6 text-md-start text-center">A Thoughtfully Built Ecosystem</h2>
                            <div className="mb-4 bg-success mx-auto mx-md-0" style={{ width: '80px', height: '3px' }}></div>

                            <p className="lead text-secondary mb-4 lh-lg fs-5">
                                With over 15 years of experience in farmland development and a strong foundation built on trust, Little England brings together sustainable practices, careful land selection, and a commitment to quality.
                            </p>
                            <p className="text-secondary mb-4 lh-lg">
                                Every parcel is chosen based on soil fertility, water availability, and long-term potential, ensuring that what you own today continues to grow in value over time. The approach combines organic farming principles with structured planning to create a balanced and enduring ecosystem.
                            </p>

                            <ul className="list-unstyled mb-5">
                                <li className="d-flex align-items-start mb-3">
                                    <FaCheckCircle className="text-success mt-1 me-3 flex-shrink-0" size={20} />
                                    <span className="text-secondary">Experience a setting that blends nature, comfort, and long-term value</span>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <FaCheckCircle className="text-success mt-1 me-3 flex-shrink-0" size={20} />
                                    <span className="text-secondary">Enjoy the peace of owning land that is carefully planned and responsibly developed</span>
                                </li>
                                <li className="d-flex align-items-start">
                                    <FaCheckCircle className="text-success mt-1 me-3 flex-shrink-0" size={20} />
                                    <span className="text-secondary">Be part of a community built around sustainability and mindful living</span>
                                </li>
                            </ul>

                          
                            <Link
                                href="/contact"
                                className="btn btn-outline-success btn-lg px-5 border-2 rounded-pill d-none fw-semibold"
                            >
                                READ MORE
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <div className="position-relative  rounded-4 shadow-sm" style={{ height: '694px', backgroundColor: '#e9ecef', border: '1px dashed #ced4da' }}>
                                {/* Image Placeholder */}
                                <div className="d-flex flex-column w-100 h-100 align-items-center justify-content-center text-muted">
                                    <Image src="/Tamara valley1.webp" className='img-fluid about-img rounded-4' width={660} height={694}  />
                                
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
