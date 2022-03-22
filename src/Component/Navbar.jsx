import React from 'react';

const Navbar = (props) => {
  const navBarHandler = () => {
    console.log('Navbar called');
    props.handler(2022);
  };
  return (
    <>
      <h3 className='css-test-class' title='Navbar'>
        Navbar Component {props.children}
      </h3>
      <button className='btn btn-primary' onClick={navBarHandler}>
        Click Here
      </button>
    </>
  );
};

export default Navbar;
