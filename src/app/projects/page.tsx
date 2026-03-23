'use client';

import SectionTitle from '@/components/SectionTitle';
import ProjectsSection from '@/components/ProjectsSection';
import { Container } from 'react-bootstrap';

export default function Projects() {
    return (
        <div className="py-5">
            <Container>
                <SectionTitle title="Our Projects" subtitle="Discover Our Work" />
                <p className="lead text-center text-muted mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ProjectsSection />
            </Container>
        </div>
    );
}
