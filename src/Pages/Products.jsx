import React, { useState } from "react";
import Data from "../../Data.json";
import Product from "../Components/Product";
import { Container, Row, Col } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState(Data.products);
  return (
    <Container className="mt-5">
      <Row className="g-4">
        {products.map((p) => (
          <Col key={p.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
