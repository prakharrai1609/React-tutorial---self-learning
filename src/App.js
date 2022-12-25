import React, { useEffect, useState } from "react";

function App() {

  const [time, interval] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    setInterval(() => {
      interval(new Date().toLocaleTimeString())
    }, 1000);
  })

  return (
    <>
      <h1>Test env</h1>
      <p>{time}</p>
    </>
  );
}

export default App;
