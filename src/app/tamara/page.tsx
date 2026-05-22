import '../../components/tamara/TamaraStyles.css';
import FaqSection from '@/components/tamara/FaqSection';
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
                                        className="img-fluid  mb-4  rounded-4"
                                        priority
                                        fetchPriority="high" style={{ maxHeight: '550px', objectFit: "cover", objectPosition: "center" }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center" >
                                <div className=" ">
                                    <h2 className="section-heading text-center mb-0">About Tamara Valley</h2>
                                    <div className="mx-auto mb-md-5 mb-4 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>

                                    <h3 className='fs-6 fw-semibold text-md-start text-center'>Experience The
                                        Luxury of Green Ownership
                                    </h3>
                                    <p className="mt-2  theme-color-dark">
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
                                    <div className="mx-auto  mb-md-5 mb-4 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>

                                    <h3 className='fs-6  text-md-start text-center fw-semibold'>Experience The
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
                                                <h2 className="section-heading text-center mb-3">Project Unique Selling Points (USPs)</h2>
                                                <div className="mx-auto mb-3 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>

                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 px-md-5 d-flex justify-content-center align-items-center">
                                <div className="">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-3 mb-4  p-0">
                                            <div className="services-item shine-animate-item mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={412} height={271} decoding="async" className=" img-fluid mb-1 d-block mx-auto" src="/images/Accessibility.webp" />
                                                </div>
                                                <div className="services-content faq-section px-3 pb-4 mb-3 ">
                                                    <h4 className="fw-bold title fs-6 mb-0 text-center py-3 fw-bold">
                                                        Infrastructure
                                                    </h4>
                                                    <p className='mb-3'>The project has 30 ft wide roads and a 6–8 ft RCC wall for safety and easy access.</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4  ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={412} height={271} decoding="async" className="img-fluid mb-1 d-block mx-auto" src="/images/Comfort.webp" />
                                                </div>
                                                <div className="services-content faq-section px-3 pb-4 mb-3">
                                                    <h4 className="fw-bold title fs-6 mb-0 text-center py-3">
                                                        Water Supply
                                                    </h4>
                                                    <p className='mb-3'>The project has a borewell water supply and a water storage tank for reliable water access.</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3  mb-4  ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={412} height={271} decoding="async" className="img-fluid mb-1 d-block mx-auto" src="/images/Community.webp" />
                                                </div>
                                                <div className="services-content faq-section px-3 pb-4 mb-3">
                                                    <h4 className="fw-bold title fs-6 mb-0 text-center py-3">
                                                        Electricity
                                                    </h4>
                                                    <p>The project has solar street lights for eco-friendly and reliable lighting.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4  ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={412} height={271} decoding="async" className="img-fluid mb-1 d-block mx-auto" src="/images/Freedom.webp" />
                                                </div>
                                                <div className="services-content faq-section px-3 pb-4 mb-3">
                                                    <h4 className="fw-bold title fs-6 mb-0 text-center py-3">
                                                        Security
                                                    </h4>
                                                    <p>The project has CCTV surveillance and 24/7 security personnel for complete safety.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4  ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={412} height={271} decoding="async" className="img-fluid mb-1 d-block mx-auto" src="/images/Legacy.webp" />
                                                </div>
                                                <div className="services-content faq-section px-3 pb-4 mb-3">
                                                    <h4 className="fw-bold title fs-6 mb-0 text-center py-3">
                                                        Landscaping
                                                    </h4>
                                                    <p>The project has tree-lined avenues and landscaped gardens for a refreshing green environment.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4  ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={412} height={271} decoding="async" className="img-fluid mb-1 d-block mx-auto" src="/images/Open space.webp" />
                                                </div>
                                                <div className="services-content faq-section px-3 pb-4 mb-3">
                                                    <h4 className="fw-bold title fs-6 mb-0 text-center py-3">
                                                        Recreation
                                                    </h4>
                                                    <p>The project offers a swimming pool and a children’s play area for fun, relaxation, and family time.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4  ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={412} height={271} decoding="async" className="img-fluid mb-1 d-block mx-auto" src="/images/Safety.webp" />
                                                </div>
                                                <div className="services-content faq-section px-3 pb-4 mb-3">
                                                    <h4 className="fw-bold title fs-6 mb-0 text-center py-3">
                                                        Amenities
                                                    </h4>
                                                    <p>The project has a community center and fitness center for recreation, wellness and social gatherings.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4  ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={412} height={271} decoding="async" className="img-fluid mb-1 d-block mx-auto" src="/images/Security.webp" />
                                                </div>
                                                <div className="services-content faq-section px-3 pb-4 mb-3">
                                                    <h4 className="fw-bold title fs-6 mb-0 text-center py-3">
                                                        Environment
                                                    </h4>
                                                    <p>The project features an eco-friendly design, ample green spaces, and serene temples for a peaceful living.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4  ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={412} height={271} decoding="async" className="img-fluid mb-1 d-block mx-auto" src="/images/Serenity.webp" />
                                                </div>
                                                <div className="services-content faq-section px-3 pb-4 mb-3">
                                                    <h4 className="fw-bold title fs-6 mb-0 text-center py-3">
                                                        Walkways
                                                    </h4>
                                                    <p>The project has a jogging track and pedestrian-friendly paths for a healthy and active lifestyle.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4  ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={412} height={271} decoding="async" className="img-fluid mb-1 d-block mx-auto" src="/images/Smart living.webp" />
                                                </div>
                                                <div className="services-content faq-section px-3 pb-4 mb-3">
                                                    <h4 className="fw-bold title fs-6 mb-0 text-center py-3">
                                                        Smart Features
                                                    </h4>
                                                    <p>The project offers high-speed internet connectivity and smart home options for modern living.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3  mb-4  ">
                                            <div className="services-item shine-animate-item bg-white mb-3">
                                                <div className="services-thumb">
                                                    <img alt="upsc" width={412} height={271} decoding="async" className="img-fluid mb-1 d-block mx-auto" src="/images/Tranquility.webp" />
                                                </div>
                                                <div className="services-content faq-section px-3 pb-4 mb-3">
                                                    <h4 className="fw-bold title fs-6 mb-0 text-center py-3">
                                                        Dining
                                                    </h4>
                                                    <p>The project has a clubhouse with a restaurant and an outdoor barbecue area for leisure and dining.</p>
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
                                    <div className="mx-auto mb-md-5 mb-4 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>


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
                            <div className="mx-auto mb-md-5 mb-4 bg-sanjeevani" style={{ width: '80px', height: '3px' }}></div>

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







                <Gallery />
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
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.296061031251!2d77.64576670000001!3d12.628572499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae67befb4e249f%3A0x278f5e2bb6d1007!2sTamara%20Valley!5e0!3m2!1sen!2sin!4v1779448325819!5m2!1sen!2sin" width="100%" height="380" loading="lazy" className="mb-3"></iframe>
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
