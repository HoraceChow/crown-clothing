import React from 'react';
import {connect} from 'react-redux';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';

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

const mapStatetoProps = ({cart:{cartItem}}) => ({cartItem})
export default connect(mapStatetoProps)(CartDropDown);
