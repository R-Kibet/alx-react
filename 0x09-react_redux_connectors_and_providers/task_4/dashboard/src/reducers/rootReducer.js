import courseReducer, {initalCState} from "./courseReducer";
import notificationReduce, {initialNotState} from "./notificationReducer";
import uiReducer, { initialUState } from "./uiReducer";

import { Map } from "immutable";

export const initialRState = {
    courses: Map(initalCState),
    notifications: Map(initialNotState),
    ui: Map(initialUState),
}

const rootReducer = {
    courses: courseReducer,
    notifications: notificationReduce,
    ui: uiReducer
}

export default rootReducer;