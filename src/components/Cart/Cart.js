import React from 'react';

const Cart = (props) => {
    return (
        <div className='card-body text-center w-auto whitespace-nowrap'>
            <span className="font-bold text-lg">Order Summary</span>
            {/* <span className="text-info">Subtotal: $999</span> */}
            <div className="card-actions">
                <button className="btn btn-primary btn-block whitespace-nowrap">View cart</button>
            </div>
        </div>
    );
};

export default Cart;