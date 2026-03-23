'use client';

import SectionTitle from '@/components/SectionTitle';
import AboutSection from '@/components/AboutSection';
import { Container } from 'react-bootstrap';

export default function About() {
    return (
        <div className="py-5">
            <Container>
                <SectionTitle title="About Us" subtitle="Who We Are" />
                <p className="lead text-center text-muted mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Container>
            <AboutSection />
        </div>
    );
}
