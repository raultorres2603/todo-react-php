import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";

class listTodos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8888/api/get-todos.php`)
      .then((res) => {
        this.setState(
          {
            todos: res.data,
          },
          () => {
            console.log(res.data);
          }
        );
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div className="listTodos">
        <div className="container">
          <div className="col-12">
            <div className="row mt-5">
              <table className="table table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>ID User</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>ZipCode</th>
                    <th>Country</th>
                    <th>ID TODO</th>
                    <th>Title</th>
                    <th>Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.todos.map((todo, index) => (
                    <tr>
                      <td>{todo.user.id}</td>
                      <td>{todo.user.name}</td>
                      <td>{todo.user.username}</td>
                      <td>{todo.user.password}</td>
                      <td>{todo.user.street}</td>
                      <td>{todo.user.city}</td>
                      <td>{todo.user.zipcode}</td>
                      <td>{todo.user.country}</td>
                      <td>{todo.id}</td>
                      <td>{todo.title}</td>
                      <td>{todo.completed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default listTodos;
