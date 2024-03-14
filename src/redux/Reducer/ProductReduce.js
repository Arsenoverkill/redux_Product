import { ADD_BASKET, ADD_PRODUCT, DEL_BASKET } from "../actionTypes";

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
    case DEL_BASKET:{
      let delBasket = state.order.filter((el)=>el.id !== action.payload)
      localStorage.setItem('order',JSON.stringify(delBasket))
      return{...state,order: delBasket}
    }
    default: {
      return state;
    }
  }
};
