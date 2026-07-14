'use client';

import PageBanner from '@/components/PageBanner';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCloudSun, FaIndustry, FaRoad, FaCheckCircle, FaCompass } from 'react-icons/fa';

export default function WhyThallyPage() {
    return (
        <>
            <PageBanner title="Why Thally" backgroundImage="/banner/About us_Banner.webp" />
            
            {/* 1. Introduction Section */}
            <Container className="py-5 mt-4">
                <Row className="justify-content-center">
                    <Col lg={10} className="text-center">
                        <SectionTitle title="Why Thally?" subtitle="The Story of India's Little England" />
                        <p className="lead text-dark mt-4 lh-lg" style={{ fontSize: '1.2rem', fontWeight: 400 }}>
                            Thally sits in Krishnagiri district, Tamil Nadu, just over the Karnataka border — close enough that most of the drive is still Bangalore roads. British planters found it too cool and too green to feel like Tamil Nadu at all, and started calling it <strong>"Little England"</strong>. The name outlasted them.
                        </p>
                        <p className="text-muted lh-lg mt-3" style={{ fontSize: '1.05rem' }}>
                            What's left behind: a belt of hills at around 1,000 feet, Kenilworth Fort — the only fort in India built in the style of an English castle — and land prices that haven't yet caught up to what the location can actually do.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* 2. Core Pillars / Analysis */}
            <div className="bg-light py-5">
                <Container className="py-lg-4">
                    <Row className="g-4">
                        {/* Point 1: Close Enough */}
                        <Col lg={6}>
                            <Card className="h-100 border-0 shadow-sm p-4 bg-white rounded-3">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="p-3 rounded-circle me-3 text-sanjeevani" style={{ backgroundColor: 'rgba(17,73,52,0.08)' }}>
                                        <FaMapMarkerAlt size={24} />
                                    </div>
                                    <h3 className="h5 fw-bold mb-0 text-dark text-uppercase letter-spacing-1">Close Enough to Actually Use</h3>
                                </div>
                                <p className="text-muted lh-lg mb-0" style={{ fontSize: '0.95rem' }}>
                                    At 50 km from Silk Board and 25 km from Hosur, Thally lies about 55 minutes off NH-44 for our own projects, and roughly 45 km from Electronic City. This is close enough for a genuine weekend getaway, not a major expedition. That's the whole reason Thally functions as a real farmland market and not just a tourist detour.
                                </p>
                            </Card>
                        </Col>

                        {/* Point 2: Climate */}
                        <Col lg={6}>
                            <Card className="h-100 border-0 shadow-sm p-4 bg-white rounded-3">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="p-3 rounded-circle me-3 text-sanjeevani" style={{ backgroundColor: 'rgba(17,73,52,0.08)' }}>
                                        <FaCloudSun size={24} />
                                    </div>
                                    <h3 className="h5 fw-bold mb-0 text-dark text-uppercase letter-spacing-1">A Climate That Does the Work For You</h3>
                                </div>
                                <p className="text-muted lh-lg mb-0" style={{ fontSize: '0.95rem' }}>
                                    At around 1,000 feet elevation, Thally stays cool through most of the year — including the months Bangalore is sweating. Misty valleys and long rainy seasons have made it a real agricultural belt too: potatoes, carrots, cabbage, and flowers, especially marigold and rose grown partly for export. It's earned an unofficial "Rose City" title for exactly that reason, and it's why organic farming and off-grid cottage living both work here without a fight.
                                </p>
                            </Card>
                        </Col>

                        {/* Point 3: Hosur's Boom */}
                        <Col lg={6}>
                            <Card className="h-100 border-0 shadow-sm p-4 bg-white rounded-3">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="p-3 rounded-circle me-3 text-sanjeevani" style={{ backgroundColor: 'rgba(17,73,52,0.08)' }}>
                                        <FaIndustry size={24} />
                                    </div>
                                    <h3 className="h5 fw-bold mb-0 text-dark text-uppercase letter-spacing-1">Hosur's Industrial Boom, Next Door</h3>
                                </div>
                                <p className="text-muted lh-lg mb-0" style={{ fontSize: '0.95rem' }}>
                                    Tata Electronics, TVS, Titan, and Ather are all expanding operations around Hosur, pulling in corporate professionals who want housing outside the congested core. Thally is the natural overflow zone — which means demand for land here isn't hypothetical, it's already showing up.
                                </p>
                            </Card>
                        </Col>

                        {/* Point 4: Infrastructure */}
                        <Col lg={6}>
                            <Card className="h-100 border-0 shadow-sm p-4 bg-white rounded-3">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="p-3 rounded-circle me-3 text-sanjeevani" style={{ backgroundColor: 'rgba(17,73,52,0.08)' }}>
                                        <FaRoad size={24} />
                                    </div>
                                    <h3 className="h5 fw-bold mb-0 text-dark text-uppercase letter-spacing-1">Infrastructure That's Funded</h3>
                                </div>
                                <div className="text-muted lh-lg" style={{ fontSize: '0.95rem' }}>
                                    <p className="mb-2">Four projects are moving at once, not sitting on a wishlist:</p>
                                    <ul className="list-unstyled ps-0 mb-0">
                                        <li className="d-flex align-items-start mb-2">
                                            <FaCheckCircle className="text-sanjeevani mt-1 me-2 flex-shrink-0" size={14} />
                                            <span><strong>Namma Metro Yellow Line Extension</strong> — Bommasandra to Hosur, connecting straight to Electronic City and Silk Board.</span>
                                        </li>
                                        <li className="d-flex align-items-start mb-2">
                                            <FaCheckCircle className="text-sanjeevani mt-1 me-2 flex-shrink-0" size={14} />
                                            <span><strong>Satellite Town Ring Road (STRR / NH-948A)</strong> — Loops around Bengaluru, letting freight and commuter traffic skip the city center entirely.</span>
                                        </li>
                                        <li className="d-flex align-items-start mb-2">
                                            <FaCheckCircle className="text-sanjeevani mt-1 me-2 flex-shrink-0" size={14} />
                                            <span><strong>Greenfield International Airport</strong> — Tamil Nadu is actively planning a new airport and aerotropolis near the Thally corridor.</span>
                                        </li>
                                        <li className="d-flex align-items-start">
                                            <FaCheckCircle className="text-sanjeevani mt-1 me-2 flex-shrink-0" size={14} />
                                            <span><strong>Hosur Tech/Retail Upgrades</strong> — A 5 lakh sq. ft. TIDEL IT Park and the upcoming Hosur Central Mall.</span>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* 3. Comparison Table Section */}
            <Container className="py-5 my-4">
                <Row className="justify-content-center mb-4">
                    <Col lg={10} className="text-center">
                        <SectionTitle title="A Genuine Weekend Destination" subtitle="Thally vs. Other Popular Farmland and Hill Outposts" />
                        <p className="text-muted mt-3">
                            Here is a simple look at how Thally compares to other weekend destinations near Bangalore. Thally offers a rare combination of cooler climates, low crowds, and active appreciation potential.
                        </p>
                    </Col>
                </Row>
                
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="table-responsive shadow-sm rounded-3 border border-1 border-light">
                            <Table striped bordered hover className="align-middle mb-0 bg-white" style={{ fontSize: '0.95rem' }}>
                                <thead style={{ backgroundColor: '#114934', color: '#ffffff' }}>
                                    <tr>
                                        <th className="py-3 px-3 text-white fw-bold">Destination</th>
                                        <th className="py-3 px-3 text-white fw-bold">Distance from Bangalore</th>
                                        <th className="py-3 px-3 text-white fw-bold">Drive Time</th>
                                        <th className="py-3 px-3 text-white fw-bold">Elevation</th>
                                        <th className="py-3 px-3 text-white fw-bold">Weekend Crowds</th>
                                        <th className="py-3 px-3 text-white fw-bold">Farmland Investment Scene</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ backgroundColor: 'rgba(17, 73, 52, 0.04)' }}>
                                        <td className="py-3 px-3 fw-bold text-sanjeevani"><FaCompass className="me-2" /> Thally</td>
                                        <td className="py-3 px-3">~50 km</td>
                                        <td className="py-3 px-3">~1 hour</td>
                                        <td className="py-3 px-3">~1,000 ft</td>
                                        <td className="py-3 px-3 text-success fw-semibold">Low</td>
                                        <td className="py-3 px-3 text-dark fw-semibold">Active, early-stage (High Growth)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-3 fw-semibold">Nandi Hills</td>
                                        <td className="py-3 px-3">~60 km</td>
                                        <td className="py-3 px-3">~1.5 hours</td>
                                        <td className="py-3 px-3">~4,850 ft</td>
                                        <td className="py-3 px-3 text-danger">High</td>
                                        <td className="py-3 px-3">Minimal</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-3 fw-semibold">Coorg</td>
                                        <td className="py-3 px-3">~260 km</td>
                                        <td className="py-3 px-3">~5–6 hours</td>
                                        <td className="py-3 px-3">~3,500–4,500 ft</td>
                                        <td className="py-3 px-3 text-warning">High in season</td>
                                        <td className="py-3 px-3">Established, pricier</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-3 fw-semibold">Ooty</td>
                                        <td className="py-3 px-3">~275 km</td>
                                        <td className="py-3 px-3">~7–8 hours</td>
                                        <td className="py-3 px-3">~7,400 ft</td>
                                        <td className="py-3 px-3 text-danger">Very high in season</td>
                                        <td className="py-3 px-3">Established, pricier</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        
                        <p className="text-secondary lh-lg mt-4 px-1" style={{ fontSize: '1.05rem' }}>
                            The Thally Garden and Lake, local dams, and the twin viewpoint hills of Devarabetta give you scenic, uncrowded alternatives to Ooty or Coorg. Kenilworth Fort remains a heritage stop unlike anything else in the country. You're not just buying land here — you have somewhere to actually go.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* 4. Inquiry CTA Form */}
            <div className="bg-light py-5 border-top border-light">
                <Container className="py-lg-4">
                    <Row className="justify-content-center">
                        <Col lg={6} className="text-center mb-4 mb-lg-0 d-flex flex-column justify-content-center">
                            <h3 className="fw-bold text-sanjeevani mb-3" style={{ fontSize: '2rem' }}>Ready to Experience Thally?</h3>
                            <p className="text-muted lh-lg mb-4 max-w-md mx-auto">
                                Schedule a premium, chauffeured site visit to our managed farmlands in Thally. Discover the misty climate and investment potential firsthand.
                            </p>
                            <div className="d-flex justify-content-center gap-3 align-items-center">
                                <span className="fw-bold">Contact SVR Farms:</span>
                                <a href="tel:+919986410709" className="text-decoration-none text-sanjeevani fw-bold">+91 99864 10709</a>
                            </div>
                        </Col>
                        
                        <Col lg={5} className="offset-lg-1">
                            <div className="p-4 p-md-5 bg-white rounded-3 shadow-sm">
                                <h4 className="fw-bold text-dark mb-4 text-center">Book a Site Visit</h4>
                                <ContactForm popup={false} button={false} buttonClassName="btn btn-primary w-100 py-2" formInputClass="py-2 mb-0 form-control" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
