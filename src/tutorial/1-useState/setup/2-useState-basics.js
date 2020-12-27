import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('Hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState("Random title");

  const handleclick = () => {
    if (text == "Random title"){
      setText("hello world");
    }
    else {
      setText("Random title");
    }
    
  }
  return (<React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleclick}>Change Text</button>
  </React.Fragment>);
};

export default UseStateBasics;
