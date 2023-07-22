import React from "react";
import Product from "./Product.js";
function ProductList(props) {
  return (
    <>
      <div class="d-flex flex-row justify-content-evenly flex-wrap">
        {props.product.map((item, i) => (
          <Product
            details={item}
            key={i}
            addQuantity={props.addQuantity}
            substractQuantity={props.substractQuantity}
            index={i}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
