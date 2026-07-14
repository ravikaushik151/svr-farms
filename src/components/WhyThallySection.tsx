'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCloudSun, FaIndustry, FaRoad, FaLeaf } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const items = [
    {
        number: "01",
        icon: FaMapMarkerAlt,
        title: "Close Enough to Actually Use",
        description: "50 km from Silk Board and 25 km from Hosur. Close enough for a genuine weekend retreat, not a long expedition."
    },
    {
        number: "02",
        icon: FaCloudSun,
        title: "A Climate That Does the Work",
        description: "At around 1,000 feet elevation, Thally stays misty and cool. Ideal for organic farming and off-grid cottage living."
    },
    {
        number: "03",
        icon: FaIndustry,
        title: "Hosur's Industrial Boom, Next Door",
        description: "Tata Electronics, TVS, and Ather are expanding operations. Thally is the natural overflow zone for rising land demand."
    },
    {
        number: "04",
        icon: FaRoad,
        title: "Funded Infrastructure",
        description: "Moving projects like Namma Metro extension to Hosur, STRR (NH-948A) ring road, and planned Greenfield Airport."
    }
];

export default function WhyThallySection() {
    return (
        <section
            className="py-5 position-relative"
            style={{
                backgroundColor: '#fcfbf7', // Premium warm cream background
                overflow: 'hidden'
            }}
        >
            {/* Subtle floating leaves on the right edge */}
            <div
                className="position-absolute d-none d-lg-block"
                style={{ right: '-20px', top: '15%', opacity: 0.1, pointerEvents: 'none' }}
            >
                <FaLeaf size={140} style={{ color: '#114934' }} />
            </div>

            <Container className="py-lg-4 position-relative">

                {/* Top Section: Split Crop Image & Title Header */}
                <Row className="align-items-center mb-5">
                    {/* Left Side: Artistic Golden-Clipped Circular Crop Image */}
                    <Col lg={4} className="d-none d-lg-block position-relative">
                        <div
                            style={{
                                width: '320px',
                                height: '320px',
                                borderRadius: '50%',
                                borderRight: '4px solid #c5a059',
                                borderTop: '4px solid #c5a059',
                                borderBottom: '4px solid #c5a059',
                                overflow: 'hidden',
                                marginLeft: '0',
                                boxShadow: '5px 5px 20px rgba(0,0,0,0.08)',
                                position: 'relative'
                            }}
                        >
                            <Image
                                src="/Home_opt2.webp"
                                alt="Misty Thally Valley landscape view"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                            />
                        </div>
                    </Col>

                    {/* Right Side: Header and Description */}
                    <Col lg={8} className="text-center text-lg-start">
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-2">
                            <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                            <h6 className="text-uppercase letter-spacing-2 mb-0 small fw-bold" style={{ color: '#c5a059', fontSize: '0.8rem' }}>
                                The SVR Farms Advantage
                            </h6>
                            <span style={{ width: '30px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        </div>

                        <h2
                            className="display-4 fw-bold mb-3"
                            style={{
                                fontFamily: '"Playfair Display", "Georgia", serif',
                                fontSize: '3rem'
                            }}
                        >
                            <span style={{ color: '#114934' }}>Why </span>
                            <span style={{ color: '#c5a059' }}>Thally?</span>
                        </h2>

                        <div className="d-flex justify-content-center justify-content-lg-start mb-4">
                            <FaLeaf size={18} style={{ color: '#114934' }} />
                        </div>

                        <p
                            className="text-muted lh-lg mb-0"
                            style={{
                                fontSize: '1.05rem',
                                maxWidth: '780px',
                                margin: '0 auto',
                                marginLeft: 'lg-0'
                            }}
                        >
                            Thally sits just over the Karnataka border in the scenic valleys of Krishnagiri.
                            British planters found it so cool and green they called it <strong>“Little England”</strong>.
                            With hills at 1,000 feet elevation, misty weather, and booming infrastructure nearby, it represents the ideal blend of peace, accessibility, and high appreciation value.
                        </p>
                    </Col>
                </Row>

                {/* Middle Section: 4 Interactive Cards */}
                <Row className="g-4 mb-5">
                    {items.map((item, index) => (
                        <Col key={index} xs={12} sm={6} lg={3}>
                            <Link href="/why-thally" className="text-decoration-none h-100 d-block">
                                <Card
                                    className="border-0 shadow-sm text-center rounded-4 position-relative hover-lift bg-white h-100 overflow-hidden"
                                    style={{
                                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {/* Card Header graphic gradient mask */}
                                    <div
                                        style={{
                                            height: '90px',
                                            backgroundImage: 'linear-gradient(to bottom, rgba(17, 73, 52, 0.05), transparent)',
                                            position: 'relative'
                                        }}
                                    >
                                        {/* Golden-bordered icon ring */}
                                        <div
                                            className="position-absolute start-50 translate-middle-x rounded-circle d-flex align-items-center justify-content-center text-white"
                                            style={{
                                                width: '56px',
                                                height: '56px',
                                                backgroundColor: '#114934',
                                                border: '3px solid #c5a059',
                                                top: '55px',
                                                boxShadow: '0 3px 10px rgba(17, 73, 52, 0.2)'
                                            }}
                                        >
                                            <item.icon size={22} />
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <Card.Body className="pt-5 px-3 pb-4">
                                        {/* Card Number */}
                                        <div
                                            className="small fw-bold mb-1"
                                            style={{ color: '#c5a059', fontFamily: '"Playfair Display", serif', fontSize: '0.95rem' }}
                                        >
                                            {item.number}
                                        </div>

                                        {/* Title */}
                                        <h4
                                            className="fw-bold mb-3 px-1 text-dark"
                                            style={{
                                                fontSize: '0.88rem',
                                                letterSpacing: '1px',
                                                lineHeight: '1.4',
                                                minHeight: '40px',
                                                textTransform: 'uppercase'
                                            }}
                                        >
                                            {item.title}
                                        </h4>

                                        {/* Leaf divider */}
                                        <div className="d-flex justify-content-center mb-3">
                                            <FaLeaf size={10} style={{ color: '#c5a059' }} />
                                        </div>

                                        {/* Description */}
                                        <p className="text-muted small lh-relaxed mb-3" style={{ fontSize: '0.82rem' }}>
                                            {item.description}
                                        </p>

                                        {/* Know More Action Link */}
                                        <div
                                            className="fw-bold text-uppercase mt-auto text-success"
                                            style={{ fontSize: '0.78rem', letterSpacing: '0.5px' }}
                                        >
                                            Know More &rarr;
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>

                {/* Bottom Section: Clickable Solid Green Banner */}
                <Link href="/why-thally" className="text-decoration-none d-block">
                    <div
                        className="p-3 rounded-3 text-white d-flex align-items-center justify-content-center hover-lift position-relative overflow-hidden"
                        style={{
                            backgroundColor: '#114934',
                            boxShadow: '0 4px 15px rgba(17, 73, 52, 0.25)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {/* Leaf pattern overlays on bottom bar */}
                        <div className="position-absolute start-0 opacity-10 d-none d-md-block" style={{ transform: 'rotate(45deg)' }}>
                            <FaLeaf size={45} />
                        </div>
                        <div className="position-absolute end-0 opacity-10 d-none d-md-block" style={{ transform: 'rotate(-45deg)' }}>
                            <FaLeaf size={45} />
                        </div>

                        <div className="d-flex align-items-center gap-3 text-center px-3 z-1">
                            <FaLeaf style={{ color: '#c5a059' }} size={16} />
                            <span
                                className="fw-semibold letter-spacing-1 text-uppercase"
                                style={{ fontSize: '0.92rem', fontFamily: '"Playfair Display", serif' }}
                            >
                                Thally is not just a location. It’s a head start on your future.
                            </span>
                            <FaLeaf style={{ color: '#c5a059' }} size={16} />
                        </div>
                    </div>
                </Link>

            </Container>
        </section>
    );
}
