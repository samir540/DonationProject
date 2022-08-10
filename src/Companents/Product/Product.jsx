import React from "react";
function Product({ product, buyItem, sellItem, basket }) {
  let findProduct = basket.find((a) => a.id === product.id);
  console.log(findProduct);
  return (
    <div className="product">
      <div className="product-content">
        <div className="product-image">
          <img src={product.image} alt="" />
        </div>
        <div className="product-items">
          <h3>{product.name}</h3>
          <h4>{product.price} AZN</h4>
          <div className="product-items-buttons">
            <button onClick={() => sellItem(product.id)} className="sell">
              -
            </button>
            {findProduct && findProduct.length>0 &&
              findProduct.map((product) => (
                <button className="count">{product.count}</button>
              ))}

            <button onClick={() => buyItem(product.id)} className="buy">
              +
            </button>
          </div>
          <div className="button">Səbətə Əlavə Et</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
