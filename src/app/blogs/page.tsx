'use client';

import SectionTitle from '@/components/SectionTitle';
import PageBanner from '@/components/PageBanner';
import BlogSlider from '@/components/BlogSlider';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';

export default function Blogs() {
    return (
        <>
            <PageBanner title="Our Blog" backgroundImage="/banner/Blog_Banner.webp" />
            <BlogSlider />
           
        </>
    );
}
