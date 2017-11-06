import axios from 'axios';

export const FETCH_CART = 'fetch_cart';
export const UPDATE_ITEM_CART = 'update_item_cart';

const ROOT_URL = '../../cart.json';

export function fetchCart() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_CART,
    payload: request
  };
}

export function updateShoppingBag(id, s, q) {
  return {
    type: UPDATE_ITEM_CART,
    payload: {
      id,
      s,
      q
    }
  };
}