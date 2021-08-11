import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  // set width variable is window width
  const [width,setWidth] = useState(window.innerWidth);

  // check window width
  const checkSize = () => {
    setWidth(window.innerWidth);
  }

  useEffect (() => {
    window.addEventListener('resize',checkSize);
    console.log('addEventListener');
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize',checkSize);
    }
  });

  return <>
    <h2>useEffect cleanup</h2>
    <h3>Window width</h3>
    <h1>{width} PX</h1>
  </>
};

export default UseEffectCleanup;
