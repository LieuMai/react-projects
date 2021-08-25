import React, { useState } from 'react';
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people,setPeople] = useState(data);

  // Create a remove function here
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    })
  }

  return <section>
    <h3>Prop Drilling</h3>
    {/*//then pass it down here*/}
    <List people={people} removePerson={removePerson} /> 
  </section>;
};

const List = ({people,removePerson}) => { // and then here
  return <>
    {people.map((person) => {
      return (
        <SinglePerson key={person.id} {...person} removePerson={removePerson} /> // and here
      )
    })}
  </>
}

const SinglePerson = ({id,name,removePerson}) => { // here too
  return (
    <div className="item">
      <h4>{name}</h4>
      <button className="btn" 
        // finally here => prop drilling~~
        onClick={()=>removePerson(id)}>remove
      </button>
    </div>
  )
}

export default PropDrilling;
