//With API Connection in react code here 

import React, {useState} from 'react';

function Login(){

    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [massage, setMassage] = useState ("");

    const handleLogin = async () => {
        setMassage("Login in progress...");
        try {
            const response = await fetch('https://your-api-endpoint.com/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password }),



            });
            const data = await response.json();

            if (response.ok){
                setMassage("Login successful!");
                localStorage.setItem("token", data.token);

            } else{
                setMassage("Login faileed");
            } 
        }catch (error){
                setMassage("An error occurred during login");
            }

    };


    return(
        <div>

            <h1>Login Here</h1>
            <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>

            <p>{massage}</p>

        </div>
    )
}

export default Login;