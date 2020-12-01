import React from 'react';
import {connect} from 'react-redux';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors'
const CartDropDown = ({cartItem})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItem.map(item => <CartItem key={item.id} item={item}/>)
        }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStatetoProps = state => ({cartItem: selectCartItems(state)})
export default connect(mapStatetoProps)(CartDropDown);
