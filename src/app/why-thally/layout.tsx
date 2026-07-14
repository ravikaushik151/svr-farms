import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why Thally — The Little England Managed Farmland Advantage',
    description: 'Discover why Thally (Little England) is the prime managed farmland location near Bangalore. Thriving climate, excellent NH-44 connectivity, STRR loop, Metro line, and robust appreciation potential.',
};

export default function WhyThallyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
