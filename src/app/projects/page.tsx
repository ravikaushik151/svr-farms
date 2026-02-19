import SectionTitle from '@/components/SectionTitle';
import { Container } from 'react-bootstrap';

export default function Projects() {
    return (
        <Container className="py-5">
            <SectionTitle title="Our Projects" subtitle="Featured Developments" />
            <p className="lead text-center">Projects content goes here...</p>
        </Container>
    );
}
