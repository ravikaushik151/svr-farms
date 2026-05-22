'use client';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
    FaDraftingCompass,
    FaSeedling,
    FaTree,
    FaUserFriends,
    FaMapMarkerAlt,
    FaConciergeBell,
    FaRulerCombined,
    FaLeaf,
    FaFileContract,
  
   
    FaMapMarkedAlt
} from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

const stats = [
    {
        icon: FaRulerCombined,
        count: 0.25,
        label: "Farmland Plots",
        suffix: " Acre Onwards",
        staticValue: true
    },
    {
        icon: FaMapMarkerAlt,
        count: 'Tamara Valley',
        label: "Thalli, Tamil Nadu",
        suffix: "",
        staticValue: true
    },
    { icon: FaConciergeBell, count: 25, label: "Lifestyle Amenities", suffix: "+" },
    { icon: FaSeedling, count: 300, label: "Project Land Area", suffix: "+ Acres" },
    {
        icon: FaLeaf,
        count: 'Organic Managed',
        label: "Farmland",
        suffix: "",
        staticValue: true
    },
    { icon: FaFileContract, count: 100, label: "Legal Titles ", suffix: "+" },
];

function Counter({
    end,
    duration = 2000,
    suffix = "",
    staticValue = false
}: {
    end: number | string; // Updated to accept both strings and numbers
    duration?: number;
    suffix?: string;
    staticValue?: boolean;
}) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [inView, setInView] = useState(false);

    // Static value directly show
    if (staticValue) {
        return (
            <span ref={countRef}>
                <span className='fw-4 fw-bold'> {end}</span>
                <span className='small' style={{ fontSize: '13px' }}> {suffix} </span>
            </span>
        );
    }

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

            const progress = Math.min(
                (timestamp - startTime) / duration,
                1
            );

            // Wrapped 'end' in Number() to satisfy TypeScript's math requirements
            setCount(Math.floor(progress * Number(end)));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [end, duration, inView]);

    return (
        <span ref={countRef}>
            <span className='fs-4 fw-bold'>  {count}</span>
            <span className='small' style={{ fontSize: '13px' }}> {suffix}</span>
        </span>
    );
}

export default function StatsSection() {
    return (
        <section className="py-5 faq-section position-relative overflow-hidden">
            <Container fluid className='px-md-5'>
                <Row className="g-4 justify-content-center ">
                    <h2 className="section-heading text-center mb-0">Overview</h2>
                    <div className="mx-auto mb-5 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>
                </Row>

                <Row className="g-4 justify-content-center mb-3">
                    {stats.map((stat, index) => (
                        <Col
                            key={index}
                            xs={6}
                            md={6}
                            lg={2}
                            className="text-center"
                        >
                            <Card className="border border-1 border-light shadow-sm py-4 align-items-center justify-content-center hover-lift h-100">

                                {/* Small Icon */}
                                <div className="mb-3 text-sanjeevani">
                                    <stat.icon size={50} />
                                </div>

                                <h2 className="fw-bold mb-2 text-sanjeevani  fs-4">
                                    <Counter
                                        end={stat.count}
                                        suffix={stat.suffix}
                                        staticValue={stat.staticValue}
                                    />
                                </h2>

                                <p className="mb-0 text-uppercase small letter-spacing-2 fw-semibold text-secondary">
                                    {stat.label}
                                </p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}