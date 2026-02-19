import SectionTitle from '@/components/SectionTitle';
import { Container } from 'react-bootstrap';

export default function Contact() {
    return (
        <Container className="py-5">
            <SectionTitle title="Contact Us" subtitle="Get In Touch" />
            <p className="lead text-center">Contact form goes here...</p>
        </Container>
    );
}
