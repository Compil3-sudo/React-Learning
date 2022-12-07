import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {

  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });

  return (
    // <div className="modal">
    <div style={{
      position: 'absolute',
      top: '2rem',
      background: '#fff',
      display: 'inline-block',
      padding: '0.25rem 1rem',
      textTransform: 'capitalize'
    }}>
      <p style={{
        marginBottom: 0,
        color: 'red'
      }}>
        {modalContent}
      </p>
    </div >
  );
};

export default Modal;
