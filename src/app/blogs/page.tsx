import SectionTitle from '@/components/SectionTitle';
import { Container } from 'react-bootstrap';

export default function Blogs() {
    return (
        <Container className="py-5">
            <SectionTitle title="Our Blogs" subtitle="Latest News & Updates" />
            <p className="lead text-center">Blog content goes here...</p>
        </Container>
    );
}
