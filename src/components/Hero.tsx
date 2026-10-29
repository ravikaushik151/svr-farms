'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Hero() {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            mobileImg: '/Homepage_banner_Img1_Mob.webp',
            desktopImg: '/banner-1.webp',
            alt: 'Managed Organic Farmland Near Bengaluru - SVR Farms Tamara Valley',
            eager: true,
        },
        {
            mobileImg: '/Homepage_banner_Img2_Mob.webp',
            desktopImg: '/Home_page_updated_Banner.webp',
            alt: 'Luxury Farmland Plots in Thalli Near Bangalore - SVR Farms',
            eager: false,
        }
    ];

    return (
        <div className="position-relative w-100 overflow-hidden" style={{ minHeight: '100svh' }}>
            {/* Background Slides */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}>
                {slides.map((slide, idx) => (
                    <div
                        key={idx}
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                            opacity: activeSlide === idx ? 1 : 0,
                            visibility: activeSlide === idx ? 'visible' : 'hidden',
                            transition: 'opacity 0.6s ease-in-out, visibility 0.6s ease-in-out',
                            height: '100svh',
                            minHeight: '100svh'
                        }}
                    >
                        <picture className="w-100 h-100">
                            <source media="(min-width: 768px)" srcSet={slide.desktopImg} width={1920} height={1080} />
                            <img
                                src={slide.mobileImg}
                                alt={slide.alt}
                                fetchPriority={slide.eager ? 'high' : 'auto'}
                                loading={slide.eager ? 'eager' : 'lazy'}
                                decoding="async"
                                width={slide.eager ? 640 : 1920}
                                height={slide.eager ? 1140 : 1080}
                                className="w-100 h-100 object-fit-cover"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </picture>
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25" style={{ zIndex: 1 }} />
                    </div>
                ))}

                {/* Slider Controls (Next / Prev) */}
                <button
                    type="button"
                    className="carousel-control-prev"
                    style={{ zIndex: 5, background: 'none', border: 'none', opacity: 0.8 }}
                    onClick={() => setActiveSlide(prev => (prev === 0 ? 1 : 0))}
                    aria-label="Previous Slide"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                </button>
                <button
                    type="button"
                    className="carousel-control-next"
                    style={{ zIndex: 5, background: 'none', border: 'none', opacity: 0.8 }}
                    onClick={() => setActiveSlide(prev => (prev === 0 ? 1 : 0))}
                    aria-label="Next Slide"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                </button>

                {/* Indicators */}
                <div className="carousel-indicators" style={{ zIndex: 5, marginBottom: '1.5rem' }}>
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className={activeSlide === idx ? 'active' : ''}
                            aria-label={`Slide ${idx + 1}`}
                            onClick={() => setActiveSlide(idx)}
                        />
                    ))}
                </div>
            </div>

            {/* Static Content Overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                    zIndex: 2,
                    pointerEvents: 'none',
                    paddingTop: '5rem',
                    paddingBottom: '3rem',
                }}
            >
                <div
                    className="container position-relative text-center text-white px-3"
                    style={{ pointerEvents: 'none', maxWidth: '960px' }}
                >
                    <div className="row justify-content-center" style={{ pointerEvents: 'none' }}>
                        <div className="col-lg-10" style={{ pointerEvents: 'none' }}>
                            <div className="mb-3" style={{ pointerEvents: 'auto' }}>
                                <Link
                                    prefetch={false}
                                    href="/tamara"
                                    className="d-inline-flex flex-wrap align-items-center justify-content-center gap-1 gap-md-2 text-decoration-none px-3 py-2 rounded-pill shadow-sm border border-warning"
                                    style={{
                                        backgroundColor: 'rgba(17, 73, 52, 0.88)',
                                        color: '#c5a059',
                                        fontSize: 'clamp(0.72rem, 2.2vw, 0.88rem)',
                                        letterSpacing: '0.8px',
                                        backdropFilter: 'blur(5px)',
                                        maxWidth: '100%'
                                    }}
                                >
                                    <span>⭐ FLAGSHIP PROJECT:</span>
                                    <strong className="text-white">TAMARA VALLEY (300+ ACRES)</strong>
                                    <span>&rarr;</span>
                                </Link>
                            </div>
                            <h1
                                className="display-3 fw-bold mb-3 lh-sm text-white"
                                style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: 'clamp(1.85rem, 5.5vw, 3.75rem)'
                                }}
                            >
                                Managed Organic Farmland Near Bengaluru
                            </h1>
                            <p className="lead fs-5 fs-md-4 mb-4 mb-md-5 text-white-90" style={{ letterSpacing: '0.5px' }}>
                                In the belt British called Little England
                            </p>
                            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2 gap-md-3" style={{ pointerEvents: 'auto' }}>
                                <Link
                                    prefetch={false}
                                    href="/tamara"
                                    className="btn px-4 py-2.5 py-md-3 fw-bold shadow-sm w-100 w-sm-auto text-nowrap"
                                    style={{ backgroundColor: '#c5a059', color: '#114934', border: 'none' }}
                                >
                                    Explore Tamara Valley ⭐
                                </Link>
                                <Link prefetch={false} href="/contact" className="btn btn-primary px-4 py-2.5 py-md-3 w-100 w-sm-auto text-nowrap">
                                    Book a Site Visit
                                </Link>
                                <a href="#projects" className="btn btn-outline-light px-4 py-2.5 py-md-3 w-100 w-sm-auto text-nowrap">
                                    See All Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
