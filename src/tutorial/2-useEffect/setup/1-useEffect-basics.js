import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // REMEMBER: can NOT! call React Hook "useEffect" conditionally.
  // if (value > 0) {
  //   useEffect(() => {
  //     console.log('call useEffect');
  //     document.title = `New Messages(${value})`;
  //   });
  // }

  // useEffect with second param as empty Array [] will only run ONCE on initial render
  // useEffect(() => {
  //  some code
  // }, []);

  useEffect(() => {
    console.log('call useEffect');
    // can only place conditionals WITHIN useEffect callback function.
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("useEffect on first render with empty array as dependency")
  }, []);

  console.log("render component");

  return (
    <div className='container'>
      <h2>useEffect Basics</h2>
      <h1>{value}</h1>
      <p>Every time you click this button, useEffect gets triggered,
        because it runs after every re-render</p>
      <p>Remember to place conditionals only WITHIN Hooks callback functions</p>
      <p>useEffect(() arrowfunction some code , []) with second param as empty Array [] will only run ONCE on initial render</p>
      <p>Without Dependency Array, useEffect will run every time the component gets re-rendered</p>
      <p>If the Dependency Array has a value, it will run every time that dependecy will change</p>
      <button className='btn' onClick={() => setValue(value + 1)}>click me</button>
    </div>
  );
};

export default UseEffectBasics;
