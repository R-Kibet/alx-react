import {
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  HIDE_NOTIFICATION_DRAWER,
  DISPLAY_NOTIFICATION_DRAWER,
} from "../actions/uiActionTypes";

import { Map } from "immutable";

export const initialState = {
  user: {},
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false,
};

export default function uiReducer(state = Map(initialState), action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set("isUserLoggedIn", true);

    case LOGIN_FAILURE:
      return state.set("isUserLoggedIn", false);

    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false);

    case LOGOUT:
      return state.set("isUserLoggedIn", false);

    default:
      break;
  }
  return state;
}
