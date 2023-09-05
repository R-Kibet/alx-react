import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

import { Map } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

export const initialNotState = {
  notifications: [],
  filter: "DEFAULT",
};

export default function notificationReduce(state = Map(initialNotState), action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalized = notificationsNormalizer(action,data);

      Object.keys(normalized.notifications).map((key) => {
        normalized.notifications[key].isRead = false;
      });
      return state.merge(normalized);

    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return  state.set('filter', action.filter);
      
    default:
      break;
  }
  return state;
}
