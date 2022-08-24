import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from "../actions/type";
import { AsyncStorage } from 'AsyncStorage';

const user = AsyncStorage.getItem("user");
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };


const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case REGISTER_SUCCESS:
      return {
        isLoggedIn: true,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};


export default auth; 