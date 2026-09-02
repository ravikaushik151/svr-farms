'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Row, Col, Modal, Button, Card } from 'react-bootstrap';
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaLeaf,
    FaArrowRight,
    FaRulerCombined,
    FaAward
} from 'react-icons/fa';
import Link from 'next/link';

const projects = [
    {
        title: "Tamara Valley",
        badge: "⭐ FLAGSHIP PROJECT - 300+ ACRES",
        image: "/projects/Tamara Valley (Upcoming).webp",
        shortDesc: "A 300+ acre managed farmland community offering premium resort-inspired organic living in Thalli.",
        link: "/tamara",
        location: "Thalli, Tamil Nadu. A tranquil green belt positioned as a nature-led retreat within reach of Bangalore.",
        scale: "A 300+ acre flagship managed farmland community, with plot options starting from 0.25 acre and extending to 0.5 acre and 1 acre formats.",
        usp: "A large-format organic farm-living destination that blends managed green ownership with 25+ lifestyle, wellness and leisure amenities in a resort-inspired setting."
    },
    {
        title: "Vaikuntam",
        badge: "Binnamangalam, TN",
        image: "/projects/vaikuntam.jpg",
        shortDesc: "A refined farm-living retreat pairing private land ownership with curated leisure amenities.",
        location: "Binnamangalam, Tamil Nadu. A serene countryside setting within convenient reach of Bangalore.",
        scale: "Approx. 17 acres of managed farmland, with individual plots starting from 10,890 sq. ft.",
        usp: "A refined farm-living retreat that pairs private land ownership with curated leisure amenities and an immersive agricultural setting."
    },
    {
        title: "Girivanam Farms",
        badge: "Near Bangalore",
        image: "/projects/girivanam.jpg",
        shortDesc: "A hands-free farmland experience combining organic plantations and professional management.",
        location: "Near Bangalore. A countryside setting designed for convenient weekend access and nature-led living.",
        scale: "A professionally managed farmland community planned across 130 farm plots, supported by a 35,000 sq. ft. clubhouse and curated infrastructure.",
        usp: "A hands-free farmland ownership experience combining sustainable organic plantations, professional farm management and resort-style community living."
    },
    {
        title: "Vasudha Kalpataru",
        badge: "Agalakotta, TN",
        image: "/projects/vasudha_kalpataru.jpg",
        shortDesc: "A plantation-led farm retreat anchored by 4,000 teak, 500 coconut and 500 mango trees.",
        location: "Settipalli, Agalakotta, Tamil Nadu. A peaceful managed farmland destination within reach of Bangalore.",
        scale: "Spread across 44 acres with 140 farm plots, ranging from 10,890 sq. ft. to 50,000 sq. ft.",
        usp: "A plantation-led farm retreat anchored by 4,000 teak, 500 coconut and 500 mango trees, complemented by leisure and recreational amenities."
    },
    {
        title: "H₂O Farms",
        badge: "Near Bangalore",
        image: "/projects/H2O Farms.webp",
        shortDesc: "A water-conscious farmland concept built around rainwater harvesting and ecological stewardship.",
        location: "Near Bangalore. A nature-led farmland destination planned for sustainable countryside ownership.",
        scale: "A 66+ acre managed farmland community comprising 195+ farm plots.",
        usp: "A water-conscious farmland concept built around rainwater harvesting, groundwater recharge and efficient irrigation, blending ecological stewardship with long-term asset value."
    },
    {
        title: "Shivalik Hill",
        badge: "Denkanikottai, Hosur",
        image: "/projects/Shivalik Hill Managed Farmland.webp",
        shortDesc: "A nature-led farm retreat designed around camping, sunset experiences, and waterside leisure.",
        location: "Belalam, Denkanikottai, Hosur. A tranquil countryside setting surrounded by nature and open landscapes.",
        scale: "A 33-acre managed farmland community comprising 50 farm plots, ranging from 10,890 sq. ft. to 50,000 sq. ft.",
        usp: "A nature-led farm retreat designed around camping, sunset experiences and waterside leisure, complemented by thoughtfully curated lifestyle amenities."
    },
    {
        title: "Madhuvan Farms",
        badge: "Denkanikottai, TN",
        image: "/projects/madhuvan.jpg",
        shortDesc: "A nature-rich farm retreat featuring a 40-acre pre-developed food forest and a 2-acre natural lake.",
        location: "Santhanapalli, Denkanikottai, Tamil Nadu. A lush countryside setting within convenient reach of Bangalore.",
        scale: "A 65-acre managed farmland community comprising 160 farm plots, ranging from 10,000 sq. ft. to 50,000 sq. ft.",
        usp: "A nature-rich farm retreat distinguished by a 40-acre pre-developed food forest, flourishing orchards and a 2-acre natural lake, creating an immersive landscape for green living."
    },
    {
        title: "Tapovan",
        badge: "Thally, Tamil Nadu",
        image: "/projects/tapovan.jpg",
        shortDesc: "A wellness-led farm retreat with mango orchards, Zen gardens, and lakeside experiences.",
        location: "Jowlagiri, Thally, Tamil Nadu. A serene countryside destination approximately 59 km from Bengaluru.",
        scale: "A 65-acre managed farmland community comprising 160 farm plots, ranging from 10,000 sq. ft. to 50,000 sq. ft.",
        usp: "A wellness-led farm retreat shaped by mango orchards, timber plantations and a 2-acre natural lake, enriched with meditation zones, Zen gardens and lakeside experiences."
    },
    {
        title: "Kamyaka Woods",
        badge: "Gumlapuram, TN",
        image: "/projects/kamyaka_woods.jpg",
        shortDesc: "A sustainability-led farm retreat distinguished by a lush Miyawaki forest and modern essentials.",
        location: "Gumlapuram, Tamil Nadu. A serene valley setting near Bangalore, surrounded by natural water bodies.",
        scale: "A 15-acre managed farmland community comprising 50 farm plots, ranging from 10,000 sq. ft. to 50,000 sq. ft.",
        usp: "A sustainability-led farm retreat distinguished by a lush Miyawaki forest, complemented by modern essentials such as high-speed connectivity and uninterrupted power."
    },
    {
        title: "Green Vista",
        badge: "Agalakotta, TN",
        image: "/projects/Green Vista.webp",
        shortDesc: "A scenic farm-living retreat combining fertile land, abundant water, and panoramic green views.",
        location: "Settipalli, Agalakotta, Tamil Nadu. A tranquil countryside setting framed by rolling landscapes and lush greenery.",
        scale: "A 25-acre managed farmland community comprising 50 farm plots, ranging from 10,890 sq. ft. to 50,000 sq. ft.",
        usp: "A scenic farm-living retreat combining fertile land, abundant water resources and panoramic green views, complemented by curated leisure and community amenities."
    },
    {
        title: "Gokulam Farmland",
        badge: "Thalli, Tamil Nadu",
        image: "/projects/gokulam.jpg",
        shortDesc: "A fully managed farm-living community with professionally maintained plantations and expert caretaking.",
        location: "Thalli, Tamil Nadu. A scenic countryside setting approximately 50 minutes from Electronic City, Bangalore.",
        scale: "A 20-acre managed farmland community comprising 50 farm plots, ranging from 10,890 sq. ft. to 50,000 sq. ft.",
        usp: "A fully managed farm-living proposition combining professionally maintained plantations, water-efficient irrigation and expert caretaking for effortless countryside ownership."
    },
    {
        title: "Sanjeevani Farms",
        badge: "Athalavadi, TN",
        image: "/projects/sanjeevani.jpg",
        shortDesc: "A thoughtfully planned farm community with direct farm-road access and dependable infrastructure.",
        location: "Athalavadi, Tamil Nadu. A peaceful countryside setting with direct farm-road access and essential infrastructure.",
        scale: "A 10-acre community farmland project comprising 45 farm plots, ranging from 10,000 sq. ft. to 50,000 sq. ft.",
        usp: "A thoughtfully planned farm community focused on seamless land ownership, clear access and dependable on-ground infrastructure, supported by professional management."
    },
    {
        title: "Lake View Farm",
        badge: "Denkanikottai, TN",
        image: "/projects/lake_view.jpg",
        shortDesc: "A lake-centric farm retreat combining mango orchards, timber plantations, and waterside tranquility.",
        location: "Denkanikottai, Tamil Nadu. A serene countryside setting shaped by greenery, open landscapes and waterside tranquillity.",
        scale: "A 65-acre community farmland project comprising 160 farm plots, ranging from 10,000 sq. ft. to 50,000 sq. ft.",
        usp: "A lake-centric farm retreat defined by mango orchards, timber plantations and a 2-acre natural lake, creating a distinctive blend of nature, wellness and countryside living."
    },
    {
        title: "Ibbani",
        badge: "Agalakotta, TN",
        image: "/projects/ibbani.jpg",
        shortDesc: "A nature-led farm retreat shaped by mango orchards, gardens, and a 2-acre natural lake.",
        location: "Agalakotta, Tamil Nadu. A serene countryside setting surrounded by fertile landscapes and natural greenery.",
        scale: "A 65-acre community farmland project comprising 160 farm plots, ranging from 10,000 sq. ft. to 50,000 sq. ft.",
        usp: "A nature-led farm retreat shaped by mango orchards, timber plantations, vegetable gardens and a 2-acre natural lake, creating a refined balance of farm living, wellness and tranquillity."
    },
    {
        title: "Silver Woods",
        badge: "Denkanikottai, TN",
        image: "/projects/Marwar Aangan Farms.webp",
        shortDesc: "A sustainability-focused farm community combining long-term agroforestry and responsible cultivation.",
        location: "Santhanapalli, Denkanikottai, Tamil Nadu. A tranquil countryside setting designed around accessible, nature-led farm living.",
        scale: "A 10-acre managed farmland community comprising 45 farm plots, ranging from 10,000 sq. ft. to 50,000 sq. ft.",
        usp: "A sustainability-focused farm community combining long-term agroforestry, responsible cultivation and professional farm management for an effortless ownership experience."
    },
    {
        title: "Amrutvan",
        badge: "Denkanikottai, TN",
        image: "/projects/amrutvan.jpg",
        shortDesc: "A wellness-inspired farm retreat shaped by orchards, gardens, and a 2-acre natural lake.",
        location: "Denkanikottai, Tamil Nadu - a tranquil countryside setting surrounded by fertile landscapes and natural greenery.",
        scale: "A 30-acre community farmland project comprising 80 farm plots, ranging from 10,000 sq. ft. to 50,000 sq. ft.",
        usp: "A wellness-inspired farm retreat shaped by orchards, timber plantations, vegetable gardens and a 2-acre natural lake, enriched with meditation, yoga and lakeside experiences."
    },
    {
        title: "Amaya Farm Villa Plot",
        badge: "Athalavadi, TN",
        image: "/projects/Amaya Farm Villa Plot.webp",
        shortDesc: "A gated villa-farmland community enriched with mango, chikoo, and jackfruit plantations.",
        location: "Athalavadi, Tamil Nadu - a tranquil countryside setting positioned within convenient driving reach of Bangalore.",
        scale: "A 10-acre gated farm community comprising 45 farm plots, ranging from 10,000 sq. ft. to 50,000 sq. ft.",
        usp: "A villa-farmland concept enriched with mango, chikoo, jackfruit and other fruit-tree plantations, bringing together private green ownership and countryside living."
    },
    {
        title: "Govardhana Estate",
        badge: "Denkanikottai, TN",
        image: "/projects/govardhana.jpg",
        shortDesc: "A low-density farmland estate featuring generously sized plots and a private countryside experience.",
        location: "Denkanikottai, Tamil Nadu. A peaceful countryside setting suited to expansive, nature-led farmland ownership.",
        scale: "A 20-acre community farmland project comprising just 35 farm plots, ranging from 21,780 sq. ft. to 50,000 sq. ft.",
        usp: "A low-density farmland estate distinguished by generously sized plots, professionally supported ownership and a more private countryside experience."
    }
];

interface ProjectsSectionProps {
    limit?: number;
    showExploreButton?: boolean;
}

export default function ProjectsSection({ limit, showExploreButton = false }: ProjectsSectionProps) {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const handleShow = (project: any) => {
        if (project.link) {
            router.push(project.link);
        } else {
            setSelectedProject(project);
            setShowModal(true);
        }
    };

    const handleClose = () => setShowModal(false);

    // If limit is provided, only show the first N items
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section
            className="py-5 position-relative"
            id="projects"
            style={{
                backgroundColor: '#fcfbf7', // Premium warm cream background
                overflow: 'hidden'
            }}
        >
            <Container className="py-lg-5">

                {/* Section Title Header */}
                <div className="text-center mb-5">
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        <h6
                            className="text-uppercase letter-spacing-2 mb-0 small fw-bold"
                            style={{ color: '#c5a059', fontSize: '0.8rem' }}
                        >
                            Discover Your Dream Farm
                        </h6>
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                    </div>

                    <h2
                        className="display-4 fw-bold mb-3 text-sanjeevani"
                        style={{
                            fontFamily: '"Playfair Display", "Georgia", serif',
                            lineHeight: '1.2'
                        }}
                    >
                        Our Projects
                    </h2>

                    <div className="d-flex justify-content-center mb-4">
                        <FaLeaf size={16} style={{ color: '#c5a059', opacity: 0.8 }} />
                    </div>

                    <p className="text-muted max-w-2xl mx-auto" style={{ fontSize: '1.02rem' }}>
                        Explore thoughtfully developed farmland communities set in the serene landscapes of Thalli. Spaces designed for nature, accessibility, and long-term value.
                    </p>
                </div>

                {/* Grid Cards of Projects */}
                <Row className="g-4 mb-5">
                    {displayedProjects.map((project, index) => {
                        return (
                            <Col key={index} xs={12} md={6} lg={4}>
                                <Card
                                    className="border-0 shadow-sm rounded-4 overflow-hidden bg-white h-100 position-relative d-flex flex-column"
                                    style={{
                                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)',
                                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                    }}
                                >
                                    {/* Image Wrapper */}
                                    <div className="position-relative" style={{ height: '230px', overflow: 'hidden' }}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-100 h-100 object-fit-cover transition-all"
                                            style={{ transition: 'transform 0.5s ease' }}
                                        />

                                        {/* Badge Overlay */}
                                        <div
                                            className="position-absolute d-flex align-items-center gap-2"
                                            style={{
                                                top: '15px',
                                                left: '15px',
                                                backgroundColor: 'rgba(17, 73, 52, 0.85)',
                                                color: '#ffffff',
                                                borderRadius: '4px',
                                                padding: '4px 12px',
                                                fontSize: '0.7rem',
                                                fontWeight: 'bold',
                                                letterSpacing: '1px'
                                            }}
                                        >
                                            <FaMapMarkerAlt size={11} />
                                            <span>{project.badge}</span>
                                        </div>
                                    </div>

                                    {/* Card Content body */}
                                    <Card.Body className="pt-4 px-4 pb-4 d-flex flex-column text-center flex-grow-1">
                                        <h4
                                            className="fw-bold mb-3 text-dark"
                                            style={{
                                                fontFamily: '"Playfair Display", "Georgia", serif',
                                                fontSize: '1.35rem'
                                            }}
                                        >
                                            {project.title}
                                        </h4>

                                        <p className="text-muted small lh-relaxed mb-4 flex-grow-1" style={{ fontSize: '0.85rem' }}>
                                            {project.shortDesc}
                                        </p>

                                        {/* View Project Outlined Button */}
                                        <button
                                            onClick={() => handleShow(project)}
                                            className="btn text-uppercase py-2 px-4 rounded-1 w-100 d-flex align-items-center justify-content-center gap-2"
                                            style={{
                                                border: '1.5px solid rgba(197, 160, 89, 0.4)',
                                                color: '#114934',
                                                backgroundColor: 'transparent',
                                                fontSize: '0.78rem',
                                                fontWeight: 'bold',
                                                letterSpacing: '1px',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.backgroundColor = 'rgba(17, 73, 52, 0.04)';
                                                e.currentTarget.style.borderColor = '#c5a059';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.4)';
                                            }}
                                        >
                                            View Project <FaArrowRight size={12} style={{ color: '#c5a059' }} />
                                        </button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>

                {/* Explore All Projects Bottom Button (Homepage only) */}
                {showExploreButton && (
                    <div className="text-center">
                        <Link
                            href="/projects"
                            className="btn text-white px-5 py-3 rounded-1 d-inline-flex align-items-center gap-3"
                            style={{
                                backgroundColor: '#114934',
                                fontSize: '0.88rem',
                                fontWeight: 'bold',
                                letterSpacing: '1.2px',
                                boxShadow: '0 4px 15px rgba(17, 73, 52, 0.2)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = '#1b2e1e';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = '#114934';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <FaLeaf size={14} style={{ color: '#c5a059' }} />
                            <span>Explore All Projects</span>
                            <FaArrowRight size={12} />
                        </Link>
                    </div>
                )}

            </Container>

            {/* Modal Detail Dialog */}
            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton className="border-0" style={{ zIndex: 10, position: 'absolute', right: '10px', top: '10px' }}>
                </Modal.Header>
                <Modal.Body className="p-0">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 p-0 position-relative">
                                {selectedProject && (
                                    <div className="position-relative">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-100 object-fit-cover"
                                            style={{ maxHeight: '350px' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 p-4 text-white w-100" style={{ background: 'linear-gradient(transparent, rgba(11, 43, 31, 0.95))' }}>
                                            <span className="text-uppercase fw-bold text-spacing-2" style={{ color: '#c5a059', fontSize: '0.8rem', letterSpacing: '1.5px' }}>
                                                Managed Farmland Community
                                            </span>
                                            <h2 className="fw-bold mb-0 text-white" style={{ fontFamily: '"Playfair Display", "Georgia", serif', fontSize: '2rem' }}>
                                                {selectedProject.title}
                                            </h2>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="col-lg-12 p-4 p-lg-5">
                                {selectedProject && (
                                    <div className="d-flex flex-column gap-4">
                                        {/* Specifications Grid */}
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '42px', height: '42px', minWidth: '42px', backgroundColor: '#fcfbf7', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
                                                        <FaMapMarkerAlt size={18} style={{ color: '#c5a059' }} />
                                                    </div>
                                                    <div>
                                                        <h5 className="fw-bold text-dark mb-1" style={{ fontSize: '1rem', fontFamily: '"Playfair Display", "Georgia", serif' }}>Location</h5>
                                                        <p className="text-secondary small mb-0 lh-base">{selectedProject.location}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '42px', height: '42px', minWidth: '42px', backgroundColor: '#fcfbf7', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
                                                        <FaRulerCombined size={16} style={{ color: '#c5a059' }} />
                                                    </div>
                                                    <div>
                                                        <h5 className="fw-bold text-dark mb-1" style={{ fontSize: '1rem', fontFamily: '"Playfair Display", "Georgia", serif' }}>Development Scale</h5>
                                                        <p className="text-secondary small mb-0 lh-base">{selectedProject.scale}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-top pt-4">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '42px', height: '42px', minWidth: '42px', backgroundColor: '#fcfbf7', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
                                                    <FaAward size={18} style={{ color: '#c5a059' }} />
                                                </div>
                                                <div>
                                                    <h5 className="fw-bold text-dark mb-1" style={{ fontSize: '1rem', fontFamily: '"Playfair Display", "Georgia", serif' }}>Signature USP</h5>
                                                    <p className="text-secondary small mb-0 lh-base">{selectedProject.usp}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Contact & Footer actions */}
                                        <div className="d-flex flex-wrap gap-4 mt-4 pt-4 border-top justify-content-between align-items-center">
                                            <div className="d-flex gap-3 flex-column flex-sm-row">
                                                <p className="mb-0 fw-semibold text-secondary" style={{ fontSize: '0.9rem' }}>
                                                    <FaPhoneAlt className="me-2 text-sanjeevani" style={{ color: '#c5a059' }} />
                                                    <a href="tel:+919688777793" className="text-decoration-none text-dark hover-gold">+91 96887 77793</a>
                                                </p>
                                                <p className="mb-0 fw-semibold text-secondary" style={{ fontSize: '0.9rem' }}>
                                                    <FaEnvelope className="me-2 text-sanjeevani" style={{ color: '#c5a059' }} />
                                                    <a href="mailto:info@littleengland.cm" className="text-decoration-none text-dark hover-gold">info@littleengland.cm</a>
                                                </p>
                                            </div>
                                            <Button
                                                onClick={handleClose}
                                                className="border-0 px-4 py-2 text-uppercase fw-semibold"
                                                style={{ backgroundColor: '#114934', fontSize: '0.8rem', letterSpacing: '0.5px' }}
                                            >
                                                Close Details
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0 p-0">
                </Modal.Footer>
            </Modal>
        </section>
    );
}
