'use client';

import SectionTitle from '@/components/SectionTitle';
import ProjectsSection from '@/components/ProjectsSection';
import PageBanner from '@/components/PageBanner';
import { Container } from 'react-bootstrap';

export default function Projects() {
    return (
        <>
            <PageBanner title="Our Projects" backgroundImage="/banner/Projects_Banner.webp" />
            <div className="py-2">
                <Container>

                <ProjectsSection />
            </Container>
        </div>
        </>
    );
}
