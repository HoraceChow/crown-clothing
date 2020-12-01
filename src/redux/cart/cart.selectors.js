import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
);
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItem =>  cartItem.reduce((accum, item)=>accum+item.quantity,0)
);

export const SelectCartTotal = createSelector(
    [selectCartItems],
    cartItem =>  cartItem.reduce((accum, item)=>accum+item.quantity*item.price,0)
)