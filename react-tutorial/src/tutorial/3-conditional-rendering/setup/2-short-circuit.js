import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState('hello world');
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [isError,setIsError] = useState(false);

  return <>
    {/*-----STARTING WITH SYNTAX-----*/}
    
      {/*<h1>case 0.1 {firstValue}</h1>
      <h1>case 0.2 {secondValue}</h1>*/}

      <h2>{text || 'case 1.1'}</h2> {/*if text:true then show text*/}
      {/*{text || <h2>case 1.2</h2>}*/} {/* else show "case"*/}

      {/*<h2>{text && 'case 2.1'}</h2>*/} {/*if text:true then show "case"*/}
      {text && <h2>case 2.2</h2>} {/*else not show anything*/}
      {!text && <h2>case 2.3</h2>}

    {/*-----NOW MAKE A BUTTON-----*/}

      {/* button set isError state to opposite */}
        <button className="btn" onClick={()=> setIsError(!isError)}>toggle error</button>

      {/* if isError true -> show Error text */}
        {isError && <h1>Error...</h1>} 

      {/* if else */}
        {isError ? <p>there is an error</p> : <div>
          <h2>my shop</h2>
        </div>}
      
  </>
};

export default ShortCircuit;
