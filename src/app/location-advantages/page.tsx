'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
    FaLeaf,
    FaCloudSun,
    FaMountain,
    FaRoad,
    FaSeedling,
    FaLandmark,
    FaMapMarkerAlt,
    FaIndustry,
    FaQuoteLeft,
    FaArrowRight,
    FaCompass,
    FaHome,
    FaTag,
    FaTrain,
    FaPlane,
    FaBuilding,
    FaChevronRight,
    FaRegClock,
    FaBicycle,
    FaHistory
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';

export default function LocationAdvantages() {
    return (
        <div style={{ backgroundColor: '#fcfbf7', overflow: 'hidden' }}>

            {/* Page Banner with breadcrumbs */}
            <PageBanner
                title="Location Advantages"
                backgroundImage="/banner/location-advantage_banner.webp"
                breadcrumbCurrent="Location Advantages"
            />

            {/* Introduction Section */}
            <Container className="py-5 mt-4 text-center">
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <span className="text-uppercase fw-bold text-spacing-2 mb-3 d-flex align-items-center justify-content-center gap-2" style={{ color: '#c5a059', fontSize: '0.9rem', letterSpacing: '2px' }}>
                            <FaCompass size={14} /> LOCATION INSIGHTS
                        </span>
                        <h2 className="display-5 fw-bold text-sanjeevani mb-4" style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                            Thally - Little England
                        </h2>
                        <p className="lead text-dark lh-lg mb-4" style={{ fontSize: '1.2rem', fontWeight: 400 }}>
                            A best-kept-secret summer destination of the British, home to the twin hills of Devarabetta and a viewpoint that opens onto the region's rolling landscape.
                        </p>
                        <p className="text-muted lh-lg mb-5" style={{ fontSize: '1.05rem' }}>
                            Just an hour from Bangalore’s Silk Board lies a pocket of land that British planters once mistook for a slice of home. Rolling green hills, misty mornings and a climate that rarely sees the mercury rise gave Thally a character unlike the warmer plains surrounding it.
                        </p>

                        {/* 4 Icon Highlights Grid */}
                        <Row className="g-4 justify-content-center text-start border-top pt-5">
                            {[
                                { icon: <FaCloudSun size={26} />, title: "Cool Climate", subtitle: "All Year" },
                                { icon: <FaMountain size={26} />, title: "Scenic Hills", subtitle: "& Valleys" },
                                { icon: <FaRoad size={26} />, title: "Excellent", subtitle: "Connectivity" },
                                { icon: <FaSeedling size={26} />, title: "Fertile Land", subtitle: "& Rich Soil" }
                            ].map((item, index) => (
                                <Col xs={6} md={3} key={index} className="d-flex align-items-center gap-3 justify-content-md-center">
                                    <div style={{ color: '#c5a059' }}>{item.icon}</div>
                                    <div>
                                        <span className="fw-semibold d-block text-sanjeevani mb-0" style={{ fontSize: '0.9rem' }}>{item.title}</span>
                                        <span className="text-muted small" style={{ fontSize: '0.8rem' }}>{item.subtitle}</span>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>


            {/* 2. Heritage Timeline & Forts Block ("A Slice of England") */}
            <section id="heritage" className="py-5" style={{ backgroundColor: '#ffffff' }}>
                <Container className="py-lg-5">
                    <div className="text-center mb-5">
                        <span className="text-uppercase fw-bold text-spacing-2 mb-2 d-block" style={{ color: '#c5a059', fontSize: '0.8rem', letterSpacing: '1.5px' }}>
                            A SLICE OF ENGLAND IN KARNATAKA
                        </span>
                        <h2 className="display-4 fw-bold text-sanjeevani" style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                            A Heritage That Built an Identity
                        </h2>
                        <div className="d-flex justify-content-center mt-3">
                            <span style={{ width: '50px', height: '2px', backgroundColor: '#c5a059' }}></span>
                        </div>
                    </div>

                    <Row className="gy-5 align-items-stretch">
                        {/* Timeline Story column */}
                        <Col lg={7} className="pe-lg-5 d-flex flex-column justify-content-between">
                            <div className="position-relative ps-4 border-start border-warning border-opacity-50 border-2 text-start">

                                {/* Step 1 */}
                                <div className="mb-4 position-relative">
                                    <div className="position-absolute start-0 translate-middle-x rounded-circle bg-warning" style={{ width: '12px', height: '12px', marginLeft: '-29px', marginTop: '6px' }}></div>
                                    <h3 className="h6 fw-bold text-sanjeevani text-uppercase tracking-wider">The Little England Nickname</h3>
                                    <p className="text-secondary small lh-lg">
                                        British planters once found in Thally's twin hills of Devarabetta and its temperate weather an uncanny resemblance to the English countryside. Its cool mornings, green stretches and mist-covered slopes offered a welcome retreat from the heat of the plains. Locals soon adopted the name they gave it, and it stuck.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="mb-4 position-relative">
                                    <div className="position-absolute start-0 translate-middle-x rounded-circle bg-sanjeevani" style={{ width: '12px', height: '12px', marginLeft: '-29px', marginTop: '6px' }}></div>
                                    <h3 className="h6 fw-bold text-sanjeevani text-uppercase tracking-wider">The Floral Transition Drive</h3>
                                    <p className="text-secondary small lh-lg">
                                        Even now, driving through Thally via Jigani and Chandapura feels like entering a different climate zone altogether. Marigold and rose gardens line the roads, mustard fields turn entire hillsides yellow and the air becomes noticeably cooler as the urban landscape disappears. It feels like an arrival into a different way of life.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="position-relative">
                                    <div className="position-absolute start-0 translate-middle-x rounded-circle bg-sanjeevani" style={{ width: '12px', height: '12px', marginLeft: '-29px', marginTop: '6px' }}></div>
                                    <h3 className="h6 fw-bold text-sanjeevani text-uppercase tracking-wider">A Historical Connection</h3>
                                    <p className="text-secondary small lh-lg">
                                        Thally’s heritage is physically cemented by two landmark forts: the English-style Kenilworth Fort and the historic Denkanikottai Fort, layering the region with rich history that most visitors would never expect to discover on a weekend drive.
                                    </p>
                                </div>
                            </div>

                            {/* Forts side by side card grid */}
                            <Row className="g-3 mt-4 text-start">
                                <Col md={6}>
                                    <Card className="h-100 border-0 bg-light p-3 shadow-sm">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <FaLandmark className="text-sanjeevani" size={18} />
                                            <h4 className="h6 fw-bold text-sanjeevani mb-0">Kenilworth Fort</h4>
                                        </div>
                                        <p className="text-muted mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                                            Modelled after England’s Kenilworth Castle, this remains the only fort in India built in the style of an English castle. It adds a distinct layer of European influence.
                                        </p>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className="h-100 border-0 bg-light p-3 shadow-sm">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <FaLandmark className="text-sanjeevani" size={18} />
                                            <h4 className="h6 fw-bold text-sanjeevani mb-0">Denkanikottai Fort</h4>
                                        </div>
                                        <p className="text-muted mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                                            Built by a Palayakarar chieftain in 1530 AD. Rich in military history, it was later destroyed during the wars involving Hyder Ali and Tipu Sultan.
                                        </p>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                        {/* Visual cover column with Quote */}
                        <Col lg={5}>
                            <div className="position-relative h-100 d-flex flex-column">
                                <div className="rounded-4 overflow-hidden shadow flex-grow-1 min-h-350" style={{ position: 'relative', minHeight: '350px' }}>
                                    <Image
                                        src="/location/2.webp"
                                        alt="Kenilworth fort history look"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>

                                {/* Absolute Quote block */}
                                <div className="bg-sanjeevani text-white p-4 rounded-4 shadow mt-n5 mx-3 z-1 position-relative" style={{ marginTop: '-50px' }}>
                                    <div className="d-flex align-items-start gap-3 text-start">
                                        <FaQuoteLeft size={24} style={{ color: '#c5a059', minWidth: '24px' }} />
                                        <p className="small mb-0 lh-lg text-white-50" style={{ fontStyle: 'italic', fontSize: '0.85rem' }}>
                                            From misty mornings and flower-lined roads to historic forts and rolling hills, Thally is a place where nature, history and tranquillity exist in perfect harmony.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* 3. Core Advantages Grid ("Advantages That Matter") */}
            <section id="advantages" className="py-5" style={{ backgroundColor: '#fcfbf7', borderTop: '1px solid rgba(197, 160, 89, 0.1)' }}>
                <Container className="py-lg-5">
                    <div className="text-center mb-5">
                        <span className="text-uppercase fw-bold text-spacing-2 mb-2 d-block" style={{ color: '#c5a059', fontSize: '0.8rem', letterSpacing: '1.5px' }}>
                            INVESTMENT & ENVIRONMENT
                        </span>
                        <h2 className="display-4 fw-bold text-sanjeevani" style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                            Location Advantages That Matter
                        </h2>
                        <p className="text-muted max-w-xl mx-auto" style={{ fontSize: '0.95rem' }}>
                            Thally’s appeal lies not in a single advantage, but in a rare combination of climate, connectivity, fertile land, heritage and long-term growth potential.
                        </p>
                        <div className="d-flex justify-content-center mt-3">
                            <span style={{ width: '50px', height: '2px', backgroundColor: '#c5a059' }}></span>
                        </div>
                    </div>

                    <Row className="gy-5 text-start">
                        {/* Point 1: Proximity & Spillover */}
                        <Col lg={4}>
                            <Card className="h-100 border-0 bg-white p-4 shadow-sm" style={{ borderTop: '4px solid #114934' }}>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '46px', height: '46px', backgroundColor: 'rgba(17,73,52,0.05)', color: '#114934' }}>
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <span className="fw-bold text-muted small">01. PROXIMITY & BOOM</span>
                                </div>
                                <h3 className="h5 fw-bold text-sanjeevani mb-3">Strategic Proximity & Industrial Spillover</h3>
                                <p className="text-secondary small lh-lg mb-3">
                                    Thally sits roughly 50 km from Silk Board and just 25 km from Hosur, close enough for a genuine weekend escape without the fatigue of travelling to a distant hill station.
                                </p>
                                <p className="text-secondary small lh-lg mb-0">
                                    Its proximity to Hosur adds another important dimension. Increasingly tied to Hosur’s manufacturing boom, Thally benefits from massive industrial investments by <strong>Tata Electronics, TVS, Titan, and Ather</strong>. It is turning Thally into a natural residential overflow zone for a growing workforce looking for clean air and open surroundings.
                                </p>
                            </Card>
                        </Col>

                        {/* Point 2: Climate & Agriculture */}
                        <Col lg={4}>
                            <Card className="h-100 border-0 bg-white p-4 shadow-sm" style={{ borderTop: '4px solid #c5a059' }}>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '46px', height: '46px', backgroundColor: 'rgba(197,160,89,0.08)', color: '#c5a059' }}>
                                        <FaCloudSun size={20} />
                                    </div>
                                    <span className="fw-bold text-muted small">02. ENVIRONMENT</span>
                                </div>
                                <h3 className="h5 fw-bold text-sanjeevani mb-3">Salubrious Climate & Fertile Land</h3>
                                <p className="text-secondary small lh-lg mb-3">
                                    At around 1,000 feet elevation, Thally enjoys a cool, salubrious climate that rarely feels oppressive, even in summer. Mornings are often misty, evenings remain comfortable and the landscape stays visually refreshing.
                                </p>
                                <p className="text-secondary small lh-lg mb-0">
                                    Extended rainy seasons and fertile soil have made Thally a hub for potatoes, carrots, cabbage and flowers. The region is particularly known for its sprawling marigold and rose fields (earning Thally the reputation of <strong>"Rose City"</strong>), offering the perfect foundation for managed agricultural activity.
                                </p>
                            </Card>
                        </Col>

                        {/* Point 3: Gated Communities & Entry Pricing */}
                        <Col lg={4}>
                            <Card className="h-100 border-0 bg-white p-4 shadow-sm" style={{ borderTop: '4px solid #114934' }}>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '46px', height: '46px', backgroundColor: 'rgba(17,73,52,0.05)', color: '#114934' }}>
                                        <FaHome size={20} />
                                    </div>
                                    <span className="fw-bold text-muted small">03. INVESTMENT</span>
                                </div>
                                <h3 className="h5 fw-bold text-sanjeevani mb-3">Farmland Boom & Value Entry Point</h3>
                                <p className="text-secondary small lh-lg mb-3">
                                    Thally has become a magnet for premium gated farmland communities. Buyers are picking up 10,000-plus sq. ft. managed plots not for farming alone, but as weekend farmhouses, retirement properties and long-term family assets.
                                </p>
                                <p className="text-secondary small lh-lg mb-0">
                                    Compared to Electronic City or Sarjapur, land prices around Thally remain notably competitive. For investors, this creates the opportunity to acquire larger parcels of land at a relatively accessible entry point, with strong potential for capital appreciation over the long term.
                                </p>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* 4. Infrastructure on the Horizon (Deep green dashboard) */}
            <section id="infrastructure" className="py-5 text-white" style={{
                backgroundImage: 'linear-gradient(135deg, #09251b 0%, #114934 100%)'
            }}>
                <Container className="py-lg-5">
                    <div className="text-center mb-5">
                        <span className="text-uppercase fw-bold text-spacing-2 mb-2 d-block" style={{ color: '#c5a059', fontSize: '0.8rem', letterSpacing: '1.5px' }}>
                            REGIONAL CONNECTIVITY PROJECTS
                        </span>
                        <h2 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                            Infrastructure on the Horizon
                        </h2>
                        <p className="text-white-50 max-w-xl mx-auto" style={{ fontSize: '0.95rem' }}>
                            A handful of infrastructure projects are set to reshape Thally’s connectivity and economic weight over the next several years, bridging the gaps between Bangalore and Hosur corridors.
                        </p>
                        <div className="d-flex justify-content-center mt-3">
                            <span style={{ width: '50px', height: '1.5px', backgroundColor: '#c5a059' }}></span>
                        </div>
                    </div>

                    <Row className="g-4 text-start mt-2">
                        {/* Metro */}
                        <Col md={6} lg={3}>
                            <div className="p-4 h-100 rounded-3 d-flex flex-column justify-content-between" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div>
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(197, 160, 89, 0.12)', color: '#c5a059' }}>
                                        <FaTrain size={20} />
                                    </div>
                                    <h3 className="h6 fw-bold text-white text-uppercase tracking-wide mb-3">Namma Metro Yellow Line Extension</h3>
                                    <p className="text-white-50 small lh-lg" style={{ fontSize: '0.78rem' }}>
                                        A proposed link from Bommasandra to Hosur could connect the wider region more directly to Electronic City and Silk Board. For Thally, improved access to nearby metro-linked areas will enhance its appeal as a second-home location.
                                    </p>
                                </div>
                                <div className="mt-3 text-warning border-top border-secondary border-opacity-25 pt-2 small text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1px' }}>
                                    Target Status: Proposed Link
                                </div>
                            </div>
                        </Col>

                        {/* STRR */}
                        <Col md={6} lg={3}>
                            <div className="p-4 h-100 rounded-3 d-flex flex-column justify-content-between" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div>
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(197, 160, 89, 0.12)', color: '#c5a059' }}>
                                        <FaRoad size={20} />
                                    </div>
                                    <h3 className="h6 fw-bold text-white text-uppercase tracking-wide mb-3">Satellite Town Ring Road (STRR)</h3>
                                    <p className="text-white-50 small lh-lg" style={{ fontSize: '0.78rem' }}>
                                        The STRR (NH-948A) is being developed to loop around Bengaluru. For the Hosur-Thally outskirts, this means smoother regional movement and reduced traffic bottlenecking. Commuters can bypass central Bengaluru entirely.
                                    </p>
                                </div>
                                <div className="mt-3 text-warning border-top border-secondary border-opacity-25 pt-2 small text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1px' }}>
                                    Target Status: Under Development
                                </div>
                            </div>
                        </Col>

                        {/* Airport */}
                        <Col md={6} lg={3}>
                            <div className="p-4 h-100 rounded-3 d-flex flex-column justify-content-between" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div>
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(197, 160, 89, 0.12)', color: '#c5a059' }}>
                                        <FaPlane size={20} />
                                    </div>
                                    <h3 className="h6 fw-bold text-white text-uppercase tracking-wide mb-3">Greenfield International Airport</h3>
                                    <p className="text-white-50 small lh-lg" style={{ fontSize: '0.78rem' }}>
                                        Tamil Nadu’s government is actively planning an international airport and industrial aerotropolis near the Hosur corridor, significantly altering the region's economic profile by drawing in aviation, retail, and hospitality.
                                    </p>
                                </div>
                                <div className="mt-3 text-warning border-top border-secondary border-opacity-25 pt-2 small text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1px' }}>
                                    Target Status: Active Planning
                                </div>
                            </div>
                        </Col>

                        {/* IT upgrades */}
                        <Col md={6} lg={3}>
                            <div className="p-4 h-100 rounded-3 d-flex flex-column justify-content-between" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div>
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(197, 160, 89, 0.12)', color: '#c5a059' }}>
                                        <FaBuilding size={20} />
                                    </div>
                                    <h3 className="h6 fw-bold text-white text-uppercase tracking-wide mb-3">Hosur Tech & Retail Upgrades</h3>
                                    <p className="text-white-50 small lh-lg" style={{ fontSize: '0.78rem' }}>
                                        A proposed 5 lakh sq. ft. TIDEL IT Park and retail centers (including Hosur Central Mall) promise to bring city-grade employment and conveniences closer. You can enjoy countryside living without sacrificing urban comfort.
                                    </p>
                                </div>
                                <div className="mt-3 text-warning border-top border-secondary border-opacity-25 pt-2 small text-uppercase" style={{ fontSize: '0.68rem', letterSpacing: '1px' }}>
                                    Target Status: Future Ecosystem
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* 5. Tourism and Lifestyle Appeal (Mosaic Layout) */}
            <section id="tourism" className="py-5" style={{ backgroundColor: '#ffffff' }}>
                <Container className="py-lg-5">
                    <div className="text-center mb-5">
                        <span className="text-uppercase fw-bold text-spacing-2 mb-2 d-block" style={{ color: '#c5a059', fontSize: '0.8rem', letterSpacing: '1.5px' }}>
                            ESCAPE & EXPLORE
                        </span>
                        <h2 className="display-4 fw-bold text-sanjeevani" style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                            Tourism and Lifestyle Appeal
                        </h2>
                        <div className="d-flex justify-content-center mt-3">
                            <span style={{ width: '50px', height: '2px', backgroundColor: '#c5a059' }}></span>
                        </div>
                    </div>

                    <Row className="gy-4 text-start">
                        {/* Information column */}
                        <Col lg={5} className="d-flex flex-column justify-content-center pe-lg-5">
                            <h3 className="h4 fw-bold text-sanjeevani mb-3">Beyond Investment, A Genuine Escape</h3>
                            <p className="text-secondary small lh-lg mb-3">
                                The Thally Garden and Lake, local dams and the twin viewpoint hills of Devarabetta give visitors scenic, uncrowded alternatives to the well-trodden paths of Ooty or Coorg.
                            </p>
                            <p className="text-secondary small lh-lg mb-3">
                                Unlike heavily commercialised hill stations, Thally still feels relatively quiet and undiscovered. Visitors can experience open roads, cultivated valleys, flower fields and elevated viewpoints without the congestion that often accompanies popular tourist destinations.
                            </p>
                            <p className="text-secondary small lh-lg mb-0">
                                The region is particularly suited to short road trips, nature walks, farm experiences, photography and slow weekends spent away from the city. Meanwhile, Kenilworth Fort continues to be a heritage stop unlike anything else in the country. It is a destination that owners can return to, spend time in and build personal experiences around.
                            </p>
                        </Col>

                        {/* Image mosaic columns */}
                        <Col lg={7}>
                            <Row className="g-3">
                                <Col sm={8}>
                                    <div className="rounded-3 overflow-hidden shadow-sm position-relative" style={{ height: '380px' }}>
                                        <Image
                                            src="/location/3.webp"
                                            alt="Devarabetta hills viewpoint"
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 p-3 text-white w-100" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}>
                                            <h4 className="h6 fw-bold mb-0 text-white">Devarabetta Viewpoint</h4>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="d-flex flex-column gap-3">
                                        <div className="rounded-3 overflow-hidden shadow-sm position-relative" style={{ height: '182px' }}>
                                            <Image
                                                src="/location/4.webp"
                                                alt="Thally dam lake"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <div className="position-absolute bottom-0 start-0 p-2 text-white w-100" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}>
                                                <span className="small fw-semibold d-block text-white" style={{ fontSize: '0.7rem' }}>Thally Lake & Garden</span>
                                            </div>
                                        </div>
                                        <div className="rounded-3 overflow-hidden shadow-sm position-relative" style={{ height: '182px' }}>
                                            <Image
                                                src="/about.webp"
                                                alt="Rose farms"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <div className="position-absolute bottom-0 start-0 p-2 text-white w-100" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}>
                                                <span className="small fw-semibold d-block text-white" style={{ fontSize: '0.7rem' }}>Rose & Marigold Valleys</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* 6. Summary Outlook ("Growing into Its Potential") */}
            <section className="py-5" style={{ backgroundColor: '#fcfbf7', borderTop: '1px solid rgba(197, 160, 89, 0.15)', borderBottom: '1px solid rgba(197, 160, 89, 0.15)' }}>
                <Container className="py-lg-4 text-start">
                    <Row className="gy-4 align-items-center">
                        <Col lg={5} className="pe-lg-5">
                            <span className="text-uppercase fw-bold text-spacing-2 mb-2 d-block" style={{ color: '#c5a059', fontSize: '0.8rem', letterSpacing: '1.5px' }}>
                                A STRATEGIC OUTLOOK
                            </span>
                            <h2 className="display-5 fw-bold text-sanjeevani mb-4" style={{ fontFamily: '"Playfair Display", "Georgia", serif', lineHeight: '1.2' }}>
                                A Destination Growing into Its Potential
                            </h2>
                            <div className="bg-warning mb-4" style={{ width: '50px', height: '1.5px', backgroundColor: '#c5a059' }}></div>
                            <p className="text-secondary lh-lg mb-0" style={{ fontSize: '0.98rem' }}>
                                Thally’s appeal lies in the fact that it already possesses what many destinations attempt to manufacture - pleasant weather, fertile land, scenic topography, cultural character and a genuine sense of escape.
                            </p>
                        </Col>

                        <Col lg={7}>
                            <Row className="g-3">
                                {[
                                    {
                                        title: "For Weekend Travellers",
                                        desc: "Thally offers a refreshing change of scenery, open roads, and scenic viewpoints without the typical crowd congestion."
                                    },
                                    {
                                        title: "For Farmland Buyers",
                                        desc: "It provides highly fertile soil and weather that makes organic cultivation, fruit farming, and flora development work naturally."
                                    },
                                    {
                                        title: "For Strategic Investors",
                                        desc: "Timing is everything. Acquire substantial plots at a competitive entry cost, positioned next to Hosur's massive industrial boom."
                                    }
                                ].map((target, idx) => (
                                    <Col md={4} key={idx}>
                                        <Card className="h-100 border-0 p-3 bg-white shadow-sm">
                                            <div className="d-flex align-items-center gap-2 mb-3">
                                                <div className="rounded-circle d-flex align-items-center justify-content-center text-white" style={{ width: '28px', height: '28px', backgroundColor: '#114934', color: '#c5a059', fontSize: '0.7rem' }}>
                                                    <FaLeaf size={10} />
                                                </div>
                                                <h4 className="h6 fw-bold text-sanjeevani mb-0" style={{ fontSize: '0.78rem', letterSpacing: '0.5px' }}>{target.title}</h4>
                                            </div>
                                            <p className="text-muted small mb-0 lh-lg" style={{ fontSize: '0.75rem' }}>{target.desc}</p>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* 7. Bottom Call-To-Action (Sunset Pavilion Backdrop) */}
            <div className="position-relative d-flex align-items-center py-5 text-white" style={{
                backgroundImage: 'url("/about-3.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '480px',
                padding: '80px 0'
            }}>
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(11, 43, 31, 0.86)' }}></div>

                <Container className="position-relative z-1 text-center">
                    <Row className="justify-content-center">
                        <Col lg={8} md={10}>
                            <span className="text-uppercase fw-bold text-spacing-2 mb-2 d-block" style={{ color: '#c5a059', fontSize: '0.8rem', letterSpacing: '1.5px' }}>
                                OWN SOMETHING THAT LASTS
                            </span>

                            <h2 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: '"Playfair Display", "Georgia", serif', lineHeight: '1.2' }}>
                                Own Something That Grows Beyond Value.
                            </h2>

                            <p className="text-white-50 mb-5 lh-lg" style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                                Discover a place to pause, grow and belong.
                            </p>

                            <Link href="/contact" className="btn text-white text-uppercase px-4 py-3 rounded-0 fw-semibold d-inline-flex align-items-center gap-2" style={{
                                backgroundColor: '#114934',
                                border: '2px solid #c5a059',
                                fontSize: '0.82rem',
                                letterSpacing: '1px',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#1b2e1e'; }}
                                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#114934'; }}
                            >
                                Explore Little England <FaArrowRight size={11} style={{ color: '#c5a059' }} />
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
