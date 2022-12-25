import React, { Component, useEffect, useState } from "react";
import Greet from "./components/greet.js"
import Comment from "./components/comment.js"

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dateTime: new Date() }
    // console.log('Instansiated')
  }

  tick = () => {
    this.setState(this.state.dateTime = new Date())
  }

  componentDidMount() {
    this.clock = setInterval(
      () => {
        this.tick()
        // console.log("Updated")
      },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.clock)
  }

  render() {
    // console.log("Re-rendering")
    return <div>{this.state.dateTime.toLocaleTimeString()}</div>
  }
}


function App() {

  const [myList, appendList] = useState([])

  const click = () => {
    let comment = document.getElementById('comment').value
    comment = comment ? comment : "Empty comment field"

    appendList((oldList) => [
      ...oldList,
      <Comment name="Prakhar" comment={comment} />
    ]);

    document.getElementById('comment').value = ""
  }

  return (
    <>
      <h1>Test env</h1>
      <Greet name="Prakhar" lastName="Rai" />

      <Clock />

      <input type="text" name="comment" placeholder="Add your comment" id="comment" />
      <button className="btn btn-primary" type="submit" onClick={click}>
        Add comment
      </button>

      {
        <div>{myList}</div>
      }
    </>
  );
}

export default App;
