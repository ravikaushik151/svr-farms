'use client';

import { Container, Carousel, Card, Row, Col } from 'react-bootstrap';
import { FaQuoteLeft } from 'react-icons/fa';
import { useState } from 'react';

const testimonials = [
    {
        name: "Sowbhagyam Tangam nagabhushanam",
        role: "Tamara Valley",
        text: "Tamara valley managed farm lands........My visit to these farms was an amazing feel.....I never visited farm land till now seen only in videos posts. But actually the farm plots are well disciplined condition in the layout and beautifully earmarked by constructing compound wall to each plot making more secure to the owners...The bit of park n common area was ideally designed to kitchen, dining etc...swimming pool yet to come. Great feel, away from city sounds, gives you divine peace n heavenly experience. I recommend to buy these farms for future plans would be great."
    },
    {
        name: "Kavya Nair",
        role: "Little England Farms",
        text: "Owning farmland always felt complicated until I came across Little England. Their team simplified everything - from explaining the investment potential to managing the land after purchase. It feels reassuring to know that my property is being taken care of even when I’m not there. It’s been a smooth and fulfilling experience."
    },
    {
        name: "Sriram Iyer",
        role: "Little England Farms",
        text: "I was looking for a long-term investment that also had lifestyle value, and Little England offered exactly that. The way they’ve structured their projects, especially with management and legal clarity, gives a lot of confidence. It doesn’t feel like just a purchase - it feels like a well-thought-out decision."
    },
    {
        name: "Meghana Rao",
        role: "Little England Farms",
        text: "What impressed me the most was how well everything was planned and executed. The team was always available to answer questions and guide me through the process. The environment, the layout, and the overall experience reflect a lot of thought and effort. It’s great to find this level of professionalism in farmland projects."
    },
    {
        name: "Karthik Subramanian",
        role: "Little England Farms",
        text: "I’ve explored multiple farmland options before, but Little England stood out because of their approach and transparency. The entire journey - from selection to ownership - was seamless. Their understanding of the market and attention to detail made me feel confident about my investment."
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
            <Container className="py-lg-5">
                {/* Header */}
                <div className="text-center mb-4 mb-md-5 section-header-wrap">
                    <div className="d-flex justify-content-center align-items-center section-subtitle-wrap gap-2 mb-2">
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        <h6 className="section-subheading mb-0">
                            Testimonials
                        </h6>
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                    </div>

                    <h2 className="section-heading mb-2 text-sanjeevani">
                        What Landowners Say
                    </h2>

                    <div className="section-divider-bar mx-auto"></div>
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
                                className="position-absolute d-none d-md-block"
                                style={{
                                    top: '10px',
                                    left: '20px',
                                    fontSize: '150px',
                                    zIndex: 0,
                                    opacity: 0.03,
                                    color: '#114934'
                                }}
                            />

                            <Card.Body className="p-3 p-sm-4 p-md-5 position-relative" style={{ zIndex: 1 }}>
                                <Carousel
                                    activeIndex={index}
                                    onSelect={handleSelect}
                                    variant="dark"
                                    indicators={true}
                                    controls={false}
                                    className="testimonial-carousel pb-3 pb-md-4"
                                >
                                    {testimonials.map((testimonial, idx) => (
                                        <Carousel.Item key={idx} className="text-center px-2 px-md-4">

                                            <p
                                                className="fst-italic mb-3 mb-md-4 lh-lg text-secondary"
                                                style={{
                                                    fontFamily: 'var(--font-serif)',
                                                    color: '#2d3748',
                                                    fontSize: 'clamp(0.92rem, 2.5vw, 1.15rem)'
                                                }}
                                            >
                                                "{testimonial.text}"
                                            </p>

                                            <h5
                                                className="fw-bold mb-0"
                                                style={{ color: '#114934', letterSpacing: '0.5px', fontSize: '1.05rem' }}
                                            >
                                                {testimonial.name}
                                            </h5>

                                            <p className="text-muted small mt-1 mb-3 mb-md-4 fw-semibold text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.72rem' }}>
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