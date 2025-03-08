export const totalItem = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};

export const totalPrice = (cart) => {
  return cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
};

const initialState = {
  cart: [],
};

const CartReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "Add":
      const Index = state.findIndex((p) => p.id === action.product.id);
      if (Index === -1) {
        newState = [...state, { ...action.product, quantity: 1 }];
      } else {
        state[Index].quantity += 1;
        newState = [...state];
      }
      break;

    case "Remove":
      const IndexR = state.findIndex((p) => p.id === action.id);
      state.splice(IndexR, 1);
      newState = [...state];
      break;

    case "Increase":
      const IndexI = state.findIndex((p) => p.id === action.id);
      state[IndexI].quantity += 1;
      newState = [...state];
      break;

    case "Decrease":
      const IndexD = state.findIndex((p) => p.id === action.id);
      state[IndexD].quantity -= 1;
      newState = [...state];
      break;

    default:
      newState = state;
  }
  localStorage.setItem("cart", JSON.stringify(newState));
  return newState;
};

export default CartReducer;
