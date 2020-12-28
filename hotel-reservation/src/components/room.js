import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadRooms } from "../store/actions/roomAction";
import Loading from "./loading";
import Title from "./title";
import single_basic from "../images/single-basic.jpeg";
import single_standard from "../images/single-standard.jpeg";
import single_economy from "../images/single-economy.jpeg";
import single_deluxe from "../images/single-deluxe.jpeg";
import double_deluxe from "../images/double-deluxe.jpeg";
import double_basic from "../images/double-basic.jpeg";
import double_economy from "../images/double-economy.jpeg";
import double_standard from "../images/double-standard.jpeg";
import family_standard from "../images/family-standard.jpeg";
import family_basic from "../images/family-basic.jpeg";
import family_economy from "../images/family-economy.jpeg";
import family_deluxe from "../images/family-deluxe.jpeg";
import presidential from "../images/presidential.jpeg";

class Room extends Component {
  state = {
    type: "all",
    maxPrice: 0,
    capacity: 1,
    pets: false,
    breakfast: false,
  };
  componentDidMount() {
    this.props.loadRooms();
  }
  checkHandler = (key) => {
    this.setState({
      [key]: !this.state[key],
    });
  };
  roomFilter = (rooms) => {
    if (this.state.type !== "all") {
      rooms = rooms.filter((room) => room.type === this.state.type);
    }
    if (this.state.capacity !== 1) {
      rooms = rooms.filter((room) => room.capacity >= this.state.capacity);
    }
    if (this.state.breakfast) {
      rooms = rooms.filter((room) => room.breakfast === this.state.breakfast);
    }
    if (this.state.pets) {
      rooms = rooms.filter((room) => room.pets === this.state.pets);
    }
    return rooms;
  };
  changeHandler = (event) => {

    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    let { rooms } = this.props;
    rooms = this.roomFilter(rooms);

    return (
      <>

        <div className="container">
          <Title title="Search For A Room" />
          <form className="filter-form">
            <div className="form-group ">
              <label htmlFor="type">Room Type</label>
              <select
                className="form-control my-2"
                name="type"
                id="type"
                onChange={this.changeHandler}
              >
                <option value="all">All</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="family">Family</option>
                <option value="presidential">Presidential</option>
              </select>
            </div>
            <div className="form-group ">
              <label htmlFor="capacity">Guest</label>
              <select
                className="form-control my-2"
                name="capacity"
                id="capacity"
                onChange={this.changeHandler}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={8}>8</option>
              </select>
            </div>
            <div className="form-group my-4">
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="breakfast"
                  id="breakfast"
                  checked={this.state.breakfast}
                  onChange={() => this.checkHandler("breakfast")}
                />
                <label htmlFor="breakfast">breakfast</label>
              </div>
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="pets"
                  id="pets"
                  checked={this.state.pets}
                  onChange={() => this.checkHandler("pets")}
                />
                <label htmlFor="pets">pets</label>
              </div>
            </div>
          </form>
        </div>
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <article className="room" key={room._id}>
              <div className="img-container">
                <img
                  src={
                    room.room_key === "single_basic"
                      ? `${single_basic}`
                      : room.room_key === "single_standard"
                      ? `${single_standard}`
                      : room.room_key === "single_economy"
                      ? `${single_economy}`
                      : room.room_key === "single_deluxe"
                      ? `${single_deluxe}`
                      : room.room_key === "double_basic"
                      ? `${double_basic}`
                      : room.room_key === "double_standard"
                      ? `${double_standard}`
                      : room.room_key === "double_economy"
                      ? `${double_economy}`
                      : room.room_key === "double_deluxe"
                      ? `${double_deluxe}`
                      : room.room_key === "family_basic"
                      ? `${family_basic}`
                      : room.room_key === "family_economy"
                      ? `${family_economy}`
                      : room.room_key === "family_standard"
                      ? `${family_standard}`
                      : room.room_key === "family_economy"
                      ? `${family_economy}`
                      : room.room_key === "family_deluxe"
                      ? `${family_deluxe}`
                      : `${presidential}`
                  }
                  alt={`${room.name}`}
                />
                <div className="price-top">
                  <h6>BDT {room.price}</h6>
                  <p>per night</p>
                </div>
                <Link
                  to={{
                    pathname: `/rooms/${room.room_key}`,
                    state: {
                      keyVal: `${room._id}`,
                    },
                  }}
                  className="btn btn-primary room-link"
                >
                  features
                </Link>
              </div>
              <p className="room-info">{room.name}</p>
            </article>
          ))
        ) : (
          <Loading />
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  rooms: state.rooms,
});
export default connect(mapStateToProps, { loadRooms })(Room);
