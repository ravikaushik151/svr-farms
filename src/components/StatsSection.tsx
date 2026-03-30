'use client';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaDraftingCompass, FaTree, FaSeedling, FaUserFriends, FaMapMarkedAlt } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

const stats = [
    { icon: FaDraftingCompass, count: 15, label: "Landmark Developments", suffix: "+" },
    { icon: FaTree, count: 3500, label: "Trees Rooted", suffix: "+" },
    { icon: FaSeedling, count: 5000, label: "Thriving Plantations", suffix: "+" },
    { icon: FaUserFriends, count: 1000, label: "Associated Families", suffix: "+" },
    { icon: FaMapMarkedAlt, count: 3000, label: "Acres Delivered", suffix: "+" },
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
        <section className="py-5 bg-white">
            <Container>
                <Row className="g-4 justify-content-center">
                    {stats.map((stat, index) => (
                        <Col key={index} md={4} lg={2} className="text-center">
                            <Card className="h-100 border border-1 border-light shadow-sm py-4 h-100 align-items-center justify-content-center hover-lift">
                                <div className="mb-3 text-sanjeevani">
                                    <stat.icon size={40} />
                                </div>
                                <h2 className="fw-bold mb-2 text-sanjeevani">
                                    <Counter end={stat.count} suffix={stat.suffix} />
                                </h2>
                                <p className="mb-0 text-uppercase small letter-spacing-2 fw-semibold text-secondary">{stat.label}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
