

import React from 'react';
import { useEffect } from 'react';

function useEffects(){
    useEffect(() =>{
        console.log("Component Mounted");
    })
    return(

        <div>

            <h1>Hello React Project</h1>


        </div>
    )
}
export default useEffects;   