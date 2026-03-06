'use client';

import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './FaqSection.css';
import SectionTitle from './SectionTitle';

const faqs = [
    {
        question: 'What exactly does "managed farmland" mean?',
        answer: 'Managed farmland means we take care of the entire farming process. From soil testing, planting, irrigation, security, and regular maintenance, our team of experts handles everything so you can enjoy the benefits of owning farmland without the day-to-day agricultural responsibilities.'
    },
    {
        question: 'How is SVR Farms different from other farmland projects?',
        answer: 'SVR Farms focuses on sustainable, eco-friendly farming practices with a long-term vision. We provide complete transparency, expert agricultural management, and prime locations that offer both agricultural yield and land appreciation.'
    },
    {
        question: 'Who is managed farmland not suitable for?',
        answer: 'If you are looking for short-term speculative returns, or if you wish to construct commercial buildings on the land, managed farmland might not be suitable. It is designed for those who appreciate nature, passive agricultural income, and long-term asset appreciation.'
    },
    {
        question: 'Do I legally own the land?',
        answer: 'Yes, absolutely. The land is registered directly in your name, giving you 100% legal ownership of your purchased plot, just like any other real estate property.'
    },
    {
        question: 'Who can buy farmland through SVR Farms?',
        answer: 'Anyone who meets the state\'s legal requirements for purchasing agricultural land can buy our managed farmland. We assist with all the necessary legal procedures and documentation.'
    },
    {
        question: 'Can I sell the land in the future? Will SVR Farms help me?',
        answer: 'Yes, you are free to sell your land at any time, as it is legally registered in your name. SVR Farms also provides assistance in finding potential buyers if you choose to exit.'
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
