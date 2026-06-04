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
                                    <img alt="leasing out managed farmland" loading="lazy" width={1296} height={375} decoding="async" data-nimg={1} className="mb-3 img-fluid mx-auto d-block w-100" style={{ color: 'transparent' }} src="/blog/leasing-out-managed-farmland-1024x538.webp" />
                                    <div className=" ">
                                        <h1 className='section-heading text-dark text-md-start text-center card-title fw-bold fs-3'>From Bengaluru to steady farm income: A story</h1>
                                    </div>
                                    <div className="card-text text-start mt-3">
                                        <p>A few years ago, Ravi bought ten acres of farmland just outside the city, in a place called Thalli near Anekal. Ravi was working in IT in Bangalore, and he handed it over to a professional farm management company to develop.</p>

                                        <p>Like many professionals, he was not interested in daily agricultural work. But soon, he discovered the real potential with leasing out managed farmland and the steady farmland lease returns it could bring.</p>

                                        <p>Instead of selling or letting it sit idle, he leased it to verified cultivators under legal agreements. Within three years, that lease income covered his loan interest. By year five, he was earning around two to three lakh rupees annually in passive returns, all while keeping ownership and benefiting from land appreciation.</p>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">What "Leasing Out Managed Farmland" Means in India</h2>

                                        <p>When we say managed farmland, we mean land where basic infrastructure such as irrigation, soil preparation, roads, and fencing is already in place or handled by a management company.</p>

                                        <p>Leasing out managed farmland means you, as the owner, let a farmer or an agri-firm use the land for cultivation under a formal agreement. They pay rent or share the produce, while you keep full ownership. The benefit is simple – you avoid day-to-day farming hassles and still earn steady, predictable farmland lease returns.</p>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">1. The Legal Process: How to Lease Your Managed Farmland Legally in India</h2>

                                        <h3 className="section-heading mb-3 fs-6 fw-bold">a) Check state laws first</h3>

                                        <p>Agriculture is a subject under the State List in India, so lease rules differ by state. Some states have restrictions or even bans on leasing agricultural land. The Model Agricultural Land Leasing Act (2016), drafted by NITI Aayog, is meant to be a model for state adoption.</p>

                                        <h3 className="section-heading mb-3 fs-6 fw-bold">b) Draft a formal lease agreement and register it</h3>

                                        <p>A verbal agreement invites dispute. You need a written lease that includes:</p>

                                        <ul>
                                            <li>Parties, land description, survey numbers</li>
                                            <li>Lease term (years or seasons)</li>
                                            <li>Rent amount, sharing formula, or payment schedule</li>
                                            <li>Responsibilities for irrigation, maintenance, and inputs</li>
                                            <li>Permitted crops and cropping plan</li>
                                            <li>Penalties and termination clauses</li>
                                            <li>Dispute resolution process</li>
                                        </ul>

                                        <h3 className="section-heading mb-3 fs-6 fw-bold">c) Ensure title clarity and no pending encumbrances</h3>

                                        <p>Your title must be clean. Check for liens, mortgages, or disputes. Without clear ownership, a lessee or authority could later challenge your rights.</p>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">2. Typical Lease Structures, Returns, and What to Expect</h2>

                                        <h3 className="section-heading mb-3 fs-6 fw-bold">Lease Models</h3>

                                        <ul>
                                            <li><strong>Fixed cash lease:</strong> You receive a fixed annual or seasonal payment per acre.</li>
                                            <li><strong>Crop-share lease:</strong> You get a percentage of the yield or revenue (often 20–50%).</li>
                                            <li><strong>Hybrid lease:</strong> Combines fixed rent with a bonus based on yield or profit.</li>
                                            <li><strong>Service-based lease:</strong> You provide infrastructure like irrigation, while the lessee handles cultivation.</li>
                                            <li><strong>Agri-partnership or eco-farming model:</strong> The lessee manages cultivation and may also use the land for agritourism.</li>
                                        </ul>

                                        <h3 className="section-heading mb-3 fs-6 fw-bold">Expected Returns</h3>

                                        <p>Industry data suggests:</p>

                                        <ul>
                                            <li>Most managed farmland projects in India offer 5–10% annual returns on investment after expenses.</li>
                                            <li>Lease yields usually fall between 4–7% of land value in strong agricultural zones.</li>
                                            <li>In irrigated areas near Bangalore, lease rates range from ₹30,000 to ₹80,000 per acre per year.</li>
                                            <li>Rain-fed zones typically earn ₹5,000 to ₹20,000 per acre per year.</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">3. Role of Professional Management Companies</h2>

                                        <p>Professional management companies simplify leasing by handling:</p>

                                        <ul>
                                            <li>Lessee screening and background checks</li>
                                            <li>Drafting and registration of legal contracts</li>
                                            <li>Periodic inspections and yield monitoring</li>
                                            <li>Mediation in case of disputes</li>
                                            <li>Rent collection and financial reporting</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">4. Real Models of Farmland Lease in India</h2>

                                        <ul>
                                            <li><strong>Agri-leasing to commercial farmers:</strong> You lease to professional growers producing high-value crops like mangoes, bananas, or vegetables.</li>
                                            <li><strong>Eco-farming or regenerative agriculture lease:</strong> You partner with organizations promoting organic or sustainable agriculture.</li>
                                            <li><strong>Agritourism or farm-stay collaboration:</strong> Combines cultivation with hospitality for multiple income streams.</li>
                                            <li><strong>Corporate or institutional leasing:</strong> Large agricultural firms lease land for long-term contract farming.</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">5. Legal and Financial Best Practices</h2>

                                        <ul>
                                            <li>Always register leases; verbal ones have no legal strength.</li>
                                            <li>Avoid open-ended or informal terms.</li>
                                            <li>Include escalation clauses (like 5% annual rent increase).</li>
                                            <li>Request a security deposit or bank guarantee.</li>
                                            <li>Ensure the lessee insures crops and property.</li>
                                            <li>Monitor permitted land use to prevent misuse.</li>
                                            <li>Define termination conditions clearly.</li>
                                            <li>Keep proper tax and income documentation.</li>
                                            <li>Maintain a contingency fund in case of lessee default.</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">6. Example Pathway for a Bangalore-Area Landowner</h2>

                                        <p>Imagine you own five acres near Bangalore. The infrastructure – fencing, irrigation, and soil prep – is ready. You approach a management company to find lessees. After soil testing and a water audit, the company recommends a lease model with a base rent of ₹60,000 per acre plus a 10% profit share.</p>

                                        <p>You sign and register a five-year lease. The cultivator grows horticultural crops and pays rent quarterly. In year three, despite a poor season, your base rent is guaranteed. By year five, you renew at a higher rate while land value has appreciated.</p>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Final Reflection</h2>

                                        <p>Leasing out managed farmland for extra income in India is a smart and structured way to earn. It only requires the right legal process, a clear agreement, and reliable management. Once in place, your land can generate consistent income while its value continues to grow.</p>

                                        <p>You don't have to choose between keeping your land and making money – you can do both. And if you don't own farmland yet, we can help you get started.</p>
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
