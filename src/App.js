import React, { Component } from "react";
import "./App.css";
// React fragment and this.setState() is asynchronous
// Functional this.setState()

class Counter extends Component {
  state = {
    count: 0
  };
  handleIncrease = () => {
    this.setState(
      {
        count: this.state.count + 1
      }
      // () => console.log("called second", this.state.count)
    );
  };

  handleDecrease = () => {
    this.setState(
      (prevState, props) => {
        return { count: prevState.count - props.amount };
      },
      () => {
        console.log("called second", this.state.count);
      }
    );
    // this.setState((prevState, props) => {
    //   return { count: prevState.count - 2 };
    // });
  };
  render() {
    return (
      <>
        <div style={{ margin: "3rem", fontSize: "2rem" }}>
          <button onClick={this.handleDecrease}>decrease</button>
          <span style={{ margin: "1rem" }}>count: {this.state.count}</span>
          <button onClick={this.handleIncrease}>increase</button>
        </div>
      </>
    );
  }
}

function App() {
  return <Counter amount="2"></Counter>;
}

export default App;
