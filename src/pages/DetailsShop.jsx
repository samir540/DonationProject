import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
function DetailsShop({dispatch,basket,products}) {
  const buyItem = (id) => {
    let f = basket.find((a) => a.id === id)
    if(f){
      f.count++
    }
    else{
basket.push({
  id: id,
  count: 1,
})
    }
    dispatch({
      type: "AddBasket",
      payload: basket,
    })
  }
  const sellItem = (id) => {
    let f = basket.find((a) => a.id === id)
 f.count--
 if(f.count===0){
  basket = basket.filter((a) => a.id !== id)
 }
    dispatch({
      type: "AddBasket",
      payload: basket,
    })
  }
  console.log(basket)
  const [oneProducts,setProducts] = useState([]);
  let {id} = useParams();
    useEffect(()=>{
fetch(`http://localhost:7700/products/${id}`).then((a) => a.json()).then((a) => { 
    setProducts(a);
})
    },[]);
  return (
  <section>
      <div className='details'>
   <div className="container">
   <div className="details-content">
<div className="details-common">
<div className="details-image">
        <img src={oneProducts.image} alt="" />
       </div>
       <div className="details-items">
       <div className="details-items-detail">
       <h3>{oneProducts.name}</h3>
        <h3>{oneProducts.price}</h3>
        <div className="buttons">
          <button  className='sell'>-</button>  
          <div className='count'>1</div>
          <button className='buy'>+</button>
        </div>
        <button onClick={()=> buyItem(oneProducts.id)} className='tobasket'>Səbətə Əlavə Et</button>
       </div>
       </div>
</div>
    </div>
   </div>
        </div>
  </section>
  )
}
const t = (a) => a;
export default connect(t)(DetailsShop);