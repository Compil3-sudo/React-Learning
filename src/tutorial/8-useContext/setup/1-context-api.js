import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// 2 components - Provider (Distributor), Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <div className="container">
        <h3>Context API / useContext</h3>
        <h4>Create a Context with React.createContext()</h4>
        <p>With this context you can avoid prop drilling
          and pass objects as props to different components.</p>
        <p><a href="https://reactjs.org/docs/hooks-reference.html#usecontext">docs</a></p>
        <List />
      </div>
    </PersonContext.Provider>
  );
};

const List = () => {
  // need to destructure the object OR use . to access prop
  const mainData = useContext(PersonContext);
  console.log(mainData)

  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
