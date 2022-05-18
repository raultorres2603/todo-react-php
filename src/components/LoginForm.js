import React from "react";
import * as ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
import Cookies from "universal-cookie";
import ListTodos from "./ListTodos";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    let password;

    switch (e.target.id) {
      case "username":
        user = e.target.value;
        break;

      case "password":
        password = e.target.value;
        break;

      default:
        break;
    }
    console.log("Form Submited");
    axios
      .get("http://localhost:8888/api/check-login.php", {
        username: user,
        password: password,
      })
      .then((res) => {
        if (res.data == "ERROR") {
          alert("ERROR: No se ha encontrado este usuario");
        } else {
          console.log(res);
          let newCookie = new Cookies();
          newCookie.set("logTodo", res.data, { path: "/", maxAge: "3600" });
          ReactDOM.render(<ListTodos />, document.getElementById("AppDiv"));
        }
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="row">
              <div className="card">
                <div className="card-header bg-info text-center h1">Login</div>
                <div className="card-body">
                  <form onSubmit={this.handleSubmit} method="post">
                    <div className="row">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Put your user here"
                          name="username"
                        />
                        <label htmlFor="username">Username</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Put your password here"
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-success btn-lg"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
