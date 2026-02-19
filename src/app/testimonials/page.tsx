import SectionTitle from '@/components/SectionTitle';
import { Container } from 'react-bootstrap';

export default function Testimonials() {
    return (
        <Container className="py-5">
            <SectionTitle title="Testimonials" subtitle="What Our Clients Say" />
            <p className="lead text-center">Client reviews content goes here...</p>
        </Container>
    );
}
