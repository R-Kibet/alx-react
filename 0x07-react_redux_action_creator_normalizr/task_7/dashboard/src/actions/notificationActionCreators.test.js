import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
  } from "./notificationActionTypes";
  
  import {
    markAsAread,
    setNotificationFilter,
  } from "./notificationActionCreators";
  
  describe("action creators ",() => {
    it("action for markAsRead", () => {
      const expectedReturn = {
        type: MARK_AS_READ,
        index: 1,
      };
  
      const result = markAsAread(1);
  
      expect(result).toEqual(expectedReturn);
    });
  
    it("action for setNotificationFilter", () => {
      const expectedReturn = {
        type: SET_TYPE_FILTER,
        filter: "DEFAULT",
      };
  
      const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
  
      expect(result).toEqual(expectedReturn);
    });
  });