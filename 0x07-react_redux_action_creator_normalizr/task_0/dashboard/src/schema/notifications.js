import * as json from '../../notifications.json';

function getAllNotificationsByUse(userId) {
  //return author.id == userId
  return json.default.default
    .filter((data) => data.author.id === userId)
    .map(({context}) => context);
};

export default getAllNotificationsByUse;