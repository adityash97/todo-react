import React from "react";

function Product(props) {
  console.log(props);
        const cardStyle = {
          width: "18rem",
          /* Other style properties can be added here */
        };
  return (
    <>
      <div class="card" style={cardStyle}>
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">
            {props.details.title}
          </li>
          <li class="list-group-item">{props.details.price}</li>
          <li class="list-group-item">{props.details.quantity}</li>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => props.addQuantity(props.index)}
          >
            +
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => props.substractQuantity(props.index)}
          >
            -
          </button>
        </ul>
        <br />
      </div>
    </>
  );
}

export default Product;
