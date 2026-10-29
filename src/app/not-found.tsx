import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - Page Not Found | SVR Farms',
    description: 'The page you are looking for does not exist. Explore managed farmlands near Bangalore with SVR Farms.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <section
            className="d-flex align-items-center justify-content-center text-center py-5"
            style={{
                minHeight: '70vh',
                backgroundColor: '#fcfbf7',
            }}
        >
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <div
                            className="display-1 fw-bold mb-2"
                            style={{
                                color: '#114934',
                                fontFamily: 'var(--font-serif)',
                                fontSize: 'clamp(4rem, 10vw, 7rem)',
                            }}
                        >
                            404
                        </div>

                        <div
                            className="section-divider-bar mx-auto mb-3"
                            style={{ width: '60px', height: '3px', backgroundColor: '#c5a059' }}
                        ></div>

                        <h2 className="h3 fw-bold mb-3" style={{ color: '#114934' }}>
                            Oops! Page Not Found
                        </h2>

                        <p className="text-muted mb-4 fs-6" style={{ maxWidth: '480px', margin: '0 auto' }}>
                            The page you were looking for might have been moved, renamed, or is temporarily unavailable. Let us help you find the right path back to your dream farmland.
                        </p>

                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            <Link
                                href="/"
                                className="btn px-4 py-2 fw-semibold text-white"
                                style={{ backgroundColor: '#114934', borderColor: '#114934' }}
                            >
                                Back to Home
                            </Link>

                            <Link
                                href="/tamara"
                                className="btn px-4 py-2 fw-semibold"
                                style={{
                                    backgroundColor: '#c5a059',
                                    color: '#114934',
                                    border: 'none',
                                }}
                            >
                                Explore Tamara Valley ⭐
                            </Link>

                            <Link
                                href="/projects"
                                className="btn btn-outline-secondary px-4 py-2 fw-semibold"
                            >
                                View All Projects
                            </Link>

                            <Link
                                href="/contact"
                                className="btn btn-outline-dark px-4 py-2 fw-semibold"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

