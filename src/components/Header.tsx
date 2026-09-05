'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Image from 'next/image';

export default function Header() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname === href || pathname.startsWith(`${href}/`);
    };

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
                        <Nav.Link 
                            as={Link} 
                            href="/" 
                            active={isActive('/')}
                            className={`text-nowrap px-2 py-1 ${isActive('/') ? 'active fw-bold' : ''}`}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/about" 
                            active={isActive('/about')}
                            className={`text-nowrap px-2 py-1 ${isActive('/about') ? 'active fw-bold' : ''}`}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/tamara" 
                            className="fw-bold px-3 py-1 my-1 my-xl-0 rounded-pill text-nowrap d-inline-flex align-items-center gap-1 shadow-sm tamara-nav-btn" 
                            style={{ 
                                backgroundColor: '#c5a059', 
                                color: '#114934', 
                                fontSize: '0.78rem', 
                                letterSpacing: '0.3px',
                                lineHeight: '1.2',
                                outline: isActive('/tamara') ? '2.5px solid #ffffff' : 'none',
                                outlineOffset: isActive('/tamara') ? '2px' : '0',
                                boxShadow: isActive('/tamara') ? '0 0 15px rgba(197, 160, 89, 0.7)' : '0 2px 8px rgba(0, 0, 0, 0.15)',
                                transform: isActive('/tamara') ? 'scale(1.03)' : 'none',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <span>Tamara Valley</span>
                            <span style={{ fontSize: '0.82rem' }}>⭐</span>
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/projects" 
                            active={isActive('/projects')}
                            className={`text-nowrap px-2 py-1 ${isActive('/projects') ? 'active fw-bold' : ''}`}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/location-advantages" 
                            active={isActive('/location-advantages')}
                            className={`text-nowrap px-2 py-1 ${isActive('/location-advantages') ? 'active fw-bold' : ''}`}
                        >
                            Location Advantages
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/blogs" 
                            active={isActive('/blogs')}
                            className={`text-nowrap px-2 py-1 ${isActive('/blogs') ? 'active fw-bold' : ''}`}
                        >
                            Blogs
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/careers" 
                            active={isActive('/careers')}
                            className={`text-nowrap px-2 py-1 ${isActive('/careers') ? 'active fw-bold' : ''}`}
                        >
                            Careers
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/testimonials" 
                            active={isActive('/testimonials')}
                            className={`text-nowrap px-2 py-1 ${isActive('/testimonials') ? 'active fw-bold' : ''}`}
                        >
                            Testimonials
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/faq" 
                            active={isActive('/faq')}
                            className={`text-nowrap px-2 py-1 ${isActive('/faq') ? 'active fw-bold' : ''}`}
                        >
                            FAQ
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/contact" 
                            className="text-nowrap px-3 py-1 rounded-pill border fw-semibold ms-xl-1 contact-nav-btn"
                            style={{
                                borderColor: isActive('/contact') ? '#c5a059' : 'rgba(197, 160, 89, 0.6)',
                                backgroundColor: isActive('/contact') ? '#c5a059' : 'transparent',
                                color: isActive('/contact') ? '#114934' : '#c5a059',
                                fontWeight: isActive('/contact') ? 700 : 600,
                                fontSize: '0.8rem',
                                lineHeight: '1.2',
                                boxShadow: isActive('/contact') ? '0 0 12px rgba(197, 160, 89, 0.5)' : 'none',
                                transition: 'all 0.2s ease'
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
