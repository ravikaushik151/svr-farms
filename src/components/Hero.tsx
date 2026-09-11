'use client';
import { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Link from 'next/link';

export default function Hero() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <div
            className="position-relative w-100 overflow-hidden"
            style={{ minHeight: '100svh' }}
        >
            {/* Background Carousel */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}>
                <Carousel 
                    activeIndex={index}
                    onSelect={handleSelect}
                    fade 
                    controls={true} 
                    indicators={true} 
                    interval={4500} 
                    pause="hover" 
                    className="w-100 h-100 hero-carousel"
                >
                    <Carousel.Item className="w-100 h-100">
                        {/* Desktop Slide 1 */}
                        <div
                            className="d-none d-md-block w-100 h-100"
                            style={{
                                minHeight: '100svh',
                                backgroundImage: 'url("/banner-1.webp")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
                        </div>
                        {/* Mobile Slide 1 */}
                        <div
                            className="d-block d-md-none w-100 h-100"
                            style={{
                                minHeight: '100svh',
                                backgroundImage: 'url("/Homepage_banner Img1_Mob.webp")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className="w-100 h-100">
                        {/* Desktop Slide 2 */}
                        <div
                            className="d-none d-md-block w-100 h-100"
                            style={{
                                minHeight: '100svh',
                                backgroundImage: 'url("/Home page_updated_Banner.webp")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
                        </div>
                        {/* Mobile Slide 2 */}
                        <div
                            className="d-block d-md-none w-100 h-100"
                            style={{
                                minHeight: '100svh',
                                backgroundImage: 'url("/Homepage_banner Img2_Mob.webp")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* Static Content Overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                    zIndex: 2,
                    pointerEvents: 'none',
                    paddingTop: '5rem',
                    paddingBottom: '3rem',
                }}
            >
                <Container
                    className="position-relative text-center text-white px-3"
                    style={{ pointerEvents: 'none', maxWidth: '960px' }}
                >
                    <Row className="justify-content-center" style={{ pointerEvents: 'none' }}>
                        <Col lg={10} style={{ pointerEvents: 'none' }}>
                            <div className="mb-3" style={{ pointerEvents: 'auto' }}>
                                <Link
                                    href="/tamara"
                                    className="d-inline-flex flex-wrap align-items-center justify-content-center gap-1 gap-md-2 text-decoration-none px-3 py-2 rounded-pill shadow-sm border border-warning"
                                    style={{
                                        backgroundColor: 'rgba(17, 73, 52, 0.88)',
                                        color: '#c5a059',
                                        fontSize: 'clamp(0.72rem, 2.2vw, 0.88rem)',
                                        letterSpacing: '0.8px',
                                        backdropFilter: 'blur(5px)',
                                        maxWidth: '100%'
                                    }}
                                >
                                    <span>⭐ FLAGSHIP PROJECT:</span>
                                    <strong className="text-white">TAMARA VALLEY (300+ ACRES)</strong>
                                    <span>&rarr;</span>
                                </Link>
                            </div>
                            <h1
                                className="display-3 fw-bold mb-3 lh-sm text-white"
                                style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: 'clamp(1.85rem, 5.5vw, 3.75rem)'
                                }}
                            >
                                Managed Organic Farmland Near Bengaluru
                            </h1>
                            <p className="lead fs-5 fs-md-4 mb-4 mb-md-5 text-white-90" style={{ letterSpacing: '0.5px' }}>
                                In the belt British called Little England
                            </p>
                            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2 gap-md-3" style={{ pointerEvents: 'auto' }}>
                                <Link
                                    href="/tamara"
                                    className="btn px-4 py-2.5 py-md-3 fw-bold shadow-sm w-100 w-sm-auto text-nowrap"
                                    style={{ backgroundColor: '#c5a059', color: '#114934', border: 'none' }}
                                >
                                    Explore Tamara Valley ⭐
                                </Link>
                                <Link href="/contact" className="btn btn-primary px-4 py-2.5 py-md-3 w-100 w-sm-auto text-nowrap">
                                    Book a Site Visit
                                </Link>
                                <a href="#projects" className="btn btn-outline-light px-4 py-2.5 py-md-3 w-100 w-sm-auto text-nowrap">
                                    See All Projects
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <style jsx global>{`
                .hero-carousel .carousel-control-prev,
                .hero-carousel .carousel-control-next {
                    z-index: 10 !important;
                    pointer-events: auto !important;
                    width: 60px;
                    opacity: 0.75;
                    transition: opacity 0.2s ease, transform 0.2s ease;
                }
                .hero-carousel .carousel-control-prev:hover,
                .hero-carousel .carousel-control-next:hover {
                    opacity: 1;
                }
                .hero-carousel .carousel-control-prev-icon,
                .hero-carousel .carousel-control-next-icon {
                    width: 2.2rem;
                    height: 2.2rem;
                    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
                }
                .hero-carousel .carousel-indicators {
                    z-index: 10 !important;
                    pointer-events: auto !important;
                    bottom: 24px;
                }
                .hero-carousel .carousel-indicators [data-bs-target] {
                    width: 32px;
                    height: 4px;
                    border-radius: 2px;
                    background-color: #ffffff;
                    opacity: 0.6;
                    transition: all 0.3s ease;
                }
                .hero-carousel .carousel-indicators .active {
                    opacity: 1;
                    background-color: #c5a059;
                    width: 44px;
                }
                @media (max-width: 767.98px) {
                    .hero-carousel .carousel-control-prev,
                    .hero-carousel .carousel-control-next {
                        width: 46px;
                    }
                    .hero-carousel .carousel-control-prev-icon,
                    .hero-carousel .carousel-control-next-icon {
                        width: 1.8rem;
                        height: 1.8rem;
                    }
                }
            `}</style>
        </div>
    );
}