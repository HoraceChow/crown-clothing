import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51HteBQAbvH5N7oXPpVYus1M5wV3dv0iskmWr1AVQjO1CgjpAwu45bbIzaC5B0uxXj6TItfPXgcP3auz0RjOmbR0400JYk4Dv08';
    const onToken = token => {alert('Payment Successful')}
    return(
        <StripeCheckout
            label= 'Pay Now'
            Name = 'Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;