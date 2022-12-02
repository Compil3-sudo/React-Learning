import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message'
  });

  // can also create more hooks for every value from the object
  // const [name,setName] = useState('peter')
  // const [age,setAge] = useState(24)
  // const [message,setMessage] = useState('random message')

  const changeMessage = () => {
    // use spread operator to get old values from object 
    // and only update one value
    setPerson({ ...person, message: 'hello world' });
    // setMessage('hello world')
  };

  return (
    <>
      <div className='container'>
        <h2>useState object example</h2>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h4>{person.message}</h4>
        <button className='btn' onClick={changeMessage}>
          change message
        </button>
      </div>
    </>
  );
};

export default UseStateObject;
