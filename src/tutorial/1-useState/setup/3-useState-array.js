import React from 'react';
import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  function handleRemove(id) {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return (
    <>
      <div className='container'>
        <h2>useState array example</h2>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <button onClick={() => removeItem(id)}>remove item</button>
              <button onClick={() => handleRemove(id)}>remove function</button>
            </div>
          )
        })}
        {/* 
      Without the arrow function () => setPeople([])
      the function for the onClick will be invoked right away (on page render)
      to invoke the function ONLY when the button is clicked
      USE ARROW FUNCTION, or a custom function like handleClick and use setPeople there
      <button className='btn' onClick={setPeople([])}>clear items</button> */}
        <button className='btn' onClick={() => setPeople([])}>clear items</button>
      </div>
    </>
  );
};

export default UseStateArray;
