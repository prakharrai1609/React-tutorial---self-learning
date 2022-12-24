import { useState } from "react";

function App() {
  console.log(2)
  const [count, set] = useState(0)
  return (
    <>
      <h1>Your new react app...</h1>
      <button type="submit" onClick={() => {set(count + 1)}}>Clicked {count} times</button>
    </>
  );
}

export default App;
