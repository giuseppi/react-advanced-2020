import React, { useState } from 'react';

const UseStateObject = () => {
  /*
  const [ person, setPerson ] = useState({
    name: 'peter',
    age: 24,
    message: 'hello there!'
  });

const changeMessage = () => {
    setPerson({...person, message : 'hello world'}); // utilize spread operator (...) to keep other values
  };
*/

  // We can choose to create objects (like above), or create multiple useStates like below
  const [ name, setName ] = useState('peter');
  const [ age, setAge ] = useState('24');
  const [ message, setMessage ] = useState('random message');

  const changeMessage = () => {
    setMessage('hello world');
  };

  return (
    <React.Fragment>
      <h3>{ name }</h3>
      <h3>{ age }</h3>
      <h3>{ message }</h3>
      <button className='btn' onClick={() => changeMessage()}>
        change message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
