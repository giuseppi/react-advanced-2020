import React, { useState } from 'react'; // If you do not import { useState }, you must call it
import { data } from '../../../data';    // by using React.useState()

const UseStateArray = () => {
  const [ people, setPeople ] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id); // filters the array and only returns
    setPeople(newPeople);                                        // ids NOT matching the id passed in
  }

  return (
    <React.Fragment>
      {
        people.map((person) => {
          const { id, name } = person;
          return <div key={ id } className='item'>
            <h4>{ name }</h4>
            <button className='btn' onClick={() => removeItem(id)}>remove</button>
            </div>
        })
      }
      <button className='btn' onClick={() => setPeople([])}>clear items</button>
    </React.Fragment>
  );
};

export default UseStateArray;