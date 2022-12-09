import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
import reducer from './reducer'

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world'
}

const Index = () => {
  const [name, setName] = useState('');
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);

  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      // setShowModal(true);
      // setPeople([...people], { id: new Date().getTime().toString(), name });
      // setName('');

      const newItem = { id: new Date().getTime().toString(), name };

      // ! convention to use payload
      dispatch({ type: 'ADD_ITEM', payload: newItem }) // need to use type:'UPPERCASE_UPPERCASE'
      setName('');
    } else {
      // setShowModal(true);
      dispatch({ type: 'NO_VALUE' })
    }
  }

  function closeModal() {
    dispatch({ type: 'CLOSE_MODAL' });
  }

  return (
    <div className="container">
      <h2>useReducer</h2>
      <p><a href="https://reactjs.org/docs/hooks-reference.html#usereducer">docs</a></p>
      {/* {showModal && <Modal />} */}
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit">add</button>
      </form>
      {/* {people.map((person) => { */}
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
