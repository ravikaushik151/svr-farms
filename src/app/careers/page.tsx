'use client';

import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import PageBanner from '@/components/PageBanner';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';

const jobOpenings = [
    {
        title: "Farm Operations Specialist",
        type: "Full-time",
        location: "Bangalore",
        description: "Manage day-to-day farm activities, implement best practices, and contribute to efficient agricultural operations.",
    },
    {
        title: "Sustainability Analyst",
        type: "Full-time",
        location: "Bangalore",
        description: "Analyze data to develop sustainable farming strategies that minimize environmental impact and enhance productivity.",
    },
    {
        title: "Marketing and Outreach Coordinator",
        type: "Full-time",
        location: "Bangalore",
        description: "Drive our mission by creating compelling marketing campaigns and engaging with our community..",
    },
    {
        title: "Supply Chain Manager",
        type: "Full-time",
        location: "Bangalore",
        description: "Oversee the logistics and distribution of our agricultural products while ensuring quality and timely delivery.",
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
            <Container className="py-2 mb-4">
                <SectionTitle title="Careers" subtitle="Join the SVR Farms Team – Build Your Career With Us" />
                <div className="text-md-start mt-5">
                    <p className="text-md-start text-center text-muted mb-5">
                        At SVR Farms, we believe that a thriving team is the cornerstone of our success. We’re dedicated to nurturing a collaborative and dynamic work environment that encourages innovation, growth, and professional development. Join us as we cultivate opportunities, foster creativity, and contribute to the agriculture industry’s transformation.
                    </p>



                    <p className=''><strong>Our Values:</strong></p>

                    <ol className=''>
                        <li><strong>Passion for Agriculture:</strong> We&rsquo;re driven by our love for agriculture and its potential to shape a sustainable future. We&rsquo;re committed to promoting responsible farming practices that benefit both our communities and the environment.</li>
                        <li><strong>Team Collaboration:</strong> Collaboration is at the heart of what we do. We value diverse perspectives and believe that working together enables us to overcome challenges and achieve remarkable results.</li>
                        <li><strong>Innovation:</strong> We&rsquo;re not afraid to think outside the box. We embrace innovation and encourage our team members to bring fresh ideas to the table. Our solutions-driven approach keeps us at the forefront of the industry.</li>
                        <li><strong>Continuous Learning:</strong> Agriculture is a field that&rsquo;s constantly evolving. We&rsquo;re dedicated to learning and growing, both as individuals and as a team. We provide opportunities for training, skill development, and knowledge sharing.</li>
                        <li><strong>Community Impact:</strong> Our work extends beyond the fields. We&rsquo;re committed to giving back to the communities we operate in and creating a positive impact on society as a whole.</li>
                    </ol>

                    <p className=''><strong>Why Join SVR Farms:</strong></p>

                    <ol className=''>
                        <li><strong>Career Growth:</strong> We&rsquo;re invested in your professional journey. Join SVR Farms, and you&rsquo;ll have access to a wealth of resources, mentorship, and opportunities to advance your career.</li>
                        <li><strong>Innovative Environment:</strong> Be part of a team that&rsquo;s pushing the boundaries of what&rsquo;s possible in agriculture. Your ideas and contributions will be valued and can make a real difference.</li>
                        <li><strong>Meaningful Work:</strong> At SVR Farms, your work will have a tangible impact on food production, sustainability, and rural communities. Join us in making a positive difference.</li>
                        <li><strong>Collaborative Culture:</strong> Experience the power of working together with a group of passionate individuals who are dedicated to a shared mission. Collaboration and mutual support are integral to our culture.</li>
                        <li><strong>Personal Development:</strong> We encourage continuous learning and skill development. Whether it&rsquo;s honing your technical expertise or developing leadership skills, SVR Farms is here to help you grow.</li>
                    </ol>

                    <p className='text-center mb-4 '><strong className='fs-4 text-center'>Current Opportunities</strong></p>




                    <Row className="g-4 text-start mb-4">
                        {jobOpenings.map((job, index) => (
                            <Col md={3} key={index}>
                                <Card className="shadow-sm border-1 h-100">
                                    <Card.Body className="p-4 d-flex flex-column">
                                        <Card.Title className="fw-bold text-dark text-center">{job.title}</Card.Title>
                                        {/* <Card.Subtitle className="mb-3 text-muted">{job.type} • {job.location}</Card.Subtitle> */}
                                        <Card.Text className="text-muted flex-grow-1 text-center">
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
