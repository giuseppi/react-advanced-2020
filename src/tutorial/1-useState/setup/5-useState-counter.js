import React, { useState } from 'react';

const UseStateCounter = () => {
  const [ value, setValue ] = useState(0);
  const [ complexValue, setcomplexValue ] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => { // second parameter is in 2000ms, so 2s
      // setValue(value + 1);
      setcomplexValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <React.Fragment>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{ value }</h1>
        <button className='btn' onClick={() => setValue(value - 1)}> - </button>
        <button className='btn' onClick={() => reset()}> reset </button>
        <button className='btn' onClick={() => setValue(value + 1)}> + </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{ complexValue }</h1>
        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;