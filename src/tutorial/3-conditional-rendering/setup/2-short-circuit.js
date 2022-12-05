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

      <p>{text || 'text was false'}</p>
      {text && <p>text was false, so this will not display</p>}
      {!text && <p>text was false but negated, so true</p>}

      <button className='btn' onClick={() => setIsError(!isError)}>toggle error</button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </div>
  );
};

export default ShortCircuit;
