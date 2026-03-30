'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLeaf } from 'react-icons/fa';
import Link from 'next/link';

export default function AboutSection() {
    return (
        <section className="py-5 bg-white position-relative overflow-hidden">
            {/* Decorative leaf elements could be added here as background SVG/Images if available */}
            <Container className="py-lg-5">
                <Row className="justify-content-center">
                    <Col lg={10} className="text-center">
                        <h6 className="section-subheading mb-3">Discover Little England</h6>
                        <h2 className="section-heading mb-4">A Life Beyond The City</h2>
                        <div className="mx-auto mb-5 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>

                        <p className="lead text-secondary mb-5 lh-lg">
                            Tucked away in the scenic landscapes of Thalli, fondly known as Little England for its cool climate and misty charm, this is where nature slows you down - and life begins to feel more meaningful.
                            <br />
                            Designed as a gated managed farmland community, Little England blends the richness of fertile land, abundant water sources, and breathtaking greenery with the ease of modern accessibility. Just a short drive from Bangalore, it offers the perfect balance between escape and connection.
                            <br />
                            This is not just land you own - it’s a space you grow into. Whether it’s a weekend retreat, a long-term investment, or a lifestyle rooted in nature, Little England gives you the freedom to build, cultivate, and experience life differently.
                        </p>
                    </Col>
                </Row>
                <div className="text-center">
                    <Link href="/about" passHref legacyBehavior>
                        <Button variant="outline-primary" size="lg" className="px-5 border-2">READ MORE</Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
