import React, { useState } from 'react';

const UseStateCounter = () => {

  // set value = 0
  const [value, setValue] = useState(0);

  // reset the value = 0
  const reset = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    return (
      console.log('meimei cute!')
    )
  }

  const complexDecrease = () => {
  // delay decrease by setTimeout
    setTimeout(() => {
      // sync => click many times, but only decrease 1 index
      // setValue(value - 1)

      // async
      setValue((prevValue) => {
        return prevValue - 1;
      })

    }, 5000) // set 2s
  }

  return <>
    <section style={{ margin: '4rem 0' }}>
      <h2>regular counter</h2>
      <h1>{value}</h1> 

      {/*decrese */}
      <button className="btn" onClick={() => {setValue(value - 1)}}>
        decrease
      </button>  

      {/*reset*/}
      <button className="btn" onClick={reset}>
        reset
      </button>

      {/*increse*/}
      <button className="btn" onClick={() => {setValue(value + 1)}}>
        increase
      </button>
    </section>
    <hr></hr>

    {/*more complex counter: delay*/}
    <section style={{ margin: '4rem 0' }}>
      <h2>complex counter</h2>
      <h1>{value}</h1> 

      {/*decrese */}
      <button className="btn" 
        onClick={complexDecrease}>
        decrease later
      </button>  

      {/*reset*/}
      <button className="btn"
        onClick={reset}>
        reset
      </button>

      {/*increse*/}
      <button className="btn"
        onClick={complexIncrease}>
        increase later
      </button>
    </section>
  </>
}

export default UseStateCounter
