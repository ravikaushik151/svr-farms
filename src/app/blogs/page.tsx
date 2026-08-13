'use client';


import PageBanner from '@/components/PageBanner';
import BlogGrid from '@/components/BlogGrid';

import Image from 'next/image';

export default function Blogs() {
    return (
        <>
            <PageBanner title="Our Blog" backgroundImage="/banner/Blog_Banner.webp" />
            <BlogGrid />
           
        </>
    );
}
