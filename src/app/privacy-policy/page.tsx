'use client';

import SectionTitle from '@/components/SectionTitle';
import AboutSection from '@/components/AboutSection';
import PageBanner from '@/components/PageBanner';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <PageBanner title="Privacy Policy" backgroundImage="/banner/About us_Banner.webp" />
            <Container className="py-5 mt-4">
                <Row className="gy-5 align-items-start">
                    <Col lg={12} className=""></Col>

                    <h2 className="entry-title mb-3" >Privacy Policy</h2>

                    <div className="entry-content mt-3" >
                        <p><strong>SVR Farms – Farmland Property Privacy Policy</strong></p>
                        <p>Welcome to SVR Farms’ Farmland Property Privacy Policy. This policy outlines how we collect, use, disclose, and safeguard your personal information. By using our services, you consent to the practices described in this policy.</p>
                        <p><strong>1. Information Collection:</strong> We may collect personal information, including but not limited to your name, contact information, financial details, and location data, to facilitate the property purchasing process and provide you with relevant services.</p>
                        <p><strong>2. Use of Information:</strong> We use the collected information to process property purchases, communicate with you, provide customer support, and improve our services. Your information may also be used for legal and regulatory compliance.</p>
                        <p><strong>3. Information Sharing:</strong> We may share your personal information with third parties such as legal and financial advisors, service providers, and regulatory authorities, as required for the property purchasing process and to comply with applicable laws.</p>
                        <p><strong>4. Data Security:</strong> We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage method is entirely secure.</p>
                        <p><strong>5. Cookies and Tracking:</strong> Our website may use cookies and other tracking technologies to enhance your user experience. You can modify your browser settings to refuse cookies or receive notifications when they are being used.</p>
                        <p><strong>6. Third-Party Links:</strong> Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
                        <p><strong>7. Children’s Privacy:</strong> Our services are not directed towards individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us to have it removed.</p>
                        <p><strong>8. Changes to the Privacy Policy:</strong> We reserve the right to update this Privacy Policy from time to time. Changes will be posted on our website, and the revised policy will be effective when posted.</p>
                        <p><strong>9. Your Choices:</strong> You can choose not to provide certain personal information, but this may limit your ability to access or use certain features of our services. You may also have the right to access, correct, or delete your personal information, subject to applicable laws.</p>
                        <p><strong>10. Contact Us:</strong> If you have questions, concerns, or requests related to your personal information or this Privacy Policy, please contact us at <span className="elementor-icon-list-text">+91 99864 10709, </span><span className="elementor-icon-list-text">+91 9845 959397, </span><span className="elementor-icon-list-text">info@svrfarms.com</span>.</p>
                        <div><span style={{ fontFamily: 'trebuchet ms, sans-serif' }}><b>11.</b>&nbsp;<b><span style={{ color: '#000000' }}>Privacy&nbsp;and&nbsp;Policy or Terms&nbsp;and&nbsp;conditions page – that communicates :</span></b></span></div>
                        <div><span style={{ color: '#000000', fontFamily: 'trebuchet ms, sans-serif' }}>When you voluntarily send us electronic mail<span className="gmail_default">&nbsp;/ fillup the form</span>, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form. Also, when filling out a form on our site, you may be asked to enter your: name, e-mail address or phone number. You may, however, visit our site anonymously. In case you have submitted your personal information&nbsp;and&nbsp;contact details, we reserve the rights to Call, SMS, Email or WhatsApp about our products&nbsp;and&nbsp;offers, even if your number has&nbsp;DND&nbsp;activated on it.</span></div>
                        <p>By using our services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</p>
                    </div>

                </Row>
            </Container>


        </>
    );
}
