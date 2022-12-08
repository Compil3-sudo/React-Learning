import React, { useState } from 'react';
import { data } from "../../../data"

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter(person => person.id !== id);
    })
  }

  return (
    <div className="container">
      <section>
        <h2>prop drilling</h2>
        <h4>This means that you have to pass a function over more components</h4>
        <p>In this example the remove function has to be passed over to the list component
          and then to the single person</p>
        <List people={people} removePerson={removePerson} />
      </section>
    </div>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map(person => {
        return <SinglePerson key={person.id} {...person} removePerson={removePerson} />
      })}
    </>
  );
}

const SinglePerson = ({ id, name, removePerson }) => {
  return <div className="item">
    <h4>{name}</h4>
    <button onClick={() => removePerson(id)}>remove</button>
  </div>
}

export default PropDrilling;
