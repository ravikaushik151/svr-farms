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
                    Explore thoughtfully developed farmland communities set in the serene landscapes of Thalli.<br />
                    Spaces designed for nature, accessibility, and long-term value.
                </p>
                <ProjectsSection />
            </Container>
        </div>
    );
}
