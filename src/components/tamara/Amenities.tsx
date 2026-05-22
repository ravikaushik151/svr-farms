import React from 'react';
import { FaSwimmingPool, FaLeaf, FaSpa, FaBiking, FaRunning, FaChild, FaTheaterMasks, FaCoffee } from 'react-icons/fa';

const amenities = [
  {icon:<FaSwimmingPool />,title:'Infinity Pool'},
  {icon:<FaLeaf />,title:'Organic Farm'},
  {icon:<FaSpa />,title:'Spa & Wellness'},
  {icon:<FaTheaterMasks />,title:'Amphitheatre'},
  {icon:<FaBiking />,title:'Cycling Track'},
  {icon:<FaRunning />,title:'Outdoor Gym'},
  {icon:<FaChild />,title:'Kids Play Area'},
  {icon:<FaCoffee />,title:'Café'},
];

export default function Amenities(){
  return (
    <div className="container">
      <h2 className="mb-4">Amenities</h2>
      <div className="row">
        {amenities.map((a,idx)=> (
          <div className="col-6 col-md-4 col-lg-3 mb-4" key={idx}>
            <div className="glass-card tv-amenity h-100 d-flex align-items-start">
              <div className="me-3 icon">{a.icon}</div>
              <div>
                <h6 className="mb-0">{a.title}</h6>
                <p className="small mb-0 text-muted">Premium curated experience</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
