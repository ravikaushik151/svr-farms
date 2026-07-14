'use client';

import { Container, Carousel, Card, Row, Col } from 'react-bootstrap';
import { FaQuoteLeft, FaLeaf } from 'react-icons/fa';
import { useState } from 'react';

const testimonials = [
    {
        name: "Landowner",
        role: "Little England Farms",
        text: "Every plot I looked at before this had some story — encroachment, missing documents, a cousin who also had a claim. This one didn't. That's the whole reason I bought."
    },
    {
        name: "Landowner",
        role: "Vaikuntam",
        text: "I wanted land, not a project to manage. Their team handles the irrigation and the crop calendar; I just get a call when it's time to see how things are growing."
    },
    {
        name: "Landowner",
        role: "Tamara Valley",
        text: "Took me a while to trust the pitch — everyone promises a 'transparent process.' What actually convinced me was showing up unannounced and finding people on-site working."
    }
];

export default function TestimonialsSection() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <section 
            className="py-5 position-relative" 
            style={{ 
                backgroundColor: '#fcfbf7', // Premium warm cream background
                overflow: 'hidden'
            }}
        >
            {/* Top Leaf Accent Decorator */}
            <div 
                className="position-absolute d-none d-lg-block" 
                style={{ top: '30px', right: '30px', opacity: 0.1, pointerEvents: 'none' }}
            >
                <FaLeaf size={90} style={{ color: '#114934' }} />
            </div>

            <Container className="py-lg-5">
                {/* Header */}
                <div className="text-center mb-5">
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        <h6 
                            className="text-uppercase letter-spacing-2 mb-0 small fw-bold"
                            style={{ color: '#c5a059', fontSize: '0.8rem' }}
                        >
                            Testimonials
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
                        What Landowners Say
                    </h2>
                    
                    <div className="d-flex justify-content-center">
                        <FaLeaf size={16} style={{ color: '#c5a059', opacity: 0.8 }} />
                    </div>
                </div>

                <Row className="justify-content-center">
                    <Col lg={9} xl={8}>
                        <Card 
                            className="border-0 shadow-sm rounded-4 overflow-hidden position-relative bg-white"
                            style={{
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)'
                            }}
                        >
                            {/* Premium Background Watermark Quote */}
                            <FaQuoteLeft
                                className="position-absolute"
                                style={{ 
                                    top: '10px', 
                                    left: '20px', 
                                    fontSize: '150px', 
                                    zIndex: 0, 
                                    opacity: 0.03,
                                    color: '#114934'
                                }}
                            />

                            <Card.Body className="p-4 p-md-5 position-relative" style={{ zIndex: 1 }}>
                                <Carousel
                                    activeIndex={index}
                                    onSelect={handleSelect}
                                    variant="dark"
                                    indicators={true}
                                    controls={false}
                                    className="testimonial-carousel pb-4"
                                >
                                    {testimonials.map((testimonial, idx) => (
                                        <Carousel.Item key={idx} className="text-center px-md-4">
                                            {/* Leaf Icon Avatar Ring */}
                                            <div className="mb-4 d-flex justify-content-center">
                                                <div
                                                    className="d-flex align-items-center justify-content-center rounded-circle text-white shadow-sm"
                                                    style={{ 
                                                        width: '72px', 
                                                        height: '72px',
                                                        backgroundColor: '#114934',
                                                        border: '2.5px solid #c5a059',
                                                        boxShadow: '0 4px 10px rgba(17, 73, 52, 0.2)'
                                                    }}
                                                >
                                                    <FaLeaf size={24} style={{ color: '#c5a059' }} />
                                                </div>
                                            </div>

                                            <p 
                                                className="fs-5 fst-italic mb-4 lh-lg text-secondary"
                                                style={{
                                                    fontFamily: '"Playfair Display", "Georgia", serif',
                                                    color: '#2d3748'
                                                }}
                                            >
                                                "{testimonial.text}"
                                            </p>

                                            <h5 
                                                className="fw-bold mb-0"
                                                style={{ color: '#114934', letterSpacing: '0.5px' }}
                                            >
                                                {testimonial.name}
                                            </h5>
                                            
                                            <p className="text-muted small mt-1 mb-4 fw-semibold text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.75rem' }}>
                                                {testimonial.role}
                                            </p>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Custom Styles for Premium Carousel Indicators */}
            <style jsx global>{`
                .testimonial-carousel .carousel-indicators {
                    margin-bottom: 0;
                    bottom: 0px;
                }
                .testimonial-carousel .carousel-indicators [data-bs-target] {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: #adb5bd;
                    transition: all 0.3s ease;
                    border: none;
                    margin: 0 4px;
                }
                .testimonial-carousel .carousel-indicators .active {
                    width: 24px;
                    border-radius: 10px;
                    background-color: #114934;
                }
            `}</style>
        </section>
    );
}