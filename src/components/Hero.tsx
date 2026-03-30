'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="position-relative vh-100 d-flex align-items-center text-white text-center" style={{
            backgroundImage: 'url("/Home_page.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
            <Container className="position-relative z-1">
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <h6 className="text-uppercase letter-spacing-2 mb-3 small fw-semibold text-white-50">Discover Little England</h6>
                        <h1 className="display-3 fw-bold mb-4">
                            Own a Piece of Nature.
                            <br />Watch It Grow With You.
                        </h1>
                        <div className="mt-5">
                            <Link href="/contact" passHref legacyBehavior>
                                <Button variant="outline-light" size="lg" className="btn-outline-white px-5 py-3">Find Your Dream Farm Plot</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
