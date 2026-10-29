'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Image from 'next/image';

export default function Header() {
    const pathname = usePathname();
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setExpanded(false);
    }, [pathname]);

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    const handleNavClick = () => {
        setExpanded(false);
    };

    return (
        <Navbar 
            expanded={expanded} 
            onToggle={setExpanded} 
            expand="xl" 
            className="bg-sanjeevani py-2 py-xl-2.5 shadow-sm sticky-top" 
            data-bs-theme="dark"
        >
            <Container fluid="xxl" className="px-3 px-xl-4">
                <Navbar.Brand 
                    as={Link} 
                    href="/" 
                    onClick={handleNavClick}
                    className="fw-bold text-white d-flex align-items-center me-2 me-xl-4 py-1"
                >
                    <Image 
                        src="/LE_Web_Logo.png" 
                        alt="SVR Farms - Little England Managed Farmland" 
                        width={240} 
                        height={46} 
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
                            onClick={handleNavClick}
                            active={isActive('/')}
                            className={`text-nowrap px-2 py-1 ${isActive('/') ? 'active fw-bold' : ''}`}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/about" 
                            onClick={handleNavClick}
                            active={isActive('/about')}
                            className={`text-nowrap px-2 py-1 ${isActive('/about') ? 'active fw-bold' : ''}`}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/tamara" 
                            onClick={handleNavClick}
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
                            <span style={{ color: '#114934' }}>Tamara Valley</span>
                            <span style={{ fontSize: '0.82rem', color: '#114934' }}>⭐</span>
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/projects" 
                            onClick={handleNavClick}
                            active={isActive('/projects')}
                            className={`text-nowrap px-2 py-1 ${isActive('/projects') ? 'active fw-bold' : ''}`}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/location-advantages" 
                            onClick={handleNavClick}
                            active={isActive('/location-advantages')}
                            className={`text-nowrap px-2 py-1 ${isActive('/location-advantages') ? 'active fw-bold' : ''}`}
                        >
                            Location Advantages
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/blogs" 
                            onClick={handleNavClick}
                            active={isActive('/blogs')}
                            className={`text-nowrap px-2 py-1 ${isActive('/blogs') ? 'active fw-bold' : ''}`}
                        >
                            Blogs
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/careers" 
                            onClick={handleNavClick}
                            active={isActive('/careers')}
                            className={`text-nowrap px-2 py-1 ${isActive('/careers') ? 'active fw-bold' : ''}`}
                        >
                            Careers
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/testimonials" 
                            onClick={handleNavClick}
                            active={isActive('/testimonials')}
                            className={`text-nowrap px-2 py-1 ${isActive('/testimonials') ? 'active fw-bold' : ''}`}
                        >
                            Testimonials
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/faq" 
                            onClick={handleNavClick}
                            active={isActive('/faq')}
                            className={`text-nowrap px-2 py-1 ${isActive('/faq') ? 'active fw-bold' : ''}`}
                        >
                            FAQ
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            href="/contact" 
                            onClick={handleNavClick}
                            active={isActive('/contact')}
                            className={`text-nowrap px-2 py-1 ${isActive('/contact') ? 'active fw-bold' : ''}`}
                        >
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

