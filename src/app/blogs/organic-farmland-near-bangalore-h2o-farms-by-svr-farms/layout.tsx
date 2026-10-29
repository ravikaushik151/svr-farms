import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SRV Farms | Little England',
    description: 'SRV FARMS',
    alternates: {
        canonical: 'https://svr-farms.vercel.app/blogs/organic-farmland-near-bangalore-h2o-farms-by-svr-farms',
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    // The layout simply wraps your page content
    return <>{children}</>;
}