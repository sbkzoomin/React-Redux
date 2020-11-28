// Action Types

export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";

//Actions

export const sayIncreaseQty = () => {
  return {
    type: INCREASE_QTY,
    payload: "Product Quantity Increases"
  };
};

export const sayDecreaseQty = () => {
  return {
    type: DECREASE_QTY,
    payload: "Product Quantity Decreases"
  };
};

//Intial State

let initialState = {
  SNO: "AABB1122",
  IMAGE:
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604343702000",
  NAME: "Iphone 12",
  PRICE: 125000,
  QTY: 1
};

//Reducer

export let productItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_QTY:
      return {
        ...state,
        QTY: state.QTY > -1 ? state.QTY + 1 : 0
      };
    case DECREASE_QTY:
      return {
        ...state,
        QTY: state.QTY > 0 ? state.QTY - 1 : 0
      };
    default:
      return state;
  }
};
