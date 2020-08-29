import React from 'react';
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import { addItem } from '../../redux/cart/cart.action'

import './collection-item.style.scss'

const CollectionItem = ({ item, addItem }) => {
    const { price, name, imageUrl } = item
    return (
        <React.Fragment>
            <div className='collection-item'>
                <div style={{ backgroundImage: `url(${imageUrl})` }} className='image' />
                <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
                <CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem)
