import React, { useState, useEffect } from "react";

export const UserComponent = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setError(false);
      })
      .catch((error) => setError(true));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h3>User List goes here.</h3>
      {error ? (
        <p>Something went wrong</p>
      ) : (
        <ul>
          {users.map((item, idx) => {
            return <li key={idx}>{item.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
