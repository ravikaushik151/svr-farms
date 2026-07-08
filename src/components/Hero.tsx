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
                            <h6 className="text-uppercase letter-spacing-2 mb-3 small fw-semibold text-white-100">
                                Discover Little England
                            </h6>
                            <h1 className="display-3 fw-bold mb-4">
                                Own a Piece of Nature.
                                <br />
                                Watch It Grow With You.
                            </h1>
                            <div className="mt-5">
                                <Link href="/contact" className="btn btn-outline-light px-5 py-3">
                                    Find Your Dream Farm Plot
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}