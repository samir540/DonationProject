import React from 'react'
import Product from '../Companents/Product/Product';
import Footer from '../Companents/Footer/Footer';
import { productsApi } from '../Service/apiService';
function Shop() {
  const {data:products, error, isLoading}=productsApi.useGetProductsQuery();
console.log(products);
  return (
    <section>
      {isLoading&& <h1>Loading...</h1> }
      <div className="shop-background-image">
      <div className="shop-overlay"></div>
      <div className="container">
      <div className="shop-heading">
        <h1>KİTABLAR İNSANLARA</h1>
        <h1>GÜC VERİR</h1>
      </div>
      </div>
      </div>
   <div className="products">
   <div className="container">
     <div className='products-content'>
       
       {
          products.map((a) => 
          <Product  key={a.id} product={a}/>
          )
        }
       </div>
     </div>
   </div>
   
   <Footer/>
    </section>
  )
}
export default Shop;