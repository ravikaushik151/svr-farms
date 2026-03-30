'use client';

import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './FaqSection.css';
import SectionTitle from './SectionTitle';

const faqs = [
    {
        question: 'What exactly does “managed farmland” mean?',
        answer: 'Managed farmland means your land is professionally maintained even when you’re not around. From soil preparation and plantation to irrigation and upkeep, everything is handled - so you enjoy ownership without the operational burden.'
    },
    {
        question: 'What makes Little England different from other farmland projects?',
        answer: 'Little England combines natural landscapes, a cooler climate, and a thoughtfully planned managed ecosystem. With curated amenities, clear land titles, and a focus on long-term value, it offers more than just land - it offers a complete lifestyle experience.'
    },
    {
        question: 'Do I get complete legal ownership of the land?',
        answer: 'Yes, every plot comes with clear legal titles, ensuring full ownership and a transparent buying process you can trust.'
    },
    {
        question: 'What kind of support is provided after purchase?',
        answer: 'From fencing and irrigation to plantation and farm management, ongoing support is provided to help you maintain and develop your land effortlessly.'
    },
    {
        question: 'How far is Little England from Bangalore?',
        answer: 'Located in Thalli, Little England is approximately 35 km from Electronic City, offering easy access while still being surrounded by nature.'
    }
];

export default function FaqSection() {
    return (
        <div className="faq-section bg-light py-5">
            <Container className="max-w-4xl">
                <div className="text-center mb-5">
                    <SectionTitle title="Frequently Asked Questions" />
                </div>

                <Accordion defaultActiveKey="0" className="faq-accordion custom-accordion">
                    {faqs.map((faq, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="mb-3 border-0 rounded-3 shadow-sm faq-item bg-white overflow-hidden">
                            <Accordion.Header className="faq-header">
                                {faq.question}
                            </Accordion.Header>
                            <Accordion.Body className="text-muted lh-lg px-4 pb-4 pt-2">
                                {faq.answer}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </div>
    );
}
