'use client';

import PageBanner from '@/components/PageBanner';
import { Container, Row, Col } from 'react-bootstrap';

export default function BlogPost() {
    return (
        <>
            <PageBanner title="Blog" backgroundImage="/banner/Blog_Banner.webp" />
            <div className="bg-light">
                <Container>
                    <Row className="text-center g-4 mb-5">
                        <Col md={12}>
                            <div className="h-100 shadow border-0 hover-lift card">
                                <div className="p-4 card-body">
                                    <img alt="Carbon Positive Farmland" loading="lazy" width={1024} height={538} decoding="async" data-nimg={1} className="mb-3 img-fluid mx-auto d-block w-100" style={{ color: 'transparent' }} src="/blog/Carbon-Positive-Farmland-1024x538.webp" />
                                    <div className="">
                                        <h1 className='section-heading text-dark text-md-start text-center card-title fw-bold fs-3'>Owning Land That Heals the Planet: Carbon Positive Farmland</h1>
                                    </div>
                                    <div className="card-text text-start mt-3">
                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Introduction: Why This Matters</h2>

                                        <p>Land isn't just dirt under your feet anymore. For a growing number of investors, land is a climate solution. Carbon positive farmland is flipping the script on what it means to own property. Instead of simply producing crops, these farms absorb carbon, restore soil health, and generate a new kind of income: carbon credits.</p>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">What Exactly is Carbon Positive Farmland?</h2>

                                        <p>Think of carbon positive farmland as an ecosystem that captures more carbon than it emits. This is done through regenerative practices like:</p>
                                        <ul>
                                            <li><strong>Agroforestry:</strong> Planting trees alongside crops to boost biodiversity.</li>
                                            <li><strong>Cover cropping:</strong> Keeping soil covered year-round to trap carbon and reduce erosion.</li>
                                            <li><strong>Minimal tilling:</strong> Protecting soil microbes and preventing carbon loss.</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">The Business Case: Farmland Carbon Credits</h2>

                                        <p>Here's where it gets exciting. When your land sequesters carbon, you can sell that captured carbon as credits in voluntary or compliance markets.</p>
                                        <ul>
                                            <li><strong>Income Potential:</strong> Early adopters report earning between ₹3,000–₹10,000 per acre per year from carbon credit programs.</li>
                                            <li><strong>Scalable Opportunity:</strong> As India pushes for net-zero by 2070, demand for credits will keep rising.</li>
                                            <li><strong>Global Alignment:</strong> Carbon markets are expanding—companies are buying credits to offset emissions.</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Regenerative Farming: The Engine Behind the Impact</h2>

                                        <p>You can't have carbon positive farmland without regenerative practices. The big levers are:</p>
                                        <ul>
                                            <li>Soil health restoration (more organic matter = more carbon stored)</li>
                                            <li>Tree-based farming systems (mango, teak, native species)</li>
                                            <li>Water conservation methods (percolation ponds, drip irrigation)</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Numbers that Matter: Land Value & ROI</h2>

                                        <ul>
                                            <li><strong>Land Appreciation:</strong> Farmland near Bangalore has historically appreciated 10–15% annually.</li>
                                            <li><strong>Carbon Credits:</strong> Add an additional 3–5% return per year when carbon markets are utilized.</li>
                                            <li><strong>Operational Cost Savings:</strong> Regenerative systems reduce fertilizer and water costs by up to 30%.</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Step-by-Step: How to Buy Carbon Positive Farmland</h2>

                                        <ol>
                                            <li>Shortlist Verified Projects: Look for title clear, approved lands.</li>
                                            <li>Evaluate Carbon Potential: Ask for carbon capture estimates and income projections.</li>
                                            <li>Check Management Services: Ensure they handle regenerative farming operations.</li>
                                            <li>Run the ROI Model: Factor in carbon credit income + land appreciation + produce yield.</li>
                                            <li>Visit the Site: A site visit will tell you if the project's vision matches its marketing.</li>
                                        </ol>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Actionable Tips for First-Time Buyers</h2>

                                        <ul>
                                            <li>Ask about certifications: Is the project aligned with international carbon standards?</li>
                                            <li>Look for soil reports: Healthy soil = better carbon sequestration.</li>
                                            <li>Compare management fees: Quality matters for long-term ROI.</li>
                                            <li>Join the community early: Early buyers often get better pricing.</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Beyond ROI: The Legacy Factor</h2>

                                        <p>What this really means is—you're leaving more than land behind. You're leaving a piece of the planet better than you found it. For families with kids, owning carbon positive farmland is a chance to teach values of stewardship, sustainability, and long-term thinking.</p>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Conclusion</h2>

                                        <p>Carbon positive farmland isn't just a trend—it's the future of farmland investment. It's one of the few asset classes where ROI and responsibility align. Your land can grow more than crops. It can grow a healthier planet and a stronger financial future.</p>
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
