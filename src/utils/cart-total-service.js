const calcSubTotal = (cart) => {
  let subtotal = 0;
  cart.map(item => (
    subtotal +=item.p_quantity * item.p_price
  ))
  return parseFloat(subtotal).toFixed(2);
  
}

const calcDiscountTotal = (cart) => {
  const subtotal = calcSubTotal(cart);
  const itemCount = cart.length;
  if(itemCount == 3)
    return parseFloat(subtotal*0.5).toFixed(2);
  else if(itemCount >3 && itemCount <= 10)
    return parseFloat(subtotal*0.10).toFixed(2);
  else if(itemCount > 10)
    return parseFloat(subtotal*0.25).toFixed(2);
  else
    return parseFloat(0).toFixed(2);
  
}

const calcEstimatedTotal = (cart) => {
  return parseFloat(calcSubTotal(cart) - calcDiscountTotal(cart)).toFixed(2);
}

const priceUtils = (cart) => {
  return {
    subTotal: calcSubTotal(cart),
    discount: calcDiscountTotal(cart),
    estimatedTotal: calcEstimatedTotal(cart)
  }
}

export default priceUtils;