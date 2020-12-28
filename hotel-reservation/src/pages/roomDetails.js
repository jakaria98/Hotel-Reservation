import React, { Component } from "react";
import { getSingleRoom } from "../store/actions/roomAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../components/loading";

import img1 from "../images/details-1.jpeg";
import img2 from "../images/details-2.jpeg";
import img3 from "../images/details-3.jpeg";

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

class roomDetails extends Component {
  componentDidMount() {
    const { keyVal } = this.props.location.state;
    this.props.getSingleRoom(keyVal);
  }

  render() {
    let { room } = this.props;
    //console.log(room.room_key);

    return (
      <>
        {room.length <= 0 ? (
          <Loading />
        ) : (
          <div className="roomDetailsContainer">
            <div className="mainImg">
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
                alt=""
              />

              {this.props.auth.isAuthenticated ? (
                <Link
                  to={{
                    pathname: `/rooms/update/${room.room_key}`,
                    state: {
                      roomName: `${room.name}`,
                      roomKey: `${room.room_key}`,
                      roomInfo: `${room.information}`,
                      roomPets: room.pets,
                      roomBreakfast: room.breakfast,
                      roomAvailability: room.availability,
                      roomCapacity: room.capacity,
                      roomPrice: room.price,
                      roomID: `${room._id}`,
                    },
                  }}
                  className="btn btn-primary room-link adjustSize"
                >
                  Update Room
                </Link>
              ) : (
                <Link
                  to={{
                    pathname: `/rooms/book-room/${room.room_key}`,
                    state: {
                      keyVal: `${room.name}`,
                    },
                  }}
                  className="btn btn-primary room-link adjustSize"
                >
                  Book This Room
                </Link>
              )}
            </div>
            <div className="images">
              <div className="roomDetails ">
                <div className="roomDetailsImg-container">
                  <img src={`${img1}`} alt="" />
                </div>
              </div>
              <div className="roomDetails ">
                <div className="roomDetailsImg-container">
                  <img src={`${img2}`} alt="" />
                </div>
              </div>
              <div className="roomDetails ">
                <div className="roomDetailsImg-container">
                  <img src={`${img3}`} alt="" />
                </div>
              </div>
            </div>
            <div className="info">
              <h1 className="roomName">{room.name} Room</h1>
              <div className="basic-info , marginLeft">
                <h2>Info</h2>
                <h4>Price: BDT {room.price}</h4>
                <h4>Max Capacity: {room.capacity}</h4>
                <h4>Pets {room.pets ? "Allowed" : "Not Allowed"}</h4>

                <h4>
                  {" "}
                  Free Breakfast{" "}
                  {room.breakfast ? "Available" : "Not Available"}
                </h4>
                <h4>
                  Room Is {room.availability ? "Available" : "Not Available"}
                </h4>
              </div>
              <div className="basic-info , marginLeft">
                <h2>Details</h2>
                <p>{room.information}</p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    room: state.rooms,
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { getSingleRoom })(roomDetails);
