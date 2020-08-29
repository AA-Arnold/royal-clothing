import { cartActionTypes } from './cart.types'

export const toggleChartHidden = () => ({
    type: cartActionTypes.TOOGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})