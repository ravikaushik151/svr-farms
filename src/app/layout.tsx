import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BootstrapClient from '@/components/BootstrapClient';

export const metadata: Metadata = {
    title: 'Little England',
    description: 'Little England Website',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <BootstrapClient />
                <div className="d-flex flex-column min-vh-100">
                    <Header />
                    <main className="flex-grow-1">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
