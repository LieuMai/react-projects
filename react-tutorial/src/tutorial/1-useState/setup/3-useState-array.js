import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  // set an array of people
  // instead of import react {useState} we can write this:
  const [people, setPeople] = React.useState(data);
  
  // function remove a person in array by filter
  // method 1
    // const removeItem = (id) => {
    //   let newPeople = people.filter((person) => person.id !== id)
    //   setPeople(newPeople);
    // }
  // method 2
  const removeItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldpeople.filter((person) => person.id !== id)
      return newPeople;
    });
  }


  return (
    <>
    {
      people.map((person) => {
        const { id,name } = person;

        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              clear this item
            </button>
          </div>
        );
      })
    }

    // this button will set array empty
    <button className="btn" onClick={() => {setPeople([])}}>
      clear items
    </button>
    </>
  );
};

export default UseStateArray;
