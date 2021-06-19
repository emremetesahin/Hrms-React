import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state, //Ön planda gözükmesi için referansın değişmesi gerekir. referansı değiştiriyoruz
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
          //bu class içerisindeki cartItems ın içerisine önceden olan sepeti getirir ve yeni girilen ürünüde ekler 2 değer olarak
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.products.id === payload.id),
      };
    default:
      return state;
  }
}
