import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            setIsLoading(false);
            setIsError(true);
            throw new Error(response.statusText);
          }
        })
        .then((user) => {
          const { login } = user;
          setUser(login);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, 2000);

  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">
        <h2>Error...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>multiple returns</h2>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
