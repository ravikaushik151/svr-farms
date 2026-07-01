import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '1 Acre Land for Sale in Bangalore | Little England',
    description: 'Little England Website - Premium farmland and real estate.',
    alternates: {
        canonical: 'https://www.yourdomain.com/blogs/1-acre-land-for-sale-in-bangalore',
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    // The layout simply wraps your page content
    return <>{children}</>;
}