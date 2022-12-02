import React, { Fragment } from 'react';

const ErrorExample = () => {
  let title = 'Some Title'

  const handleClick = () => {
    title = "hello world"
    console.log(title);
  }

  return (
    <React.Fragment>
      <div className='container'>
        <h2>useState error example</h2>
        <h2>{title}</h2>
        <button type="button" className='btn' onClick={handleClick}>change title</button>
      </div>
    </React.Fragment>
  );
};

export default ErrorExample;
