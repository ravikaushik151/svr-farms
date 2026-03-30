'use client';

import { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';

const projects = [
    {
        title: "Vaikuntam",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/farmland-9.webp",
        shortDesc: "A serene farmland retreat designed for peaceful living.",
        description: `A serene farmland retreat designed for peaceful living, spiritual calm, and mindful connection with nature.`
    },
    {
        title: "Vasudha Kalpataru",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/farmland-9.webp",
        shortDesc: "A thoughtfully nurtured farmland space where fertile land and natural beauty come together in harmony.",
        description: `A thoughtfully nurtured farmland space where fertile land and natural beauty come together in harmony.`
    },
    {
        title: "Marwar Aangan Farms",
        image: "https://placehold.co/600x400/e9ecef/adb5bd?text=Image+Coming+Soon",
        shortDesc: "Rooted in tradition and simplicity, a space that blends cultural warmth with natural living.",
        description: `Rooted in tradition and simplicity, a space that blends cultural warmth with natural living.`
    },
    {
        title: "Tapovan",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/Tapovan-by-SVR-Farms.webp",
        shortDesc: "A tranquil environment where simplicity, serenity, and spiritual living naturally align.",
        description: `A tranquil environment where simplicity, serenity, and spiritual living naturally align.`
    },
    {
        title: "Shivalik Hill Managed Farmland",
        image: "https://placehold.co/600x400/e9ecef/adb5bd?text=Image+Coming+Soon",
        shortDesc: "Set amidst elevated landscapes, offering scenic hill views and a refreshing connection to nature.",
        description: `Set amidst elevated landscapes, offering scenic hill views and a refreshing connection to nature.`
    },
    {
        title: "Green Vista",
        image: "https://placehold.co/600x400/e9ecef/adb5bd?text=Image+Coming+Soon",
        shortDesc: "Lush green surroundings crafted for peaceful escapes and sustainable farm living.",
        description: `Lush green surroundings crafted for peaceful escapes and sustainable farm living.`
    },
    {
        title: "H2O Farms",
        image: "https://placehold.co/600x400/e9ecef/adb5bd?text=Image+Coming+Soon",
        shortDesc: "Designed around efficient water management, ensuring sustainable farming with reliable resources.",
        description: `Designed around efficient water management, ensuring sustainable farming with reliable resources.`
    },
    {
        title: "Tamara Valley (Upcoming)",
        image: "https://placehold.co/600x400/e9ecef/adb5bd?text=Image+Coming+Soon",
        shortDesc: "A 300-acre managed farmland community offering nature-led living with curated lifestyle experiences.",
        description: `A 300-acre managed farmland community offering nature-led living with curated lifestyle experiences.`
    },
    {
        title: "Sanjeevani Farms",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/Sanjeevani-Farms-by-SVR-Farms.webp",
        shortDesc: "A revitalizing farmland space that captures the essence of rural living and natural well-being.",
        description: `A revitalizing farmland space that captures the essence of rural living and natural well-being.`
    },
    {
        title: "Amaya Farm Villa Plot",
        image: "https://placehold.co/600x400/e9ecef/adb5bd?text=Image+Coming+Soon",
        shortDesc: "A refined blend of farmhouse living and open green landscapes, designed for comfort and calm.",
        description: `A refined blend of farmhouse living and open green landscapes, designed for comfort and calm.`
    },
    {
        title: "IBBANI",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/fm7.webp",
        shortDesc: "A peaceful living experience defined by simplicity, space, and a deeper connection with nature.",
        description: `A peaceful living experience defined by simplicity, space, and a deeper connection with nature.`
    }
];

export default function ProjectsSection() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const handleShow = (project: any) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <Container className="py-5" id="projects">
            <SectionTitle title="Our Projects" subtitle="Discover Your Dream Farm" />
            <Row className="g-4">
                {projects.map((project, index) => (
                    <Col md={4} key={index}>
                        <div onClick={() => handleShow(project)} style={{ cursor: 'pointer' }}>
                            <ProjectCard
                                title={project.title}
                                image={project.image}
                                description={project.shortDesc}
                                link="#"
                            />
                        </div>
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton className="border-0">
                </Modal.Header>
                <Modal.Body className="p-0">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 p-0">
                                {selectedProject && (
                                    <div className="position-relative">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-100 object-fit-cover"
                                            style={{ maxHeight: '400px' }}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="col-lg-12 p-4 p-lg-5">
                                {selectedProject && (
                                    <>
                                        <h3 className="fw-bold mb-3 text-sanjeevani">{selectedProject.title}</h3>
                                        <div className="mb-4 text-secondary lh-lg" style={{ whiteSpace: 'pre-line' }}>
                                            {selectedProject.description}
                                        </div>
                                        <div className="d-flex flex-column gap-2">
                                            <p className="mb-0 fw-bold"><FaPhoneAlt className="me-2 text-sanjeevani" /> <a href="tel:+919986410709" className="text-decoration-none text-dark">+91 99864 10709</a></p>
                                            <p className="mb-0 fw-bold"><FaEnvelope className="me-2 text-sanjeevani" /> <a href="mailto:info@svrfarms.com" className="text-decoration-none text-dark">info@svrfarms.com</a></p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0 justify-content-center pb-4">
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
