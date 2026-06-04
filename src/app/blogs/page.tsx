'use client';


import PageBanner from '@/components/PageBanner';
import BlogSlider from '@/components/BlogSlider';

import Image from 'next/image';

export default function Blogs() {
    return (
        <>
            <PageBanner title="Our Blog" backgroundImage="/banner/Blog_Banner.webp" />
            <BlogSlider />
           
        </>
    );
}
