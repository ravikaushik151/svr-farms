'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
        <nav 
            className="navbar navbar-expand-xl bg-sanjeevani py-2 py-xl-2.5 shadow-sm sticky-top" 
            data-bs-theme="dark"
        >
            <div className="container-xxl px-3 px-xl-4 d-flex align-items-center justify-content-between flex-wrap">
                <Link 
                    href="/" 
                    onClick={handleNavClick}
                    className="navbar-brand fw-bold text-white d-flex align-items-center me-2 me-xl-4 py-1"
                >
                    <Image 
                        src="/LE_Web_Logo.png" 
                        alt="SVR Farms - Little England Managed Farmland" 
                        width={240} 
                        height={46} 
                        className="mb-0" 
                        style={{ width: 'auto', height: '40px', maxHeight: '46px' }} 
                    />
                </Link>

                <button 
                    type="button"
                    className="navbar-toggler border-0 shadow-none" 
                    onClick={() => setExpanded(prev => !prev)}
                    aria-controls="basic-navbar-nav" 
                    aria-expanded={expanded}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="basic-navbar-nav">
                    <ul className="navbar-nav ms-auto align-items-center gap-1 gap-xl-2 gap-xxl-3 pt-2 pt-xl-0">
                        <li className="nav-item">
                            <Link 
                                href="/" 
                                onClick={handleNavClick}
                                className={`nav-link text-nowrap px-2 py-1 ${isActive('/') ? 'active fw-bold' : ''}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                href="/about" 
                                onClick={handleNavClick}
                                className={`nav-link text-nowrap px-2 py-1 ${isActive('/about') ? 'active fw-bold' : ''}`}
                            >
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                href="/tamara" 
                                onClick={handleNavClick}
                                className="nav-link fw-bold px-3 py-1 my-1 my-xl-0 rounded-pill text-nowrap d-inline-flex align-items-center gap-1 shadow-sm tamara-nav-btn" 
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
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                href="/projects" 
                                onClick={handleNavClick}
                                className={`nav-link text-nowrap px-2 py-1 ${isActive('/projects') ? 'active fw-bold' : ''}`}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                href="/location-advantages" 
                                onClick={handleNavClick}
                                className={`nav-link text-nowrap px-2 py-1 ${isActive('/location-advantages') ? 'active fw-bold' : ''}`}
                            >
                                Location Advantages
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                href="/blogs" 
                                onClick={handleNavClick}
                                className={`nav-link text-nowrap px-2 py-1 ${isActive('/blogs') ? 'active fw-bold' : ''}`}
                            >
                                Blogs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                href="/careers" 
                                onClick={handleNavClick}
                                className={`nav-link text-nowrap px-2 py-1 ${isActive('/careers') ? 'active fw-bold' : ''}`}
                            >
                                Careers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                href="/testimonials" 
                                onClick={handleNavClick}
                                className={`nav-link text-nowrap px-2 py-1 ${isActive('/testimonials') ? 'active fw-bold' : ''}`}
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                href="/faq" 
                                onClick={handleNavClick}
                                className={`nav-link text-nowrap px-2 py-1 ${isActive('/faq') ? 'active fw-bold' : ''}`}
                            >
                                FAQ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                href="/contact" 
                                onClick={handleNavClick}
                                className={`nav-link text-nowrap px-2 py-1 ${isActive('/contact') ? 'active fw-bold' : ''}`}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
