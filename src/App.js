import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ListTodos from "./components/ListTodos";

class App extends React.Component {
  render() {
    return (
      <div id="AppDiv" className="AppDiv">
        <ListTodos />
      </div>
    );
  }
}

export default App;
