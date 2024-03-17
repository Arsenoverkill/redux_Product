import {
  ADD_BASKET,
  ADD_PRODUCT,
  DEL_BASKET,
  EDIT_PRODUCT,
  GET_PRODUCT,
  SAVE_PRODUCT,
} from "../actionTypes";

const initiolState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  order: JSON.parse(localStorage.getItem("order")) || [],
  edit: [],
};
export const readProduct = (state = initiolState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return { ...state, product: [...state.product, action.payload] };
    }
    case ADD_BASKET: {
      return { ...state, order: [...state.order, action.payload] };
    }
    case DEL_BASKET: {
      let delBasket = state.order.filter((el) => el.id !== action.payload);
      localStorage.setItem("order", JSON.stringify(delBasket));
      return { ...state, order: delBasket };
    }
    case GET_PRODUCT: {
      let delProduct = state.product.filter((el) => el.id !== action.payload);
      localStorage.setItem("product", JSON.stringify(delProduct));
      return { ...state, product: delProduct };
    }
    case EDIT_PRODUCT: {
      return { ...state, edit: action.payload };
    }
    case SAVE_PRODUCT: {
      let saveProduct = state.product.map((el) => {
        if (el.id == action.payload.id) {
          return (el = action.payload);
        } else if (el.id !== action.payload.id) {
          return el;
        }
      });
      localStorage.setItem("product", JSON.stringify(saveProduct));
      return { ...state, product: saveProduct };
    }
    default: {
      return state;
    }
  }
};
