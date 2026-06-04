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
                                    <img alt="how to buy farmland near Bangalore" loading="lazy" width={1296} height={375} decoding="async" data-nimg={1} className="mb-3 img-fluid mx-auto d-block w-100" style={{ color: 'transparent' }} src="/blog/how-to-buy-farmland-near-Bangalore-1024x529.webp" />
                                    <div className=" ">
                                        <h1 className='section-heading text-dark text-md-start text-center card-title fw-bold fs-3'>How to Buy Farmland Near Bangalore Without the Hassles: H₂O Farms Buyer's Guide</h1>
                                    </div>
                                    <div className="card-text text-start mt-3">
                                        <p>Buying farmland near Bangalore fails for most buyers not because of intent, but because of complexity. Fragmented ownership, unclear titles, water uncertainty, and illegal conversions destroy value. This guide explains how to buy farmland near Bangalore without those risks, using farmland ownership made easy as a process, not a promise.</p>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Common Challenges of Buying Farmland</h2>

                                        <ul>
                                            <li><strong>Title and ownership risk:</strong> Most agricultural land near Bangalore suffers from unclear lineage, incomplete RTCs, or disputed boundaries.</li>
                                            <li><strong>Conversion confusion:</strong> Agricultural land cannot be freely converted or developed. Many sellers misrepresent conversion status.</li>
                                            <li><strong>Water insecurity:</strong> Dry borewells, seasonal dependency, and over-extraction make many farmlands unusable within a few years.</li>
                                            <li><strong>Fragmented plots and access issues:</strong> Land sold without proper road access, fencing, or demarcation leads to disputes.</li>
                                            <li><strong>Management burden:</strong> Urban professionals and NRIs underestimate the time, labor, and oversight required.</li>
                                            <li><strong>Illegal plotting:</strong> Sub-division below permissible agricultural limits or sale of farm layouts without approvals risks cancellation.</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">How H₂O Farms Solves These Problems</h2>

                                        <ul>
                                            <li><strong>Legal clarity by design:</strong> Every plot is verified agricultural land with clear RTC, EC, survey sketch, and chain of title.</li>
                                            <li><strong>Water-first planning:</strong> The project is structured around water availability with rainwater harvesting, recharge zones, surface storage, and sustainable irrigation.</li>
                                            <li><strong>Planned plot demarcation:</strong> Plots are laid out with surveyed boundaries, internal access roads, fencing, and common infrastructure.</li>
                                            <li><strong>Professional management:</strong> On-ground teams handle security, maintenance, cultivation support, and asset upkeep.</li>
                                            <li><strong>Compliance-driven development:</strong> No illegal subdivision. Plot sizes comply with agricultural norms.</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Plot Sizes, Documentation, and Payment Plans</h2>

                                        <p>Plot sizes are structured to comply with agricultural regulations, ensuring legality and future transferability. This avoids the common trap of micro-plots that cannot be legally registered.</p>

                                        <p>Payment structure is transparent with milestone-based payments aligned with booking, agreement, and registration. No cash components. No post-sale surprises.</p>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Who Should Consider Buying</h2>

                                        <ul>
                                            <li><strong>NRIs:</strong> Those seeking a compliant agricultural asset in India without daily oversight.</li>
                                            <li><strong>Professionals and entrepreneurs:</strong> Buyers wanting land as a long-term hedge against urban real estate volatility.</li>
                                            <li><strong>Sustainability-focused investors:</strong> Individuals prioritizing water security, ecological balance, and long-term land health.</li>
                                            <li><strong>Legacy planners:</strong> Families acquiring land for generational holding, inheritance, or future agricultural use.</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">FAQs</h2>

                                        <p><strong>Q: Can an NRI buy agricultural land near Bangalore?</strong></p>
                                        <p>A: Yes, but only under specific legal conditions. Ensure compliance with RBI and agricultural land norms.</p>

                                        <p><strong>Q: What's the risk with dry borewells?</strong></p>
                                        <p>A: They can dry up seasonally or permanently, making irrigation impossible without recharge systems.</p>

                                        <p><strong>Q: Why avoid farm layouts?</strong></p>
                                        <p>A: Many are illegally subdivided below permissible sizes and lack approvals, risking cancellation and penalties.</p>

                                        <p><strong>Q: What is an Encumbrance Certificate (EC)?</strong></p>
                                        <p>A: A revenue document that shows all registered transactions on the property, essential for confirming clean title.</p>
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
