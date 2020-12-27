import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  // console.log(data)
  const [people, setpeople] = React.useState(data);
  
  const removeItmes = (id) =>{
    people.filter((person) => {
      let newpeople = people.filter((person) => person.id !== id );
      setpeople(newpeople); 
    })
  }
  return <>
  {
    people.map((person) =>{
      const {id, name} = person
      return <div key={id} className="item">
        <h4>{name}</h4>
        <button onClick={()=> removeItmes(id)}>Remove</button>
        </div>;
    })
  }
  <button className="btn" onClick={() => setpeople([])}>Clear Itmes</button>
  </>;
};

export default UseStateArray;
