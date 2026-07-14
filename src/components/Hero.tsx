'use client';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Link from 'next/link';

export default function Hero() {
    return (
        <div
            className="position-relative w-100 overflow-hidden"
            style={{ minHeight: '100svh' }}
        >
            {/* Background Carousel */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
                <Carousel fade controls={true} indicators={true} interval={4000} pause={false} className="w-100 h-100">
                    <Carousel.Item className="w-100 h-100">
                        <div
                            className="w-100 h-100"
                            style={{
                                minHeight: '100svh',
                                backgroundImage: 'url("/Home_page.webp")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className="w-100 h-100">
                        <div
                            className="w-100 h-100"
                            style={{
                                minHeight: '100svh',
                                backgroundImage: 'url("/Home_opt2.webp")',
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
                    zIndex: 1,
                    pointerEvents: 'none',
                    paddingTop: '5rem',
                    paddingBottom: '3rem',
                }}
            >
                <Container
                    className="position-relative text-center text-white px-3"
                    style={{ pointerEvents: 'auto', maxWidth: '960px' }}
                >
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <h1 className="display-3 fw-bold mb-3 lh-sm">
                                Managed Organic Farmland Near Bengaluru
                            </h1>
                            <p className="lead fs-4 mb-5 text-white-90" style={{ letterSpacing: '0.5px' }}>
                                In the belt the British called Little England
                            </p>
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <Link href="/contact" className="btn btn-primary px-5 py-3">
                                    Book a Site Visit
                                </Link>
                                <a href="#projects" className="btn btn-outline-light px-5 py-3">
                                    See the Farmlands
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}