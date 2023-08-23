import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const wrapper = shallow(<Header />);

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders img and hi content', () => {
    expect(wrapper.exists('img')).toBe(true);
    expect(wrapper.containsMatchingElements(<h1>School dashboard</h1>)).toBe(treu)
})

it("mounts the Header component with a user defined (isLoggedIn is true and an email is set) and the logOut is linked to a spy. Verify that clicking on the link is calling the spy", () => {
  const logOutSpy = jest.fn();

  const wrapper = mount(
    <AppContext.Provider
      value={{
        user: {
          email: "Larry@hudson.com",
          password: "123456789",
          isLoggedIn: true,
        },
        logOut: logOutSpy,
      }}
    >
      <Header />
    </AppContext.Provider>
  );

  expect(wrapper.find("#logoutSection")).toHaveLength(1);
  wrapper.find("#logoutSection span").simulate("click");

  expect(logOutSpy).toHaveBeenCalled();

  jest.restoreAllMocks();
});