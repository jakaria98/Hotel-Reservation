import React from "react";
import { connect } from "react-redux";
import { bookRoom } from "../store/actions/roomAction";
import Loading from "../components/loading";

class BookRoom extends React.Component {
  state = {
    name: "",
    email: "",
    nid: 0,
    checkingDate: "",
    checkoutDate: "",
    roomName: "",
    transactionNumber: "",
  };
  componentDidMount() {
    const { keyVal } = this.props.location.state;
    this.setState({
      roomName: keyVal,
    });
  }
  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();

    this.props.bookRoom(this.state, this.props.history);
  };
  render() {
    let {
      name,
      email,
      nid,
      checkingDate,
      checkoutDate,
      transactionNumber,
    } = this.state;
    return (
      <>
        {this.state.roomName.length <= 0 ? (
          <Loading />
        ) : (
          <div className="row my-5">
            <div className="col-md-6 offset-md-3">
              <h1 className="display-4 text-center">
                Please Submit The Form Properly
              </h1>
              <form onSubmit={this.submitHandler}>
                <div className="form-group my-3">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    placeholder="Please Enter Your Name"
                    className="form-control my-2"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    placeholder="Please Enter Your Email"
                    className="form-control my-2"
                    name="email"
                    id="email"
                    value={email}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="nid">NID:</label>
                  <input
                    type="number"
                    placeholder="Please Enter Your NID"
                    className="form-control my-2"
                    name="nid"
                    id="nid"
                    value={nid}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="checkingDate">Check In Date:</label>
                  <input
                    type="date"
                    className="form-control my-2"
                    name="checkingDate"
                    id="checkingDate"
                    value={checkingDate}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="checkoutDate">Check Out Date:</label>
                  <input
                    type="date"
                    className="form-control my-2"
                    name="checkoutDate"
                    id="checkoutDate"
                    value={checkoutDate}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="transactionNumber">Transaction Number:</label>
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Please Enter The Transaction Number"
                    name="transactionNumber"
                    id="transactionNumber"
                    value={transactionNumber}
                    onChange={this.changeHandler}
                  />
                </div>
                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
}
// const mapStateToProps=state=>{
//     room: state.rooms;
//     auth: state.auth
// }
export default connect(null, { bookRoom })(BookRoom);
