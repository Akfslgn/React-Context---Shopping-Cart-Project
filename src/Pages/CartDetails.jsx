import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import CartProduct from "../Components/CartProduct";
import { totalItem, totalPrice } from "../Features/CartReducer";
import { useNavigate } from "react-router-dom";

const CartDetails = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return totalItem(cart) === 0 ? (
    <h1 className="text-center">Cart is Empty</h1>
  ) : (
    <div className="container mt-3">
      <div className="d-flex flex-row">
        <div className="col-8">
          {cart.map((p) => (
            <CartProduct product={p} key={p.id}></CartProduct>
          ))}
        </div>
        <div className="ms-3 col-4 ">
          <div className="bg-primary d-flex justify-content-center flex-column p-3 text-white">
            <h5>Total Items: {totalItem(cart)}</h5>
            <h5>Total Price: ${totalPrice(cart)} </h5>
            <button
              className="btn btn-warning"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
