'use client';

import { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';

const projects = [
    {
        title: "Tamara Valley",
        image: "/projects/Tamara Valley (Upcoming).webp",
        shortDesc: "A 300-acre managed farmland community offering nature-led living.",
        description: `Tamara Valley is a premium managed farmland community near Bangalore, spread across 300+ acres of beautifully maintained green landscapes. It is designed for those who seek the calm of a weekend retreat while enjoying the ease of professionally managed farmland.
Here, you own the land while every essential detail is seamlessly taken care of—irrigation, landscaping, and organic cultivation. It’s a space where nature thrives without demanding your time. Whether it’s a weekend escape, a long-term investment, or simply a place to slow down, Tamara Valley offers effortless access to nature. More than just land, it is a thoughtfully created countryside experience, close to Bangalore and completely cared for.`
    },
    {
        title: "Vaikuntam",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/farmland-9.webp",
        shortDesc: "A serene farmland retreat designed for peaceful living.",
        description: `<strong>Overview</strong>
Escape to Vaikuntam Farmland, a refined countryside retreat set across 55 acres of beautifully curated farmland near Bangalore. It is a place where understated luxury meets the quiet elegance of nature. Spend time at our intimate restaurant, unwind beneath swaying trees, and experience the calm of thoughtfully maintained green spaces. Discover a setting where comfortable cottages offer privacy and ease, surrounded by a landscape designed for peaceful living. Vaikuntam Farmland brings together leisure and the outdoors in a way that feels effortless, offering a serene escape just a short drive from Bangalore.
<strong>Picture rising to a field of green.</strong>
A vast expanse of vibrant green unfolds as you arrive, gently revealing itself beyond a soft incline. The experience invites you to slow down, to walk barefoot across the smooth stretch of grass, and to take in the quiet beauty around you. A light breeze carries the natural scent of the earth, while the warmth of the sun settles softly across the landscape, creating a space that feels calm, grounded, and deeply restorative.
<strong>Embracing the Beats of Agriculture Life</strong>
Step into the gentle rhythm of agricultural life that surrounds you. Each morning begins with soft light falling across the fields, highlighting the quiet dedication behind every harvest. The subtle hum of activity, the growth of fresh crops, and the movement of the breeze come together to create a living, breathing landscape. It is not just a setting, but an experience—one that celebrates the connection between land, care, and the simple beauty of nature.`
    },
    {
        title: "TAPOVAN",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/Tapovan-by-SVR-Farms.webp",
        shortDesc: "A tranquil environment where simplicity, serenity, and spiritual living naturally align.",
        description: `<strong>Overview</strong>
Set across 63 acres of fertile land, Tapovan Farms is a thoughtfully designed managed farmland community where simplicity, serenity, and mindful living come together. Surrounded by mango orchards, timber plantations, a natural lake, and curated vegetable gardens, it blends the comforts of a luxury home with the charm of farm life. Located in Thally, just a short drive from Bangalore, Tapovan Farms offers a peaceful escape from the city’s pace. With meditation zones, Zen gardens, yoga spaces, and lakeside walkways, every element is crafted to restore balance, offering a space where you can unwind, reconnect, and experience life at a slower, more meaningful rhythm.
<strong>Million diamond view of sea green</strong>
Wake up to an uninterrupted expanse of lush green that stretches as far as the eye can see. As the morning light gently settles over the landscape, the surroundings come alive with a quiet sense of calm and clarity. Overlooking thriving orchards and open fields, the view becomes a daily reminder of the simplicity and beauty of nature. At Tapovan Farms, this experience isn’t occasional - it’s a part of everyday living, where each sunrise brings a renewed sense of peace, space, and connection.
<strong>Gasp in the aromatic rhythms of farm life at Tapovan farms</strong>
Step into an environment where nature and mindful living exist in harmony. Walk through timber plantations, breathe in the freshness of the air, and experience the quiet richness of a landscape that evolves with every season. From exploring vegetable gardens to simply pausing under the shade of trees, every moment invites you to slow down and reconnect. Here, life moves with intention - grounded, balanced, and deeply connected to the land, creating a lifestyle that feels both enriching and effortlessly serene.`
    },
    {
        title: "Vasudha Kalpataru",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/farmland-9.webp",
        shortDesc: "A thoughtfully nurtured farmland space where fertile land and natural beauty come together in harmony.",
        description: `<strong>Overview</strong>
Escape to Vasudha Kalpataru, a picturesque managed farmland community set across 44 acres of lush, curated landscapes near Bangalore. It is a place where natural beauty meets quiet sophistication. Surrounded by swaying trees and open green spaces, every element is designed to offer a sense of calm and ease. Enjoy curated experiences, from relaxing by the pool to dining at a thoughtfully designed restaurant, all within a setting that feels both refined and grounded. With cozy cottages and a landscape shaped for comfort, Vasudha Kalpataru brings together nature and leisure in a way that feels effortless and complete.
<strong>Imagine waking up to a sea of green</strong>
Wake up to an uninterrupted stretch of lush greenery that greets you with calm and clarity. As the first light of the day gently spreads across the landscape, the surroundings come alive with a quiet, natural rhythm. Overlooking fields and orchards, the view becomes more than a moment - it becomes part of your everyday experience. At Vasudha Kalpataru, nature isn’t something you visit; it’s something you wake up to, offering a sense of stillness and connection that stays with you throughout the day.
<strong>Embrace the Rhythms of Farm Life</strong>
Step into a lifestyle shaped by simplicity, balance, and a deeper connection to the land. Each morning begins with soft light over the fields, while the gentle movement of nature sets the tone for the day. Surrounded by greenery and open spaces, you are invited to slow down and experience life with intention. It’s a setting that blends comfort with authenticity, offering a peaceful escape from the pace of the city while keeping you connected to what truly matters.`
    },
    {
        title: "H₂O Farms",
        image: "/projects/H2O Farms.webp",
        shortDesc: "Designed around efficient water management, ensuring sustainable farming with reliable resources.",
        description: `H₂O Farms by Little England is a thoughtfully planned 66+ acre managed farmland community built around water conservation, ecological balance, and long-term value. Designed with purpose, the project integrates rainwater harvesting, groundwater recharge, and efficient irrigation systems to create a resilient and future-ready landscape.
H₂O redefines farmland ownership by aligning environmental responsibility with intelligent asset growth. It offers a rare opportunity to invest in a space where sustainability and long-term appreciation work hand in hand, creating enduring value that is both responsible and rewarding.`
    },
    {
        title: "Shivalik Hill",
        image: "/projects/Shivalik Hill Managed Farmland.webp",
        shortDesc: "Set amidst elevated landscapes, offering scenic hill views and a refreshing connection to nature.",
        description: `<strong>Overview</strong>
Step away from the constant rush and demands of city life and discover a more balanced way of living. Shivalik Hill is designed to offer a refined and immersive farm experience, where nature and comfort come together effortlessly. Set in a serene landscape, it allows you to disconnect from the noise of urban living and reconnect with a slower, more meaningful rhythm. With thoughtfully planned amenities and a focus on ease, it brings together the calm of nature with the comfort of modern living.
<strong>Experience Tranquility at Shivalik Hill Farmland</strong>
Discover a setting where every detail is designed for relaxation and comfort. From a cozy restaurant and warm hospitality to curated outdoor experiences, the environment invites you to unwind at your own pace. Enjoy open spaces for camping, bonfires, and quiet moments surrounded by nature. With expansive landscapes and peaceful surroundings, Shivalik Hill offers a space where you can reconnect, recharge, and create lasting memories in a setting that feels both natural and refined.
<strong>Embrace Tranquil Environment</strong>
Experience a lifestyle shaped by calm, openness, and connection to nature. Spend your mornings taking in scenic views, your evenings unwinding in thoughtfully designed outdoor spaces, and your time enjoying moments that feel unhurried. With dedicated areas for leisure, gathering, and relaxation, every element is created to enhance your experience. Surrounded by greenery and open skies, it becomes a place where comfort, simplicity, and nature come together seamlessly.`
    },
    {
        title: "Madhuvan Farms",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/farmland-9.webp",
        shortDesc: "Just a short drive from Bangalore lies an expansive organic managed farmland.",
        description: `<strong>Overview</strong>
Just a short drive from Bangalore lies an expansive organic managed farmland designed around natural abundance and long-term sustainability. Spread across 120 acres, it features a thriving 40-acre pre-developed food forest, lush mango orchards, a serene natural lake, and a diverse mix of fruit and timber trees. Thoughtfully planned spaces, including a spacious clubhouse, add to the overall experience. With over 50 species of birds inhabiting the landscape and misty mornings enhancing its charm, this is a place where nature feels alive, immersive, and deeply restorative.
<strong>Enchanted view of blues above greens beneath</strong>
Experience a seamless blend of open skies and vibrant greenery that unfolds in every direction. As sunlight filters through the landscape, the contrast of deep greens and clear blue skies creates a setting that feels both calming and expansive. At Madhuvan Farms, every view is designed to reconnect you with nature, offering a sense of clarity and stillness that stays with you. It’s not just a visual experience, but a feeling of being completely present within a landscape that evolves with every moment.
<strong>Embrace the essence of organic living at Madhuvan Farms</strong>
Step into a space where nature and mindful living come together in perfect balance. Feel the warmth of the sun across open fields, the richness of the soil beneath your feet, and the quiet rhythm of life unfolding around you. Every element is rooted in sustainability and natural growth, creating an environment that feels authentic and grounded. At Madhuvan Farms, it’s more than just a setting - it’s a way of living that celebrates simplicity, connection, and the enduring beauty of the land.`
    },
    {
        title: "Gokulam Farmland",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/fm7.webp",
        shortDesc: "A thoughtfully planned managed farmland community by Little England.",
        description: `<strong>Overview</strong>
Gokulam Farmland is a thoughtfully planned managed farmland community by Little England, located in the scenic town of Thalli, just 50 minutes from Electronic City, Bangalore. Whether you’re seeking a peaceful weekend retreat, a nature-led second home, or a long-term investment, it offers a balanced blend of connectivity, tranquility, and future growth.
More than just land, Gokulam Farmland is a curated lifestyle experience designed around nature and ease. Set amidst the calm surroundings of Thalli, it brings together rural charm and urban accessibility, offering a rare opportunity to own managed farmland that feels both grounded and refined.
Each plot is carefully designed to provide the freedom of ownership along with the ease of professional farm management. Experience the joy of watching your land evolve and flourish - without the demands of daily operations.
Whether you’re an investor focused on long-term appreciation, a city dweller seeking weekend calm, or someone drawn to a nature-centric lifestyle, Gokulam Farmland adapts to your vision. With clear legal titles, rich natural surroundings, and expert land development, it stands as a meaningful choice for both personal and financial growth.
What enhances the experience further is that it is managed by Little England - a name known for thoughtfully developing eco-conscious farmland communities with a focus on transparency, quality, and long-term value.
<strong>Fully Managed Farmland Experience</strong>
We take care of your land, so you can simply enjoy the ownership:
Plantation of mango, teak, coconut, and other native trees.
Efficient drip irrigation systems for optimized water use.
Dedicated caretakers ensuring consistent maintenance.
Optional revenue opportunities through managed produce.
A seamless ownership experience without operational concerns.
Enjoy the satisfaction of owning farmland, without the responsibilities of managing it.
<strong>Why Choose Gokulam Farmland?</strong>
✔ Just 50 minutes from Electronic City, Bangalore.
✔ Fully managed with plantation and ongoing maintenance.
✔ Clear legal titles and complete documentation.
✔ Fertile land, pleasant climate, and scenic surroundings.
✔ Developed by Little England, known for trusted projects.
✔ A perfect blend of eco-living and modern comfort.`
    },
    {
        title: "Kamyaka Woods",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/Tapovan-by-SVR-Farms.webp",
        shortDesc: "Explore a refined opportunity to own agricultural land near Hosur.",
        description: `<strong>Overview</strong>
Explore a refined opportunity to own agricultural land near Hosur, thoughtfully designed for both lifestyle and long-term value. Set amidst a lush green Miyawaki forest, with access to high-speed internet and uninterrupted power, this managed farmland near Bangalore offers a rare balance of nature and modern convenience. Surrounded by natural water bodies, the environment feels calm, private, and deeply connected to the landscape.
Kamyaka Woods spans across 15 acres in the scenic Gumalapuram Valley, creating an ideal setting for those looking to invest in a space that blends sustainability, connectivity, and tranquility. More than just farmland, it is an opportunity to own a well-planned natural retreat - where thoughtful development meets the quiet luxury of green living.`
    },
    {
        title: "Green Vista",
        image: "/projects/Green Vista.webp",
        shortDesc: "Lush green surroundings crafted for peaceful escapes and sustainable farm living.",
        description: `<strong>Overview</strong>
Welcome to a thoughtfully crafted countryside retreat at Green Vista by Little England, where nature and design come together in perfect balance. Set within a serene landscape, this well-planned farmland offers the ideal setting to create your own space amidst greenery. Whether you seek a quiet escape from the pace of the city or a long-term investment rooted in nature, it presents an opportunity to experience rural living with ease, comfort, and purpose.
<strong>Vast and Well-Plotted Land With Scenic Views</strong>
Spanning over 25 acres, Green Vista offers spacious plots designed to give you the freedom to shape your vision. Whether it’s a weekend retreat or a nature-led lifestyle, the setting adapts effortlessly to your needs. Wake up to open skies and expansive green views, and unwind in a landscape defined by rolling terrain and natural beauty. Every detail is planned to offer a sense of space, clarity, and uninterrupted connection with the surroundings.
<strong>Embrace Tranquil Environment</strong>
Experience a lifestyle defined by calm, purity, and connection to nature. Surrounded by clean air and soothing natural sounds, each day unfolds at a relaxed and steady pace. The land supports a range of possibilities, from organic cultivation to personal retreats, with fertile soil and reliable resources. With well-planned infrastructure, accessible roads, and essential utilities in place, Green Vista ensures that your transition into farmland living feels seamless, comfortable, and truly fulfilling.`
    },
    {
        title: "Sanjeevani Farms",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/Sanjeevani-Farms-by-SVR-Farms.webp",
        shortDesc: "A revitalizing farmland space that captures the essence of rural living and natural well-being.",
        description: `<strong>Overview</strong>
Set within a serene and well-connected landscape, this managed farmland community by Little England is designed to simplify land ownership while ensuring long-term value. With a strong focus on transparency, legal clarity, and structured development, the project offers a seamless experience for those looking to invest in farmland with confidence.
Backed by deep local expertise and a well-established network, Little England ensures that every aspect - from land selection to documentation and management - is handled with precision and care. The result is a process that feels smooth, secure, and thoughtfully guided at every step.
Whether you are exploring farmland as an investment, a weekend retreat, or a nature-led lifestyle choice, this project is built to remove complexity and enhance ease. It brings together trust, expertise, and well-planned development to create an experience that is both reliable and rewarding.`
    },
    {
        title: "Lake View Farm",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/farmland-9.webp",
        shortDesc: "Spread across 63 acres of fertile land, Lake View Farms is a thoughtfully designed managed farmland.",
        description: `<strong>Overview</strong>
Spread across 63 acres of fertile land, Lake View Farms is a thoughtfully designed managed farmland community where simplicity, serenity, and mindful living come together. Surrounded by mango orchards, timber plantations, a natural lake, and curated vegetable gardens, it offers a balanced blend of rural charm and modern comfort. Located in Thally, just a short drive from Bangalore, the project is designed to provide a peaceful escape from the city while remaining well connected. With meditation zones, landscaped walkways, and open green spaces, Lake View Farms creates an environment that encourages relaxation, clarity, and a deeper connection to nature.
<strong>Imagine waking up to a sea of green</strong>
Wake up to expansive views of lush greenery that stretch across the landscape, creating a sense of calm from the very first light of day. As sunlight gently moves across the fields and orchards, the surroundings come alive with a quiet, natural rhythm. At Lake View Farms, this isn’t just a moment - it becomes part of your everyday living experience, offering a sense of openness, stillness, and connection that stays with you throughout the day.
<strong>Embrace the Rhythms of Farm Life</strong>
Step into a lifestyle shaped by balance, sustainability, and a closer connection to the land. Walk through timber plantations, explore curated gardens, and experience the richness of a landscape that evolves with every season. Each element is designed to bring you closer to nature while maintaining comfort and ease. At Lake View Farms, life moves at a more intentional pace - grounded, fulfilling, and deeply connected to the cycles of the natural world.`
    },
    {
        title: "IBBANI",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/fm7.webp",
        shortDesc: "A peaceful living experience defined by simplicity, space, and a deeper connection with nature.",
        description: `<strong>Overview</strong>
Spread across 63 acres of fertile land, IBBANI Farms is a thoughtfully designed managed farmland community where simplicity, serenity, and mindful living come together. Surrounded by mango orchards, timber plantations, a natural lake, and curated vegetable gardens, it offers a seamless blend of rural charm and modern comfort. Located in Thally, just a short drive from Bangalore, the project is designed to provide a peaceful escape while remaining well connected. With meditation zones, landscaped pathways, and open green spaces, IBBANI Farms creates an environment that encourages relaxation, clarity, and a deeper connection to nature.
<strong>Imagine waking up to a sea of green in IBBANI</strong>
Wake up to expansive views of lush greenery that stretch across the landscape, creating a sense of calm from the very first light of day. As sunlight gently moves across the orchards and fields, the surroundings come alive with a quiet, natural rhythm. At IBBANI Farms, this isn’t just a moment - it becomes part of your everyday living experience, offering a sense of openness, stillness, and connection that stays with you throughout the day.
<strong>Embrace the Rhythms of Farm Life</strong>
Step into a lifestyle shaped by balance, sustainability, and a closer connection to the land. Walk through timber plantations, explore curated gardens, and experience the richness of a landscape that evolves with every season. Every element is designed to bring you closer to nature while maintaining comfort and ease. At IBBANI Farms, life moves at a more intentional pace - grounded, fulfilling, and deeply connected to the cycles of the natural world.`
    },
    {
        title: "Silver Woods",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/fm7.webp",
        shortDesc: "A thoughtfully designed managed farmland community offering an accessible entry into farmland ownership.",
        description: `<strong>Overview</strong>
Introducing Silver Woods, a thoughtfully designed managed farmland community by Little England. Created to offer an accessible entry into farmland ownership, the project combines sustainability, simplicity, and professionally managed ease within a calm natural setting. It is designed for those who seek a balanced lifestyle - where nature, comfort, and long-term value come together seamlessly.
<strong>Embracing Sustainability</strong>
At Silver Woods, sustainability is not just a concept but a guiding principle. The project focuses on responsible land use and long-term ecological balance through structured agroforestry and thoughtful cultivation practices. By integrating efficient farming techniques and environmentally conscious methods, the land is nurtured to grow and evolve over time. Every element is designed to support a harmonious relationship between nature and agriculture, creating a space that is both productive and environmentally responsible.
<strong>Affordable Farm Lifestyle</strong>
Silver Woods offers a farm lifestyle that is both accessible and enriching. Designed to balance simplicity with comfort, it creates an environment where you can experience the calm of nature without compromising on convenience. The thoughtfully planned farmland and managed ecosystem ensure a peaceful living experience, allowing you to reconnect with nature while staying within reach of modern needs. It is an opportunity to enjoy the essence of farm living in a way that feels practical, fulfilling, and well within reach.
<strong>Hassle-Free Management at Silver Woods</strong>
Ownership at Silver Woods is designed to be effortless. A dedicated team manages every aspect of the farmland, from plantation and upkeep to day-to-day operations, ensuring a smooth and worry-free experience. With professional oversight and structured processes in place, you can enjoy the benefits of farmland ownership without being involved in the complexities of management. It is a seamless approach that allows you to focus on the experience, while everything else is taken care of.`
    },
    {
        title: "Amrutvan",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/Tapovan-by-SVR-Farms.webp",
        shortDesc: "Spread across a lush expanse of fertile land, Amrutvan Farms is a thoughtfully designed managed farmland community.",
        description: `<strong>Overview</strong>
Spread across a lush expanse of fertile land, Amrutvan Farms is a thoughtfully designed managed farmland community where simplicity, serenity, and mindful living come together. Surrounded by mango orchards, timber plantations, a natural lake, and curated green spaces, it offers a refined blend of rural charm and modern comfort. Located in Thally, within easy reach of Bangalore, the project provides a peaceful escape from the pace of the city while remaining well connected. With meditation zones, landscaped pathways, and open natural surroundings, Amrutvan Farms creates an environment that encourages relaxation, clarity, and a deeper connection to nature.
<strong>Imagine waking up to a sea of green</strong>
Wake up to expansive views of lush greenery that stretch across the landscape, setting the tone for a calm and grounded start to your day. As sunlight moves gently across the orchards and fields, the surroundings come alive with a quiet, natural rhythm. At Amrutvan Farms, this becomes more than just a moment - it becomes a part of everyday living, offering a sense of openness, stillness, and connection that stays with you throughout the day.
<strong>Embrace the Rhythms of Farm Life</strong>
Step into a lifestyle shaped by balance, sustainability, and a closer connection to the land. Walk through timber plantations, explore curated gardens, and experience the richness of a landscape that evolves with every season. Every element is designed to bring you closer to nature while maintaining comfort and ease. At Amrutvan Farms, life moves at a more intentional pace - grounded, fulfilling, and deeply connected to the natural cycle of growth and renewal.`
    },
    {
        title: "Amaya Farm",
        image: "/projects/Amaya Farm Villa Plot.webp",
        shortDesc: "A refined blend of farmhouse living and open green landscapes, designed for comfort and calm.",
        description: `<strong>Overview</strong>
Amaya Villa is a gated farmland community designed to offer a refined blend of nature, privacy, and long-term value. Located in Ulimaranapalli, a scenic and well-connected region in Tamil Nadu, it presents an opportunity to own farmland within a thoughtfully planned setting. Surrounded by lush greenery and a variety of fruit-bearing trees such as mango, chikoo, and jackfruit, the landscape is designed to create a sense of abundance and natural living.
With seamless connectivity, including easy access from Silk Board within a comfortable drive, Amaya Villa balances peaceful surroundings with urban convenience. Whether envisioned as a weekend retreat, a nature-led lifestyle, or a long-term investment, it offers a setting that adapts to your needs while maintaining a calm and structured environment.
Designed with a focus on simplicity and ease, the project ensures a smooth ownership experience backed by professional planning and support. It is a space where you can enjoy the benefits of farmland living - without the complexity - while staying connected to both nature and future growth potential.`
    },
    {
        title: "Sangam farms",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/farmland-9.webp",
        shortDesc: "A gated managed farmland community set in Averupally, Tamil Nadu.",
        description: `<strong>Overview</strong>
Sangam Farms is a gated managed farmland community set in Averupally, Tamil Nadu, designed to offer a balanced blend of nature, privacy, and long-term value. Surrounded by open landscapes and a variety of fruit-bearing trees such as mango, chikoo, and jackfruit, the project creates an environment rooted in natural living and simplicity.
Thoughtfully planned to provide both comfort and flexibility, Sangam Farms offers an ideal setting for those looking to own farmland within a structured and well-managed community. Whether envisioned as a weekend retreat, a nature-led lifestyle, or a long-term investment, it adapts seamlessly to different aspirations while maintaining a calm and connected environment.
With a focus on ease of ownership and planned development, the project ensures a smooth and hassle-free experience. It brings together the charm of rural living with the convenience of a managed ecosystem, creating a space where you can enjoy farmland ownership with clarity, comfort, and long-term potential.`
    },
    {
        title: "Govardhana Estate",
        image: "https://svrfarms.com/wp-content/uploads/2023/08/Sanjeevani-Farms-by-SVR-Farms.webp",
        shortDesc: "A thoughtfully developed managed farmland community designed to simplify ownership.",
        description: `<strong>Overview</strong>
Govardhana Estate is a thoughtfully developed managed farmland community designed to simplify ownership while ensuring long-term value. Located in a well-connected and naturally rich region, the project focuses on delivering a seamless and structured experience for those looking to invest in farmland with clarity and confidence.
With a strong emphasis on transparency, legal assurance, and professional management, Govardhana Estate is built to remove the typical complexities associated with farmland acquisition. From land selection to documentation and ongoing support, every aspect is handled with precision, ensuring a smooth and reliable process.
Whether you are exploring farmland as an investment, a weekend retreat, or a nature-led lifestyle, Govardhana Estate offers a balanced approach that combines trust, expertise, and well-planned development. It is a space designed to provide not just ownership, but a secure and rewarding experience aligned with long-term growth.`
    },
    {
        title: "Marwar Aangan Farms",
        image: "/projects/Marwar Aangan Farms.webp",
        shortDesc: "Rooted in tradition and simplicity, a space that blends cultural warmth with natural living.",
        description: `Rooted in tradition and simplicity, a space that blends cultural warmth with natural living.`,
        isHidden: true
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

    const displayedProjects = projects.filter(p => !p.isHidden);

    return (
        <Container className="py-5" id="projects">
            <SectionTitle title="Our Projects" subtitle="Discover Your Dream Farm" />
            <Row className="g-4">
                {displayedProjects.map((project, index) => (
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
                                        <div className="mb-4 text-secondary lh-lg" style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: selectedProject.description.replace(/<strong>/g, '<strong class="fw-bold fs-5 text-dark mt-3 mb-1 d-block">') }} />
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
