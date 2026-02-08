
import React, {useState} from 'react';

function LoginSample(){

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [isLogin, setIsLogin] = useState(false);

    const handLogin = () => {

        if(username === "admin" && password === "1234"){
            setIsLogin(true);

        } else{
            alert("Invalid username or password");
        }
    }
    return(

        <div style={{width: "300px", margin: "100px auto"}}>

            {isLogin ? (<h1
                h1>Welcome Admin </h1>
            ) : (

        <>
            <h2>Login Form</h2>
            <input type="username" placeholader="Enter Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />

            <br /> <br />
            
            <input type="password" placeholader="Enter Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />

            <br /> <br />
            
            <button onClick={handLogin}>Login</button>
            
        </>
            )}
        </div>
    )
}

export default LoginSample;