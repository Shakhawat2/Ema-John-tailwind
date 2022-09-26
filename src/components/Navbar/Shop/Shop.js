import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Shop = (props) => {
    const { product, handleAddToCart } = props;
    const { id, img, name, price, seller, ratings } = product;
    // console.log(props.product);
    return (
        <div className=''>
            <div className="card  bg-base-100 shadow-lg h-[500px]">
                <figure><img src={img ? img : "No image Found"} alt="No imaga found" className='h-[250px] w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price : {price}</p>
                    <p>Seller : {seller}</p>
                    <div className="card-actions justify-start">
                        <div onClick={() => handleAddToCart(product)} className="badge badge-outline btn btn-outline-primary"><p className='pr-3'>Add To Cart</p> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></div>
                        <div className="badge badge-outline btn btn-outline-primary">Details</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
