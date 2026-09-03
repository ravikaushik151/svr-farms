import React from 'react';

import ContactForm from '@/components/ContactForm';
export default function Hero() {
    return (
        <header className="tv-hero parallax-bg" style={{ backgroundImage: `url('/banner/banner-tam.webp')` }}>
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
        linear-gradient(rgba(255,255,255,0.0) ),
        linear-gradient(90deg, rgba(255,255,255,0.0) )
      `,
                    backgroundSize: '60px 60px',
                    pointerEvents: 'none',
                }}
            />
            <div className="container">
                <div className="row align-items-center justify-content-center" >
                    <div className="col-lg-8 col-xl-7 text-center px-3">
                        <h1 
                            className="display-4 mb-2"
                            style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: 'clamp(1.85rem, 6vw, 3.25rem)'
                            }}
                        >
                            Nature’s Premium Address
                        </h1>
                        <p className="lead text-center mb-2">Near Bengaluru</p>
                        <p className='fs-6 text-center mb-2 px-1' style={{ letterSpacing: '0.5px' }}>
                            THALLI, TAMIL NADU <span className="d-none d-sm-inline">|</span><br className="d-sm-none" /> JUST 35–45 KM FROM ELECTRONIC CITY
                        </p>
                        <p className="mb-2 fw-normal text-center px-1 small" style={{ letterSpacing: '0.5px' }}>
                            300 ACRES | GATED ORGANIC MANAGED FARMLAND QUARTER.
                        </p>
                        <div className="mt-4">

                            <a href="#about" className="btn btn-outline-light btn-lg me-3 mb-3 d-none">Explore Project</a>
                           
                            <ContactForm
                                button={true}
                                popup={true}
                                buttonClassName='btn btn-success btn-lg mb-3  '
                                formInputClass='py-2 mb-0 form-control '
                                buttonText="Book Site Visit"


                            />

                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}
