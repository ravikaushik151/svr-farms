import './bootstrap-custom.min.css';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Jost, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

const jost = Jost({
    subsets: ['latin'],
    variable: '--font-jost',
    display: 'swap',
    preload: false,
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal'],
    variable: '--font-serif',
    display: 'swap',
    preload: false,
});

export const viewport: Viewport = {
    themeColor: '#114934',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://svr-farms.vercel.app'),
    title: {
        default: 'SVR Farms | Managed Farmland & Farm Plots Near Bangalore',
        template: '%s | SVR Farms',
    },
    description: 'Explore premium managed farmland and farm plots near Bangalore with SVR Farms. Flagship project Tamara Valley in Thally offers luxury farm living, high returns, and eco-friendly retreat.',
    keywords: [
        'Tamara Valley',
        'Tamara Valley Farms',
        'Tamara Valley by SVR Farms',
        'Tamara Valley Price',
        'Farmland for Sale in Thalli',
        'Organic Farmland in Thalli',
        'Agricultural Land for Sale Thalli',
        'Farm Plots for Sale in Thalli',
        'Managed Farmland near Thalli',
        'Luxury Farmland in Thalli Bangalore',
        'Farmland in Bangalore',
        'Managed Farmland Near Bangalore',
        'Little England Farms'
    ],
    authors: [{ name: 'SVR Farms' }],
    creator: 'SVR Farms',
    publisher: 'SVR Farms',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://svr-farms.vercel.app',
        siteName: 'SVR Farms',
        title: 'SVR Farms | Managed Farmland & Farm Plots Near Bangalore',
        description: 'Explore premium managed farmland and farm plots near Bangalore with SVR Farms. Flagship project Tamara Valley in Thally offers luxury organic farm living, high returns, and eco-friendly retreat.',
        images: [
            {
                url: '/banner-1.webp',
                width: 1200,
                height: 630,
                alt: 'SVR Farms - Managed Farmland Near Bangalore',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SVR Farms | Managed Farmland & Farm Plots Near Bangalore',
        description: 'Explore premium managed farmland and farm plots near Bangalore with SVR Farms. Flagship project Tamara Valley in Thally.',
        images: ['/banner-1.webp'],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'RealEstateAgent',
            '@id': 'https://svr-farms.vercel.app/#organization',
            name: 'SVR Farms',
            url: 'https://svr-farms.vercel.app',
            logo: 'https://svr-farms.vercel.app/LE_Web_Logo.png',
            image: 'https://svr-farms.vercel.app/banner-1.webp',
            description: 'Premium managed farmland and farm plots developer near Bangalore, presenting Tamara Valley in Thally.',
            telephone: '+91-9686777793',
            email: 'info@littleengland.com',
            priceRange: '₹₹₹',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '509, Third Floor, 17th Main, 6th Cross Rd, 6th Block, Koramangala',
                addressLocality: 'Bengaluru',
                addressRegion: 'Karnataka',
                postalCode: '560095',
                addressCountry: 'IN',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: '12.9352',
                longitude: '77.6245',
            },
            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    opens: '09:00',
                    closes: '18:00',
                },
            ],
        },
        {
            '@type': 'WebSite',
            '@id': 'https://svr-farms.vercel.app/#website',
            url: 'https://svr-farms.vercel.app',
            name: 'SVR Farms',
            publisher: {
                '@id': 'https://svr-farms.vercel.app/#organization',
            },
            potentialAction: {
                '@type': 'SearchAction',
                target: 'https://svr-farms.vercel.app/blogs?q={search_term_string}',
                'query-input': 'required name=search_term_string',
            },
        },
    ],
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${jost.variable} ${playfair.variable}`}>
            <head>
                {/* Preload critical LCP Hero Banners */}
                <link
                    rel="preload"
                    as="image"
                    href="/Homepage_banner_Img1_Mob.webp"
                    media="(max-width: 767.98px)"
                    fetchPriority="high"
                />
                <link
                    rel="preload"
                    as="image"
                    href="/banner-1.webp"
                    media="(min-width: 768px)"
                    fetchPriority="high"
                />

                {/* Structured Data Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="font-sans">
                <div className="d-flex flex-column min-vh-100">
                    <Header />
                    <main className="flex-grow-1">
                        {children}
                    </main>
                    <Footer />
                </div>

                {/* Google Analytics Script */}
                {gaId && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                            strategy="lazyOnload"
                        />
                        <Script id="google-analytics" strategy="lazyOnload">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${gaId}', {
                                    page_path: window.location.pathname,
                                });
                            `}
                        </Script>
                    </>
                )}
            </body>
        </html>
    );
}
