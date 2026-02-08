
import React from 'react';

import {useState} from 'react';

function Form(){

    const [FormData, SetFormData] = useState ({
        name: "",
        email: "",
        password: ""
    })

    function handleChange(e){
        SetFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })

    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(FormData);
    }


    return(
        <div>

            <h1>Register Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='enter your name' value={FormData.name} onChange={handleChange} />

                <br /> <br />   
                <input type="email" name='email' placeholder='enter your email' value={FormData.email} onChange={handleChange} />
                
                <br /> <br />
                <input type="password" name='password' placeholder='enter your password' value={FormData.password} onChange={handleChange} />

                <br /> <br />
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Form;