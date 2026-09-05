'use client';

import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import PageBanner from '@/components/PageBanner';
import { Container, Row, Col, Card, Button, Modal, Form, Badge } from 'react-bootstrap';
import { 
    FiBriefcase, 
    FiMapPin, 
    FiClock, 
    FiCheckCircle, 
    FiAward, 
    FiBookOpen, 
    FiUsers, 
    FiZap, 
    FiHeart 
} from 'react-icons/fi';

const jobOpenings = [
    {
        title: "Sales Associates",
        type: "Full-time",
        mode: "Work from Office",
        experience: "1–2 Years Experience",
        location: "Koramangala, Bengaluru",
        department: "Sales & Client Advisory",
        incentives: "Good Incentives & High Commission",
        description: "Engage with prospective farmland investors, present our prime managed communities including Tamara Valley, lead site tours, and drive sales closures with competitive incentive rewards.",
    },
    {
        title: "Pre-Sales Executives",
        type: "Full-time",
        mode: "Work from Office",
        experience: "1–2 Years Experience",
        location: "Koramangala, Bengaluru",
        department: "Pre-Sales & Lead Qualification",
        incentives: "Attractive Monthly Incentives",
        description: "Handle high-intent inbound inquiries, qualify prospective real estate and farmland buyers, introduce project highlights, and schedule qualified site visits for our sales consultants.",
    },
    {
        title: "Interns (Sales & Marketing)",
        type: "Internship",
        mode: "Work from Office",
        experience: "Fresher / 0–1 Year",
        location: "Koramangala, Bengaluru",
        department: "Growth & Sales Support",
        incentives: "Stipend + Performance Incentives",
        description: "Gain hands-on experience in luxury farmland real estate. Assist senior sales executives in lead management, client coordination, digital marketing campaigns, and site visits with pre-placement opportunities.",
    },
    {
        title: "Farmland Sales Consultants",
        type: "Full-time",
        mode: "Work from Office",
        experience: "1–2+ Years Experience",
        location: "Koramangala, Bengaluru",
        department: "Direct Sales & Portfolio Management",
        incentives: "Lucrative Incentive Structure",
        description: "Advise high-net-worth individuals and NRI investors on managed agricultural farmland acquisition, lead weekend farm visits at Tamara Valley, and manage end-to-end sales transactions.",
    }
];

const values = [
    {
        icon: <FiHeart className="text-sanjeevani fs-3" />,
        title: "Passion for Agriculture",
        desc: "We're driven by our love for agriculture and its potential to shape a sustainable future. We're committed to promoting responsible farming practices that benefit both our communities and the environment."
    },
    {
        icon: <FiUsers className="text-sanjeevani fs-3" />,
        title: "Team Collaboration",
        desc: "Collaboration is at the heart of what we do. We value diverse perspectives and believe that working together enables us to overcome challenges and achieve remarkable results."
    },
    {
        icon: <FiZap className="text-sanjeevani fs-3" />,
        title: "Innovation",
        desc: "We're not afraid to think outside the box. We embrace innovation and encourage our team members to bring fresh ideas to the table. Our solutions-driven approach keeps us at the forefront of the industry."
    },
    {
        icon: <FiBookOpen className="text-sanjeevani fs-3" />,
        title: "Continuous Learning",
        desc: "Agriculture is a field that's constantly evolving. We're dedicated to learning and growing, both as individuals and as a team. We provide opportunities for training, skill development, and knowledge sharing."
    },
    {
        icon: <FiAward className="text-sanjeevani fs-3" />,
        title: "Community Impact",
        desc: "Our work extends beyond the fields. We're committed to giving back to the communities we operate in and creating a positive impact on society as a whole."
    },
    {
        icon: <FiCheckCircle className="text-sanjeevani fs-3" />,
        title: "Integrity & Excellence",
        desc: "We uphold the highest ethical standards across every interaction, prioritizing complete transparency, client trust, and long-term relationships that stand the test of time."
    }
];

const benefits = [
    {
        title: "Career Growth",
        desc: "We're invested in your professional journey. Join Little England, and you'll have access to a wealth of resources, mentorship, and opportunities to advance your career."
    },
    {
        title: "Innovative Environment",
        desc: "Be part of a team that's pushing the boundaries of what's possible in agriculture. Your ideas and contributions will be valued and can make a real difference."
    },
    {
        title: "Meaningful Work",
        desc: "At Little England, your work will have a tangible impact on food production, sustainability, and rural communities. Join us in making a positive difference."
    },
    {
        title: "Collaborative Culture",
        desc: "Experience the power of working together with a group of passionate individuals who are dedicated to a shared mission. Collaboration and mutual support are integral to our culture."
    },
    {
        title: "Personal Development",
        desc: "We encourage continuous learning and skill development. Whether it's honing your technical expertise or developing leadership skills, Little England is here to help you grow."
    },
    {
        title: "Competitive Rewards",
        desc: "We offer attractive compensation, rewarding performance-based incentive structures, and recognition programs that celebrate your dedication and milestones."
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
        alert('Application submitted successfully!');
        handleClose();
    };

    return (
        <>
            <PageBanner title="Careers" backgroundImage="/banner/Careers_Banner.webp" />
            
            {/* Intro Section */}
            <Container className="py-5">
                <SectionTitle title="Build Your Career With Us" subtitle="Join The Little England Team" />
                <Row className="justify-content-center text-center mt-3">
                    <Col lg={10}>
                        <p className="lead text-muted lh-lg fs-5">
                            At Little England, we believe that a thriving team is the cornerstone of our success. We’re dedicated to nurturing a collaborative and dynamic work environment that encourages innovation, growth, and professional development. Join us as we cultivate opportunities, foster creativity, and contribute to the agriculture industry’s transformation.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* Our Values Section */}
            <div className="py-5" style={{ backgroundColor: '#fcfbf7' }}>
                <Container>
                    <SectionTitle title="Our Core Values" subtitle="How We Work" />

                    <Row className="g-4 justify-content-center">
                        {values.map((val, idx) => (
                            <Col key={idx} xs={12} md={6} lg={4}>
                                <Card className="border-0 shadow-sm h-100 p-4 rounded-3 hover-lift bg-white">
                                    <Card.Body className="p-0">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="p-3 bg-light rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px' }}>
                                                {val.icon}
                                            </div>
                                            <h4 className="fw-bold text-dark mb-0 fs-5">{val.title}</h4>
                                        </div>
                                        <p className="text-muted mb-0 lh-lg" style={{ fontSize: '0.95rem' }}>
                                            {val.desc}
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* Why Join Us Section */}
            <Container className="py-5 my-4">
                <SectionTitle title="Why You’ll Love Working Here" subtitle="Work With Purpose" />
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={8}>
                        <p className="text-muted lh-lg fs-5 mb-3">
                            We value our team and seek to provide a productive, satisfying, and growth-oriented workspace. Here is what we offer to every member of the Little England family.
                        </p>
                        <div className="d-inline-flex align-items-center gap-2 border-start border-3 border-success ps-3 py-2 bg-light rounded-end text-start">
                            <div>
                                <span className="fw-semibold text-sanjeevani d-block">Join a sustainable revolution</span>
                                <span className="text-muted small">Our actions today impact generations tomorrow.</span>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="g-4">
                    {benefits.map((benefit, idx) => (
                        <Col key={idx} xs={12} md={6} lg={4}>
                            <Card className="h-100 border-0 shadow-sm p-4 rounded-3 hover-lift bg-white">
                                <div className="d-flex align-items-start gap-3">
                                    <div className="p-2 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ backgroundColor: 'rgba(17,73,52,0.08)', color: '#114934', width: '42px', height: '42px' }}>
                                        <FiCheckCircle size={22} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-dark mb-2 fs-5">{benefit.title}</h5>
                                        <p className="text-muted mb-0 lh-lg" style={{ fontSize: '0.92rem' }}>{benefit.desc}</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Job Opportunities Section */}
            <div className="py-5" style={{ backgroundColor: '#f4f6f5' }}>
                <Container className="py-4">
                    <SectionTitle title="Current Opportunities" subtitle="We Are Hiring" />

                    <Row className="g-4">
                        {jobOpenings.map((job, index) => (
                            <Col xs={12} md={6} lg={6} key={index}>
                                <Card className="border-0 shadow-sm h-100 rounded-3 hover-lift bg-white">
                                    <Card.Body className="p-4 d-flex flex-column">
                                        <div className="d-flex justify-content-between align-items-start mb-3 gap-2 flex-wrap">
                                            <h4 className="fw-bold text-dark mb-0 fs-5">{job.title}</h4>
                                            <div className="d-flex flex-wrap gap-2">
                                                <Badge bg="" className="bg-sanjeevani text-white px-3 py-1.5 rounded-pill text-uppercase fw-semibold" style={{ fontSize: '0.7rem' }}>
                                                    <FiClock className="me-1" /> {job.type}
                                                </Badge>
                                                <Badge bg="" className="bg-success text-white px-3 py-1.5 rounded-pill text-uppercase fw-semibold" style={{ fontSize: '0.7rem', backgroundColor: '#114934' }}>
                                                    🏢 {job.mode}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                            <Badge bg="" className="bg-light text-dark border px-3 py-1 rounded-pill fw-medium" style={{ fontSize: '0.75rem' }}>
                                                ⏳ {job.experience}
                                            </Badge>
                                            <Badge bg="" className="bg-light text-dark border px-3 py-1 rounded-pill fw-medium" style={{ fontSize: '0.75rem' }}>
                                                <FiMapPin className="me-1 text-danger" /> {job.location}
                                            </Badge>
                                            <Badge bg="" className="text-dark px-3 py-1 rounded-pill fw-bold border" style={{ fontSize: '0.75rem', backgroundColor: '#fff8e6', borderColor: '#c5a059' }}>
                                                💰 {job.incentives}
                                            </Badge>
                                        </div>
                                        
                                        <Card.Text className="text-muted mb-4 lh-lg flex-grow-1" style={{ fontSize: '0.92rem' }}>
                                            {job.description}
                                        </Card.Text>
                                        
                                        <div className="mt-auto d-flex justify-content-between align-items-center pt-3 border-top border-light">
                                            <span className="text-muted small d-flex align-items-center">
                                                <FiBriefcase className="me-2 text-sanjeevani" /> {job.department}
                                            </span>
                                            <Button 
                                                variant="outline-primary" 
                                                onClick={() => handleShow(job.title)}
                                                className="px-4 py-2 border-2 fw-semibold rounded-pill"
                                                style={{ fontSize: '0.85rem' }}
                                            >
                                                Apply Now
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* Application Modal */}
            <Modal show={showModal} onHide={handleClose} centered size="lg" className="career-modal">
                <Modal.Header closeButton className="border-0 pb-0 px-4 pt-4">
                    <Modal.Title className="fw-bold fs-4 text-sanjeevani">
                        Job Application
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <Form onSubmit={handleSubmit}>
                        <Row className="g-3">
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold text-secondary">Position Applied For</Form.Label>
                                    <Form.Select
                                        value={selectedJob}
                                        onChange={(e) => setSelectedJob(e.target.value)}
                                        required
                                        className="py-2.5 rounded-3 border-light-subtle shadow-none"
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
                                    <Form.Label className="fw-semibold text-secondary">Full Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter your full name" 
                                        required 
                                        className="py-2.5 rounded-3 border-light-subtle shadow-none"
                                    />
                                </Form.Group>
                            </Col>
                            
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold text-secondary">Email Address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        required 
                                        className="py-2.5 rounded-3 border-light-subtle shadow-none"
                                    />
                                </Form.Group>
                            </Col>
                            
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold text-secondary">Phone Number</Form.Label>
                                    <Form.Control 
                                        type="tel" 
                                        placeholder="Enter phone number" 
                                        required 
                                        className="py-2.5 rounded-3 border-light-subtle shadow-none"
                                    />
                                </Form.Group>
                            </Col>
                            
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold text-secondary">City Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter your city" 
                                        required 
                                        className="py-2.5 rounded-3 border-light-subtle shadow-none"
                                    />
                                </Form.Group>
                            </Col>
                            
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold text-secondary">Years of Experience</Form.Label>
                                    <Form.Select 
                                        required
                                        className="py-2.5 rounded-3 border-light-subtle shadow-none"
                                    >
                                        <option value="">Select experience...</option>
                                        <option value="fresher">Fresher / Intern</option>
                                        <option value="1-2">1 - 2 Years</option>
                                        <option value="3-5">3 - 5 Years</option>
                                        <option value="5+">5+ Years</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold text-secondary">Upload Resume (PDF/DOCX)</Form.Label>
                                    <Form.Control 
                                        type="file" 
                                        accept=".pdf,.doc,.docx" 
                                        required 
                                        className="py-2 rounded-3 border-light-subtle shadow-none"
                                    />
                                </Form.Group>
                            </Col>
                            
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold text-secondary">Message / Cover Letter</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={4} 
                                        placeholder="Tell us why you are a good fit for this role..." 
                                        required 
                                        className="rounded-3 border-light-subtle shadow-none"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <div className="mt-4 text-end pt-3 border-top border-light-subtle">
                            <Button 
                                variant="light" 
                                onClick={handleClose} 
                                className="me-2 px-4 py-2 rounded-pill text-muted"
                                style={{ fontSize: '0.9rem' }}
                            >
                                Cancel
                            </Button>
                            <Button 
                                variant="primary" 
                                type="submit" 
                                className="px-5 py-2 rounded-pill text-white fw-semibold"
                                style={{ fontSize: '0.9rem' }}
                            >
                                Submit Application
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            <style jsx global>{`
                .hover-lift {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .hover-lift:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 25px rgba(17, 73, 52, 0.08) !important;
                }

                .text-spacing-2 {
                    letter-spacing: 2px;
                }

                .py-2.5 {
                    padding-top: 0.6rem !important;
                    padding-bottom: 0.6rem !important;
                }
            `}</style>
        </>
    );
}
