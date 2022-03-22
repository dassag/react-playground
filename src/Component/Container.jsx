import React from 'react';

const provideStyle = () => {
  return {
    border: '2px solid red',
    height: '5rem',
    backgroundColor: '#ddd',
  };
};

const Container = (props) => {
  const divStyle = provideStyle();

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
      <div style={divStyle}>
        <pre>{JSON.stringify(book, null, 2)}</pre>
        <button className='btn btn-primary' onClick={handleClick}>
          Click Here
        </button>
      </div>

      <button
        className='btn btn-primary'
        onClick={(event) => handleClickWithArguments(24, event)}
      >
        Click Here
      </button>
      <button className='btn btn-primary' onClick={() => props.handler(2022)}>
        Click Props
      </button>
      <p>
        {props.message} {props.year}
      </p>
    </>
  );
};

export default Container;
