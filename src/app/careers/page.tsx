'use client';

import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import PageBanner from '@/components/PageBanner';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';

const jobOpenings = [
    {
        title: "Agricultural Expert",
        type: "Full-time",
        location: "Bangalore",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
        title: "Sales Manager",
        type: "Full-time",
        location: "Bangalore",
        description: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
    },
    {
        title: "Digital Marketing Executive",
        type: "Full-time",
        location: "Bangalore",
        description: "Manage our online presence, run ad campaigns and handle social media strategy.",
    }
];

export default function Careers() {
    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');

    const handleShow = (jobTitle: string) => {
        setSelectedJob(jobTitle);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Application submitted successfully!');
        handleClose();
    };

    return (
        <>
            <PageBanner title="Careers" backgroundImage="/banner/Careers_Banner.webp" />
            <Container className="py-2">
            <SectionTitle title="Careers" subtitle="Join Our Team" />
            <div className="text-center mt-5">
                <p className="lead text-muted mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent libero. Sed cursus ante dapibus diam.
                </p>
                <Row className="g-4 text-start">
                    {jobOpenings.map((job, index) => (
                        <Col md={4} key={index}>
                            <Card className="shadow-sm border-0 h-100">
                                <Card.Body className="p-4 d-flex flex-column">
                                    <Card.Title className="fw-bold text-dark">{job.title}</Card.Title>
                                    <Card.Subtitle className="mb-3 text-muted">{job.type} • {job.location}</Card.Subtitle>
                                    <Card.Text className="text-muted flex-grow-1">
                                        {job.description}
                                    </Card.Text>
                                    <Button variant="outline-success" onClick={() => handleShow(job.title)}>Apply Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Application Modal */}
            <Modal show={showModal} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton className="border-0 pb-0">
                    <Modal.Title className="fw-bold fs-4 text-success">Apply For Job</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <Form onSubmit={handleSubmit}>
                        <Row className="g-3">
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">Job Position</Form.Label>
                                    <Form.Select
                                        value={selectedJob}
                                        onChange={(e) => setSelectedJob(e.target.value)}
                                        required
                                    >
                                        <option value="" disabled>Select a position...</option>
                                        {jobOpenings.map((job, i) => (
                                            <option key={i} value={job.title}>{job.title}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your full name" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">Phone Number</Form.Label>
                                    <Form.Control type="tel" placeholder="Enter phone number" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">City Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your city" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">Years of Experience</Form.Label>
                                    <Form.Select required>
                                        <option value="">Select experience...</option>
                                        <option value="fresher">Fresher</option>
                                        <option value="1-3">1 - 3 Years</option>
                                        <option value="3-5">3 - 5 Years</option>
                                        <option value="5-10">5 - 10 Years</option>
                                        <option value="10+">10+ Years</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">Upload Resume (PDF/DOCX)</Form.Label>
                                    <Form.Control type="file" accept=".pdf,.doc,.docx" required />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">Message / Cover Letter</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Tell us why you are a good fit for this role..." required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="mt-4 text-end">
                            <Button variant="secondary" onClick={handleClose} className="me-2 px-4">
                                Cancel
                            </Button>
                            <Button variant="success" type="submit" className="px-5">
                                Submit Application
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
        </>
    );
}
