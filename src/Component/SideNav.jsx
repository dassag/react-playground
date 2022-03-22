import React, { useState } from 'react';
const SideNav = (props) => {
  const [counter, setCounter] = useState(0);

  const handler = () => {
    console.log('before', counter);

    setCounter((current) => {
      return current + 1;
    });

    console.log('after', counter);
  };

  return (
    <>
      <h3>SideNav Component: {counter}</h3>
      {props.render('Sagar')}
      <button className='btn btn-primary' onClick={handler}>
        Increment
      </button>
    </>
  );
};

export default SideNav;
