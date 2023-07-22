import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js"
import AddProduct from "./components/AddProduct.js"
import React, { useState } from "react";
function App() {
  const productlist = [
    {
      price: 1,
      title: "IPhone",
      quantity: 0,
    },
    {
      price: 2,
      title: "IPhone XE",
      quantity: 0,
    },
  ];
  const [productList, setProductList] = useState(productlist);
  const [total, setTotal] = useState(0)
  
  
  const updateQuantity = (index) => {
    let newProductList = [...productList];
    let newTotal = total;

    newProductList[index].quantity += 1;


    newTotal +=  newProductList[index].price;
    setTotal(newTotal);
    setProductList(newProductList);
  };

  const decreaseQuantity = (index) => {
    let newProductList = [...productList];
    let newTotal = total;
    if (newProductList[index].quantity !== 0){
      newProductList[index].quantity -= 1;
      newTotal -= newProductList[index].price;
    }
     
    
    setTotal(newTotal);
    setProductList(newProductList);
  };

  const reset = () =>{
    setProductList(productlist);
    setTotal(0);

  }

  const createProduct = (newProduct) =>{
    let newProductList = [...productList]
    newProduct['quantity'] = 0
    newProductList.push(newProduct);
    setProductList(newProductList)
  }


  return (
    <>
      <Navbar />
      <AddProduct
      createProduct={createProduct}
      />
      <ProductList
        product={productList}
        addQuantity={updateQuantity}
        substractQuantity={decreaseQuantity}
      />
      <Footer reset={reset} total={total} />
    </>
  );
}

export default App;
