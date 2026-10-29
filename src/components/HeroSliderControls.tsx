'use client';

import { useState } from 'react';

export default function HeroSliderControls() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);

    const toggleSlide = (target?: number) => {
        setHasInteracted(true);
        if (typeof target === 'number') {
            setActiveSlide(target);
        } else {
            setActiveSlide(prev => (prev === 0 ? 1 : 0));
        }
    };

    return (
        <>
            {/* Slide 2 - Overlay Layer: Only rendered after user interacts, saving 55KB on initial LCP */}
            {hasInteracted && (
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        zIndex: 2,
                        opacity: activeSlide === 1 ? 1 : 0,
                        transition: 'opacity 0.6s ease-in-out',
                        pointerEvents: 'none'
                    }}
                >
                    <picture className="w-100 h-100 d-block">
                        <source media="(min-width: 768px)" srcSet="/Home_page_updated_Banner.webp" width={1920} height={1080} />
                        <img
                            src="/Homepage_banner_Img2_Mob.webp"
                            alt="Luxury Farmland Plots in Thalli Near Bangalore - SVR Farms"
                            loading="lazy"
                            decoding="async"
                            width={460}
                            height={824}
                            className="w-100 h-100 object-fit-cover d-block"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </picture>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25" style={{ zIndex: 1 }} />
                </div>
            )}

            {/* Slider Controls (Next / Prev) */}
            <button
                type="button"
                className="carousel-control-prev"
                style={{ zIndex: 5, background: 'none', border: 'none', opacity: 0.8 }}
                onClick={() => toggleSlide()}
                aria-label="Previous Slide"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
            </button>
            <button
                type="button"
                className="carousel-control-next"
                style={{ zIndex: 5, background: 'none', border: 'none', opacity: 0.8 }}
                onClick={() => toggleSlide()}
                aria-label="Next Slide"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
            </button>

            {/* Indicators */}
            <div className="carousel-indicators" style={{ zIndex: 5, marginBottom: '1.5rem' }}>
                <button
                    type="button"
                    className={activeSlide === 0 ? 'active' : ''}
                    aria-label="Slide 1"
                    onClick={() => toggleSlide(0)}
                />
                <button
                    type="button"
                    className={activeSlide === 1 ? 'active' : ''}
                    aria-label="Slide 2"
                    onClick={() => toggleSlide(1)}
                />
            </div>
        </>
    );
}
