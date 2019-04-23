import React, { Component } from "react";
import Header from "./components/Layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take Out Trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Dinner",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "Work Valuation",
        completed: false
      }
    ]
  };
  //Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete Todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  //Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
