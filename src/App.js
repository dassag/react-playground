import React from 'react';
import Navbar from './Component/Navbar';
import Container from './Component/Container';
import SideNav from './Component/SideNav';

const App = (props) => {
  const appHandler = (args) => {
    console.log('App Handler called',args) ;
  }
  return (
    <>
      <h3>App Component</h3>
      <hr />
      {134 + 21 > 150 ?
        <Navbar handler={appHandler}>
          <h3>Hi there!</h3>
        <h3>How are you?</h3>
</Navbar> : null}
      <hr />
      <Container message='this is a props' year={2022} handler={appHandler}></Container>
      <SideNav></SideNav>
    </>
  );
};

//default export
export default App;
