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
        <section className="py-5 bg-light">
            <Container className="py-lg-4">
                <div className="text-center mb-5">
                    <h6 className="section-subheading mb-2">What Our Clients Say</h6>
                    <h2 className="section-heading">Client Testimonials</h2>
                    <div className="d-inline-block bg-sanjeevani mt-2 mx-auto" style={{ width: '60px', height: '4px' }}></div>
                </div>

                <Row className="justify-content-center">
                    <Col lg={8}>
                        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" indicators={true} controls={false} className="pb-5">
                            {testimonials.map((testimonial, idx) => (
                                <Carousel.Item key={idx} className="text-center p-4">
                                    <div className="mb-4 text-sanjeevani opacity-50">
                                        <FaQuoteLeft size={40} />
                                    </div>
                                    <p className="lead fst-italic mb-4 lh-lg text-secondary">"{testimonial.text}"</p>
                                    <h5 className="fw-bold text-sanjeevani">{testimonial.name}</h5>
                                </Carousel.Item>
                            ))}
                        </Carousel>

                        {/* Custom Indicators / Navigation dots provided by bootstrap are usually enough, 
                    but adding some padding to bottom to ensure they don't overlap text */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
