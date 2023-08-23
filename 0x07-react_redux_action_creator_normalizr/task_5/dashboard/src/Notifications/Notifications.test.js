import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

it('renders without crashing', () => {
  shallow(<Notifications />);
});
it('renders three list items', () => {
  expect(wrapper.find('li').children().length).toEqual(3);
});
it('renders the <p>', () => {
  expect(
    wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
  ).toBeTruthy();
});

describe('listNotifications with values', () => {
  let latestNotification = undefined;
  let listNotifications = undefined;

  beforeEach(() => {
    latestNotification = getLatestNotification();
    listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: latestNotification } },
    ];
  });

  it('values', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.exists());
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toBeDefined();
    expect(nItem).toHaveLength(3);
    expect(nItem.at(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
    expect(nItem.at(1).html()).toEqual(
      '<li data-notification-type="urgent">New resume available</li>'
    );
    expect(nItem.at(2).html()).toEqual(
      `<li data-notification-type="urgent">${latestNotification}</li>`
    );
  });
});

describe('listNotifications without values', () => {
  let listNotifications = undefined;
  beforeEach(() => {
    listNotifications = [];
  });

  it('empty', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.exists());
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toHaveLength(1);
    expect(nItem.html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
  });

  it('without listNotifications', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toHaveLength(1);
    expect(nItem.html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
  });
});

it('calss handleDisplayDrawer when clicking menu item', () => {
  const handleDisplayDrawer = jest.fn();
  const handleHideDrawer = jest.fn();

  const wrapper = shallow(
    <Notifications
      displayDrawer
      handleDisplayDrawer={handleDisplayDrawer}
      handleHideDrawer={handleHideDrawer}
    />
  );

  wrapper.find('#menuitem').simulate('click');

  expect(handleDisplayDrawer).toHaveBeenCalled();
  expect(handleHideDrawer).not.toHaveBeenCalled();

  jest.restoreAllMocks();
})

