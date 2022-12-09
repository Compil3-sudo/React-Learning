import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  let navigate = useNavigate();

  function reset() {
    const currentPath = window.location.href;

    navigate("/");

    if (currentPath.includes("chapter11")) {
      window.location.reload();
    }
  }

  return (
    <div className='container'>
      <h1>Error Page</h1>
      <button className='btn' onClick={reset}>Back Home</button>
    </div>
  );
};

export default Error;
