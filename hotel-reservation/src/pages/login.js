import React from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import { login } from "../store/actions/authActions";
class Login extends React.Component {
  state = {
    email: "",
    password: "",
   
  };


  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.props.login(
      {
        email: this.state.email,
        password: this.state.password,
      },
      this.props.history
    );
  };
  render() {
    let { email, password } = this.state;
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center display-4 my-5">Admin</h1>
          <form onSubmit={this.submitHandler}>
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
            <button className="btn btn-primary my-2">Login</button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { login })(Login);
