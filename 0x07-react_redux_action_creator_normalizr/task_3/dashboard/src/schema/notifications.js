import * as json from '../../notifications.json';
import { normalize, schema } from "normalizr"

//modify this
//export function getAllNotificationsByUser(userId) {
//  //return author.id == userId
//  return json.default.default
//    .filter((data) => data.author.id === userId)
//    .map(({context}) => context);
//};

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

export function getAllNotificationsByUser(userId) {
  const notByUser = [];
  const notification = nomlzd.entities.notification;
  const messages = nomlzd.entities.messages;

  for (const val in notification) {
    if (notification[val].author === userId) {
      notByUser.push(messages[notification[val].context]);
    }
  }

  return notByUser;
}

export const nomlzd = normalize(json.default, [notification]);
