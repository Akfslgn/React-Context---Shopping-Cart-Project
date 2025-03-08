import React, { useContext } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { CartContext } from "../Features/ContextProvider";
import CartProduct from "./CartProduct";
import { totalItem, totalPrice } from "../Features/CartReducer";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ show, handleClose }) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {totalItem(cart) === 0 ? (
          <h5 className="text-center">Cart is Empty</h5>
        ) : (
          <>
            {cart.map((p) => (
              <CartProduct product={p} key={p.id} />
            ))}
            <div className="mt-3">
              <h5>Total Items: {totalItem(cart)}</h5>
              <h5>Total Price: ${totalPrice(cart)}</h5>
              <Button
                variant="warning"
                onClick={() => {
                  handleClose();
                  navigate("/checkout");
                }}
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartDrawer;
