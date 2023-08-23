import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export const select = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

export const unselect = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
};
