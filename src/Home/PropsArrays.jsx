import React from 'react';
import PropsArrays from '../components/PropsArrays.jsx';


function PropsArrays2(){
  const seatNumbers = [12,45,67,89,34];

  const persion = {
    name: "Milan Programmer",
    age: 20,
    profession: "Full Stack Developer",
    seatNumbers: seatNumbers,
    address: "Kathmandu, Nepal",
    email: "milanprogrammer@gmail.com",
    phone: "9800000000"

  };


  return(
    <div className='App'>
    <PropsArrays  persion={persion}/>
    </div>
  )
}
export default PropsArrays2;