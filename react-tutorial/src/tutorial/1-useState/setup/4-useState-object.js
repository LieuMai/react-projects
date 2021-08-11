import React, { useState } from 'react';

const UseStateObject = () => {

  // display person as an object
  // with 3 attribute
  const [person, setPerson] = useState({
    name: 'mei',
    age: 21,
    message: 'random message',
  });

  // set variable to control attribute of object
  const [name,setName] = useState('mei');
  const [age,setAge] = useState(21);
  const [message,setMessage] = useState('random message');

  // change message attribute of person
  // setPerson( setMessage() )
  const changeMessage = () => {
    setPerson(
      // {...person, message: 'you are beautiful!'}
     setMessage('you are lovable!')
    )
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        Click me!
      </button>
    </>
  );
};

export default UseStateObject;
