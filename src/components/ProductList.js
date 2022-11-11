import React from "react";
import Title from "./Title";
import { ProductConsumer } from "./Context";
import Product from "./Product";

function ProductList() {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {(value) => {
                //console.log(value.storeProducts);
                return value.storeProducts.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
