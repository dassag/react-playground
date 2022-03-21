import React from 'react';

const Container = (props) => {
  const tooltip = () => {
    return 'tooltip from function';
  };
  const colors = ['Blue', 'Green', 'Red'];

  const book = {
    title: 'Learning React',
    pages: 625,
  };
  const handleClick = (event) => {
    console.log('Button clicked', event);
  };
  //passing my argument
  const handleClickWithArguments = (arg, event) => {
    console.log('Button clicked', arg, event);
  };

  return (
    <>
      <h3
        className='css-x-class'
        //title={'Tooltip from title attribute!' + ' ' + 1458}
        title={tooltip()}
      >
        <ul>
          {colors.map((c) => (
            <li>{c}</li>
          ))}
        </ul>
      </h3>
      {/* display object using JSON api */}
      <pre>{JSON.stringify(book, null, 2)}</pre>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={(event) => handleClickWithArguments(24, event)}>
        Click Here
      </button>
      <button onClick={() => props.handler(2022)}>Click Props</button>
      <p>
        {props.message} {props.year}
      </p>
    </>
  );
};

export default Container;
