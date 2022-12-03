import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const response = await fetch(url);
    const users = await response.json();

    // this WILL create an INFINITE LOOP !, without an empty dependency array:
    // setUsers(users)
    // because the setUsers will cause a re-render and infinitely fetch and set the users

    setUsers(users)

    console.log(users);
  }

  // useEffect can NOT be async, it can NOT return a Promise
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h2>fetch data</h2>
      <p>IMPORTANT: useEffect can NOT be async, it can NOT return a Promise</p>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectFetchData;
