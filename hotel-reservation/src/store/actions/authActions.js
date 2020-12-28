import Axios from "axios";
import jwtDecode from "jwt-decode";
import * as Types from "./types";
import setAuthToken from "../../utils/setAuthToken";
export const login = (user, history) => (dispatch) => {
  Axios.post("/api/user/login", user)
    .then((res) => {
      let token = res.data.token;
      localStorage.setItem("auth_token", token);
      let decode = jwtDecode(token);
      setAuthToken(token);

      dispatch({
        type: Types.SET_USER,
        payload: {
          user: decode,
        },
      });
      history.push("/rooms");
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

export const logout = (history) => {
  localStorage.removeItem("auth_token");
  // history.push("/login");
  return {
    type: Types.SET_USER,
    payload: {
      user: {},
    },
  };
};
