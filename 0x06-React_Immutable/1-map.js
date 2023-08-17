import Immutable from './node_modules/immutable/dist/immutable';

function getImmutableObject(object) {
  return Immutable.Map(object);
}

export default getImmutableObject;
