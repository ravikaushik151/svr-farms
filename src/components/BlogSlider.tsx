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
        title: "10 Questions to Ask Before You Buy Farmland Near Bangalore",
        date: "29th June 2026",
        image: "/blog/buy-farmland-near-bangalore-checklist.webp",
        text: "With managed farmland near Bangalore attracting serious investment capital in 2026, the number of companies marketing “premium farmland projects” ...",
        slug: "buy-farmland-near-bangalore-checklist"
    },
    {
        id: 2,
        category: "Investment",
        title: "Managed Farm Plots Hosur Tamil Nadu | SVR Farms Weekend Visit Experience",
        date: "29th June 2026",
        image: "/blog/managed-farm-plots-hosur-tamil-nadu.webp",
        text: "Most investment articles talk about numbers — CAGRs, tax benefits, projected land appreciation, and 10-year valuation potential. But numbers do not ...",
        slug: "managed-farm-plots-hosur-tamil-nadu"
    },
    {
        id: 3,
        category: "Investment",
        title: "Farmland vs Flat: Which Is a Better Investment Near Bangalore in 2026?",
        date: "29th June 2026",
        image: "/blog/farmland-vs-flat-investment-bangalore-2026.webp",
        text: "If you have ₹40–80 lakhs to invest in 2026, you are likely facing the same question that hundreds of Bangalore professionals are wrestling with ri...",
        slug: "farmland-vs-flat-investment-bangalore-2026"
    },
    {
        id: 4,
        category: "Investment",
        title: "NRIs Are Choosing Farmland Over Flats — Here’s Why",
        date: "29th June 2026",
        image: "/blog/nri-farmland-investment-india.webp",
        text: "Global Indians are rethinking how they invest back home. For years, apartments in major cities were the default option. Today, a structural shift is u...",
        slug: "nri-farmland-investment-india"
    },
    {
        id: 5,
        category: "Investment",
        title: "5 Smart Reasons Bangaloreans Love Investing in Farmland Near Hosur",
        date: "29th June 2026",
        image: "/blog/5-reasons-bangaloreans-love-farmland-near-hosur.webp",
        text: "Investing in Farmland near Hosur has emerged as one of the most talked about real estate trends among Bangalore farmland buyers in recent years. With ...",
        slug: "5-reasons-bangaloreans-love-farmland-near-hosur"
    },
    {
        id: 6,
        category: "Investment",
        title: "How to Buy Farmland Near Bangalore Without the Hassles: H₂O Farms Buyer’s Guide",
        date: "29th June 2026",
        image: "/blog/how-to-buy-farmland-near-bangalore.webp",
        text: "Buying farmland near Bangalore fails for most buyers not because of intent, but because of complexity. Fragmented ownership, unclear titles, water unc...",
        slug: "how-to-buy-farmland-near-bangalore"
    },
    {
        id: 7,
        category: "Investment",
        title: "A Fresh Look at Farmland as an Investment",
        date: "29th June 2026",
        image: "/blog/best-real-estate-investment-farmland-2026.webp",
        text: "Farmland is increasingly being recognized as the best real estate investment for long-term wealth building. Unlike volatile stock markets, farmland of...",
        slug: "best-real-estate-investment-farmland-2026"
    },
    {
        id: 8,
        category: "Investment",
        title: "Why Managed Farmland Bangalore is Perfect for Weekend Farming",
        date: "29th June 2026",
        image: "/blog/managed-farmland-near-bangalore-weekend-farming.webp",
        text: "If you live in a fast-paced city like Bangalore, you might be experiencing this every day crowds, traffic, noise, and constant screen time. In such an...",
        slug: "managed-farmland-near-bangalore-weekend-farming"
    },
    {
        id: 9,
        category: "Investment",
        title: "H2O Farms Near Bangalore: A Premium Managed Farmland Experience By SVR Farms",
        date: "29th June 2026",
        image: "/blog/organic-farmland-near-bangalore-h2o-farms-by-svr-farms.webp",
        text: "Organic farmland near Bangalore has rapidly become a preferred asset for urban investors and families seeking clean living, long-term land security, a...",
        slug: "organic-farmland-near-bangalore-h2o-farms-by-svr-farms"
    },
    {
        id: 10,
        category: "Investment",
        title: "Premium Managed Farmland Near Bangalore – A New Lifestyle Movement",
        date: "29th June 2026",
        image: "/blog/premium-managed-farmland-near-bangalore.webp",
        text: "Across Bangalore’s rapidly growing real estate market, a new trend is emerging: managed farmland near Bangalore. Unlike traditional farmland, these ...",
        slug: "premium-managed-farmland-near-bangalore"
    },
    {
        id: 11,
        category: "Investment",
        title: "Smart, Profitable Farmland Investment in South Bangalore (2025)",
        date: "29th June 2026",
        image: "/blog/why-farmland-investment-in-south-bangalore.webp",
        text: "South Bangalore has emerged as one of the top destinations for farmland investment in south bangalore, especially among high-net-worth individuals, IT...",
        slug: "why-farmland-investment-in-south-bangalore"
    },
    {
        id: 12,
        category: "Investment",
        title: "5 Upcoming Trends in Farmland Investment",
        date: "29th June 2026",
        image: "/blog/5-upcoming-trends-in-future-of-farmland-investment.webp",
        text: "Reach out today to book your ideal farmland plot with SVR Farms and start your investment journey with confidence.",
        slug: "5-upcoming-trends-in-future-of-farmland-investment"
    },
    {
        id: 13,
        category: "Investment",
        title: "From Bengaluru to steady farm income: A story",
        date: "29th June 2026",
        image: "/blog/leasing-out-managed-farmland-2025.webp",
        text: "A few years ago, Ravi bought ten acres of farmland just outside the city, in a place called Thalli near Anekal. Ravi was working in IT in Bangalore, a...",
        slug: "leasing-out-managed-farmland-2025"
    },
    {
        id: 14,
        category: "Investment",
        title: "Is Farmland a Good Investment in India in 2025? Here’s What You Need to Know",
        date: "29th June 2026",
        image: "/blog/is-farmland-investment-in-india-is-good-in-2025.webp",
        text: "Farmland investment in India is no longer just for traditional farmers or rural landowners. In 2025, it has emerged as a future-proof real estate oppo...",
        slug: "is-farmland-investment-in-india-is-good-in-2025"
    },
    {
        id: 15,
        category: "Investment",
        title: "Can I Buy Agricultural Land in Tamil Nadu If I Live in Bangalore?",
        date: "29th June 2026",
        image: "/blog/agricultural-land-for-sale-near-bangalore-best-option.webp",
        text: "Can you buy agricultural land in Tamil Nadu from Bangalore (Bengaluru)?",
        slug: "agricultural-land-for-sale-near-bangalore-best-option"
    },
    {
        id: 16,
        category: "Investment",
        title: "How Much Return Can You Expect from Managed Farmland Near Bangalore in 2025?",
        date: "29th June 2026",
        image: "/blog/managed-farmland-near-bangalore-in-2025.webp",
        text: "Here’s the thing—when someone searches for managed farmland near Bangalore, they’re not just looking to own a patch of land. They’re thinking ...",
        slug: "managed-farmland-near-bangalore-in-2025"
    },
    {
        id: 17,
        category: "Investment",
        title: "Managed Farmland vs Buying Raw Land: Which is Better?",
        date: "29th June 2026",
        image: "/blog/managed-farmland-vs-raw-land.webp",
        text: "Imagine this",
        slug: "managed-farmland-vs-raw-land"
    },
    {
        id: 18,
        category: "Investment",
        title: "Agroforestry on Farmland: How Bangalore, Hosur, and Thalli Investors Are Unlocking Hidden Value",
        date: "29th June 2026",
        image: "/blog/agroforestry-on-farmland.webp",
        text: "Planting trees on your farmland can increase its value by up to 65%  and this isn’t just theory, it’s backed by real-world examples from Bangalor...",
        slug: "agroforestry-on-farmland"
    },
    {
        id: 19,
        category: "Investment",
        title: "Why Managed Farmland Communities are in the news?",
        date: "29th June 2026",
        image: "/blog/managed-farmland-communities-future-of-rural-living.webp",
        text: "In India, farmland has always been a symbol of safe investment. Traditionally, people bought land and either farmed it themselves or leased it to othe...",
        slug: "managed-farmland-communities-future-of-rural-living"
    },
    {
        id: 20,
        category: "Investment",
        title: "Introduction: The Weekend Farming Dream vs. Reality",
        date: "29th June 2026",
        image: "/blog/common-mistakes-farmland-buyers-make-india.webp",
        text: "Every weekend, thousands of people leave Bangalore, Hyderabad, and Mumbai in search of peace. Farmland seems like the perfect escape—natural, quiet,...",
        slug: "common-mistakes-farmland-buyers-make-india"
    },
    {
        id: 21,
        category: "Investment",
        title: "More Than Just Trees: The Biodiversity We’re Nurturing at SVR Farms",
        date: "29th June 2026",
        image: "/blog/biodiversity-in-agroforestry-farms.webp",
        text: "It’s early morning at SVR Farms. The air is cool, mist hangs over young trees, and bees buzz around wildflowers. A small bird darts through the bran...",
        slug: "biodiversity-in-agroforestry-farms"
    },
    {
        id: 22,
        category: "Investment",
        title: "Why Rich Are Choosing Farms: Luxury Rural Living in India",
        date: "29th June 2026",
        image: "/blog/luxury-rural-living-in-india-farms-status-symbol.webp",
        text: "Luxury no longer just means penthouses, supercars, and designer logos. A growing number of HNIs (High Net-Worth Individuals) and successful profession...",
        slug: "luxury-rural-living-in-india-farms-status-symbol"
    },
    {
        id: 23,
        category: "Investment",
        title: "Why SVR Farms Is the Best Managed Farmland Near Bangalore in 2025",
        date: "29th June 2026",
        image: "/blog/best-managed-farmland-near-bangalore-svr-farms.webp",
        text: "Looking for safe, profitable, and lifestyle-friendly managed farmland near Bangalore? You’re not alone. As city investors look for cleaner air, bett...",
        slug: "best-managed-farmland-near-bangalore-svr-farms"
    },
    {
        id: 24,
        category: "Investment",
        title: "Owning Land That Heals the Planet: Carbon Positive Farmland",
        date: "29th June 2026",
        image: "/blog/carbon-positive-farmland-5-powerful-reasons-to-invest.webp",
        text: "Land isn’t just dirt under your feet anymore. For a growing number of investors, land is a climate solution. Carbon positive farmland is flipping th...",
        slug: "carbon-positive-farmland-5-powerful-reasons-to-invest"
    },
    {
        id: 25,
        category: "Investment",
        title: "5 Reasons to Choose Farmland Luxury Retreats",
        date: "29th June 2026",
        image: "/blog/5-reasons-to-choose-farmland-luxury-retreats.webp",
        text: "Farmland luxury retreats near Bangalore are quietly rewriting what it means to live well. The past decade has been dominated by speed, fast fashion, f...",
        slug: "5-reasons-to-choose-farmland-luxury-retreats"
    },
    {
        id: 26,
        category: "Investment",
        title: "Non-Farmer? Here’s Exactly How To Buy Farmland near Karnataka & Tamil Nadu (2025)",
        date: "29th June 2026",
        image: "/blog/farmland-rules-for-non-farmers-in-karnataka-2025.webp",
        text: "Waking up with fresh air, spending weekends under mango trees, kids running barefoot on red soil farms, fresh vegetables from your own land on the tab...",
        slug: "farmland-rules-for-non-farmers-in-karnataka-2025"
    },
    {
        id: 27,
        category: "Investment",
        title: "Why Managed Farmland Near Hosur is the Future of Investment",
        date: "29th June 2026",
        image: "/blog/managed-farmland-near-hosur-hassle-free-farm-ownership.webp",
        text: "Investing in managed farmland near Hosur offers an attractive opportunity for those looking for sustainable income and long-term asset growth. Managed...",
        slug: "managed-farmland-near-hosur-hassle-free-farm-ownership"
    },
    {
        id: 28,
        category: "Investment",
        title: "Gated Community Plots in Hosur: Secure and Scenic",
        date: "29th June 2026",
        image: "/blog/farmland-investment-hosur-gated-plots.webp",
        text: "In recent years, farmland investment has emerged as a secure, rewarding, and emotionally fulfilling real estate option. For those seeking a blend of n...",
        slug: "farmland-investment-hosur-gated-plots"
    },
    {
        id: 29,
        category: "Investment",
        title: "Best Managed Farmland Projects with Ready Plantation",
        date: "29th June 2026",
        image: "/blog/best-managed-farmland-projects-with-ready-plantation.webp",
        text: "True wealth is no longer built from stocks or mutual funds, today it is growing in the soil. Best Managed Farmland Projects with Ready Plantation are ...",
        slug: "best-managed-farmland-projects-with-ready-plantation"
    },
    {
        id: 30,
        category: "Investment",
        title: "Agricultural Land Near Bangalore: A Profitable Investment Opportunity",
        date: "29th June 2026",
        image: "/blog/agricultural-land-near-bangalore.webp",
        text: "Bangalore, renowned as India’s tech capital, is also a hotspot for agricultural land investment due to its proximity to fertile lands. With rapid ur...",
        slug: "agricultural-land-near-bangalore"
    },
    {
        id: 31,
        category: "Investment",
        title: "Discover the Best Managed Farmland Near Bangalore",
        date: "29th June 2026",
        image: "/blog/best-managed-farmland-near-bangalore-2.webp",
        text: "In recent years, farmland investment has become one of the most attractive and rewarding forms of real estate investment. With the rise in urban stres...",
        slug: "best-managed-farmland-near-bangalore-2"
    },
    {
        id: 32,
        category: "Investment",
        title: "Hosur agricultural land: Own Fertile Land Today – 7 Reasons to Invest Smartly",
        date: "29th June 2026",
        image: "/blog/hosur-agricultural-land-own-fertile-land-today.png",
        text: "In recent years, farmland investment has emerged as a lucrative and sustainable alternative to traditional real estate. With urban dwellers seeking gr...",
        slug: "hosur-agricultural-land-own-fertile-land-today"
    },
    {
        id: 33,
        category: "Investment",
        title: "Farm Land for Sale Near Bangalore: Own a Piece of Greenery",
        date: "29th June 2026",
        image: "/blog/farm-land-for-sale-near-bangalore-7-reasons-to-buy.webp",
        text: "Bangalore, the bustling Silicon Valley of India, is not only a technology hub but also a gateway to green investment opportunities. If you’ve ever d...",
        slug: "farm-land-for-sale-near-bangalore-7-reasons-to-buy"
    },
    {
        id: 34,
        category: "Investment",
        title: "H2O Farms: A Sustainable Agricultural Venture by SVR Farms",
        date: "29th June 2026",
        image: "/blog/h2o-farms-smart-powerful-water-management-solution.webp",
        text: "H2O Farms is an innovative initiative led by SVR Farms, focused on transforming agricultural practices through eco-conscious water management strategi...",
        slug: "h2o-farms-smart-powerful-water-management-solution"
    },
    {
        id: 35,
        category: "Investment",
        title: "Why Water-Rich Farmlands Are the Future of Sustainable Investment",
        date: "29th June 2026",
        image: "/blog/organic-farming-why-invest-in-water-rich-farmland.webp",
        text: "In a world increasingly driven by environmental awareness and food security, investing in water-rich farmlands is emerging as a golden opportunity. Fo...",
        slug: "organic-farming-why-invest-in-water-rich-farmland"
    },
    {
        id: 36,
        category: "Investment",
        title: "The 2025 Farmland Boom: Why Managed Farmland Near Bangalore is the Next Big Investment Trend",
        date: "29th June 2026",
        image: "/blog/why-managed-farmland-near-bangalore-next-investment.webp",
        text: "The investment landscape has evolved significantly over the last few years. With urban spaces becoming increasingly congested and inflation driving up...",
        slug: "why-managed-farmland-near-bangalore-next-investment"
    },
    {
        id: 37,
        category: "Investment",
        title: "First-Time Investor’s Ultimate Guide to Managed Farmland Near Bangalore (2025 Edition)",
        date: "29th June 2026",
        image: "/blog/managed-farmland-near-bangalore-2025-edition.webp",
        text: "In 2025, farmland investment is attracting more and more first-time investors, and managed farmland near Bangalore is leading the way. If you’re int...",
        slug: "managed-farmland-near-bangalore-2025-edition"
    },
    {
        id: 38,
        category: "Investment",
        title: "Why 2025 Is the Best Year to Invest in Organic Farmland Near Bangalore: A Green Gold Opportunity",
        date: "29th June 2026",
        image: "/blog/organic-farmland-near-bangalore-2025.webp",
        text: "Imagine waking up to the soft rays of the sun caressing acres of lush organic farmland just outside Bangalore. Instead of honking horns and concrete t...",
        slug: "organic-farmland-near-bangalore-2025"
    },
    {
        id: 39,
        category: "Investment",
        title: "Retire Green and Wealthy: Farmland Investment Opportunities Near Bangalore",
        date: "29th June 2026",
        image: "/blog/retirement-planning-farmland-investment-near-bangalore.webp",
        text: "As urban life becomes increasingly hectic, many individuals are reevaluating their retirement planning strategies. The quest for a peaceful, sustainab...",
        slug: "retirement-planning-farmland-investment-near-bangalore"
    },
    {
        id: 40,
        category: "Investment",
        title: "How Sustainable Farmland in Bangalore is Revolutionizing Farmland Investments",
        date: "29th June 2026",
        image: "/blog/invest-in-farmland-near-bangalore.webp",
        text: "Bangalore, traditionally known for its tech industry, is now witnessing a surge in sustainable farming investments. With urban expansion threatening g...",
        slug: "invest-in-farmland-near-bangalore"
    },
    {
        id: 41,
        category: "Investment",
        title: "Managed Farmland : How Hassle-Free Farming Yields Passive Income Near Bangalore",
        date: "29th June 2026",
        image: "/blog/managed-farmland-near-bangalore-hassle-free-farming.webp",
        text: "For years, investing in farmland meant getting your hands dirty—literally. But not anymore. With the rise of managed farmland near Bangalore, urban ...",
        slug: "managed-farmland-near-bangalore-hassle-free-farming"
    },
    {
        id: 42,
        category: "Investment",
        title: "Why Red Soil is a Game-Changer for Farmland Investors in Bangalore",
        date: "29th June 2026",
        image: "/blog/red-soil-farmlands-near-bangalore-svr-farms.webp",
        text: "The future of farming is not just green — it’s red.",
        slug: "red-soil-farmlands-near-bangalore-svr-farms"
    },
    {
        id: 43,
        category: "Investment",
        title: "Agricultural Land in Hosur: A Smart Investment Opportunity",
        date: "29th June 2026",
        image: "/blog/agricultural-land-in-hosur-a-investment-opportunity.webp",
        text: "In today’s era, Farmland Investment is emerging as a safe and profitable option. Especially, the demand for Agricultural Land in Hosur has seen trem...",
        slug: "agricultural-land-in-hosur-a-investment-opportunity"
    },
    {
        id: 44,
        category: "Investment",
        title: "1 Acre Land for Sale in Bangalore – A Smart Investment Choice",
        date: "29th June 2026",
        image: "/blog/1-acre-land-for-sale-in-bangalore.webp",
        text: "If you’re searching for 1 acre land for sale in Bangalore, you’re making a strategic investment decision. Bangalore’s rapid urbanization, boomin...",
        slug: "1-acre-land-for-sale-in-bangalore"
    },
    {
        id: 45,
        category: "Investment",
        title: "Discover Green Vista Planet: Your Premium Managed Farmland near Bangalore",
        date: "29th June 2026",
        image: "/blog/discover-green-vista-planet-your-premier-managed-farmland-near-bangalore.webp",
        text: "Are you in search of a serene escape from the hustle and bustle of city life? Look no further than Green Vista Planet, a 25-acre premium managed farml...",
        slug: "discover-green-vista-planet-your-premier-managed-farmland-near-bangalore"
    },
    {
        id: 46,
        category: "Investment",
        title: "Managed Farmland Near Hosur | Hassle-Free Farm Ownership in Nature",
        date: "29th June 2026",
        image: "/blog/managed-farmland-near-hosur-investment-benefits.webp",
        text: "Imagine owning a lush green piece of land, enjoying weekend retreats in nature, and earning passive income—without the stress of daily farm maintena...",
        slug: "managed-farmland-near-hosur-investment-benefits"
    },
    {
        id: 47,
        category: "Investment",
        title: "Agriculture Land in Hosur: 7 Reasons to Invest and Secure Future",
        date: "29th June 2026",
        image: "/blog/agriculture-land-in-hosur-secure-your-piece-of-nature.webp",
        text: "Looking for the perfect investment opportunity that connects you to nature while offering significant financial growth? Agriculture land in Hosur prov...",
        slug: "agriculture-land-in-hosur-secure-your-piece-of-nature"
    },
    {
        id: 48,
        category: "Investment",
        title: "Managed Farmland Near Hosur: Hassle-Free Investment & Returns",
        date: "29th June 2026",
        image: "/blog/managed-farmland-near-hosur-investment-2.webp",
        text: "Investing in managed farmland near Hosur is a smart and sustainable choice for investors looking for long-term growth, passive income, and a serene li...",
        slug: "managed-farmland-near-hosur-investment-2"
    },
    {
        id: 49,
        category: "Investment",
        title: "7 Reasons to Buy Hosur Farm Land for a Smart Investment",
        date: "29th June 2026",
        image: "/blog/hosur-farm-land-for-sale-prime-agricultural-investment.webp",
        text: "Hosur farm land for sale offers a timeless and profitable investment opportunity, providing both financial returns and a connection to nature. Located...",
        slug: "hosur-farm-land-for-sale-prime-agricultural-investment"
    },
    {
        id: 50,
        category: "Investment",
        title: "Farmland Near Hosur: 5 Incredible Benefits of a Peaceful Life",
        date: "29th June 2026",
        image: "/blog/farmland-near-hosur-greener-lifestyle-investment-2.webp",
        text: "Discover the benefits of owning farmland near Hosur, a serene and rapidly developing region. Located in Tamil Nadu, near the bustling city of Bangalor...",
        slug: "farmland-near-hosur-greener-lifestyle-investment-2"
    },
    {
        id: 51,
        category: "Investment",
        title: "Agriculture Land for Sale in Hosur: Invest in Productive Land",
        date: "29th June 2026",
        image: "/blog/agriculture-land-for-sale-in-hosur.webp",
        text: "Hosur, a vibrant town located on the Tamil Nadu-Karnataka border, is increasingly becoming a hotspot for farmland investments. With its fertile soil, ...",
        slug: "agriculture-land-for-sale-in-hosur"
    },
    {
        id: 52,
        category: "Investment",
        title: "Experience Tranquility: Invest in a Farm House in Hosur",
        date: "29th June 2026",
        image: "/blog/experience-tranquility-invest-in-a-farm-house-in-hosur.webp",
        text: "Imagine waking up to the soothing sounds of nature, surrounded by lush greenery, and enjoying a fresh cup of coffee on your veranda. Owning a farm hou...",
        slug: "experience-tranquility-invest-in-a-farm-house-in-hosur"
    },
    {
        id: 53,
        category: "Investment",
        title: "Mango Farm for Sale in Hosur: A Golden Investment Opportunity",
        date: "29th June 2026",
        image: "/blog/mango-farm-for-sale-in-hosur.webp",
        text: "Are you looking for a profitable and sustainable investment? Owning a mango farm for sale in Hosur is a rewarding choice. With its lush green landscap...",
        slug: "mango-farm-for-sale-in-hosur"
    },
    {
        id: 54,
        category: "Investment",
        title: "Vasudha Kalpataru Farmland: 5 Smart Reasons for Sustainable Returns",
        date: "29th June 2026",
        image: "/blog/5-reasons-to-invest-in-vasudha-kalpataru-farmland.webp",
        text: "Farmland investment is gaining momentum as a secure and lucrative option for investors looking for long-term growth and financial stability. With incr...",
        slug: "5-reasons-to-invest-in-vasudha-kalpataru-farmland"
    },
    {
        id: 55,
        category: "Investment",
        title: "Everything You Need To Know About ‘Managed Farmlands’",
        date: "29th June 2026",
        image: "/blog/everything-you-need-to-know-about-managed-farmlands.jpg",
        text: "Investing in managed farmlands near Bangalore has become a popular trend among those looking for sustainable and profitable investment opportunities...",
        slug: "everything-you-need-to-know-about-managed-farmlands"
    },
    {
        id: 56,
        category: "Investment",
        title: "How to Grow Organic Vegetables and Fruits on Your Own Farmland",
        date: "29th June 2026",
        image: "/blog/how-to-grow-organic-vegetables-and-fruits-on-your-own-farmland.jpg",
        text: "In the lush landscapes surrounding Bengaluru, SVR Farms stands out as a reputable farmland seller dedicated to providing individuals with the opportun...",
        slug: "how-to-grow-organic-vegetables-and-fruits-on-your-own-farmland"
    },
    {
        id: 57,
        category: "Investment",
        title: "Why Managed Farmland Investment in Bangalore is a Smart Choice",
        date: "29th June 2026",
        image: "/blog/why-managed-farmland-investment-in-bangalore.webp",
        text: " ",
        slug: "why-managed-farmland-investment-in-bangalore"
    },
    {
        id: 58,
        category: "Investment",
        title: "How to Invest in Farmland",
        date: "29th June 2026",
        image: "/blog/how-to-invest-in-farmland.png",
        text: "Farmland is a unique asset class that can provide long-term stable returns (Invest in Farmland), diversification, and inflation protection to an inves...",
        slug: "how-to-invest-in-farmland"
    },
    {
        id: 59,
        category: "Investment",
        title: "Why You Should Invest in Community Farming in Bengaluru",
        date: "29th June 2026",
        image: "/blog/why-you-should-invest-in-community-farming-in-bengaluru.jpg",
        text: "Bengaluru, the Silicon Valley of India, is a bustling metropolis with a vibrant IT and tech industry. However, the rapid urbanisation and development ...",
        slug: "why-you-should-invest-in-community-farming-in-bengaluru"
    },
    {
        id: 60,
        category: "Investment",
        title: "Best Managed Farmland Near Bangalore: 6 Profitable Agriculture Business Ideas",
        date: "29th June 2026",
        image: "/blog/best-managed-farmland-near-bangalore.png",
        text: "Are you looking for the Best Managed Farmland Near Bangalore to start a profitable agricultural venture? Look no further. In the fertile farmlands of ...",
        slug: "best-managed-farmland-near-bangalore"
    },
    {
        id: 61,
        category: "Investment",
        title: "Best Individual Farmland Near Bangalore: Explore Individual Farmland  for Sale in SVR Farmland",
        date: "29th June 2026",
        image: "/blog/individual-farmland-near-bangalore-explore.jpeg",
        text: "SVR Farms’ Individual Farmland Near Bangalore is available in various sizes, ranging from 1-acre to 10-acre land. Choose SVR Farms for individual fa...",
        slug: "individual-farmland-near-bangalore-explore"
    },
    {
        id: 62,
        category: "Investment",
        title: "Investing in Individual Farmland in Bangalore: A Profitable Opportunity with SVR Farm",
        date: "29th June 2026",
        image: "/blog/farmland-in-bangalore.webp",
        text: "Investing in individual agricultural farmland in Bangalore through SVR Farms offers a unique opportunity to be part of the thriving agricultural secto...",
        slug: "farmland-in-bangalore"
    },
    {
        id: 63,
        category: "Investment",
        title: "Managed Farmland near Bangalore: A Sustainable Investment for the Future",
        date: "29th June 2026",
        image: "/blog/managed-farmland-near-bangalore-2.png",
        text: "As urbanization continues to encroach upon agricultural land near Bangalore, the need for sustainable farming practices and managed farmland is more c...",
        slug: "managed-farmland-near-bangalore-2"
    },
    {
        id: 64,
        category: "Investment",
        title: "SVR Farms: Cultivating Sustainable Living and Organic Excellence with Agricultural Land for Sale in Bangalore",
        date: "29th June 2026",
        image: "/blog/agricultural-land-for-sale-in-bangalore.webp",
        text: "In the heart of Bangalore, a city increasingly focused on healthier living and sustainable choices, SVR Farms stands out as a beacon of hope – an oa...",
        slug: "agricultural-land-for-sale-in-bangalore"
    },
    {
        id: 65,
        category: "Investment",
        title: "Revolutionizing Agriculture: Innovative Farmland Practices for Buying Farm Land near Bangalore",
        date: "29th June 2026",
        image: "/blog/buying-farm-land-near-bangalore.webp",
        text: "India’s economy heavily relies on agriculture, sustaining the livelihoods of millions of hardworking farmers nationwide. Recent years have witnessed...",
        slug: "buying-farm-land-near-bangalore"
    },
    {
        id: 66,
        category: "Investment",
        title: "Agricultural Land in Bangalore: Cultivating Prosperity with SVR Farms",
        date: "29th June 2026",
        image: "/blog/agricultural-land-in-bangalore-cultivating-prosperity.webp",
        text: "Investing in agricultural land in Bangalore is more than just a financial decision—it’s a pathway to prosperity, and SVR Farms stands as your gate...",
        slug: "agricultural-land-in-bangalore-cultivating-prosperity"
    },
    {
        id: 67,
        category: "Investment",
        title: "Managed Farmland near Bangalore: A Great way to connect with nature and your food at SVR Farms",
        date: "29th June 2026",
        image: "/blog/managed-farmland-near-bangalore-3.webp",
        text: "In the midst of urban chaos, the desire to reconnect with nature and the origins of our food has given rise to a unique phenomenon— Managed Farmland...",
        slug: "managed-farmland-near-bangalore-3"
    },
    {
        id: 68,
        category: "Investment",
        title: "Cultivate Community, Cultivate Dreams with Our Unique Community Farmland near Bangalore",
        date: "29th June 2026",
        image: "/blog/cultivate-community-cultivate-dreams-with-our-unique-community-farmland-near-bangalore.webp",
        text: "The need for a sense of community and a connection to nature has grown in popularity in our fast-paced society. Seeing this need, SVR Farms has been a...",
        slug: "cultivate-community-cultivate-dreams-with-our-unique-community-farmland-near-bangalore"
    },
    {
        id: 69,
        category: "Investment",
        title: "SVR Farms: Your Gateway to Managed Farmland Near Bangalore",
        date: "29th June 2026",
        image: "/blog/managed-farmland-near-bangalore.webp",
        text: " If you have ever dreamed of owning a Managed Farmland Near Bangalore, then SVR Farms is the ideal place. Our Managed farmland Near Bangalore provide...",
        slug: "managed-farmland-near-bangalore"
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