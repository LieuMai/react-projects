import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName,setFirstName] = useState('');
  const [email,setEmail] = useState('');
  const [people,setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // avoid refresh page

    if(firstName && email) { // valid input is enter or not
      
      const person = {  // create a person
        id: new Date().getTime().toString(), // cheat an id
        firstName, 
        email
      };
      // console.log(person);
      
      setPeople((people) => { // put person in a list
        return [...people,person]
      });
      
      // set input to empty
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }

  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input 
              type="text"
              id="firstName" 
              name="firstName" 
              value={firstName} // connect input to useState
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <button type="submit" onClick={handleSubmit}>Add Person</button>
        </form>
      </article>
      {people.map((person, index) => {
        const { id,firstName,email } = person;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        )
      })}
    </>
  )
};

export default ControlledInputs;
