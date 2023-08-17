import { fromJS } from './node_modules/immutable/dist/immutable';

export default function accessImmutableObject(object, array) {
  const nestobj = fromJS(object);
  const nestArr = nestobj.getIn(array, undefined);
  return nestArr;
}
