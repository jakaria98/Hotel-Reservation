//                          THIS PAGE IS NOT USED

import React from "react";
class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: {},
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
   
  };
  render() {
    let { name, email, password, confirmPassword } = this.state;
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center display-4 my-5">
            {" "}
            Create an Editor Here{" "}
          </h1>
          <form onSubmit={this.submitHandler}>
            <div className="form-group my-2">
              <label htmlFor="name"> Name: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                id="name"
                value={name}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="email"> Email: </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                id="email"
                value={email}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="password"> Password: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Your Password"
                name="password"
                id="password"
                value={password}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="confirmPassword"> Confirm Password: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Your Password"
                name="password"
                id="password"
                value={confirmPassword}
                onChange={this.changeHandler}
              />
            </div>
            <button className="btn btn-primary my-2"> Create an Editor </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
