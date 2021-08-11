import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users,setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url); // take data from url
    const users = await response.json(); //  return JSON objects
    setUsers(users);
    // console.log(users);
  }

  useEffect( () => {
    getUsers();
  }, []);

  return <>
    <h2>github users</h2>
    <ul className="users">
      {users.map((user) => {
        const { id,login,avatar_url,html_url } = user;
        return <li className="user" key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <h4>{login}</h4>
            <a href={html_url}>Profile</a>
          </div>
        </li>
      })}
    </ul>
  </>
};

export default UseEffectFetchData;
