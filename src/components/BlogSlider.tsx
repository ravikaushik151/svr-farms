"use client";

import React from 'react';
import Image from 'next/image';
import { Jost } from "next/font/google";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import SectionTitle from '@/components/SectionTitle';
import { Container, Row, Col, Card } from 'react-bootstrap';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// TypeScript interface for the post data
interface Post {
    id: number;
    title: string;
    date: string;
    image: string;
    category: string;
    text: string;
    slug: string;
}

// 1. Data Object (Hardcoded as requested)
const posts: Post[] = [
    {
        id: 8,
        category: "Date",
        title: "Farmland vs Flat: Which Is a Better Investment Near Bangalore in 2026?",
        date: "24th March 2026",
        image: "/Farmland-vs-Flat-investment-Bangalore-1024x538.webp",
        text: "If you have ₹40–80 lakhs to invest in 2026, you are likely facing the same question that ",
        slug: "farmland-vs-flat-investment-bangalore-2026"
    },
     {
        id: 8,
        category: "Date",
        title: "Farmland vs Flat: Which Is a Better Investment Near Bangalore in 2026?",
        date: "24th March 2026",
        image: "/Farmland-vs-Flat-investment-Bangalore-1024x538.webp",
        text: "If you have ₹40–80 lakhs to invest in 2026, you are likely facing the same question that ",
        slug: "farmland-vs-flat-investment-bangalore-2026"
    },
      {
        id: 8,
        category: "Date",
        title: "Farmland vs Flat: Which Is a Better Investment Near Bangalore in 2026?",
        date: "24th March 2026",
        image: "/Farmland-vs-Flat-investment-Bangalore-1024x538.webp",
        text: "If you have ₹40–80 lakhs to invest in 2026, you are likely facing the same question that ",
        slug: "farmland-vs-flat-investment-bangalore-2026"
    },

];

const BlogSlider: React.FC = () => {
    return (
        <>
            <Container className="py-2">
                <SectionTitle title="Our Blog" subtitle="Latest News & Updates" />
                <div className="text-center text-muted mt-5">
                    <p className="lead mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </p>
                    <Row className="g-4 text-start">

                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                // Bootstrap-style breakpoints
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="pb-5"
                        >
                            {posts.map((post) => (
                                <SwiperSlide key={post.id}>
                                    <div className="card border-0 h-100   ">
                                        {/* Image Section */}
                                        <Card className="h-100 shadow border-0 hover-lift">
                                            <Card.Body className="p-4 ">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    width={453}
                                                    height={375}

                                                    className="object-fit-cover transition-transform duration-500 hover-zoom mb-3 img-fluid mx-auto d-block"
                                                />

                                                <Card.Title className="fw-bold text-dark text-md-start text-center">  {post.title}</Card.Title>
                                                <Card.Text className='text-md-start text-center'>{post.text}..</Card.Text>
                                                <div className="d-flex justify-content-md-start justify-content-center">

                                                    <a href={`/blogs/${post.slug}`} className="text-md-start text-center text-success fw-bold text-decoration-none border-bottom border-success  ">
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
        
        .guide-label {
          letter-spacing: 0.15em;
          font-size: 0.75rem;
          color: #1a1a1a;
        }

        .headline-text {
          line-height: 1.5;
          min-height: 3rem;
          color: #222;
          font-size: 1.25rem;
        }

        .btn-read {
          font-size: 0.8rem;
          padding-top: 6px;
          padding-bottom: 6px;
          border-color: #333;
          transition: all 0.3s ease;
        }

        .btn-read:hover {
          background-color: #000;
          color: #fff;
        }

        .hover-zoom {
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .card:hover .hover-zoom {
          transform: scale(1.08);
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
      `}</style>
                    </Row>
                </div>
            </Container>


        </>
    );
};

export default BlogSlider;