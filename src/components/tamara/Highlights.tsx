import React from 'react';

const items = [
  {title:'Acres of development',body:'Sprawling green belts and thoughtfully positioned plots.'},
  {title:'Plot sizes',body:'From intimate 2000 sq.ft plots to expansive estate parcels.'},
  {title:'Connectivity',body:'Easy access to highways, IT hubs and upcoming metro corridors.'},
  {title:'Organic farming',body:'Allocated community farms and farm-to-table programs.'},
  {title:'Luxury amenities',body:'Clubhouse, spa, infinity pool and curated lifestyle zones.'},
  {title:'Sustainable living',body:'Rainwater harvesting, solar-ready infrastructure and native planting.'},
  {title:'24/7 security',body:'Gated community with smart surveillance and concierge services.'},
  {title:'Smart infrastructure',body:'Fiber-ready, managed utilities and EV-ready streets.'}
];

export default function Highlights(){
  return (
    <div className="container">
      <h2 className="mb-5 text-center">Project Highlights</h2>
      <div className="row tv-cards">
        {items.map((it,idx)=> (
          <div className="col-md-6 col-lg-3 mb-4" key={idx}>
            <div className="card glass-card h-100">
              <div className="card-body">
                
                <h5 className="card-title text-center">{it.title}</h5>
                <p className="card-text small text-center">{it.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
