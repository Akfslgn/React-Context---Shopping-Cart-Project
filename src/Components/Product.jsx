import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      onClick={handleProductClick}
      style={{ cursor: "pointer", height: "100%" }}
    >
      <div className="card-img-container">
        <Card.Img variant="top" src={product.thumbnail} className="card-img" />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch({ type: "Add", product: product });
          }}
          className="mt-auto"
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
