import React, { Component }from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      currentTodo: ""
    };
  }

  onInputChange(e) {
    this.setState({ currentTodo: e.target.value });
  }

  onClick() {
    let todosCopy = this.state.todoList.slice();
    todosCopy.push(this.state.currentTodo);
    console.log(todosCopy)
    this.setState({ todoList: todosCopy, currentTodo: "" });
  }

  render() {
    let bulletinTodos = this.state.todoList.map((e, i) => {
      return (
        <li key={i}>{e}</li>
      )
    })
    return (
      <div>
        <h1>First Reac todo!</h1>
        <input placeholder="Add todo" onChange={this.onInputChange.bind(this)} />
        <button onClick={this.onClick.bind(this)}>Add</button>
        <ul>{bulletinTodos}</ul>
      </div>
    );
  }
}

export default App;
