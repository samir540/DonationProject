import React from 'react'
import {connect} from 'react-redux';
function AddtoBasket({basket,products}) {
  return (
<section>
<div className='addtobasket'>
      {
basket.map((a) => {
  let product = products.find((b) => b.id === a.id )
  return <div className="basket_product">
<img src={product.image} alt="" />
<h1>{product.name}</h1>
<h2>{product.price}</h2>
  </div>
})

      }
      </div>
</section>
  )
}
const t = (a) => a;
export default connect(t)(AddtoBasket);