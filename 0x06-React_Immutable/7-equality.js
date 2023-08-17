import { Map, is } from './node_modules/immutable/dist/immutable';

export default function areMapsEqual(map1, map2) {
  const m1 = Map(map1);
  const m2 = Map(map2);

  return is(m1, m2);
}
