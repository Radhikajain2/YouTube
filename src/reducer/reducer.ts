/* eslint-disable prettier/prettier */

interface Product {
  url: string;
  p_id: string;
  p_name: string;
  cat_name: string;
  p_image: string;
}

const initialState: Product[] = [];

export const productReducer = (
  state = initialState,
  action: {type: string; payload: Product[]},
) => {
  if (action.type === 'add') {
    return [...state, ...action.payload];
  }
  return state;
};

export default productReducer;
