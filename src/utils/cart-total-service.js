const calcSubTotal = (cart) => {
  let subtotal = 0;
  cart.map(item => (
    subtotal +=item.p_quantity * item.p_price
  ))
  return subtotal;
  
}

const calcDiscountTotal = (cart) => {
  const subtotal = calcSubTotal(cart);
  const itemCount = cart.length;
  if(itemCount == 3)
    return subtotal*0.5;
  else if(itemCount >3 && itemCount <= 10)
    return subtotal*0.10;
  else if(itemCount > 10)
    return subtotal*0.25
  else
    return 0;
  
}

const calcEstimatedTotal = (cart) => {
  return calcSubTotal(cart) - calcDiscountTotal(cart);
}

const priceUtils = (cart) => {
  return {
    subTotal: calcSubTotal(cart),
    discount: calcDiscountTotal(cart),
    estimatedTotal: calcEstimatedTotal(cart)
  }
}

export default priceUtils;