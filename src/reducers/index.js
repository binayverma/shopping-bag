import { combineReducers } from 'redux';
import CartReducer from './cart.reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  cart: CartReducer,
  form: formReducer
});

export default rootReducer;

