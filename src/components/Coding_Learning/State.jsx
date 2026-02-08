
import React, {useState} from 'react';

function State(){

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 5)}>Increase by 2</button>
        </div>  

    )
}
export default State;



/*
import React {useSate} from 'react';
function State(){
const [name, setName] = useState("");

return(
    <div></div>
        <h1>{name}</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>

    h1>{name}</h1>
)
}
 */