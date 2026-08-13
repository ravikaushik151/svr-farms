'use client';

import PageBanner from '@/components/PageBanner';
import FaqSection from '@/components/FaqSection';

export default function FaqPage() {
    return (
        <>
            <PageBanner
                title="FAQ"
                backgroundImage="/banner/banner-faq.webp"
                breadcrumbCurrent="FAQ"
            />
            <FaqSection />
        </>
    );
}
