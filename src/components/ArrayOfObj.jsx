
// array of objects and rendering them in a list
import React from 'react';
import Item from './List.jsx';

 function ArrayOfObj(){


    const items = [
        {
            name: "Banana",
            color: "Yellow",
            price: 5,
            emoji: "🍌"
        },

        {
            name: "Apple",
            color: "Red",
            price: 10,
            emoji: "🍎"
        },

        {
            name: "Orange",
            color: "Orange",
            price: 8,
            emoji: "🍊"
        },

        {
            name: "Mango",
            color: "Yellow",
            price: 15,
            emoji: "🥭"
        },

        {
            name: "Pineapple",
            color: "Brown",
            price: 12,
            emoji: "🍍"
        }
    ];

    return(
        <div>
            <ul>
                {items.map((item)=> (
                   <Item key={item.name} name={item.name} emoji={item.emoji} price={item.price} color={item.color} />
                    
                ))}
            </ul>

        </div>
    )
 }
 export default ArrayOfObj; 