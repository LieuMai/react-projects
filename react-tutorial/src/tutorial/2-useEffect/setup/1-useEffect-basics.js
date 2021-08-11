import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value,setValue] = useState(0);

  useEffect(() => {
    console.log('call useEffect 1')
    if(value > 0) {
      document.title = `My counter(${value})`; 
      // change title of website
    }
  }, [value]); // array of dependencies/second parameter
  // empty array: make useEffect run on initial render
  // the title not change when we click the button


  useEffect(() => {
    console.log('call useEffect 2')
      console.log('pic ka bu');
  }, []);
  // empty array: make useEffect run on initial render

  console.log('render component');

  return (<> 
      <h2>useEffect Basics</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={()=>setValue(value + 1)}>click me -_-</button>
    </>
  )};

export default UseEffectBasics;
