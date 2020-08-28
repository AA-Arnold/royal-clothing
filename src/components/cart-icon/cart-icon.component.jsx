import React from 'react';
import { connect } from 'react-redux'
import { toggleChartHidden } from '../../redux/cart/cart.action'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = ({ toggleChartHidden }) => (
    <div className="cart-icon" onClick={toggleChartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        toggleChartHidden: () => dispatch(toggleChartHidden())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon)