
import React from 'react';

function Events(){

    function handleClick(){
        alert("Button Clicked!");
    }
    return(
        <div>

            <button onClick={handleClick}>Click Me</button>

        </div>
    )
}

export default Events;
