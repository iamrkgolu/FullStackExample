import React, { Component } from "react";
// import Counter from "./component/counter/Counter";
// import "./App.css";
import TodoApp from "./component/todo/TodoApp";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

  render() {
    return (
      <div>
        {/* <Counter /> */}
        <TodoApp />
      </div>
    )
  }

}

export default App;
