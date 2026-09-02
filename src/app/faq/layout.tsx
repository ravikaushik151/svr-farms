import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ — Little England Managed Farmland',
    description: 'Got questions about managed organic farmland? Read our frequently asked questions about Little England, located in the Thally-Hosur corridor near Bangalore. Learn about title clearance, farm management, construction guidelines, and more.',
};

export default function FaqLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
