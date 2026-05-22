'use client';

import Image from 'next/image';

const amenities = [
  // ── New amenities ──
  { icon: '/icons/pool.webp', title: 'Natural Infinity Pool' },
  { icon: '/icons/spa.png', title: 'Wellness Spa' },
  { icon: '/icons/Amphitheater.png', title: 'Open Air Theatre' },
  { icon: '/icons/Organic Supermarket.png', title: 'Organic Supermarket' },
  { icon: '/icons/Yoga Pavilion.png', title: 'Yoga Pavilion' },
  { icon: '/icons/Yoga.png', title: 'Meditation Centre' },
  { icon: '/icons/Cafeteria.webp', title: 'Farm Dining' },
  { icon: '/icons/Clubhouse.png', title: 'Clubhouse Lounge' },
  { icon: '/icons/Jogging track.png', title: 'Equestrian Trail' },
  { icon: '/icons/Jogging track.png', title: 'Bicycle Trails' },
  { icon: '/icons/Landscape Greenery.png', title: 'Adventure Zone' },
  { icon: '/icons/Jogging track.png', title: 'Jogging Track' },
  { icon: '/icons/Play Area for Kids.png', title: 'Kids Club' },
  { icon: '/icons/Landscaped Gardens.png', title: 'Play Garden' },
  { icon: '/icons/Devine place.png', title: 'Medical Support' },
  { icon: '/icons/Event Lawn.png', title: 'Community Centre' },
  { icon: '/icons/Cafeteria.webp', title: 'Luxury Resort' },
  { icon: '/icons/Barbecue Deck.png', title: 'Barbecue Deck' },
  { icon: '/icons/Common Library.png', title: 'Reading Lounge' },
  { icon: '/icons/indoorgames.png', title: 'Indoor Games' },

 
];

export default function AmenitiesSection() {
    return (
        <section className="py-0 mb-3 position-relative blog" >
            <div className="container text-center">
                <div className="row g-4 ">
                    {amenities.map((item, idx) => (
                        <div key={idx} className="col-6 col-sm-6 col-md-3 col-lg-2 ">
                            <div className="p-3 border rounded-3 shadow-sm bg-white theme-bg-light h-100 d-flex flex-column align-items-center justify-content-center amenity-card">
                                <Image src={item.icon} alt={item.title} width={50} height={50} className='' />
                                <p className="small mt-2 mb-0 text-center theme-color-light">{item.title}</p>
                            </div>
                        </div>
                    ))}
                    {/* <Image
                      width={800}
                      height={200}
                      src="/images/page-2.png"
                      loading="lazy"
                      alt=""
                      className="home-masterplan_img img-fluid bg-transparent mt-3 rounded-3"
                      style={{marginTop:"30px", maxHeight:"475px", objectFit:"cover", objectPosition:"bottom bottom", position:"absolute", opacity:".2"}}
                    /> */}
                </div>
            </div>
        </section>
    );
}
