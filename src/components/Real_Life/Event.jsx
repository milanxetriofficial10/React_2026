import React from 'react';

function Event(){
    function HandleNotice(){
        alert("Notice Clicked!");
    }
    return(

        <div>
            <h1>My Home</h1>
            <button onClick={HandleNotice}>Click Bell</button>

        </div>

    )
}
export default Event;