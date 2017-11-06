import { FETCH_CART, UPDATE_ITEM_CART } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_CART: 
      // console.log('reducer cart:', action.payload.data);
      // return _.mapKeys(action.payload.data, 'p_id');
      return {...action.payload};

    case UPDATE_ITEM_CART:
      const updatedCart = state.data.productsInCart.map(item => {
        if (item.p_id === action.payload.id) {
          item.p_selected_size.code = action.payload.s;
          item.p_quantity = action.payload.q;
        }
        return item;
      } )
      return {
        ...state,
        data: {
          ...state.data,
          productsInCart: updatedCart
        },
      };

   default:
      return state;
  }
}