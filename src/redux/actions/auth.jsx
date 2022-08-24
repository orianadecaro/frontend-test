import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from "./type";
import AuthService from "../service/authservice";

export const login = (user) => (dispatch) => {
  return AuthService.logIn(user).then(
    (response) => {
      if (response.status === "success") {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: response.user },
        });
Promise.resolve();
        return response;
      }
      return response;
    },
    (error) => {
      const message = error.toString();
Promise.reject();
      return message;
    }
  );
};

export const register = (user) => (dispatch) => {
  return AuthService.register(user).then(
    (response) => {
      if (response.status === "success register") {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: { user: response.user },
        });
Promise.resolve();
        return response;
      }
    },
    (error) => {
      const message = error.toString();
Promise.reject();
      return message;
    }
  );
};

export const logout = () => (dispatch) => {
  return AuthService.logOut().then((response) => {
    if (response.status === "success") {
      dispatch({
        type: LOGOUT,
      });
      Promise.resolve();
      return response;
    }
  });
};