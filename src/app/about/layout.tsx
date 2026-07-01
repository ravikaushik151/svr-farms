import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us SRV Farms | Little England ',
    description: 'SRV FARMS',
    alternates: {
        canonical: 'https://svrfarms.com/blogs/1-acre-land-for-sale-in-bangalore',
    },
};

export default function Page({ children }: { children: React.ReactNode }) {
    // The layout simply wraps your page content
    return <>{children}</>;
}