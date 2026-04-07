import React from 'react';
import { Container } from 'react-bootstrap';

interface PageBannerProps {
    title: string;
    backgroundImage?: string;
}

export default function PageBanner({ title, backgroundImage = '/Home_page.webp' }: PageBannerProps) {
    return (
        <div className="position-relative d-flex align-items-center justify-content-center mb-5" style={{
            height: '400px',
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
            
            <Container className="position-relative z-1 text-center">
                <h1 className="display-4 fw-bold text-white text-uppercase" style={{ letterSpacing: '1px' }}>
                    {title}
                </h1>
            </Container>
        </div>
    );
}
