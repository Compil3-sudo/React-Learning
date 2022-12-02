import React, { useState } from 'react';
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [title, setTitle] = useState("Hello World");

  const handleClick = () => {
    if (title === "Hello World") {
      setTitle("New Title with useState");
    } else {
      setTitle("Hello World");
    }
  }

  return (
    <React.Fragment>
      <div className='container'>
        <h2>useState basic example</h2>
        <h2>{title}</h2>
        <button type="button" className='btn' onClick={handleClick}>change title</button>
      </div>
    </React.Fragment>
  );
};

export default UseStateBasics;
