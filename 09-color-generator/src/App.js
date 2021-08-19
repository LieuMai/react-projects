import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [ color,setColor ] = useState('');
  const [ error,setError ] = useState(false);
  const [ list,setList ] = useState(new Values('#f15025').all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5)
      setList(colors)
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generate</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} placeholder="#f18b90" className={`${error ? 'error' : null}`}
            onChange={(e)=>{setColor(e.target.value)}}
          
          />
          <button type="submit" className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color,index) => {
          {/*console.log(color)*/}
          return (
            <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
          )
        })}
      </section>
    </>
  )
}

export default App