import React, { useState } from "react";
import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';


const ProductItem = (props) => { 
    // const title = props.title;
    const [title, setTitle] = useState(props.title)
    
    const clickHandler = () =>{
        
        setTitle("PopCorn");
    }
    return (
        <Card className='product-item'>
            <ProductDate date={props.date}/>
            <div className="product_item_description">
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to cart</button>
        </Card>
    );
}
export default ProductItem;