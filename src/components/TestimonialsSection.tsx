'use client';
import { Container, Carousel, Card, Row, Col } from 'react-bootstrap';
import { FaQuoteLeft } from 'react-icons/fa';
import { useState } from 'react';

const testimonials = [
    {
        name: "Shiva",
        text: "I was in search of a suitable farmland property for my business expansion. Little England provided me with the perfect property, and their assistance made the entire process seamless. I am content with their efficient services."
    },
    {
        name: "Pavan",
        text: "I purchased agricultural land connected with Little England and was thoroughly impressed with their service. Their team assisted me at every step, making the transaction process extremely smooth. I commend Little England for their professionalism and dedication."
    },
    {
        name: "Krishina",
        text: "Little England helped me realize my dream of owning a countryside home. Their diverse range of farmland properties caught my attention, and their staff was always available to address my queries. I was impressed by their transparency and honesty."
    },
    {
        name: "Ashok",
        text: "I'm highly satisfied with Little England' services. I purchased a farm property through them, and their team guided me throughout the process. Their extensive knowledge about farmland properties is commendable, and I would recommend their services."
    },
    {
        name: "Rajesh",
        text: "The team at Little England showcases professionalism and dedication in their work. I purchased a farmhouse from them, and their personalized approach stood out to me. Their team assists in making the transaction process hassle-free. I highly recommend considering Little England for your purchase."
    }
];

export default function TestimonialsSection() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
            <Container className="py-lg-5">
                <div className="text-center mb-5">
                    <h6 className="section-subheading text-uppercase fw-bold text-muted mb-2" style={{ letterSpacing: '2px' }}>
                        What Our Clients Say
                    </h6>
                    <h2 className="section-heading fw-bold display-6 mb-3 text-dark">
                        Client Testimonials
                    </h2>
                    <div className="d-inline-block bg-sanjeevani rounded-pill" style={{ width: '80px', height: '4px' }}></div>
                </div>

                <Row className="justify-content-center">
                    <Col lg={9} xl={8}>
                        <Card className="border-0 shadow-lg rounded-4 overflow-hidden position-relative bg-white">
                            {/* Premium Background Watermark Quote */}
                            <FaQuoteLeft
                                className="position-absolute text-sanjeevani"
                                style={{ top: '-10px', left: '10px', fontSize: '150px', zIndex: 0, opacity: 0.05 }}
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
                                            {/* User Avatar */}
                                            <div className="mb-4 d-flex justify-content-center">
                                                <div
                                                    className="d-flex align-items-center justify-content-center rounded-circle bg-sanjeevani text-white fs-3 fw-bold shadow-sm"
                                                    style={{ width: '70px', height: '70px' }}
                                                >
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                            </div>

                                            <p className="fs-5 fst-italic mb-4 lh-lg text-secondary">
                                                "{testimonial.text}"
                                            </p>

                                            <h5 className="fw-bold mb-0 text-dark">{testimonial.name}</h5>
                                            <p className="text-muted small mt-1 mb-4">Verified Client</p>
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
                    background-color: var(--bs-sanjeevani, #198754); /* Fallback to success green if bg-sanjeevani isn't a CSS variable */
                }
            `}</style>
        </section>
    );
}