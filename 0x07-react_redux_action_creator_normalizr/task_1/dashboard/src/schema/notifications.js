import * as json from '../../notifications.json';
import { normalize, schema } from "normalizr"

export function getAllNotificationsByUse(userId) {
  //return author.id == userId
  return json.default.default
    .filter((data) => data.author.id === userId)
    .map(({context}) => context);
};

//normalize data
const user = new schema.Entity('users');
const message = new schema.Entity(
  'message',
  {},
  {
     idAttribute: 'guid',
  },
)

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});
export const nomlzd = normalize(json.default, [notification]);
