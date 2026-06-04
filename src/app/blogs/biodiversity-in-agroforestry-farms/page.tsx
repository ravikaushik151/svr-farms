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
                                    <img alt="Biodiversity in Agroforestry Farms" loading="lazy" width={1024} height={538} decoding="async" data-nimg={1} className="mb-3 img-fluid mx-auto d-block w-100" style={{ color: 'transparent' }} src="/blog/Biodiversity-in-Agroforestry-Farms-1024x538.webp" />
                                    <div className="">
                                        <h1 className='section-heading text-dark text-md-start text-center card-title fw-bold fs-3'>More Than Just Trees: The Biodiversity We're Nurturing at SVR Farms</h1>
                                    </div>
                                    <div className="card-text text-start mt-3">
                                        <p>It's early morning at SVR Farms. The air is cool, mist hangs over young trees, and bees buzz around wildflowers. A small bird darts through the branches while earthworms quietly work below the soil. Everywhere you look, life is unfolding, not in chaos but in harmony. This is what biodiversity in agroforestry farms really looks like.</p>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Why biodiversity in agroforestry farms matters</h2>

                                        <p>To most people, biodiversity suggests forests and wilderness. But biodiversity in agroforestry farms is about blending agriculture and nature. It means integrating trees, shrubs, crops, livestock, microorganisms, and wildlife, all arranged so they support each other.</p>

                                        <p>Here's what science tells us:</p>
                                        <ul>
                                            <li>In India, agroforestry now covers about 28.42 million hectares, roughly 8.65% of the country's area.</li>
                                            <li>Agroforestry systems act as corridors and buffers that allow species movement and help conserve germplasm and sensitive species near forests.</li>
                                            <li>Globally, agroforestry is recognized as one of the few farming methods that can merge food production with biodiversity conservation.</li>
                                        </ul>

                                        <p>When you invest in farmland that prioritizes biodiversity, you're not choosing between yield and nature. You're aligning with a regenerative model that minimizes risk, improves resilience, and can even command higher premiums.</p>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Enhancing soil biodiversity on farm: The hidden engine</h2>

                                        <p>Beneath your feet lies one of the richest ecosystems on Earth—soil. But in conventional farms, repeated tilling, chemical fertilizers, and pesticides destroy that ecosystem.</p>

                                        <p>Enhancing soil biodiversity on farm means reviving microbes, fungi, insects, earthworms, and the web of life that connects them. This matters because:</p>
                                        <ul>
                                            <li>Microbes decompose organic matter and recycle nutrients, turning waste into fertility.</li>
                                            <li>Fungi, especially mycorrhizal fungi, connect plant roots, improving water, phosphorus, and nitrogen uptake.</li>
                                            <li>A living soil resists pests and diseases naturally, reducing the need for chemicals.</li>
                                            <li>Diverse soil life improves structure, allowing better water absorption and reducing erosion.</li>
                                        </ul>

                                        <p>In India, about 37% of land is estimated to be degraded, and soil erosion remains a serious issue. Rebuilding soil biodiversity is one of the few proven ways to reverse that trend while improving productivity.</p>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Pollinator habitats, wildlife niches, and ecological design</h2>

                                        <p>Trees don't just grow—they flower, fruit, and host life. At SVR Farms, we design each landscape to support pollinators, wildlife, and soil organisms in harmony.</p>

                                        <ul>
                                            <li>Flowering strips, hedgerows, and native understory vegetation sustain bees, butterflies, birds, bats, and beneficial insects.</li>
                                            <li>Deadwood, leaf litter, and log pools are left intentionally to feed decomposers, amphibians, and small mammals.</li>
                                            <li>We use multi-species planting to mimic natural forests and balance pest cycles.</li>
                                            <li>Water bodies, ponds, and micro-wetlands help amphibians, dragonflies, and aquatic insects while cooling the microclimate.</li>
                                        </ul>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Long-term benefits of farm biodiversity for investors</h2>

                                        <p>You might wonder if this ecological richness also brings financial returns. The answer is yes.</p>

                                        <ol>
                                            <li><strong>Yield stability and risk mitigation:</strong> Biodiverse farms are more resilient to pests, disease, and climate shocks.</li>
                                            <li><strong>Premium produce and branding:</strong> Crops grown under biodiversity-friendly systems attract higher market value.</li>
                                            <li><strong>Carbon credits and ecosystem services:</strong> Agroforestry can sequester significant carbon.</li>
                                            <li><strong>Long-term capital appreciation:</strong> Farmland that regenerates ecosystems tends to appreciate faster.</li>
                                            <li><strong>Positive ESG and legacy value:</strong> For NRIs and urban investors, such land becomes a long-term ecological legacy.</li>
                                        </ol>

                                        <h2 className="section-heading mb-3 fs-5 fw-bold">Conclusion</h2>

                                        <p>Trees are only the visible part of a deeper story. What truly matters is the living network that binds them, the soil organisms, pollinators, and natural cycles that sustain the entire system. Biodiversity in agroforestry farms, when nurtured consciously, becomes a lifeline for the planet and a source of lasting value for investors.</p>

                                        <p>Owning farmland should feel like owning a piece of living legacy. Are you ready to plant more than trees and grow your own connection to nature and heritage?</p>
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
