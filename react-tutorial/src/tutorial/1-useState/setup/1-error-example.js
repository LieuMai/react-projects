import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const handleClick = ({title}) => {
    title = 'hello mei';
    console.log(title);
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;

// Change title error example