import React from "react";
import { updateRoom } from "../store/actions/roomAction";
import { connect } from "react-redux";

import Loading from "../components/loading";
class UpdateRoom extends React.Component {
  state = {
    name: "",
    room_key: "",
    information: "",
    pets: false,
    breakfast: false,
    availability: false,
    capacity: 0,
    price: 0,
    _id: "",
  };
  componentDidMount() {
    //console.log(this.props.location.state);
    const {
      roomName,
      roomKey,
      roomInfo,
      roomPets,
      roomBreakfast,
      roomAvailability,
      roomCapacity,
      roomPrice,
      roomID,
    } = this.props.location.state;
    this.setState({
      name: roomName,
      room_key: roomKey,
      information: roomInfo,
      pets: roomPets,
      breakfast: roomBreakfast,
      availability: roomAvailability,
      capacity: roomCapacity,
      price: roomPrice,
      _id: roomID,
    });
  }
  submitHandler = (event) => {
    event.preventDefault();
    this.props.updateRoom(this.state._id, this.state, this.props.history);
  };

  checkHandler = (key) => {
    this.setState({
      [key]: !this.state[key],
    });
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    let information = this.state.information;
    let pets = this.state.pets;
    let price = this.state.price;
    let breakfast = this.state.breakfast;
    let availability = this.state.availability;
    let capacity = this.state.capacity;

    return this.state.name.length <= 0 ? (
      <Loading />
    ) : (
      <div className="row my-5">
        <div className="col-md-6 offset-md-3">
          <h1 className="display-4 text-center text-capitalize">
            Update {`${this.state.name}`}
          </h1>
          <form onSubmit={this.submitHandler}>
            <div className="form-group my-3">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                placeholder="Enter Updated Price"
                className="form-control my-2"
                name="price"
                id="price"
                value={price}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="capacity">Capacity:</label>
              <input
                type="number"
                placeholder="Enter Updated Capacity"
                className="form-control my-2"
                name="capacity"
                id="capacity"
                value={capacity}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="info">Room Information:</label>
              <textarea
                type="text"
                placeholder="Update Additional Information"
                className="form-control my-2"
                name="information"
                id="information"
                value={information}
                rows="5"
                cols="80"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-check my-3">
              <input
                type="checkbox"
                className="form-check-input"
                name="pets"
                id="pets"
                checked={pets}
                onChange={() => this.checkHandler("pets")}
              />
              <label className="form-check-label" htmlFor="pets">
                Pets
              </label>
            </div>
            <div className="form-check my-3">
              <input
                type="checkbox"
                className="form-check-input"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={() => this.checkHandler("breakfast")}
              />
              <label className="form-check-label" htmlFor="breakfast">
                Free Breakfast
              </label>
            </div>
            <div className="form-check my-3">
              <input
                type="checkbox"
                className="form-check-input"
                name="availability"
                id="availability"
                checked={availability}
                onChange={() => this.checkHandler("availability")}
              />
              <label className="form-check-label" htmlFor="availability">
                Room Availability
              </label>
            </div>
            <button className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    room: state.rooms,
  };
};
export default connect(mapStateToProps, { updateRoom })(UpdateRoom);
