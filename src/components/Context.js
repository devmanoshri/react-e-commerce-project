import React from "react";
import { storeProducts, detailProduct } from "../data";

const ProductContext = React.createContext();

// const initialState = {
//   storeProducts: storeProducts,
//   detailProduct: detailProduct,
// };

// const getItem = (id) => {
//   const product = storeProducts.find((item) => item.id === id);
//   return product;
// };
// const handelDetail = () => {
//   console.log("hello from detail");
// };
const addToCart = (id) => {
  console.log(`hello from cart is ${id}`);
};
//provider
function ProductProvider({ children }) {
  return (
    <ProductContext.Provider
      value={{ storeProducts, detailProduct, addToCart }}
    >
      {children}
    </ProductContext.Provider>
  );
}
//consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
