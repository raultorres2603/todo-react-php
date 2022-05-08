import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";

class listTodos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      users: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateView = this.updateView.bind(this);
  }

  updateView() {
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
    axios
      .get("http://localhost:8888/api/get-users.php")
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
  }

  componentDidMount() {
    this.updateView();
  }

  handleSubmit(e) {
    e.preventDefault();
    let userId = document.getElementById("userInp").value;
    let title = document.getElementById("titleInp").value;
    let completed = document.getElementById("completedInp").value;

    if (
      userId <= 0 ||
      (title >= 200 && title.trim().length > 0) ||
      completed === "option"
    ) {
      alert("Inputs not correct.");
    } else {
      axios
        .post("http://localhost:8888/api/post-todos.php", {
          userId: userId,
          title: title,
          completed: completed,
        })
        .then((res) => {
          if (res.data !== "OK") {
            alert("Could not insert this TODO.");
          } else {
            this.updateView();
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  render() {
    return (
      <div className="listTodos">
        <div className="container">
          <div className="col-12">
            <div className="row mt-5 text-center">
              <h2>Create TODO's</h2>
            </div>
            <div className="row mt-5">
              <form onSubmit={this.handleSubmit} method="post">
                <div className="row">
                  <div className="col-3">
                    <input
                      className="form-control form-control-lg"
                      name="title"
                      type="text"
                      id="titleInp"
                      placeholder="TODO's title"
                    />
                  </div>
                  <div className="col-3">
                    <select
                      className="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                      name="completed"
                      id="completedInp"
                      defaultValue="option"
                    >
                      <option value="option">Open this select menu</option>
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <select
                      className="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                      name="user"
                      id="userInp"
                      defaultValue="option"
                    >
                      <option value="option">Open this select menu</option>
                      {this.state.users.map((user, index) => (
                        <option value={user.id}>{user.username}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-3">
                    <button type="submit" className="btn btn-success btn-lg">
                      Create TODO's
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <hr />
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
