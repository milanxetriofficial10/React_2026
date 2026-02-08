import React from 'react';



function Massage(){



    const name = "Milan Programmer";
    let x = 10;
    let y = 20;


    function fruit(){
        return "Mango";
    }
    function sum (){
        return x + y;
    }
    function operation(a, b, op){
        if(op === "+"){
            return a + b;
        }
        else if (op== "-"){
            return a - b;
        }
        else {
            return a * b;
        }
    }



    return (

        <div>
            <h1>{name}</h1>
            <h1>{x + y }</h1>
            <h1>{fruit()}</h1>
            <h1>{sum()}</h1>

            <h1>{operation(20,30,"-")}</h1>

        </div>
    )
}

export default Massage;