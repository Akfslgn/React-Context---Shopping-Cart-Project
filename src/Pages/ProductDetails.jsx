import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Data from "../../Data.json";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = Data.products.find((p) => p.id === parseInt(id));

  const { dispatch } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <Button variant="secondary" onClick={() => navigate(-1)}>
        Back
      </Button>
      <div className="row mt-3">
        <div className="col-md-6">
          <img
            src={product.thumbnail}
            className="img-fluid"
            alt={product.title}
          />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "Add", product: product });
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
