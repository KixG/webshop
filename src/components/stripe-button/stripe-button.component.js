import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IYC5RFs2Xvh7HqDbkXSsnGYKqz67ye4mlYgiNoyERs4fZ1SWIwLeHRdqYhjkwiuPdHSexkwPMHKmyFnxywdzDPp00Ght7deMJ';

    const onToken = (token) => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='webshop name'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
