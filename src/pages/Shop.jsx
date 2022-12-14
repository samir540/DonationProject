import React from "react";
import { servicesApi } from "../Service/apiService";
import Product from "../Companents/Product/Product";
import { useState } from "react";
import Footer from "../Companents/Footer/Footer";
function Donate() {
  let [basket, setBasket] = useState([]);
  const { data: products } = servicesApi.useGetProductsQuery();
  const buyItem = (id) => {
    let find = basket.find((a) => a.id === id);
    if (find) {
      find.count++;
    } else {
      basket.push({
        id: id,
        count: 1,
      });
    }
    console.log(basket);
  };
  const sellItem = (id) => {
    let find = basket.find((a) => a.id === id);
    find.count--;
    if (find.count === 0) {
      basket = basket.filter((a) => a.id !== id);
    }
    console.log(basket);
  };
  return (
    <section>
      <div data-aos="fade-up" className="shop-background-image">
        <div className="shop-background-image-overlay"></div>
      </div>
      <div data-aos="fade-up" className="products">
        {products &&
          products.map((a) => (
            <Product
              key={a.id}
              product={a}
              buyItem={buyItem}
              sellItem={sellItem}
              basket={basket}
            />
          ))}
      </div>
      <Footer/>
    </section>
  );
}
export default Donate;
