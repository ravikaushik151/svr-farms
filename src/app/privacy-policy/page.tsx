'use client';

import PageBanner from '@/components/PageBanner';
import SectionTitle from '@/components/SectionTitle';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function PrivacyPolicy() {
    return (
        <>
            <PageBanner title="Privacy Policy" backgroundImage="/banner/About us_Banner.webp" />
            
            <Container className="py-5 my-4">
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <SectionTitle title="Privacy & Data Policy" subtitle="Transparency & Trust" />

                        <Card className="border-0 shadow-sm p-4 p-md-5 rounded-4 bg-white mt-4">
                            <div className="entry-content text-secondary lh-lg" style={{ fontSize: '0.98rem' }}>
                                <p className="lead text-dark fw-semibold mb-4">
                                    Little England – Farmland Property Privacy Policy
                                </p>
                                <p className="mb-4">
                                    Welcome to Little England’s Farmland Property Privacy Policy. This policy outlines how we collect, use, disclose, and safeguard your personal information. By using our services and website, you consent to the practices described in this policy.
                                </p>

                                <div className="d-flex flex-column gap-3 mb-4">
                                    <div>
                                        <h5 className="fw-bold text-dark fs-6 mb-1">1. Information Collection</h5>
                                        <p className="mb-0">We may collect personal information, including but not limited to your name, contact information, financial details, and location data, to facilitate the property purchasing process and provide you with relevant services.</p>
                                    </div>

                                    <div>
                                        <h5 className="fw-bold text-dark fs-6 mb-1">2. Use of Information</h5>
                                        <p className="mb-0">We use the collected information to process property purchases, communicate with you, provide customer support, and improve our services. Your information may also be used for legal and regulatory compliance.</p>
                                    </div>

                                    <div>
                                        <h5 className="fw-bold text-dark fs-6 mb-1">3. Information Sharing</h5>
                                        <p className="mb-0">We may share your personal information with third parties such as legal and financial advisors, service providers, and regulatory authorities, as required for the property purchasing process and to comply with applicable laws.</p>
                                    </div>

                                    <div>
                                        <h5 className="fw-bold text-dark fs-6 mb-1">4. Data Security</h5>
                                        <p className="mb-0">We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage method is entirely secure.</p>
                                    </div>

                                    <div>
                                        <h5 className="fw-bold text-dark fs-6 mb-1">5. Cookies and Tracking</h5>
                                        <p className="mb-0">Our website may use cookies and other tracking technologies to enhance your user experience. You can modify your browser settings to refuse cookies or receive notifications when they are being used.</p>
                                    </div>

                                    <div>
                                        <h5 className="fw-bold text-dark fs-6 mb-1">6. Third-Party Links</h5>
                                        <p className="mb-0">Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
                                    </div>

                                    <div>
                                        <h5 className="fw-bold text-dark fs-6 mb-1">7. Children’s Privacy</h5>
                                        <p className="mb-0">Our services are not directed towards individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us to have it removed.</p>
                                    </div>

                                    <div>
                                        <h5 className="fw-bold text-dark fs-6 mb-1">8. Changes to the Privacy Policy</h5>
                                        <p className="mb-0">We reserve the right to update this Privacy Policy from time to time. Changes will be posted on our website, and the revised policy will be effective when posted.</p>
                                    </div>

                                    <div>
                                        <h5 className="fw-bold text-dark fs-6 mb-1">9. Your Choices</h5>
                                        <p className="mb-0">You can choose not to provide certain personal information, but this may limit your ability to access or use certain features of our services. You may also have the right to access, correct, or delete your personal information, subject to applicable laws.</p>
                                    </div>

                                    <div>
                                        <h5 className="fw-bold text-dark fs-6 mb-1">10. Contact Us</h5>
                                        <p className="mb-0">If you have questions, concerns, or requests related to your personal information or this Privacy Policy, please contact us at <span className="fw-semibold text-sanjeevani">+91 96887 77793</span> or email <span className="fw-semibold text-sanjeevani">info@littleengland.in</span>.</p>
                                    </div>

                                    <div>
                                        <h5 className="fw-bold text-dark fs-6 mb-1">11. Communication Consent & Terms</h5>
                                        <p className="mb-0">When you voluntarily send us electronic mail or fill up an inquiry form on our website, we keep a record of this information so that our advisory team can respond to your request. In case you have submitted your personal information and contact details, you consent to our team reaching out via Call, SMS, Email, or WhatsApp regarding project updates, offers, and visit coordination, even if your number has DND activated.</p>
                                    </div>
                                </div>

                                <p className="mb-0 text-muted fst-italic pt-3 border-top">
                                    By using our services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
                                </p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
