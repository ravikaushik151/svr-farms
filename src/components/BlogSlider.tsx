"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import SectionTitle from '@/components/SectionTitle';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { posts } from '@/data/posts';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const BlogSlider: React.FC = () => {
    return (
        <>
            <Container className="py-2">
                <SectionTitle title="Our Blog" subtitle="Latest News & Updates" />
                <div className="text-center text-muted mt-5">
                    <p className="lead mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </p>
                    <Row className="g-4 text-start mb-5 mb-md-0  bg-white">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="pb-md-1 pb-5 mb-3 pb-md-5 px-md-1 "
                        >
                            {posts.map((post) => (
                                <SwiperSlide key={post.id} style={{ height: 'auto' }}>
                                    <div className=" mb-3 mb-md-0">
                                        {/* Added overflow-hidden to contain the zoom effect within rounded corners */}
                                        <Card className=" shadow border-0 hover-lift overflow-hidden d-flex flex-column">

                                            {/* Image moved OUTSIDE Card.Body to match edge-to-edge design */}
                                            <div className="overflow-hidden">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    width={453}
                                                    height={250} // Reduced height slightly to balance aspect ratio, adjust as needed
                                                    className="object-fit-cover transition-transform duration-500 hover-zoom img-fluid mx-auto d-block w-100"
                                                />
                                            </div>

                                            {/* Card.Body is now a flex column */}
                                            <Card.Body className="p-4 d-flex flex-column">
                                                {/* Title with max 2 lines to keep headers uniform */}
                                                <Card.Title className="fw-bold text-dark text-md-start text-center title-clamp-2 mb-3">
                                                    {post.title}
                                                </Card.Title>

                                                {/* Text limited to EXACTLY 3 lines */}
                                                <Card.Text className='text-md-start text-center text-clamp-3 text-muted mb-4'>
                                                    {post.text}
                                                </Card.Text>

                                                {/* mt-auto pushes this entire div to the absolute bottom of the card */}
                                                <div className="d-flex justify-content-md-start justify-content-center mt-2">
                                                    <a href={`/blogs/${post.slug}`} className="text-md-start text-center text-success fw-bold text-decoration-none border-bottom border-success">
                                                        Read More
                                                    </a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <style jsx global>{`
                            .font-jost { font-family: var(--font-jost), sans-serif; }
                            
                            .hover-zoom {
                                transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
                            }

                            .card:hover .hover-zoom {
                                transform: scale(1.08);
                            }

                            /* NEW: Limits text to exactly 3 lines with ellipsis (...) */
                            .text-clamp-3 {
                                display: -webkit-box;
                                -webkit-line-clamp: 3;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                            }

                            /* NEW: Limits title to 2 lines so long titles don't break the layout */
                            .title-clamp-2 {
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                                min-height: 48px; /* Optional: keeps minimum height for single-line titles */
                            }

                            /* Swiper Pagination Styling */
                            .swiper-pagination-bullet {
                                background: #ccc;
                                opacity: 1;
                            }
                            
                            .swiper-pagination-bullet-active {
                                background: #000 !important;
                                width: 20px;
                                border-radius: 4px;
                            }
                            
                            /* Ensure Swiper uses full height for Flexbox to work properly */
                            .swiper-slide {
                                height: auto !important; 
                            }
                        `}</style>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default BlogSlider;