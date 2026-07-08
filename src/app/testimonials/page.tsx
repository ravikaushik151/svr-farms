'use client';

import SectionTitle from '@/components/SectionTitle';
import TestimonialsSection from '@/components/TestimonialsSection';
import PageBanner from '@/components/PageBanner';
import { Container } from 'react-bootstrap';

export default function Testimonials() {
    return (
        <>
            <PageBanner title="Testimonials" backgroundImage="/banner/Testimonials_Banner.webp" />
            <TestimonialsSection />
        </>
    );
}
