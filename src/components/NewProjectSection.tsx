'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
    FaLeaf, 
    FaSeedling, 
    FaLock, 
    FaMap, 
    FaTag, 
    FaMapMarkerAlt, 
    FaBuilding, 
    FaFileContract, 
    FaShieldAlt 
} from 'react-icons/fa';
import Image from 'next/image';

export default function NewProjectSection() {
    return (
        <section 
            className="py-5 position-relative"
            style={{
                backgroundColor: '#fcfbf7', // Premium warm cream background
                overflow: 'hidden'
            }}
        >
            {/* Top Left Leaf Accent Decorator */}
            <div 
                className="position-absolute d-none d-lg-block" 
                style={{ top: '20px', left: '20px', opacity: 0.1, pointerEvents: 'none' }}
            >
                <FaLeaf size={90} style={{ color: '#114934' }} />
            </div>

            <Container className="py-lg-5 position-relative">
                <Row className="gy-5 align-items-center">
                    
                    {/* Left Column: Title Header & Landscaping Image Card */}
                    <Col lg={6} className="pe-lg-4 text-center text-lg-start">
                        {/* Project Highlight Badge */}
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-3">
                            <FaLeaf size={14} style={{ color: '#c5a059' }} />
                            <h6 
                                className="text-uppercase letter-spacing-2 mb-0 small fw-bold"
                                style={{ color: '#c5a059', fontSize: '0.8rem' }}
                            >
                                Project Highlight
                            </h6>
                            <span style={{ width: '40px', height: '1px', backgroundColor: 'rgba(197, 160, 89, 0.4)' }}></span>
                        </div>

                        {/* Title Heading */}
                        <h2 
                            className="display-4 fw-bold mb-2 text-sanjeevani"
                            style={{ 
                                fontFamily: '"Playfair Display", "Georgia", serif',
                                fontSize: '3rem'
                            }}
                        >
                            TAMARA VALLEY
                        </h2>

                        {/* Tagline */}
                        <h5 
                            className="text-uppercase letter-spacing-2 mb-4 fw-semibold"
                            style={{ color: '#c5a059', fontSize: '0.92rem' }}
                        >
                            The One We'd Show You First
                        </h5>

                        {/* Copy details */}
                        <p className="text-muted lh-lg mb-4" style={{ fontSize: '0.98rem' }}>
                            Three hundred acres, one gate, one standard. <br />
                            If someone asks what Little England looks like at full scale, this is the answer we point to.
                        </p>

                        {/* Landscaping Aerial Image Frame with Overlay Pill Box */}
                        <div 
                            className="position-relative rounded-4 overflow-hidden shadow-sm"
                            style={{
                                height: '360px',
                                border: '1.5px solid rgba(197, 160, 89, 0.2)'
                            }}
                        >
                            <Image 
                                src="/projects/Tamara Valley (Upcoming).webp" 
                                alt="Tamara Valley sunset aerial layout view"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                            />

                            {/* Overlapping Triple Highlight Overlay Pill Box */}
                            <div 
                                className="position-absolute z-2 py-3 px-4 rounded-4 shadow-sm"
                                style={{
                                    backgroundColor: 'rgba(17, 73, 52, 0.95)',
                                    border: '1.5px solid rgba(197, 160, 89, 0.5)',
                                    width: '90%',
                                    bottom: '20px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
                                }}
                            >
                                <Row className="text-center align-items-center g-2 text-white">
                                    <Col xs={4} className="border-end border-white-50">
                                        <div className="d-flex flex-column align-items-center">
                                            <FaSeedling className="mb-2" size={16} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.5px' }} className="text-uppercase text-white-80">Managed Organic Farmland</span>
                                        </div>
                                    </Col>
                                    
                                    <Col xs={4} className="border-end border-white-50">
                                        <div className="d-flex flex-column align-items-center">
                                            <FaLock className="mb-2" size={16} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.5px' }} className="text-uppercase text-white-80">Secure Gated Community</span>
                                        </div>
                                    </Col>
                                    
                                    <Col xs={4}>
                                        <div className="d-flex flex-column align-items-center">
                                            <FaLeaf className="mb-2" size={16} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.5px' }} className="text-uppercase text-white-80">Sustainable Living</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                    </Col>

                    {/* Right Column: "AT A GLANCE" Floating Card Box & Bottom Benchmark Badge */}
                    <Col lg={6}>
                        <div className="d-flex flex-column align-items-center align-items-lg-end">
                            
                            {/* main Card details */}
                            <div 
                                className="p-4 p-md-5 rounded-4 shadow-sm bg-white border border-light w-100"
                                style={{
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                                    maxWidth: '560px'
                                }}
                            >
                                {/* At A Glance Card Title */}
                                <div className="d-flex justify-content-center align-items-center gap-3 mb-4 pb-2">
                                    {/* Green circle badge */}
                                    <div 
                                        className="rounded-circle d-flex align-items-center justify-content-center text-white"
                                        style={{ 
                                            width: '56px', 
                                            height: '56px', 
                                            backgroundColor: '#114934', 
                                            border: '3px solid #c5a059',
                                            color: '#c5a059'
                                        }}
                                    >
                                        <FaMap size={20} />
                                    </div>
                                    <span style={{ width: '25px', height: '1.5px', backgroundColor: '#c5a059' }}></span>
                                    <h4 
                                        className="fw-bold mb-0 text-dark text-uppercase letter-spacing-2"
                                        style={{ fontSize: '1rem' }}
                                    >
                                        At A Glance
                                    </h4>
                                    <span style={{ width: '25px', height: '1.5px', backgroundColor: '#c5a059' }}></span>
                                </div>

                                {/* Feature Table List */}
                                <div 
                                    className="rounded-3 overflow-hidden border border-light"
                                    style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)' }}
                                >
                                    {/* Row 1: Land Area */}
                                    <div className="d-flex align-items-stretch border-bottom border-light">
                                        <div className="p-3 text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934', width: '200px', minWidth: '200px' }}>
                                            <FaMap size={14} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: '0.78rem', fontWeight: 'bold', letterSpacing: '0.5px' }} className="text-uppercase">Total Land Area</span>
                                        </div>
                                        <div className="p-3 bg-light flex-grow-1 d-flex align-items-center" style={{ fontSize: '0.85rem', color: '#2d3748' }}>
                                            300 Acres
                                        </div>
                                    </div>

                                    {/* Row 2: Plot Type */}
                                    <div className="d-flex align-items-stretch border-bottom border-light">
                                        <div className="p-3 text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934', width: '200px', minWidth: '200px' }}>
                                            <FaSeedling size={14} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: '0.78rem', fontWeight: 'bold', letterSpacing: '0.5px' }} className="text-uppercase">Plot Type</span>
                                        </div>
                                        <div className="p-3 bg-white flex-grow-1 d-flex align-items-center" style={{ fontSize: '0.85rem', color: '#2d3748' }}>
                                            Managed Organic Farmland
                                        </div>
                                    </div>

                                    {/* Row 3: Starting Price */}
                                    <div className="d-flex align-items-stretch border-bottom border-light">
                                        <div className="p-3 text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934', width: '200px', minWidth: '200px' }}>
                                            <FaTag size={14} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: '0.78rem', fontWeight: 'bold', letterSpacing: '0.5px' }} className="text-uppercase">Starting Price</span>
                                        </div>
                                        <div className="p-3 bg-light flex-grow-1 d-flex align-items-center fw-bold" style={{ fontSize: '0.85rem', color: '#114934' }}>
                                            ₹79.9L* / Acre
                                        </div>
                                    </div>

                                    {/* Row 4: Distance from Bangalore */}
                                    <div className="d-flex align-items-stretch border-bottom border-light">
                                        <div className="p-3 text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934', width: '200px', minWidth: '200px' }}>
                                            <FaMapMarkerAlt size={14} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: '0.78rem', fontWeight: 'bold', letterSpacing: '0.5px' }} className="text-uppercase">Distance from Bangalore</span>
                                        </div>
                                        <div className="p-3 bg-white flex-grow-1 d-flex align-items-center" style={{ fontSize: '0.85rem', color: '#2d3748' }}>
                                            ~55 km (55 minutes, off NH-44)
                                        </div>
                                    </div>

                                    {/* Row 5: Distance from E-City */}
                                    <div className="d-flex align-items-stretch border-bottom border-light">
                                        <div className="p-3 text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934', width: '200px', minWidth: '200px' }}>
                                            <FaBuilding size={14} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: '0.78rem', fontWeight: 'bold', letterSpacing: '0.5px' }} className="text-uppercase">Distance from Electronic City</span>
                                        </div>
                                        <div className="p-3 bg-light flex-grow-1 d-flex align-items-center" style={{ fontSize: '0.85rem', color: '#2d3748' }}>
                                            ~45 km
                                        </div>
                                    </div>

                                    {/* Row 6: Title Status */}
                                    <div className="d-flex align-items-stretch">
                                        <div className="p-3 text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#114934', width: '200px', minWidth: '200px' }}>
                                            <FaFileContract size={14} style={{ color: '#c5a059' }} />
                                            <span style={{ fontSize: '0.78rem', fontWeight: 'bold', letterSpacing: '0.5px' }} className="text-uppercase">Title Status</span>
                                        </div>
                                        <div className="p-3 bg-white flex-grow-1 d-flex align-items-center" style={{ fontSize: '0.85rem', color: '#2d3748' }}>
                                            Clear, freehold – Patta Chitta documented
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Benchmark Pill Badge */}
                            <div 
                                className="p-3 rounded-4 shadow-sm border mt-4 w-100"
                                style={{
                                    backgroundColor: '#faf8f2', // Soft warm light beige
                                    borderColor: 'rgba(197, 160, 89, 0.25)',
                                    maxWidth: '560px',
                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)'
                                }}
                            >
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div 
                                            className="rounded-circle d-flex align-items-center justify-content-center text-white me-3"
                                            style={{ 
                                                width: '42px', 
                                                height: '42px', 
                                                backgroundColor: '#114934', 
                                                border: '2px solid #c5a059',
                                                color: '#c5a059',
                                                minWidth: '42px'
                                            }}
                                        >
                                            <FaShieldAlt size={18} />
                                        </div>
                                        <div className="d-flex flex-column text-start">
                                            <span style={{ fontSize: '0.78rem', color: '#2d3748', fontWeight: 500 }}>
                                                One gate. One standard. Complete peace of mind.
                                            </span>
                                            <span style={{ fontSize: '0.75rem', color: '#c5a059', fontStyle: 'italic', fontWeight: 'bold' }} className="mt-1">
                                                This is the benchmark.
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Small gold leaf detail on right */}
                                    <div className="d-none d-sm-block opacity-25">
                                        <FaLeaf size={24} style={{ color: '#c5a059' }} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}