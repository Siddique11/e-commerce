import { SET_CURRENT_USER } from "./type-name.jsx";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
