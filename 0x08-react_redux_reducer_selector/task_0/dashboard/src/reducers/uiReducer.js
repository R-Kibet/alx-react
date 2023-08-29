import {
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  HIDE_NOTIFICATION_DRAWER,
  DISPLAY_NOTIFICATION_DRAWER,
} from "../actions/uiActionTypes";

export const initialState = {
  user: {},
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false,
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false,
      };

    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };

    case HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };

    case LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
      };

    default:
      break;
  }
  return state;
};
