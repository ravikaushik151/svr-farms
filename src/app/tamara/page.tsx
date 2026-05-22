import '../../components/tamara/TamaraStyles.css';
import FaqSection from '@/components/tamara/FaqSection';
import BootstrapClient from "@/components/BootstrapClient";
import StatsSection from '@/components/tamara/StatsSection';
import Image from "next/image";
import AmenitiesMarquee from "@/components/AmenitiesMarquee";
import Clubhouse from "@/components/ClubhouseMarquee";
import Hero from '@/components/tamara/Hero';

import MasterPlan from '@/components/tamara/MasterPlan';
import Gallery from '@/components/tamara/Gallery';


import ContactFormPopup from '@/components/ContactFormPopup';
import MyAccordion from "@/components/MyAccordion";
import MyAccordionList from "@/components/MyAccordionList";

export const metadata = {
    title: 'Tamara Valley — Luxury Living Amidst Nature',
    description: 'Tamara Valley: premium villa plots, sustainable living, and luxury amenities amidst lush green valleys.',
};

export default function TamaraPage() {
    const faqItems = [
        {
            id: 1, title: 'Connected to Nature & Growth  ', content: `  <ul dir="ltr">
    <li>35–45 km from Electronic City</li>
    <li> 12–15 km from Hosur Town</li>
    <li> Easy Access via NH-44</li>
    <li>Near Proposed Hosur Airport Belt</li>
    <li>Surrounded by Hills & Green Valleys</li>
    
  </ul>
` },

    ];
    return (
        <>
            <BootstrapClient />
            <main className="main-wrapper">
                <Hero />
                <StatsSection />




                <section className="section bg-white page-project-amidst" id="about" >
                    <div className="container">
                        <div className="row  px-md-5">

                            <div className="col-md-6 ">
                                <div className="px-md-5">
                                    <Image
                                        alt="Project"
                                        src="/Tamara valley2.webp"
                                        width={650}
                                        height={750}
                                        className="img-fluid  mb-3  rounded-4"
                                        priority
                                        fetchPriority="high" style={{ maxHeight: '550px', objectFit: "cover", objectPosition: "center" }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center" >
                                <div className=" ">
                                    <h2 className="section-heading text-center mb-0">About Tamara Valley</h2>
                                    <div className="mx-auto mb-5 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>

                                    <h3 className='fs-6 fw-semibold'>Experience The
                                        Luxury of Green Ownership
                                    </h3>
                                    <p className="mt-3  theme-color-dark">
                                        <span>Set within the green landscapes of Thalli, Tamil Nadu, Tamara Valley is a 300-acre gated organic managed farmland project designed for those who seek a quieter, richer, and more meaningful way to own real estate.
                                        </span></p>
                                    <p className=" theme-color-dark"><span>Blending fertile land, cool climate, curated amenities, and professional farm management, the project offers more than a weekend retreat. It creates a rare opportunity to own a nature-backed asset shaped for lifestyle, legacy, and long-term value.
                                    </span>

                                    </p>

                                    <div className="text-center  my-4">
                                        <ContactFormPopup
                                            buttonText="Download Brochure"
                                            buttonClassName="btn btn-dark px-3 py-2 text-decoration-none rounded-2 "
                                            redirectUrl="/download-page"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section faq-section page-project-amidst" id="about" >
                    <div className="container">
                        <div className="row  px-md-5">


                            <div className="col-md-6 d-flex align-items-center" >
                                <div className=" ">
                                    <h2 className="section-heading text-center mb-0">A Breath of Nature </h2>
                                    <div className="mx-auto mb-5 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>

                                    <h3 className='fs-6 fw-semibold'>Experience The
                                        Luxury of Green Ownership
                                    </h3>
                                    <p className="mt-3  theme-color-dark">
                                        <span>Enter a world shaped by open land, quiet mornings, and nature-led comfort. At Tamara Valley, organic farmland, curated leisure spaces, and serene community experiences come together to create a lifestyle that feels calm, rooted, and effortlessly enriching.

                                        </span></p>



                                </div>
                            </div>

                            <div className="col-md-6 ">
                                <div className="px-md-5">
                                    <Image
                                        alt="Project"
                                        src="/Tamara valley2.webp"
                                        width={650}
                                        height={750}
                                        className="img-fluid  mb-3  rounded-4"
                                        priority
                                        fetchPriority="high" style={{ maxHeight: '550px', objectFit: "cover", objectPosition: "center" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="padding-global mysection visible bg-white" >
                    <div className="container-fluid">
                        <div className="row p-0">
                            <div className="col-md-12 d-flex justify-content-center align-items-center">
                                <div className="p-3">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div><div className="title text-center">
                                                <h2 className="section-heading text-center mb-0">Project Unique Selling Points (USPs)</h2>
                                                <div className="mx-auto mb-3 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>

                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 px-md-5 d-flex justify-content-center align-items-center">
                                <div className="p-3">
                                    <div className="row">
                                        <div className="col-md-3 mb-4 ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/Accessibility.webp" />
                                                </div>
                                                <div className="services-content px-3 mb-3">
                                                    <h4 className="title fs-6 mb-0 text-center py-3">Accessibility
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/Comfort.webp" />
                                                </div>
                                                <div className="services-content px-3 mb-3">
                                                    <h4 className="title fs-6 mb-0 text-center py-3">Comfort
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3  mb-4">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/Community.webp" />
                                                </div>
                                                <div className="services-content px-3 mb-3">
                                                    <h4 className="title fs-6 mb-0 text-center py-3">Community
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4 ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/Freedom.webp" />
                                                </div>
                                                <div className="services-content px-3 mb-3">
                                                    <h4 className="title fs-6 mb-0 text-center py-3">Freedom
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4 ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/Legacy.webp" />
                                                </div>
                                                <div className="services-content px-3 mb-3">
                                                    <h4 className="title fs-6 mb-0 text-center py-3">Legacy
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/Open space.webp" />
                                                </div>
                                                <div className="services-content px-3 mb-3">
                                                    <h4 className="title fs-6 mb-0 text-center py-3">Open space
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4 ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/Safety.webp" />
                                                </div>
                                                <div className="services-content px-3 mb-3">
                                                    <h4 className="title fs-6 mb-0 text-center py-3">Safety
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4 ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/Security.webp" />
                                                </div>
                                                <div className="services-content px-3 mb-3">
                                                    <h4 className="title fs-6 mb-0 text-center py-3">Security
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4 ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/Serenity.webp" />
                                                </div>
                                                <div className="services-content px-3 mb-3">
                                                    <h4 className="title fs-6 mb-0 text-center py-3">Serenity
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4 ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/Smart living.webp" />
                                                </div>
                                                <div className="services-content px-3 mb-3">
                                                    <h4 className="title fs-6 mb-0 text-center py-3">Smart living
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3  mb-4">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/Tranquility.webp" />
                                                </div>
                                                <div className="services-content px-3 mb-3">
                                                    <h4 className="title fs-6 mb-0 text-center py-3">Tranquility
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3  mb-4">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={412} height={271} decoding="async" className="img-fluid mb-1" src="/images/Wellness.webp" />
                                                </div>
                                                <div className="services-content px-3 mb-3">
                                                    <h4 className="title fs-6 mb-0 text-center py-3">Wellness
                                                    </h4>

                                                </div>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section_biodiversity-benefits py-5 faq-section " id="amenities"  >
                    <div className="padding-global" >
                        <div className="container-large" >
                            <div className="biodiversity-benefits_components">
                                <div
                                    id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                                    className=""
                                >
                                    <h2 className="section-heading text-center mb-0"> Amenities</h2>
                                    <div className="mx-auto mb-3 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <AmenitiesMarquee />

                </section>
                <MasterPlan />
                <section className="plot-section py-5 bg-white">
                    <div className="container">

                        <div className="text-center mb-5">
                            <h2 className="section-heading text-center mb-0">Select Your Plot</h2>
                            <div className="mx-auto mb-3 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>

                        </div>

                        <div className="table-responsive w-75 d-block mx-auto">
                            <table className="table plot-table align-middle text-center">

                                <thead>
                                    <tr>
                                        <th className="fw-semibold text-uppercase py-4">
                                            Type
                                        </th>

                                        <th className="fw-semibold text-uppercase py-4">
                                            Area
                                        </th>

                                        <th className="fw-semibold text-uppercase py-4">
                                            Price
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr>
                                        <td>Quarter Acre

                                        </td>
                                        <td>10,890 Sqft </td>
                                        <td>
                                            <button className="btn btn-dark rounded-3 px-4 py-2">
                                                On Request*
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Half Acre

                                        </td>
                                        <td>21,780 Sqft</td>
                                        <td>
                                            <button className="btn btn-dark rounded-3 px-4 py-2">
                                                On Request*
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>One Acre </td>
                                        <td>43,560 Sqft

                                        </td>
                                        <td>
                                            <button className="btn btn-dark rounded-3 px-4 py-2">
                                                On Request*
                                            </button>
                                        </td>
                                    </tr>



                                </tbody>

                            </table>
                        </div>

                    </div>
                </section>

                {/* Section 2: 360 Lifestyle Cards */}



                {/* Section 2: 360 Lifestyle Cards */}
                <section className="section_biodiversity-benefits py-5 faq-section section-small" id="amenities">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="biodiversity-benefits_components">
                                <div
                                    id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                                    className=""
                                >
                                    <h2 className="section-heading text-center mb-0"> Club House</h2>
                                    <div className="mx-auto mb-3 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <Clubhouse />
                </section>



                {/* <Gallery /> */}
                {/*  <Construction />*/}


                <section className="section_home-connectivity bg-white page-about-mv" id="location">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="section-heading text-center mb-0"> Location</h2>
                                <div className="mx-auto mb-5 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>
                            </div>
                            <div className="row">




                                <div className="col-md-8">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7781.187708608875!2d77.51706043914793!3d12.804854316360881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae4169b07f2a7b%3A0xe6d9ff13f19a5517!2sAmidst%20Nature!5e0!3m2!1sen!2sin!4v1759994801277!5m2!1sen!2sin" width="100%" height="380" loading="lazy" className="mb-3"></iframe>
                                </div>
                                <div className="col-md-4">
                                    <MyAccordionList items={faqItems} />
                                </div>



                            </div>

                        </div>
                    </div>
                </section>


                <FaqSection />

            </main >

        </>
    )
}
