import React from 'react';
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { toggleChartHidden } from '../../redux/cart/cart.action'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = ({ toggleChartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleChartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        toggleChartHidden: () => dispatch(toggleChartHidden())
    }
}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)