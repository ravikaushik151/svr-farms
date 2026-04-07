'use client';

import SectionTitle from '@/components/SectionTitle';
import TestimonialsSection from '@/components/TestimonialsSection';
import PageBanner from '@/components/PageBanner';
import { Container } from 'react-bootstrap';

export default function Testimonials() {
    return (
        <>
            <PageBanner title="Testimonials" backgroundImage="/banner/Testimonials_Banner.webp" />
            <div className="py-2">
                <Container>
                <SectionTitle title="Testimonials" subtitle="What Our Clients Say" />
                <p className="lead text-center text-muted mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <TestimonialsSection />
            </Container>
        </div>
        </>
    );
}
