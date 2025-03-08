import React, { useContext, useState } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import CartDrawer from "./CartDrawer";

const CustomNavbar = () => {
  const { cart } = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bolder">
            Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="fs-5">
                Home
              </Nav.Link>
              <Button
                variant="outline-light"
                onClick={handleShow}
                className="fs-5"
              >
                <BsCart /> {cart.length}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CartDrawer show={show} handleClose={handleClose} />
    </>
  );
};

export default CustomNavbar;
