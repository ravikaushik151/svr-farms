'use client';

import SectionTitle from '@/components/SectionTitle';
import PageBanner from '@/components/PageBanner';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';

export default function BlogPost() {
    return (
        <>
            <PageBanner title="Blog" backgroundImage="/banner/Blog_Banner.webp" />
            <div className="bg-light ">
                <Container>
                    <Row className="text-center g-4 mb-5">
                        <Col md={12}>
                            <div className="h-100 shadow border-0 hover-lift card">
                                <div className="p-4  card-body">
                                    <img alt="Farmland near Hosur" loading="lazy" width={1296} height={375} decoding="async" data-nimg={1} className="mb-3 img-fluid mx-auto d-block w-100" style={{ color: 'transparent' }} src="/blog/Farmland-near-Hosur-1024x538.webp" />
                                    <div className=" ">
                                        <h1 className='section-heading text-dark text-md-start text-center card-title fw-bold fs-3'>5 Smart Reasons Bangaloreans Love Investing in Farmland Near Hosur</h1>
                                    </div>
                                    <div className="card-text text-start mt-3">
                                        <p>Investing in Farmland near Hosur has emerged as one of the most talked about real estate trends among Bangalore farmland buyers in recent years. With booming farmland demand Bangalore, this strategic region just a short drive from the Silicon Valley of India is attracting both seasoned investors and first time buyers seeking growth, lifestyle, and value.</p>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">1. Strategic Location & Connectivity: A Driving Force</h2>

                                        <h3 className="section-heading mb-3 fs-6 fw-bold">Strong Proximity to Bangalore</h3>

                                        <p>One of the primary motivations for Bangalore farmland buyers is easy connectivity. Hosur sits right on the Bangalore Salem industrial corridor and is closer to Bangalore's eastern suburbs like HSR Layout, Sarjapur, Whitefield & Electronic City than many other investment destinations.</p>

                                        <ul>
                                            <li>45–60 km from Central Bangalore</li>
                                            <li>1.5–2 hours by NH 44</li>
                                            <li>Dedicated rail connectivity to both states</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">2. Affordable Entry with High Growth Potential</h2>

                                        <p>Farmland prices near Hosur remain significantly lower than comparable land closer to Bangalore, creating farmland demand Bangalore as buyers seek high value deals before the market catches up.</p>

                                        <p>Several systemic trends contribute to lasting value appreciation:</p>
                                        <ul>
                                            <li>Spillover from Bangalore's real estate boom</li>
                                            <li>Upcoming infrastructure projects (transport & logistics upgrades)</li>
                                            <li>Industrial expansion plans in Tamil Nadu</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">3. Dual Utility: Investment Meets Lifestyle</h2>

                                        <p>Today's farmland buyers don't just want a plot – they want useful, managed land that can serve multiple purposes:</p>
                                        <ul>
                                            <li>Agricultural cultivation</li>
                                            <li>Organic farming or hobby farming</li>
                                            <li>Weekend getaways</li>
                                            <li>Livestock or agri business ventures</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">4. Agricultural Potential & Government Initiatives</h2>

                                        <h3 className="section-heading mb-3 fs-6 fw-bold">Fertile Soil and Water Advantage</h3>

                                        <p>Hosur's soil profile and steady water availability thanks to well planned irrigation make it one of the most productive agricultural belts near Bangalore. Crops such as paddy, sugarcane, and vegetables thrive here, giving farmland buyers both utility and productivity.</p>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">5. Future Infrastructure & Economic Growth</h2>

                                        <h3 className="section-heading mb-3 fs-6 fw-bold">Industrial and Logistics Boom</h3>

                                        <p>Hosur is well established as a manufacturing & logistics hub with major players like Ashok Leyland, TVS Motor, Nissan, and more. This continues to attract workers, residential communities and supporting businesses.</p>

                                        <p>Such growth fuels economic activity and directly affects land demand in nearby agricultural regions.</p>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Final Thought</h2>

                                        <p>Farmland near Hosur is no longer a fringe real estate option – it's a strategic choice backed by growth economics, lifestyle value, and emerging demand from Bangalore farmland buyers. Whether you're planting crops or building a future, this region stands out as a land investment worth exploring.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
