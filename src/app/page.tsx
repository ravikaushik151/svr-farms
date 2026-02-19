import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import AboutSection from '@/components/AboutSection';
import NewProjectSection from '@/components/NewProjectSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProjectsSection from '@/components/ProjectsSection';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHammer, FaLeaf, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {
    return (
        <>
            <Hero />
            <StatsSection />
            <AboutSection />
            <NewProjectSection />
            <TestimonialsSection />
            <ProjectsSection />

            <div className="bg-light py-5 mt-5">
                <Container>
                    <SectionTitle title="Why Choose SVR Farms?" subtitle="The SVR Advantage" />
                    <Row className="text-center g-4">
                        <Col md={4}>
                            <div className="p-4 bg-white rounded shadow-sm h-100 hover-lift">
                                <div className="mb-3 text-sanjeevani">
                                    <FaHammer size={40} />
                                </div>
                                <h4 className="fw-bold mb-3">Managed Farmland</h4>
                                <p className="text-muted">We handle the maintenance so you can enjoy the ownership without the hassle.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="p-4 bg-white rounded shadow-sm h-100 hover-lift">
                                <div className="mb-3 text-sanjeevani">
                                    <FaLeaf size={40} />
                                </div>
                                <h4 className="fw-bold mb-3">Eco-Friendly</h4>
                                <p className="text-muted">Sustainable practices that respect nature and promote biodiversity.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="p-4 bg-white rounded shadow-sm h-100 hover-lift">
                                <div className="mb-3 text-sanjeevani">
                                    <FaMapMarkerAlt size={40} />
                                </div>
                                <h4 className="fw-bold mb-3">Prime Locations</h4>
                                <p className="text-muted">Strategically located near Bangalore for easy access and high appreciation potential.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
