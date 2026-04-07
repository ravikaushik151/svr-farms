'use client';

import SectionTitle from '@/components/SectionTitle';
import PageBanner from '@/components/PageBanner';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Blogs() {
    return (
        <>
            <PageBanner title="Our Blog" backgroundImage="/banner/Blog_Banner.webp" />
            <Container className="py-2">
            <SectionTitle title="Our Blog" subtitle="Latest News & Updates" />
            <div className="text-center text-muted mt-5">
                <p className="lead mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>
                <Row className="g-4 text-start">
                    <Col md={4}>
                        <Card className="h-100 shadow-sm border-0 hover-lift">
                            <Card.Body className="p-4">
                                <Card.Title className="fw-bold text-dark">Understanding Managed Farmlands</Card.Title>
                                <Card.Text>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</Card.Text>
                                <a href="#" className="text-success fw-bold text-decoration-none border-bottom border-success">Read More</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 shadow-sm border-0 hover-lift">
                            <Card.Body className="p-4">
                                <Card.Title className="fw-bold text-dark">Eco-Friendly Agriculture</Card.Title>
                                <Card.Text>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</Card.Text>
                                <a href="#" className="text-success fw-bold text-decoration-none border-bottom border-success">Read More</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 shadow-sm border-0 hover-lift">
                            <Card.Body className="p-4">
                                <Card.Title className="fw-bold text-dark">Bangalore Real Estate</Card.Title>
                                <Card.Text>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Card.Text>
                                <a href="#" className="text-success fw-bold text-decoration-none border-bottom border-success">Read More</a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            </Container>
        </>
    );
}
