import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  function checkSize() {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    console.log('useEffect triggered');
    window.addEventListener('resize', checkSize);

    // cleanup function is needed for components that appear and disappear
    // otherwise use empty array as dependency
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  });

  console.log('render');

  return (
    <div className='container'>
      <h2>useEffect cleanup</h2>
      <h1>window</h1>
      <h2>{size} PX</h2>
      <p>cleanup function is needed for components that appear and disappear
        otherwise use empty array as dependency</p>
    </div>
  );
};

export default UseEffectCleanup;
