import Immutable from "./node_modules/immutable/dist/immutable";

function getImmutableObject(object) {
  return Immutable.fromJS(object);
}

export default getImmutableObject;
