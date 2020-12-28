import React from "react";
import { connect } from "react-redux";
import { loadGuest } from "../store/actions/roomAction";
import Loading from "../components/loading";
import Title from "../components/title";
class Guest extends React.Component {
  state = {
    transaction: "",
  };
  componentDidMount() {
    this.props.loadGuest();
  }
  guestFilter = (guests) => {
    if (this.state.transaction.length > 0) {
      guests = guests.filter(
        (guest) => guest.transactionNumber === this.state.transaction
      );
    }
    return guests;
  };

  changeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state.transaction);
  };
  render() {
    let { guests } = this.props;
    guests = this.guestFilter(guests);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Title title="search a guest" />
              <div className="form-group">
                <form>
                  <div className="form-group my-3 ">
                    <input
                      type="text"
                      name="transaction"
                      value={this.state.transaction}
                      onChange={this.changeHandler}
                      className="form-control"
                      placeholder="Search By Transaction Number..."
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {guests.length <= 0 ? (
          <Loading />
        ) : (
          guests.map((guest) => (
            <div key={guest._id} className="container my-4">
              <div className="guestDesign">
                <li className="list-group-item">
                  <p className="text-capitalize">Name: {guest.name}</p>
                  <p>NID: {guest.nid}</p>
                  <p>Check-in Date: {guest.checkingDate}</p>
                  <p>Check-out Date: {guest.checkoutDate}</p>
                  <p>Transaction Number: {guest.transactionNumber}</p>
                  <p className="text-capitalize">Room Type: {guest.roomName}</p>
                </li>
              </div>
            </div>
          ))
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(this.props.state);
  return {
    guests: state.rooms,
  };
};

export default connect(mapStateToProps, { loadGuest })(Guest);
