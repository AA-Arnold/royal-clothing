import React from 'react';

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss';

export const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>Go to check out</CustomButton>
    </div>
)

