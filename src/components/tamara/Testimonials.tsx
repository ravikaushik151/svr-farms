import React from 'react';

const reviews = [
  {name:'A. Kumar',note:'An oasis of calm — the masterplan and detailing are exceptional.'},
  {name:'S. Mehta',note:'A considered balance of luxury and sustainability. Highly recommended.'},
  {name:'R. Sharma',note:'Premium infrastructure and real lifestyle focus. Great investment potential.'}
]

export default function Testimonials(){
  return (
    <div className="container">
      <h2 className="mb-4">Testimonials</h2>
      <div className="row">
        {reviews.map((r,idx)=> (
          <div className="col-md-4 mb-3" key={idx}>
            <div className="glass-card h-100">
              <p className="mb-2">“{r.note}”</p>
              <p className="small text-muted mb-0">— {r.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
