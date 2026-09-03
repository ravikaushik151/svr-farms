'use client';
import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Image from 'next/image';

export default function Header() {
    return (
        <Navbar expand="xl" className="bg-sanjeevani py-2 py-xl-2.5 shadow-sm sticky-top" data-bs-theme="dark">
            <Container fluid="xxl" className="px-3 px-xl-4">
                <Navbar.Brand as={Link} href="/" className="fw-bold text-white d-flex align-items-center me-2 me-xl-4 py-1">
                    <Image 
                        src="/LE_Web Logo.png" 
                        alt="Little England Logo" 
                        width={240} 
                        height={46} 
                        priority 
                        className="mb-0" 
                        style={{ width: 'auto', height: '40px', maxHeight: '46px' }} 
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-1 gap-xl-2 gap-xxl-3 pt-2 pt-xl-0">
                        <Nav.Link as={Link} href="/" className="text-nowrap px-2 py-1">Home</Nav.Link>
                        <Nav.Link as={Link} href="/about" className="text-nowrap px-2 py-1">About Us</Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/tamara" 
                            className="fw-bold px-3 py-1 my-1 my-xl-0 rounded-pill text-nowrap d-inline-flex align-items-center gap-1 shadow-sm" 
                            style={{ 
                                backgroundColor: '#c5a059', 
                                color: '#114934', 
                                fontSize: '0.78rem', 
                                letterSpacing: '0.3px',
                                lineHeight: '1.2'
                            }}
                        >
                            <span>Tamara Valley</span>
                            <span style={{ fontSize: '0.82rem' }}>⭐</span>
                        </Nav.Link>
                        <Nav.Link as={Link} href="/projects" className="text-nowrap px-2 py-1">Projects</Nav.Link>
                        <Nav.Link as={Link} href="/location-advantages" className="text-nowrap px-2 py-1">Location Advantages</Nav.Link>
                        <Nav.Link as={Link} href="/blogs" className="text-nowrap px-2 py-1">Blogs</Nav.Link>
                        <Nav.Link as={Link} href="/careers" className="text-nowrap px-2 py-1">Careers</Nav.Link>
                        <Nav.Link as={Link} href="/testimonials" className="text-nowrap px-2 py-1">Testimonials</Nav.Link>
                        <Nav.Link as={Link} href="/faq" className="text-nowrap px-2 py-1">FAQ</Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/contact" 
                            className="text-nowrap px-3 py-1 rounded-pill border fw-semibold ms-xl-1"
                            style={{
                                borderColor: 'rgba(197, 160, 89, 0.6)',
                                color: '#c5a059',
                                fontSize: '0.8rem',
                                lineHeight: '1.2'
                            }}
                        >
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
