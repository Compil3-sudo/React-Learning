import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <div className="container">
      <h2>short circuit</h2>
      <p>This can be used to show/hide components</p>
      {/* {if(){console.log('This will throw and error')}} */}
      <h1>{firstValue}</h1>
      <h1>Value: {secondValue}</h1>

      <h1>{text || 'text was false'}</h1>
      {text && <h1>text was false, so this will not display</h1>}
      {!text && <h1>text was false but negated, so true</h1>}

      <button className='btn'>toggle error</button>
    </div>
  );
};

export default ShortCircuit;
