'use client';

import { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';

const projects = [
    {
        title: "Vasudhara Kalpatharu",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/farmland-9.webp",
        shortDesc: "Meticulously managed farmland near Bangalore.",
        description: `Introducing Vasudhara Kalpatharu, a meticulously managed farmland near Bangalore that invites you to experience the charm of nature at its finest. Offering quarter-acre plots (25 cents) at an enticing price of Rs 449 per sqft, this project promises an idyllic retreat.

Situated in the heart of Agalakota, surrounded by a medley of hill stations in Denkanikottai taluk near Hosur, this location rests at an elevation of 1000 meters above sea level. The salubrious weather reminiscent of English climes led to its historical title as the "Little England of India" during the British era. Conveniently, it's only an hour's drive from Bangalore's Electronic City.

Within this visionary project lies a flourishing landscape, adorned with 4000 fully matured teak timber trees, 500 coconut trees, 500 mango trees, 100 lemon trees, 10 jackfruit trees, and 100 guava trees – all complemented by three borewells. The layout features meticulously planned 10-meter and 7-meter roads adorned with solar street lights.

Benefit from high returns on investments and a delightful climate year-round. Abundant groundwater resources and piped potable water ensure convenience, while indoor and outdoor games promise leisure. A grand 50,000 sqft clubhouse offers stay rooms, a restaurant, a function hall, a swimming pool, and a well-equipped kitchen area for your enjoyment.`
    },
    {
        title: "Tapovan",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/Tapovan-by-SVR-Farms.webp",
        shortDesc: "Simplicity, serenity and spirituality converge.",
        description: `With sprawling farms spread across 63 acres of fertile land, Tapovan Farms is a place where simplicity, serenity and spirituality converge. Amidst fields of mango orchards, timber plantations, a two acre natural lake and vegetable gardens, you will find the comforts of a luxury home intertwined with the charming farm life. Tapovan Farms is an exclusive best managed farmland near Bangalore located in Thally, just 59 kilometers away from the busy streets of Bengaluru Peppered with meditation zones, zen gardens, yoga spots and lakeside walkways, Tapovan a fully managed farmland community is crafted to nourish your soul. The perfect place to rest and revitalize with fresh air, fresh produce, and a free spirit helping you discover your true self.`
    },
    {
        title: "Kamyaka Woods",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/fm12.webp",
        shortDesc: "Exquisite blend of natural beauty and modern conveniences.",
        description: `Experience the allure of Kamyaka Woods, a 15-acre managed farmland in Bangalore which is in the gated community layout. Offering quarter-acre plots (25 cents) at an attractive rate of 350 Rs per sqft, Kamyaka Woods provides an exquisite blend of natural beauty and modern conveniences. Nestled within this project are remarkable amenities including a swimming pool and wooden cottage rooms with a restaurant, perfect for weekend getaways. The community benefits from completed roadwork, electricity, individual water connections, solar street lights, and meticulously curated plant installations. A dedicated labor service tends to the entire farm plot, ensuring its lush vitality, while round-the-clock security offers peace of mind.

Strategically located, Kamyaka Woods stands out as one of the nearest farmland projects to Bangalore. Situated just 35 km from Silkboard and 25 km from Electronic City, it boasts a mere 8 km proximity to the Thally Hosur main road, which has secured approval for a Domestic airport under the Udan Scheme. Additionally, the STR ring road construction is well underway at a convenient 2.5 km distance.`
    },
    {
        title: "Madhuvan Farms",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/Madhuvan-Farms-by-SVR-Farms.webp",
        shortDesc: "Vibrant 40-acre pre-developed food forest.",
        description: `Close to Bangalore, there is an expanse of organic managed agriculture farmland in Bangalore featuring a vibrant 40-acre pre-developed food forest, teeming with lush greenery. This vast area includes 120 acres of farmland comprising a flourishing mango orchard, a serene 2-acre natural lake, and a variety of other fruit and timber trees. Additionally, a spacious 1 lakh sqft clubhouse will be available. Nature enthusiasts will delight in the presence of approximately 50 bird species that call this place home. And for those who cherish foggy mornings, our forest’s misty ambiance will surely capture your heart.`
    },
    {
        title: "Sanjeevani Farms",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/Sanjeevani-Farms-by-SVR-Farms.webp",
        shortDesc: "Redefines the essence of rural living.",
        description: `The remarkable Sanjeevani Project, a farmland in Bangalore which is offering a sprawling 15-acre community farmland venture that redefines the essence of rural living. With plot sizes spanning a quarter-acre or 25 cents, this exclusive opportunity is priced at a competitive 275 Rs per sqft.

Nestled within this visionary project is a thoughtfully curated array of features, including picket fencing enveloping each plot, seamless water connectivity for every individual plot, well-laid roads, a reliable electricity supply, charming gazebos, and inviting wooden cottage rooms. But it doesn't end there – we're dedicated to fostering a green haven, offering free plantations to every plot owner.

Positioned near Thally and in proximity to the esteemed Israel-collaborated Horticulture Institute, this location boasts not just natural beauty, but also the advantages of accessibility. A mere 4 km from Thally Town and a convenient 50 km from Bangalore, the Sanjeevani Farm Project captures the perfect blend of countryside tranquility and urban connectivity.`
    },
    {
        title: "Lake View",
        image: "https://svrfarms.com/wp-content/uploads/2023/09/Untitled-design-26.png",
        shortDesc: "Simplicity, serenity and spirituality converge.",
        description: `With sprawling farms spread across 63 acres of fertile land, Lake View Farms is a place where simplicity, serenity and spirituality converge. Amidst fields of mango orchards, timber plantations, a two acre natural lake and vegetable gardens, you will find the comforts of a luxury home intertwined with the charming farm life. Lake View Farms is an exclusive farm community located in Thally, just 59 km away from the busy streets of Bengaluru. Peppered with meditation zones, zen gardens, yoga spots and lakeside walkways, Lake View-a fully managed farmland community is crafted to nourish your soul. The perfect place to rest and revitalize with fresh air, fresh produce, and a free spirit helping you discover your true self.`
    },
    {
        title: "IBBANI",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/fm7.webp",
        shortDesc: "Epitome of serene living.",
        description: `The breathtaking IBBANI community farm land project, encompassing 23 acres in Phase 1 and an expanded 5 acres in Phase 2 extension. The plots range from a minimum of 30 cents to a spacious 1 acre, all offered at an attractive price of 150 Rs per sqft. Nestled near the enchanting Agalakotai, elevated at 3,000 Feet above sea level, this location boasts scenic beauty with flourishing flower nurseries.

Inaugurated in October 2022, Phase 1 of Ibbani witnessed a remarkable sell-out within a year. Now, we invite you to explore Phase 2, seamlessly merging with the northern expanse of the Cauvery Wildlife Sanctuary forest. Revel in the mesmerizing vistas and embrace the pleasant climate throughout the seasons.`
    },
    {
        title: "Silver Woods",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/Silver-Woods-by-SVR-Farms.webp",
        shortDesc: "Economical and affordable farm living experience.",
        description: `Introducing SilverWoods, a managed farmland project presented by SVR Farms. Silver Woods aims to offer an economical and affordable farm living experience while embodying sustainability, serenity, and hassle-free management within a tranquil natural environment.`
    },
    {
        title: "Amruthvan",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/fm3.webp",
        shortDesc: "Where simplicity, serenity and spirituality converge.",
        description: `With sprawling farms spread across 63 acres of fertile land, Amruthvan Farms is a place where simplicity, serenity and spirituality converge. Amidst fields of mango orchards, timber plantations, a two acre natural lake and vegetable gardens, you will find the comforts of a luxury home intertwined with the charming farm life. Amruthvan Farms is an exclusive farm community located in Thally, just 59 km away from the busy streets of Bengaluru. Peppered with meditation zones, Zen gardens, yoga spots and lakeside walkways, Amruthvan-a fully managed farmland community is crafted to nourish your soul. The perfect place to rest and revitalize with fresh air, fresh produce, and a free spirit helping you discover your true self.`
    },
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
