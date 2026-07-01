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
                                            Cultivate Community, Cultivate Dreams with Our Unique Community Farmland near Bangalore
                                        </h1>
                                    </div>
                                    <div className="card-text text-start mt-3 blog-details">
                                        <div>
                                            <p>The need for a sense of community and a connection to nature has grown in popularity in our fast-paced society. Seeing this need, SVR Farms has been a leader in providing a special solution: <a href="https://www.instagram.com/svrfarmsbangalore/" target="_blank" rel="noopener">community farmland close to Bangalore</a> that encourages sustainable living by growing a variety of fruit plants and serves as a green haven for travelers.</p>
                                            <h2>Origins in Nature: The Vision of SVR Farms</h2>
                                            <p><img fetchpriority="high" decoding="async" className="aligncenter wp-image-2703 size-full" src="https://svrfarms.com/wp-content/uploads/2023/12/iceland-landscape-beautiful-church-scaled.jpg" alt="SVR FARMS " width={2560} height={1440} srcSet="https://svrfarms.com/wp-content/uploads/2023/12/iceland-landscape-beautiful-church-scaled.jpg 2560w, https://svrfarms.com/wp-content/uploads/2023/12/iceland-landscape-beautiful-church-300x169.jpg 300w, https://svrfarms.com/wp-content/uploads/2023/12/iceland-landscape-beautiful-church-1024x576.jpg 1024w, https://svrfarms.com/wp-content/uploads/2023/12/iceland-landscape-beautiful-church-768x432.jpg 768w, https://svrfarms.com/wp-content/uploads/2023/12/iceland-landscape-beautiful-church-1536x864.jpg 1536w, https://svrfarms.com/wp-content/uploads/2023/12/iceland-landscape-beautiful-church-2048x1152.jpg 2048w" sizes="(max-width: 2560px) 100vw, 2560px" /></p>
                                            <p>SVR Farms, situated away close to the energetic metropolis of Bangalore, is more than just a plot of land—it’s a vision realized. The founders wanted to create a space where city people could get back in touch with nature, build community, and engage in sustainable <a href="https://svrfarms.com/">farm near Bengaluru</a> . As a result, individuals who love the outdoors and want to escape the busyness of the city will find a safe sanctuary.</p>
                                            <p>A Mass of Fruits: Guava, Jackfruit, Chikoo, Mango Trees, and More</p>
                                            <p><img decoding="async" className="aligncenter wp-image-2704 size-full" src="https://svrfarms.com/wp-content/uploads/2024/01/oranges-4566275_1280.jpg" alt="svr fruit farm" width={1280} height={850} srcSet="https://svrfarms.com/wp-content/uploads/2024/01/oranges-4566275_1280.jpg 1280w, https://svrfarms.com/wp-content/uploads/2024/01/oranges-4566275_1280-300x199.jpg 300w, https://svrfarms.com/wp-content/uploads/2024/01/oranges-4566275_1280-1024x680.jpg 1024w, https://svrfarms.com/wp-content/uploads/2024/01/oranges-4566275_1280-768x510.jpg 768w" sizes="(max-width: 1280px) 100vw, 1280px" /></p>
                                            <p>The delightful range of fruit plantations accessible for cultivation is what distinguishes <a href="https://svrfarms.com/">SVR Farms</a>. Imagine having a morning snack of a fresh guava picked off the tree or waking up to the lovely perfume of ripe mangoes. A special chance to cultivate mango trees, chikoo, jackfruit, guava, and other fruits is provided by SVR Farms. This is about planting the seeds of a happier, healthier way of life, not simply about farming.</p>
                                            <p>Sow Your Dreams, Harvest Happiness</p>
                                            <p>SVR Farms is about more than just planting trees—it’s about connecting people and encouraging a sense of ownership. A key component of the SVR Farms experience is the community. Joining the <a href="https://svrfarms.com/">SVR farms</a> which entitles you to your own plot of land as well as membership in a network of people who share your enthusiasm for <a href="https://svrfarms.com/">sustainable farming near Bengaluru</a>.</p>
                                            <p><strong>Principal Elements of SVR Farms:</strong></p>
                                            <p>Community Engagement: SVR Farms members have a strong feeling of community thanks to regular events, workshops, and get-togethers. There are always chances to meet other people who share your passion for the outdoors, from harvest celebrations to tree planting ceremonies.</p>
                                            <p>Sustainable Agriculture: SVR Farms is dedicated to using sustainable agricultural methods. A minimum environmental footprint is ensured through several measures such as the use of organic fertilizers and conservation of water.</p>
                                            <p>Professional Advice: SVR Farms offers professional advice and assistance, regardless of your level of gardening experience. The experienced staff will help you at every stage, from planting to harvesting.</p>
                                            <p>Diverse Plantations: There is something for everyone on the range of fruit plantations. SVR Farms offers a variety of options to suit different palates, whether you prefer the distinct flavor of jackfruit or the sweetness of mangoes.</p>
                                            <p>Become a Member of SVR Farms and Take Part in the Green Revolution Today!</p>
                                            <p>SVR Farms is the solution if you’ve been itching for a taste of country life without having to give up the amenities of the city. Take pleasure in tending to the land, relish the produce of your efforts, and establish enduring relationships with people who are as passionate about sustainable living as you are.</p>
                                            <p>Take a trip to SVR Farms, which is close to Bangalore, and experience development, community, and environment. Grow your happiness and plant your goals with SVR Farms; the opportunities are as limitless as the verdant fields that stretch out in front of you.</p>
                                        </div>





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