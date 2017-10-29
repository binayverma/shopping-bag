import _ from 'lodash';
import { FETCH_CART } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_CART: 
      // console.log('reducer cart:', action.payload.data);
      // return _.mapKeys(action.payload.data, 'p_id');
      return action.payload;
   default:
      return state;
  }
}