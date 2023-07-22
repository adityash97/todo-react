import React, { useState } from "react";
function AddProduct(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  return (
    <>
      <form>
        <div className="d-flex flex-row justify-content-evenly">
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              name="productName"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="productPrice"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              value={price}
            />
          </div>

          <div className="align-self-center">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                if (name && price){
                    props.createProduct({
                        title:name,
                        price: parseInt(price),
                    });
                setPrice("");
                setName('');
                }
                
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddProduct;
