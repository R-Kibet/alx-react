import {
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  HIDE_NOTIFICATION_DRAWER,
  DISPLAY_NOTIFICATION_DRAWER,
  LOGIN,
} from "../actions/uiActionTypes";

import { Map } from "immutable";

export const initialUState = {
  user: {},
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false,
};

export default function uiReducer(state = Map(initialUState), action) {
  switch (action.type) {
    case LOGIN:
      return state.set("user", action.user);

    case LOGIN_SUCCESS:
      return state.set("isUserLoggedIn", true);

    case LOGIN_FAILURE:
      return state.set("isUserLoggedIn", false);

    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", true);
      
    case HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false);

    case LOGOUT:
      return state.set("isUserLoggedIn", false).set("user", null);

    default:
      break;
  }
  return state;
}
