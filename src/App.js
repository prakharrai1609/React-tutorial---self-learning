import Greet from "./components/greet.js"
import AddComment from "./components/addComment.js";
import Clock from "./components/clock.js";
import Navbar from "./components/navbar.js"

function App() {
  return (
    <>
      <Navbar />
      <Greet name="Prakhar" lastName="Rai" />
      <Clock />
      <AddComment />
    </>
  );
}

export default App;
