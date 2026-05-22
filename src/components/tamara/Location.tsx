import React from 'react';

const perks = [
  'Top schools within 15 mins',
  'Multi-speciality hospitals nearby',
  'Proposed metro corridor access',
  'Direct highway access',
  '45 mins to the international airport',
  'Close to major IT & business hubs'
]

export default function Location(){
  return (
    <div className="container">
      <h2 className="mb-4">Location Advantages</h2>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-unstyled">
            {perks.slice(0,3).map((p,i)=>(<li key={i} className="mb-2">• {p}</li>))}
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="list-unstyled">
            {perks.slice(3).map((p,i)=>(<li key={i} className="mb-2">• {p}</li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}
