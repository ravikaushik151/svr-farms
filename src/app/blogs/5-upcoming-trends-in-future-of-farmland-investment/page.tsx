'use client';

import SectionTitle from '@/components/SectionTitle';
import PageBanner from '@/components/PageBanner';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import Image from 'next/image';

export default function BlogPage() {
    return (
        <>
            <PageBanner title="Blog" backgroundImage="/banner/Blog_Banner.webp" />
            <div className="bg-light">
                <Container>
                    <Row className="text-center g-4 mb-5">
                        <Col md={12}>
                            <div className="h-100 shadow border-0 hover-lift card">
                                <div className="p-4 card-body">
                                    <img
                                        alt="Farmland near Hosur"
                                        loading="lazy"
                                        width={1296}
                                        height={375}
                                        decoding="async"
                                        data-nimg={1}
                                        className="mb-3 img-fluid mx-auto d-block w-100"
                                        style={{ color: 'transparent' }}
                                        src="/blog/1-acre-land-for-sale-in-bangalore.webp"
                                    />
                                    <div>
                                        <h1 className='section-heading text-dark text-md-start text-center card-title'>
                                            5 Upcoming Trends in Farmland Investment
                                        </h1>
                                    </div>
                                    <div className="card-text text-start mt-3 blog-details">
                                        <h2 class="wp-block-heading">Trend #1: Managed Farmland 2.0: The “Turnkey” Model and Service-Led Returns</h2>

                                        <h2 class="wp-block-heading">Trend #2: Data-Driven Agri-Tech: Sensors, Drip, Drones, and Predictive Analytics</h2>

                                        <h2 class="wp-block-heading">Trend #3: Sustainability, Carbon Credits, and Biodiversity Value</h2>

                                        <h2 class="wp-block-heading">Trend #4: Fractional Ownership, SPVs, and Transparent Structures</h2>

                                        <h2 class="wp-block-heading">Trend #5: Weekend Farming, Agri-Tourism, and “Quiet Luxury”</h2>

                                        <h2 class="wp-block-heading">The 2026 Landscape: What, Why, and How</h2>

                                        <h2 class="wp-block-heading">“Which farmland investment trends will dominate 2026”: Why is this question so popular?</h2>

                                        <h2 class="wp-block-heading">Bengaluru-Centric Vision: Why “Managed Farmland Near Bangalore” Is Frequently in the News</h2>

                                        <h2 class="wp-block-heading">Due-Diligence Checklist: A Practical Framework for 2026</h2>

                                        <h2 class="wp-block-heading">10-Step Playbook: How to start preparing now</h2>

                                        <h2 class="wp-block-heading">FAQs</h2>

                                        <h2 class="wp-block-heading">Conclusion: Preparing for 2026 starts today</h2>

                                        <p class="wp-block-paragraph" data-start="162" data-end="286"><a href="https://svrfarms.com/contact-us"><strong data-start="162" data-end="181">Reach out today</strong> </a>to book your ideal farmland plot with <strong data-start="220" data-end="233">SVR Farms</strong> and start your investment journey with confidence.</p>

                                        <p data-start="288" data-end="520">Follow <a href="https://www.instagram.com/svrfarmsbangalore/" target="_blank" rel="noopener"><strong data-start="295" data-end="308">@svrfarms</strong> </a>on Instagram for real stories, project updates, and a closer look at our thriving managed farmland communities near Bangalore. Stay tuned for the latest opportunities and insights in smart farmland investment.</p>

                                        <p data-start="522" data-end="711">Explore more of our articles on<a href="https://svrfarms.com/is-farmland-investment-in-india-is-good-in-2025"> <strong data-start="554" data-end="577">farmland investment</strong></a>, <strong data-start="579" data-end="602">location advantages</strong>, and <strong data-start="608" data-end="626">buyer insights</strong> to make well-informed, future-focused decisions for your agricultural investments.</p>


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