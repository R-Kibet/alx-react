import {
  LOGOUT,
  LOGIN,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: {
      email,
      password,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};

export const boundLogin = (email, password) => {
  dispatch(login(email, password));
};

export const boundLogout = () => {
  dispatch(logout());
};

export const bounddisplaynotf = () => {
  dispatch(displayNotificationDrawer());
};

export const boundhidenotif = () => {
  dispatch(hideNotificationDrawer());
};

export const loginSucc = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginfailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export function loginRequest(email, password) {
  return (dispatch) => {
    boundLogin(email, password);

    return fetch("http://localhost:3000/login-success.json")
      .then((res) => res.json())
      .then((json) => dispatch(loginSucc()))
      .catch((error) => dispatch(loginfailure()));
  };
}
