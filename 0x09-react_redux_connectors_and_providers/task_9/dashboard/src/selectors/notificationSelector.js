import { createSelector } from "reselect";

export const filterTypeSelected = (state) => {
  return state.get("filter");
};
export const getNotifications = (state) => {
  return state.get("notifications");
};

export const getUnreadNotificationsByType = createSelector(
  getNotifications,
  (notifications) => {
    const mes = notifications.get("messages");
    const filter = notifications.get("filter");

    if (mes) {
      let filtered;

      if (filter === "URGENT") {
        filtered = mes
          .valueSeq()
          .filter(
            (value) =>
              value.get("isRead") === false && value.get("type") === "URGENT"
          );
      } else {
        filtered = mes
          .valueSeq()
          .filter((value) => value.get("isRead") === false);
      }

      return filtered;
    }
    return mes;
  }
);
