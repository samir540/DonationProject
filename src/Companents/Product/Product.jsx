import React from 'react'
import {Link} from 'react-router-dom'
function Product({product}) {
  return (
    <>
  <Link to={`/details/${product.id}`} className='product'>
<div className="product-content">
<div className="product-image">
<img src={product.image} alt="" />
</div>
</div>
    </Link>
    </>
  )
}

export default Product