import React, { useState } from "react";


function greet() {
  let first_name = prompt("Enter your first name")
  let last_name = prompt("Enter your last name")

  return `Hey ${first_name} ${last_name}`
}

function App() {

  // Problem with this : when prompt is called, the page gets rerendered , hence creates an infinite loop.

  console.log(1)
  // greeting = greet()


  const element1 = {
    type: 'h1',
    props: {
      // className: 'greeting',
      children: 'Hello, world!'
    }
  };

  const element2 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );

  return (
    <>
      <h1>Test env</h1>
      {/* <section>{greet()}</section> */}

      {/* {element1} */}
      {/* ^ causes error */}

      {element2}
    </>
  );
}

export default App;
