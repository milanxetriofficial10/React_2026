
import React, { useContext } from 'react';
import UserContext from '../Coding_Learning/UserContext';

function MainContext(){

    const user = useContext(UserContext);
    return(
        <div>
            <h1>Welcome! {user} </h1>

        </div>
    )
}

export default MainContext;
