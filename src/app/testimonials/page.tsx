'use client';

import SectionTitle from '@/components/SectionTitle';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Container } from 'react-bootstrap';

export default function Testimonials() {
    return (
        <div className="py-5">
            <Container>
                <SectionTitle title="Testimonials" subtitle="What Our Clients Say" />
                <p className="lead text-center text-muted mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <TestimonialsSection />
            </Container>
        </div>
    );
}
