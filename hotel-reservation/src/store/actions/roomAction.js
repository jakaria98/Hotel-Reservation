import Axios from "axios";

import * as Types from "./types";

export const loadGuest = () => (dispatch) => {
  Axios.get("/api/all_guests")
    .then((response) => {
     // console.log(response);
      dispatch({
        type: Types.LOAD_GUEST,
        payload: {
          guests: response.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const loadRooms = () => (dispatch) => {
  Axios.get("/api/rooms/")
    .then((response) => {
      dispatch({
        type: Types.LOAD_ROOM,
        payload: {
          rooms: response.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateRoom = (_id, room, history) => (dispatch) => {
  Axios.put(`/api/rooms/${_id}`, room)
    .then((response) => {
      //    console.log(room);
      dispatch({
        type: Types.UPDATE_ROOM,
        payload: { room: response.data._doc },
      });
      history.push("/rooms");
      alert("Room Updated Successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSingleRoom = (_id) => (dispatch) => {
  Axios.get(`/api/rooms/${_id}`)
    .then((response) => {
      dispatch({
        type: Types.GET_A_ROOM,
        payload: {
          room: response.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const bookRoom = (person, history) => (dispatch) => {
  Axios.post("/api/rooms/book-room", person)
    .then((res) => {
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: {},
        },
      });
      history.push("/thanks");
    })
    .catch((error) => {
      dispatch({
        type: Types.USERS_ERROR,
        payload: {
          error: error.response.data,
        },
      });
    });
};
