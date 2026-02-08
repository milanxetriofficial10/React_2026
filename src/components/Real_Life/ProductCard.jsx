
import React from 'react';

function ProductCard ({name, price, description}){
    return(
        <div style={{margin: "10px", padding: "15px", border: "1px solid #ccc"}}>
            <h2>Name: {name}</h2>
            <h2>Price: ${price}</h2>
            <p>Description: {description}</p>


            <button>Add Card</button>

        </div>
    )
}

export default ProductCard;