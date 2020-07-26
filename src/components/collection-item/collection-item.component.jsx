import React from 'react';

import './collection-item.style.scss'

const CollectionItem = ({ price, id, name, imageUrl }) => (
    <React.Fragment>
        <div className='collection-item'>
            <div style={{ backgroundImage: `url(${imageUrl})` }} className='image' />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    </React.Fragment>
)

export default CollectionItem
