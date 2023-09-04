export const filterTypeSelected = (state) => {
  return state.get("filter");
};

export const getNotifications = (state) => {
  return state.get("notifications");
};

export const getUnreadNotifications = (state) => {
  const nofitication = state.get("notifications");
  const filter = nofitication.filter(
    (value, key) => value.get("isRead") === true
  );
  return filter;
};
