import { List, Map } from './node_modules/immutable/dist/immutable';

export function concatElements(page1, page2) {
  const addl = List(page1).concat(List(page2));
  return addl;
}

export function mergeElements(page1, page2) {
  const mergeL = Map(page1).merge(Map(page2));
  return mergeL;
}
