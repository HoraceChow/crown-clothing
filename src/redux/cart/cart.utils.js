export const addItemToCart = (cartItems,cartItemToAdd)=>{
    const exitingCartItem = cartItems.find(cartItem => cartItem.id===cartItemToAdd.id);
    if(exitingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {...cartItem,quantity : cartItem.quantity+1} : cartItem
        )
    }
    return [...cartItems,{...cartItemToAdd,quantity:1}];
}
export const removeItemFromCart = (cartItem, cartItemToRemove) => {
    const existingCartItem = cartItem.find(items=>items.id===cartItemToRemove.id)
    if(existingCartItem.quantity === 1){
        return cartItem.filter(items => items.id !== cartItemToRemove.id)
    }
    return cartItem.map(items => items.id===cartItemToRemove.id?{...items,quantity:items.quantity-1}:items);
}