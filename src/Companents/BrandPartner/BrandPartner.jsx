import React from 'react'

function BrandPartner({partner}) {
  return (
    <div className="brand-partner-box">
      <div className='brand-partner'>
<img src={partner.image} alt="" />
    </div>
    </div>
  )
}

export default BrandPartner;