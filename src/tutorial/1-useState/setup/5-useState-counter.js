import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  // const increaseCount = () => {
  //   const value1 = value + 1
  //   setValue(value1)
  // }

  const complexIncrease = () =>{
    setTimeout(() => {
      // setValue(value+1);
      setValue((pervState) => pervState+1) 
    },2000);
  }
  return <>
    <section style={{margin: '4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value-1)}>Decrease</button>
      <button className='btn' onClick={() => setValue(0)}>Reset</button>
      <button className='btn' onClick={() => setValue(value+1)}>Increase</button>
      {/* <button className='btn' onClick={() => increaseCount()}>Increase</button> */}
      <h2>Complex  Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => complexIncrease()}>Increase</button>
    </section>
  </>;
};

export default UseStateCounter;
