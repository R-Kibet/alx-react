import courseReducer, {initalCState} from "./courseReducer";
import notificationReduce, {initialNotState} from "./notificationReducer";
import uiReducer, { initialUState } from "./uiReducer";

import { Map } from "immutable";

const rootReducer = {
    courses: courseReducer,
    notifications: notificationReduce,
    ui: uiReducer
}

export const initialRState = {
    courses: Map(initalCState),
    notifications: Map(initialNotState),
    ui: Map(initialUState),
}

export default rootReducer;