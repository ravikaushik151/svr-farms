import React from 'react';

export default function Hero() {
    return (
        <header className="tv-hero parallax-bg" style={{ backgroundImage: `url('/Home_page.webp')` }}>
            <div className="container">
                <div className="row align-items-center justify-content-center" >
                    <div className="col-lg-6 text-center">
                        <h1 className="display-4 mb-0">Nature’s Premium Address
                        </h1>
                        <p className="lead text-center">Near Bengaluru</p>
                        <p className='fs-6 text-center'>THALLI, TAMIL NADU
                            JUST 35–45 KM FROM ELECTRONIC CITY
                        </p>
                        <p className="mb-2 fw-normal text-center">300 ACRES | GATED ORGANIC MANAGED
                            FARMLAND QUARTER. </p>
                        <div className="mt-4">
                            <a href="#highlights" className="btn btn-outline-light btn-lg me-3 mb-3">Explore Project</a>
                            <a href="#contact" className="btn btn-success btn-lg mb-3">Book Site Visit</a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </header>
    )
}
