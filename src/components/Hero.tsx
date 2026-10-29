import Link from 'next/link';
import HeroSliderControls from './HeroSliderControls';

export default function Hero() {
    return (
        <div 
            className="position-relative w-100 overflow-hidden" 
            style={{ 
                minHeight: 'calc(100svh - 60px)', 
                height: 'calc(100svh - 60px)' 
            }}
        >
            {/* Slide 1 - Base Layer (Zero Transition, Direct LCP Paint) */}
            <picture className="position-absolute top-0 start-0 w-100 h-100 d-block" style={{ zIndex: 1 }}>
                <source media="(min-width: 768px)" srcSet="/banner-1.webp" width={1920} height={1080} />
                <img
                    src="/Homepage_banner_Img1_Mob.webp"
                    alt="Managed Organic Farmland Near Bengaluru - SVR Farms Tamara Valley"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    width={460}
                    height={824}
                    className="w-100 h-100 object-fit-cover d-block"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </picture>
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25" style={{ zIndex: 2 }} />

            {/* Interactive Slider Overlay & Controls */}
            <HeroSliderControls />

            {/* Static Content Overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                    zIndex: 3,
                    pointerEvents: 'none',
                    paddingTop: '2rem',
                    paddingBottom: '2rem',
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
                                        backgroundColor: 'rgba(17, 73, 52, 0.95)',
                                        color: '#c5a059',
                                        fontSize: 'clamp(0.72rem, 2.2vw, 0.88rem)',
                                        letterSpacing: '0.8px',
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
