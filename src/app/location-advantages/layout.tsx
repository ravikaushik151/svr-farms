import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Location Advantages — Thally & Little England Farmland | SVR Farms',
    description: 'Explore the location advantages of Thally, known as India\'s Little England. Highlighting cool climate, rich historical heritage, excellent connectivity to Bangalore & Hosur, and rising infrastructure.',
};

export default function LocationAdvantagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
