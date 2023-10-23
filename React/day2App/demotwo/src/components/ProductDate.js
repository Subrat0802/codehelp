import React from "react";
import './ProductDate.css';

const ProductDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="product-date">
            <div className="product_date_month">{month}</div>
            <div className="product_date_year">{year}</div>
            <div className="product_date_day">{day}</div>
        </div>
    );
};

export default ProductDate;