import SectionTitle from '@/components/SectionTitle';
import { Container } from 'react-bootstrap';

export default function About() {
    return (
        <Container className="py-5">
            <SectionTitle title="About Us" subtitle="Who We Are" />
            <p className="lead text-center">About content goes here...</p>
        </Container>
    );
}
