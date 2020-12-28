import * as Types from "../actions/types";

const roomReducer = (state = [], action) => {
  switch (action.type) {
    case Types.LOAD_ROOM: {
      return action.payload.rooms;
    }
    case Types.LOAD_GUEST: {
      //console.log(action.payload.guests);
      return action.payload.guests;
    }
    case Types.UPDATE_ROOM: {
      return action.payload.room;
    }
    case Types.GET_A_ROOM: {
      return action.payload.room;
    }
    default:
      return state;
  }
};

export default roomReducer;
