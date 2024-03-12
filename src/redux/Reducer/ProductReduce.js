import { ADD_BASKET, ADD_PRODUCT } from "../actionTypes";

const initiolState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  order: JSON.parse(localStorage.getItem("order")) || [],
};
export const readProduct = (state = initiolState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return { ...state, product: [...state.product, action.payload] };
    }
    case ADD_BASKET:{
      return {...state,order: [...state.order,action.payload]}
    }
    default: {
      return state;
    }
  }
};
