import React, { Component } from "react";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take Out Trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner",
        completed: false
      },
      {
        id: 3,
        title: "Work Valuation",
        completed: false
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
