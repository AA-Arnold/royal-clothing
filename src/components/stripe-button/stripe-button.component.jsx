import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishablekey = 'pk_test_51HRn4VDYWd0FM6rvEsNdQYzj23VECTWzpUbnwTsvWXdN0555mDz4brpJ1L3yIsFlAAK3GKKvQBE98VDIkABTNpRc00XNkjMP0e'


    const onToken = token => {
        console.log(token)
        alert('payment successful')
    }
    // 5555555555554444
    return (
        <StripeCheckout
            label='Pay Now'
            name='royal-clothing'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton