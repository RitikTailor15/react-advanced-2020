import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setperson]= useState(
    { name:'Peter',
      age:24,
      message:'Random message'
    });
  
    const changeMessage = () =>{
      const pe = {...person, message:'title'}
  
      // setperson({...person, message:'Title Changed'})
      setperson(pe)
    }
  return <>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.message}</h3>
  <button className='btn' onClick={() => changeMessage()}>Change message</button>
  </>;
};

export default UseStateObject;
