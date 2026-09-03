'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaTree, FaAward, FaMapMarkedAlt, FaHome, FaLeaf } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

const stats = [
    {
        icon: FaUsers,
        count: 350,
        label: "Happy Families",
        suffix: "+",
        description: "Already living the Little England lifestyle"
    },
    {
        icon: FaTree,
        count: 3500,
        label: "No. of Acres",
        suffix: "+",
        description: "Nurturing nature, creating a legacy"
    },
    {
        icon: FaAward,
        count: 15,
        label: "Years of Legacy",
        suffix: "+",
        description: "Proudly shaping the Little England journey"
    },
    {
        icon: FaMapMarkedAlt,
        count: 1000,
        label: "Farmland Plots",
        suffix: "+",
        description: "Spacious, secure & well-planned plots"
    },
    {
        icon: FaHome,
        count: 15,
        label: "Projects",
        suffix: "+",
        description: "Completed & ongoing projects"
    },
];

function Counter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;

        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [end, duration, inView]);

    return <span ref={countRef}>{count}{suffix}</span>;
}

export default function StatsSection() {
    return (
        <section
            className="py-5 position-relative"
            style={{
                backgroundImage: 'linear-gradient(to bottom, #fcfbf7 60%, rgba(255, 255, 255, 0.4) 100%), url("/Home_page.webp")',
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '600px'
            }}
        >
            <Container fluid className="py-lg-5 position-relative">

                {/* Header */}
                <div className="text-center mb-5">
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                        <h6
                            className="text-uppercase letter-spacing-2 mb-0 small fw-bold"
                            style={{ color: '#c5a059', fontSize: '0.8rem' }}
                        >
                            Rooted in Nature. Built for Life.
                        </h6>
                        <span style={{ width: '40px', height: '1px', backgroundColor: '#c5a059' }}></span>
                    </div>

                    <h2
                        className="display-4 fw-bold mb-3 text-sanjeevani"
                        style={{
                            fontFamily: '"Playfair Display", "Georgia", serif',
                            lineHeight: '1.2'
                        }}
                    >
                        Little England in Numbers
                    </h2>

                    <div className="d-flex justify-content-center mb-4">
                        <FaLeaf size={16} style={{ color: '#c5a059', opacity: 0.8 }} />
                    </div>

                    <p className="text-muted max-w-2xl mx-auto" style={{ fontSize: '1.02rem' }}>
                        A thriving community. A greener tomorrow.
                    </p>
                </div>

                {/* Grid Cards of Stats */}
                <Row className="g-3 g-md-4 justify-content-center">
                    {stats.map((stat, index) => (
                        <Col key={index} xs={6} sm={6} md={4} lg={2} className="d-flex align-items-stretch">
                            <Card
                                className="border-0 shadow-sm p-3 p-md-4 text-center rounded-4 position-relative hover-lift bg-white w-100 d-flex flex-column"
                                style={{
                                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)'
                                }}
                            >
                                {/* Circle icon wrapper */}
                                <div
                                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center mb-3 mb-md-4 mt-1 mt-md-2 stat-circle"
                                    style={{
                                        backgroundColor: '#114934',
                                        border: '3px solid #c5a059',
                                        color: '#c5a059',
                                        boxShadow: '0 4px 10px rgba(17, 73, 52, 0.2)'
                                    }}
                                >
                                    <stat.icon className="stat-icon" />
                                </div>

                                {/* Count value */}
                                <h2
                                    className="fw-bold mb-1 mb-md-2 text-dark"
                                    style={{
                                        fontFamily: 'var(--font-serif)',
                                        fontSize: 'clamp(1.45rem, 4vw, 2.1rem)'
                                    }}
                                >
                                    <Counter end={stat.count} suffix={stat.suffix} />
                                </h2>

                                {/* Label */}
                                <h5
                                    className="fw-bold mb-1 mb-md-2 text-uppercase"
                                    style={{
                                        fontSize: 'clamp(0.68rem, 1.8vw, 0.78rem)',
                                        color: '#114934',
                                        letterSpacing: '0.5px',
                                        lineHeight: '1.3',
                                        minHeight: '28px'
                                    }}
                                >
                                    {stat.label}
                                </h5>

                                {/* Divider line */}
                                <div className="mx-auto my-1.5 my-md-2" style={{ width: '20px', height: '1.5px', backgroundColor: '#c5a059' }}></div>

                                {/* Description */}
                                <p className="text-muted small lh-sm lh-md-relaxed mb-0 mt-auto" style={{ fontSize: 'clamp(0.68rem, 1.8vw, 0.8rem)' }}>
                                    {stat.description}
                                </p>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>

            <style jsx>{`
                .stat-circle {
                    width: 52px;
                    height: 52px;
                    min-height: 52px;
                }
                :global(.stat-icon) {
                    font-size: 20px;
                }
                @media (min-width: 768px) {
                    .stat-circle {
                        width: 72px;
                        height: 72px;
                        min-height: 72px;
                    }
                    :global(.stat-icon) {
                        font-size: 28px;
                    }
                }
            `}</style>
        </section>
    );
}
