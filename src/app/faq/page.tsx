'use client';

import PageBanner from '@/components/PageBanner';
import FaqSection from '@/components/FaqSection';

export default function FaqPage() {
    return (
        <>
            <PageBanner 
                title="FAQ" 
                backgroundImage="/banner/About us_Banner.webp" 
                breadcrumbCurrent="FAQ"
            />
            <FaqSection />
        </>
    );
}
