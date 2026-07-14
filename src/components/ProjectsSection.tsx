'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Row, Col, Modal, Button, Card } from 'react-bootstrap';
import { 
    FaPhoneAlt, 
    FaEnvelope, 
    FaMapMarkerAlt, 
    FaLeaf, 
    FaSeedling, 
    FaSpa, 
    FaTint, 
    FaMountain, 
    FaArrowRight,
    FaHome,
    FaTree
} from 'react-icons/fa';
import Link from 'next/link';

const projects = [
    {
        title: "Tamara Valley",
        badge: "TAMARA VALLEY",
        image: "/projects/Tamara Valley (Upcoming).webp",
        shortDesc: "A 300+ acre managed farmland community offering nature-led living.",
        icon: FaLeaf,
        link: "/tamara", 
        description: `Tamara Valley is a premium managed farmland community near Bangalore, spread across 300+ acres of beautifully maintained green landscapes. It is designed for those who seek the calm of a weekend retreat while enjoying the ease of professionally managed farmland. Here, you own the land while every essential detail is seamlessly taken care of—irrigation, landscaping, and organic cultivation. It’s a space where nature thrives without demanding your time. Whether it’s a weekend escape, a long-term investment, or simply a place to slow down, Tamara Valley offers effortless access to nature. More than just land, it is a thoughtfully created countryside experience, close to Bangalore and completely cared for.`
    },
    {
        title: "Vaikuntam",
        badge: "VAIKUNTAM",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/farmland-9.webp",
        shortDesc: "A serene farmland retreat designed for peaceful living.",
        icon: FaSeedling,
        description: `<strong>Overview</strong>
Escape to Vaikuntam Farmland, a refined countryside retreat set across 55 acres of beautifully curated farmland near Bangalore. It is a place where understatement luxury meets the quiet elegance of nature. Spend time at our intimate restaurant, unwind beneath swaying trees, and experience the calm of thoughtfully maintained green spaces. Discover a setting where comfortable cottages offer privacy and ease, surrounded by a landscape designed for peaceful living. Vaikuntam Farmland brings together leisure and the outdoors in a way that feels effortless, offering a serene escape just a short drive from Bangalore.
<strong>Picture rising to a field of green.</strong>
A vast expanse of vibrant green unfolds as you arrive, gently revealing itself beyond a soft incline. The experience invites you to slow down, to walk barefoot across the smooth stretch of grass, and to take in the quiet beauty around you. A light breeze carries the natural scent of the earth, while the warmth of the sun settles softly across the landscape, creating a space that feels calm, grounded, and deeply restorative.
<strong>Embracing the Beats of Agriculture Life</strong>
Step into the gentle rhythm of agricultural life that surrounds you. Each morning begins with soft light falling across the fields, highlighting the quiet dedication behind every harvest. The subtle hum of activity, the growth of fresh crops, and the movement of the breeze come together to create a living, breathing landscape. It is not just a setting, but an experience—one that celebrates the connection between land, care, and the simple beauty of nature.`
    },
    {
        title: "TAPOVAN",
        badge: "TAPOVAN",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/Tapovan-by-SVR-Farms.webp",
        shortDesc: "A tranquil environment where simplicity, serenity, and spiritual living naturally align.",
        icon: FaSpa,
        description: `<strong>Overview</strong>
Set across 63 acres of fertile land, Tapovan Farms is a thoughtfully designed managed farmland community where simplicity, serenity, and mindful living come together. Surrounded by mango orchards, timber plantations, a natural lake, and curated vegetable gardens, it blends the comforts of a luxury home with the charm of farm life. Located in Thally, just a short drive from Bangalore, Tapovan Farms offers a peaceful escape from the city’s pace. With meditation zones, Zen gardens, yoga spaces, and lakeside walkways, every element is crafted to restore balance, offering a space where you can unwind, reconnect, and experience life at a slower, more meaningful rhythm.
<strong>Million diamond view of sea green</strong>
Wake up to an uninterrupted expanse of lush green that stretches as far as the eye can see. As the morning light gently settles over the landscape, the surroundings come alive with a quiet sense of calm and clarity. Overlooking thriving orchards and open fields, the view becomes a daily reminder of the simplicity and beauty of nature. At Tapovan Farms, this experience isn’t occasional - it’s a part of everyday living, where each sunrise brings a renewed sense of peace, space, and connection.
<strong>Gasp in the aromatic rhythms of farm life at Tapovan farms</strong>
Step into an environment where nature and mindful living exist in harmony. Walk through timber plantations, breathe in the freshness of the air, and experience the quiet richness of a landscape that evolves with every season. From exploring vegetable gardens to simply pausing under the shade of trees, every moment invites you to slow down and reconnect. Here, life moves with intention - grounded, balanced, and deeply connected to the land, creating a lifestyle that feels both enriching and effortlessly serene.`
    },
    {
        title: "Vasudha Kalpataru",
        badge: "VASUDHA KALPATARU",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/farmland-9.webp",
        shortDesc: "A thoughtfully nurtured farmland space where fertile land and natural beauty come together.",
        icon: FaLeaf,
        description: `<strong>Overview</strong>
Escape to Vasudha Kalpataru, a picturesque managed farmland community set across 44 acres of lush, curated landscapes near Bangalore. It is a place where natural beauty meets quiet sophistication. Surrounded by swaying trees and open green spaces, every element is designed to offer a sense of calm and ease. Enjoy curated experiences, from relaxing by the pool to dining at a thoughtfully designed restaurant, all within a setting that feels both refined and grounded. With cozy cottages and a landscape shaped for comfort, Vasudha Kalpataru brings together nature and leisure in a way that feels effortless and complete.
<strong>Imagine waking up to a sea of green</strong>
Wake up to an uninterrupted stretch of greenery that greets you with calm and clarity. As the first light of the day gently spreads across the landscape, the surroundings come alive with a quiet, natural rhythm. Overlooking fields and orchards, the view becomes more than a moment - it becomes part of your everyday experience. At Vasudha Kalpataru, nature isn’t something you visit; it’s something you wake up to, offering a sense of stillness and connection that stays with you throughout the day.
<strong>Embrace the Rhythms of Farm Life</strong>
Step into a lifestyle shaped by simplicity, balance, and a deeper connection to the land. Each morning begins with soft light over the fields, while the gentle movement of nature sets the tone for the day. Surrounded by greenery and open spaces, you are invited to slow down and experience life with intention. It’s a setting that blends comfort with authenticity, offering a peaceful escape from the pace of the city while keeping you connected to what truly matters.`
    },
    {
        title: "H₂O Farms",
        badge: "H₂O FARMS",
        image: "/projects/H2O Farms.webp",
        shortDesc: "Designed around efficient water management, ensuring sustainable farming.",
        icon: FaTint,
        description: `H₂O Farms by Little England is a thoughtfully planned 66+ acre managed farmland community built around water conservation, ecological balance, and long-term value. Designed with purpose, the project integrates rainwater harvesting, groundwater recharge, and efficient irrigation systems to create a resilient and future-ready landscape.
H₂O redefines farmland ownership by aligning environmental responsibility with intelligent asset growth. It offers a rare opportunity to invest in a space where sustainability and long-term appreciation work hand in hand, creating enduring value that is both responsible and rewarding.`
    },
    {
        title: "Shivalik Hill",
        badge: "SHIVALIK HILL",
        image: "/projects/Shivalik Hill Managed Farmland.webp",
        shortDesc: "Six acres of invested landscapes, offering scenic hill views and a refreshing connection with nature.",
        icon: FaMountain,
        description: `<strong>Overview</strong>
Step away from the constant rush and demands of city life and discover a more balanced way of living. Shivalik Hill is designed to offer a refined and immersive farm experience, where nature and comfort come together effortlessly. Set in a serene landscape, it allows you to disconnect from the noise of urban living and reconnect with a slower, more meaningful rhythm. With thoughtfully planned amenities and a focus on ease, it brings together the calm of nature with the comfort of modern living.
<strong>Experience Tranquility at Shivalik Hill Farmland</strong>
Discover a setting where every detail is designed for relaxation and comfort. From a cozy restaurant and warm hospitality to curated outdoor experiences, the environment invites you to unwind at your own pace. Enjoy open spaces for camping, bonfires, and quiet moments surrounded by nature. With expansive landscapes and peaceful surroundings, Shivalik Hill offers a space where you can reconnect, recharge, and create lasting memories in a setting that feels both natural and refined.
<strong>Embrace Tranquil Environment</strong>
Experience a lifestyle shaped by calm, openness, and connection to nature. Spend your mornings taking in scenic views, your evenings unwinding in thoughtfully designed outdoor spaces, and your time enjoying moments that feel unhurried. With dedicated areas for leisure, gathering, relaxation, every element is created to enhance your experience. Surrounded by greenery and open skies, it becomes a place where comfort, simplicity, and nature come together seamlessly.`
    },
    {
        title: "Madhuvan Farms",
        badge: "MADHUVAN FARMS",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/farmland-9.webp",
        shortDesc: "Just a short drive from Bangalore lies an expansive organic managed farmland.",
        icon: FaLeaf,
        description: `Just a short drive from Bangalore lies an expansive organic managed farmland designed around natural abundance.`
    },
    {
        title: "Gokulam Farmland",
        badge: "GOKULAM FARMLAND",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/fm7.webp",
        shortDesc: "A thoughtfully planned managed farmland community by Little England.",
        icon: FaHome,
        description: `Gokulam Farmland is a thoughtfully planned managed farmland community by Little England.`
    },
    {
        title: "Kamyaka Woods",
        badge: "KAMYAKA WOODS",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/Tapovan-by-SVR-Farms.webp",
        shortDesc: "Explore a refined opportunity to own agricultural land near Hosur.",
        icon: FaTree,
        description: `Kamyaka Woods spans across 15 acres in the scenic Gumalapuram Valley.`
    },
    {
        title: "Green Vista",
        badge: "GREEN VISTA",
        image: "/projects/Green Vista.webp",
        shortDesc: "Lush green surroundings crafted for peaceful escapes and sustainable farm living.",
        icon: FaLeaf,
        description: `Lush green surroundings crafted for peaceful escapes and sustainable farm living.`
    },
    {
        title: "Sanjeevani Farms",
        badge: "SANJEEVANI FARMS",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/Sanjeevani-Farms-by-SVR-Farms.webp",
        shortDesc: "A revitalizing farmland space that captures the essence of rural living.",
        icon: FaSpa,
        description: `A revitalizing farmland space that captures the essence of rural living.`
    },
    {
        title: "Lake View Farm",
        badge: "LAKE VIEW FARM",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/farmland-9.webp",
        shortDesc: "Spread across 63 acres of fertile land, Lake View Farms is a thoughtfully designed managed farmland.",
        icon: FaTint,
        description: `Spread across 63 acres of fertile land, Lake View Farms is a thoughtfully designed managed farmland.`
    },
    {
        title: "IBBANI",
        badge: "IBBANI FARMS",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/fm7.webp",
        shortDesc: "A peaceful living experience defined by simplicity, space, and a deeper connection with nature.",
        icon: FaSeedling,
        description: `A peaceful living experience defined by simplicity, space, and a deeper connection with nature.`
    },
    {
        title: "Marwar Aangan Farms",
        badge: "MARWAR AANGAN",
        image: "/projects/Marwar Aangan Farms.webp",
        shortDesc: "Rooted in tradition and simplicity, a space that blends cultural warmth with natural living.",
        icon: FaHome,
        description: `Rooted in tradition and simplicity, a space that blends cultural warmth with natural living.`
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
            {/* Top Leaf Accent Decorator */}
            <div 
                className="position-absolute d-none d-lg-block" 
                style={{ top: '20px', left: '20px', opacity: 0.08, pointerEvents: 'none' }}
            >
                <FaLeaf size={100} style={{ color: '#114934' }} />
            </div>

            {/* Top Right Leaf Accent Decorator */}
            <div 
                className="position-absolute d-none d-lg-block" 
                style={{ top: '10px', right: '30px', opacity: 0.12, transform: 'rotate(45deg)', pointerEvents: 'none' }}
            >
                <FaLeaf size={140} style={{ color: '#114934' }} />
            </div>

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
                        Carefully planned farmlands and nature-rich communities designed for peaceful living and long-term value.
                    </p>
                </div>

                {/* Grid Cards of Projects */}
                <Row className="g-4 mb-5">
                    {displayedProjects.map((project, index) => {
                        const IconComponent = project.icon || FaLeaf;
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

                                        {/* Overlapping Gold Circular Icon Badge */}
                                        <div 
                                            className="rounded-circle d-flex align-items-center justify-content-center bg-white shadow-sm"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                border: '2px solid #c5a059',
                                                color: '#114934',
                                                position: 'absolute',
                                                bottom: '-25px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                zIndex: 3
                                            }}
                                        >
                                            <IconComponent size={22} />
                                        </div>
                                    </div>

                                    {/* Card Content body */}
                                    <Card.Body className="pt-5 px-4 pb-4 d-flex flex-column text-center flex-grow-1">
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
                                        <div 
                                            className="mb-4 text-secondary lh-lg" 
                                            style={{ whiteSpace: 'pre-line' }} 
                                            dangerouslySetInnerHTML={{ 
                                                __html: selectedProject.description.replace(/<strong>/g, '<strong class="fw-bold fs-5 text-dark mt-3 mb-1 d-block">') 
                                            }} 
                                        />
                                        <div className="d-flex flex-column gap-2 mt-4 pt-3 border-top">
                                            <p className="mb-0 fw-bold">
                                                <FaPhoneAlt className="me-2 text-sanjeevani" /> 
                                                <a href="tel:+919986410709" className="text-decoration-none text-dark">+91 99864 10709</a>
                                            </p>
                                            <p className="mb-0 fw-bold">
                                                <FaEnvelope className="me-2 text-sanjeevani" /> 
                                                <a href="mailto:info@svrfarms.com" className="text-decoration-none text-dark">info@svrfarms.com</a>
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0 justify-content-center pb-4">
                    <Button variant="secondary" className="px-4" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}
