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
        id: 1,
        category: "Investment",
        title: "Farmland vs Flat: Which Is a Better Investment Near Bangalore in 2026?",
        date: "24th March 2026",
        image: "/blog/Farmland-vs-Flat-investment-Bangalore-1024x538.webp",
        text: "If you have ₹40–80 lakhs to invest in 2026, you are likely facing the same question that millions of Indians face: farmland or flat?",
        slug: "farmland-vs-flat-investment-bangalore-2026"
    },
    {
        id: 2,
        category: "NRI Investment",
        title: "NRIs Are Choosing Farmland Over Flats — Here's Why",
        date: "15th March 2026",
        image: "/blog/NRI-farmland-investment-India-1024x529.webp",
        text: "Global Indians are rethinking how they invest back home. For years, apartments in major cities were the default option.",
        slug: "nri-farmland-investment-india"
    },
    {
        id: 3,
        category: "Location Insights",
        title: "5 Smart Reasons Bangaloreans Love Investing in Farmland Near Hosur",
        date: "10th March 2026",
        image: "/blog/Farmland-near-Hosur-1024x538.webp",
        text: "Investing in Farmland near Hosur has emerged as one of the most talked about real estate trends among Bangalore farmland buyers.",
        slug: "5-reasons-bangaloreans-love-farmland-near-hosur"
    },
    {
        id: 4,
        category: "Buyer's Guide",
        title: "How to Buy Farmland Near Bangalore Without the Hassles: H₂O Farms Buyer's Guide",
        date: "5th March 2026",
        image: "/blog/how-to-buy-farmland-near-Bangalore-1024x529.webp",
        text: "Buying farmland near Bangalore fails for most buyers not because of intent, but because of complexity.",
        slug: "how-to-buy-farmland-near-bangalore"
    },
    {
        id: 5,
        category: "Investment Analysis",
        title: "A Fresh Look at Farmland as an Investment",
        date: "28th February 2026",
        image: "/blog/Best-Real-Estate-Investment-1024x538.webp",
        text: "Farmland is increasingly being recognized as the best real estate investment for long-term wealth building.",
        slug: "best-real-estate-investment-farmland"
    },
    {
        id: 6,
        category: "Project Spotlight",
        title: "H2O Farms: A Premium Managed Farmland Experience By SVR Farms",
        date: "20th February 2026",
        image: "/blog/Organic-Farmland-Near-Bangalore-1-1024x538.webp",
        text: "Organic farmland near Bangalore has rapidly become a preferred asset for urban investors and families.",
        slug: "organic-farmland-near-bangalore-h2o-farms"
    },
    {
        id: 7,
        category: "Lifestyle",
        title: "Premium Managed Farmland Near Bangalore – A New Lifestyle Movement",
        date: "15th February 2026",
        image: "/blog/Managed-Farmland-Near-Bangalore-1024x538.webp",
        text: "Across Bangalore's rapidly growing real estate market, a new trend is emerging: managed farmland near Bangalore.",
        slug: "premium-managed-farmland-near-bangalore"
    },
    {
        id: 8,
        category: "Regional Focus",
        title: "Smart, Profitable Farmland Investment in South Bangalore (2025)",
        date: "10th February 2026",
        image: "/blog/Farmland-investment-in-South-Bangalore-1024x538.webp",
        text: "South Bangalore has emerged as one of the top destinations for farmland investment in south bangalore.",
        slug: "farmland-investment-in-south-bangalore"
    },
    {
        id: 9,
        category: "Trends & Future",
        title: "5 Upcoming Trends in Farmland Investment",
        date: "5th February 2026",
        image: "/blog/Future-of-farmland-investment-1024x538.webp",
        text: "By 2026, the future of farmland investment won't be limited to farming; it's creating a whole new industry.",
        slug: "5-upcoming-trends-farmland-investment"
    },
    {
        id: 10,
        category: "Income Generation",
        title: "From Bengaluru to steady farm income: A story",
        date: "1st February 2026",
        image: "/blog/leasing-out-managed-farmland-1024x538.webp",
        text: "A few years ago, Ravi bought ten acres of farmland just outside the city, in a place called Thalli near Anekal.",
        slug: "leasing-managed-farmland"
    },
    {
        id: 11,
        category: "Biodiversity",
        title: "More Than Just Trees: The Biodiversity We're Nurturing at SVR Farms",
        date: "25th January 2026",
        image: "/blog/Biodiversity-in-Agroforestry-Farms-1024x538.webp",
        text: "It's early morning at SVR Farms. The air is cool, mist hangs over young trees, and bees buzz around wildflowers.",
        slug: "biodiversity-in-agroforestry-farms"
    },
    {
        id: 12,
        category: "Comparison",
        title: "Managed Farmland vs Buying Raw Land: Which is Better?",
        date: "20th January 2026",
        image: "/blog/managed-farmland-1-1024x538.webp",
        text: "Arjun, a 38-year-old software architect, had just hit a major career milestone and was ready to invest his bonus.",
        slug: "managed-farmland-vs-raw-land"
    },
    {
        id: 13,
        category: "Luxury Living",
        title: "Why Rich Are Choosing Farms: Luxury Rural Living in India",
        date: "15th January 2026",
        image: "/blog/luxury-rural-living-in-india-1024x538.webp",
        text: "Luxury no longer just means penthouses and supercars. A growing number of HNIs are turning to farmland as the ultimate symbol.",
        slug: "luxury-rural-living-in-india-farms-status-symbol"
    },
    {
        id: 14,
        category: "Carbon & Sustainability",
        title: "Owning Land That Heals the Planet: Carbon Positive Farmland",
        date: "10th January 2026",
        image: "/blog/Carbon-Positive-Farmland-1024x538.webp",
        text: "Land isn't just dirt under your feet anymore. For a growing number of investors, land is a climate solution.",
        slug: "carbon-positive-farmland-5-powerful-reasons-to-invest"
    },
    {
        id: 15,
        category: "Retreats & Wellness",
        title: "5 Reasons to Choose Farmland Luxury Retreats",
        date: "5th January 2026",
        image: "/blog/Farmland-Luxury-Retreats-1-1024x538.webp",
        text: "Farmland luxury retreats near Bangalore are quietly rewriting what it means to live well. More people are seeking slow living.",
        slug: "5-reasons-to-choose-farmland-luxury-retreats"
    },
    {
        id: 16,
        category: "Legal Guide",
        title: "Non-Farmer? Here's Exactly How To Buy Farmland (2025)",
        date: "1st January 2026",
        image: "/blog/farmland-rules-for-non-farmers-in-Karnataka-2025-1024x538.webp",
        text: "Buying farmland isn't always simple. There are farmland rules, zoning laws, and paperwork. Here's your complete guide.",
        slug: "farmland-rules-for-non-farmers-in-karnataka-2025"
    },
    {
        id: 17,
        category: "Communities",
        title: "Why Managed Farmland Communities are in the news?",
        date: "27th December 2025",
        image: "/blog/managed-farmland-communities-1024x538.webp",
        text: "In India, farmland has always been a symbol of safe investment. Now it's becoming an investment and lifestyle asset.",
        slug: "managed-farmland-communities-future-of-rural-living"
    },
    {
        id: 18,
        category: "Agroforestry",
        title: "Agroforestry on Farmland: Unlocking Hidden Value",
        date: "22nd December 2025",
        image: "/blog/Agroforestry-on-farmland-1-1024x538.webp",
        text: "Planting trees on your farmland can increase its value by up to 65%. This isn't theory—it's backed by real-world examples.",
        slug: "agroforestry-on-farmland"
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
                    <Row className="g-4 text-start mb-4">

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

                                                    className="object-fit-cover transition-transform duration-500 hover-zoom mb-3 img-fluid mx-auto d-block w-100"
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