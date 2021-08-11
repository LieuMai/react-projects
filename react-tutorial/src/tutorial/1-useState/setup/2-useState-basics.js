import React, { useState } from 'react';

const UseStateBasics = () => {
  // set variable
  const [title,setTitle] = useState('random title');

  const handleClick = () => {
    if(title === 'random title') {
      setTitle('i am mei');
    } else {
      setTitle('random title');
    }    
  }

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button 
        type='button' 
        className='btn' 
        onClick={handleClick}
      >
        Change Title
      </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
