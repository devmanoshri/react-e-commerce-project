import React, { useContext } from "react";
import { ProductContext } from "./Context";
import { Link, useLocation } from "react-router-dom";
import { ButtonContainer } from "./Button";

function Details() {
  const location = useLocation();
  const { productId } = location.state;

  const { storeProducts, addToCart } = useContext(ProductContext);
  const productDetails = storeProducts.find((item) => item.id === productId);
  const { id, company, img, info, title, price, inCart } = productDetails;
  //console.log(productDetails);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} className="img-fluid" alt={title} />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>model:{title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-3">
            made by:<span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price: <span>$</span>
              {price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about the product:
          </p>
          <p className="text-muted lead">{info}</p>
          <div>
            <Link to="/">
              <ButtonContainer>back to products</ButtonContainer>
            </Link>

            <ButtonContainer
              cart
              disabled={inCart ? true : false}
              onClick={() => addToCart(id)}
            >
              {inCart ? "inCart" : "add to cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
