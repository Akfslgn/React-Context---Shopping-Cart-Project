import React, { useState } from "react";

const Checkout = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [payment, setPayment] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPayment((prevPayment) => ({
      ...prevPayment,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Address:", address);
    console.log("Payment:", payment);
    // Add any additional logic for handling the checkout process
  };

  return (
    <div className="container mt-5">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <h3>Address Information</h3>
        <div className="mb-3">
          <label htmlFor="street" className="form-label">
            Street
          </label>
          <input
            type="text"
            className="form-control"
            id="street"
            name="street"
            value={address.street}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={address.city}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            value={address.state}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="zip" className="form-label">
            ZIP Code
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            name="zip"
            value={address.zip}
            onChange={handleAddressChange}
            required
          />
        </div>
        <h3>Payment Information</h3>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">
            Card Number
          </label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            name="cardNumber"
            value={payment.cardNumber}
            onChange={handlePaymentChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expiryDate" className="form-label">
            Expiry Date
          </label>
          <input
            type="text"
            className="form-control"
            id="expiryDate"
            name="expiryDate"
            value={payment.expiryDate}
            onChange={handlePaymentChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cvv" className="form-label">
            CVV
          </label>
          <input
            type="text"
            className="form-control"
            id="cvv"
            name="cvv"
            value={payment.cvv}
            onChange={handlePaymentChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Checkout;
