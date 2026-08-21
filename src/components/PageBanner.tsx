import React from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

interface PageBannerProps {
    title: string;
    backgroundImage?: string;
    isbackgoundpostion?: string;
    breadcrumbCurrent?: string;
}

export default function PageBanner({
    title,
    backgroundImage = '/Home_page.webp',
    isbackgoundpostion = 'center',
    breadcrumbCurrent
}: PageBannerProps) {
    const currentName = breadcrumbCurrent || title;

    return (
        <div className="position-relative d-flex align-items-center justify-content-center" style={{
            height: '400px',
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: isbackgoundpostion,
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>

            <Container className="position-relative z-1 text-center">
                <h1 className="display-4 fw-bold text-white text-uppercase" style={{ letterSpacing: '1px' }}>
                    {title}
                </h1>
                <nav aria-label="breadcrumb" className="mt-3 d-none">
                    <ol className="breadcrumb justify-content-center mb-0" style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}>
                        <li className="breadcrumb-item">
                            <Link href="/" className="text-white-50 text-decoration-none hover-sanjeevani">
                                Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item active text-white fw-medium" aria-current="page">
                            {currentName}
                        </li>
                    </ol>
                </nav>
            </Container>
        </div>
    );
}
