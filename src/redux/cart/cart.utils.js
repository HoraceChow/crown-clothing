export const addItemToCart = (cartItems,cartItemToAdd)=>{
    const exitingCartItem = cartItems.find(cartItem => cartItem.id===cartItemToAdd.id);
    if(exitingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {...cartItem,quntity : cartItem.quntity+1} : cartItem
        )
    }
    return [...cartItems,{...cartItemToAdd,quntity:1}];
}