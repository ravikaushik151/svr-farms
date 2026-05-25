'use client';

import Image from 'next/image';

const amenities = [
  // ── New amenities ──
  { icon: '/icons/swimming-pool.png', title: 'Natural Infinity Pool' },
  { icon: '/icons/spa.png', title: 'Wellness Spa' },
  { icon: '/icons/Amphitheater.png', title: 'Open Air Theatre' },
  { icon: '/icons/market.png', title: 'Organic Supermarket' },
  { icon: '/icons/yoga-pose.png', title: 'Yoga Pavilion' },
  { icon: '/icons/yoga-new.png', title: 'Meditation Centre' },
  { icon: '/icons/Cafeteria.webp', title: 'Farm Dining' },
  { icon: '/icons/Clubhouse.png', title: 'Clubhouse Lounge' },
  { icon: '/icons/horse-rider.png', title: 'Equestrian Trail' },
  { icon: '/icons/cycle-path.png', title: 'Bicycle Trails' },
  { icon: '/icons/comfort-zone.png', title: 'Adventure Zone' },
  { icon: '/icons/Jogging track.png', title: 'Jogging Track' },
  { icon: '/icons/playing.png', title: 'Kids Club' },
  { icon: '/icons/playground.png', title: 'Play Garden' },
  { icon: '/icons/doctor-consultation.png', title: 'Medical Support' },
  { icon: '/icons/communities.png', title: 'Community Centre' },
  { icon: '/icons/Cafeteria.webp', title: 'Luxury Resort' },
  { icon: '/icons/barbecue.png', title: 'Barbecue Deck' },
  { icon: '/icons/Common Library.png', title: 'Reading Lounge' },
  { icon: '/icons/indoorgames.png', title: 'Indoor Games' },

 
];

export default function AmenitiesSection() {
    return (
        <section className="py-0 mb-3 position-relative blog" >
            <div className="container text-center">
                <div className="row g-4 d-flex align-items-center justify-content-center">
                    {amenities.map((item, idx) => (
                        <div key={idx} className="col-6 col-sm-6 col-md-3 col-lg-2 ">
                            {/* border rounded-3 shadow-sm bg-white theme-bg-light */}
                            <div className="p-3  h-100 d-flex flex-column align-items-center justify-content-center amenity-card">
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
