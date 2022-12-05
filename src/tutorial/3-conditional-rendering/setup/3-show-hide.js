import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <h2>show/hide</h2>
      <button className='btn' onClick={() => setShow(!show)}>show/hide</button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  function checkSize() {
    setSize(window.innerWidth);
  };

  // even though useEffect has an empty dependecy array,
  // this will create new eventListeners because Item is being toggled by the show/hide
  useEffect(() => {
    window.addEventListener('resize', checkSize)

    // this cleanup is needed to remove the event listener
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>size: {size} px</h2>
      <p>Important to add clean up function for Item,
        to avoid creating new event listeners with every toggle</p>
    </div>
  );
}

export default ShowHide;
