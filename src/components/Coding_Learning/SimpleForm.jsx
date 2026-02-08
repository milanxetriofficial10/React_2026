
import React, { useState } from 'react';

function SimpleForm(){

    const [name, setName] = useState("");
    
    function handleChange(e){
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        alert(`Hello, ${name}! Welcome to React Learning!`);
    }
    return(
        <div>

            <h1>Simple Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='enter your name' value={name} onChange={handleChange} />

                <button type='submit'>Submit</button>
            </form>



        </div>
    )
}

export default SimpleForm;