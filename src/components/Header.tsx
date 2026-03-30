'use client';
import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar expand="lg" className="bg-sanjeevani py-3 shadow-sm sticky-top" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} href="/" className="fw-bold text-white fs-4">Little England</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} href="/">Home</Nav.Link>
                        <Nav.Link as={Link} href="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} href="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} href="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} href="/careers">Careers</Nav.Link>
                        <Nav.Link as={Link} href="/testimonials">Testimonials</Nav.Link>
                        <Nav.Link as={Link} href="/contact">Contact Us</Nav.Link>
                        <Nav.Link href="tel:+919986410709" className="d-flex align-items-center fw-bold fs-5 ms-3 text-white">
                            +91 99864 10709
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
