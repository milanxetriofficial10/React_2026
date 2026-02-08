import React from 'react';
import { useState } from 'react';
import UserContext from './components/Coding_Learning/UserContext';
import MainContext from './components/Programmer/MainContext';





function App(){

  const [user, setUser] = useState("Milan Programmer");

  return(
    <div>
      <UserContext.Provider value={user}>
        <MainContext />
      </UserContext.Provider>
    
    </div>
    
  )
}
export default App;