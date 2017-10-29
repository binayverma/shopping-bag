import axios from 'axios';

export const FETCH_CART = 'fetch_cart';

const ROOT_URL = '../../cart.json';

export function fetchCart() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_CART,
    payload: request
  };
}