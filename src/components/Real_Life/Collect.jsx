import React from 'react';
import ProductCard from './ProductCard';

function Collect (){
    return(
        <div>
            <h1>My Product Collection</h1>
            <ProductCard 
            name="Laptop"
            price={50000}
            description="A high-performance laptop for work and gaming." />

            <ProductCard 
            name="Smartphone"
            price={20000}
            description="A sleek smartphone with a powerful camera." />

            <ProductCard 
            name="Headphones"
            price={5000}
            description="Noise-cancelling headphones for immersive sound." />

        </div>
    )

}
export default Collect;