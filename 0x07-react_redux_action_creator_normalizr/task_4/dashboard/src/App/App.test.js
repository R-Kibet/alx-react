import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import AppContext from './AppContext';

/**
 * @jest-environment jsdom
 */


it('renders without crashing', () => {
  shallow(<App />);
});

it('renders Notification', () => {
  shallow(<Notifications />)
})

it('renders Header', () => {
  shallow(<Header />)
})

it('renders Login', () => {
  shallow(<Login />)
})

it('renders Footer', () => {
  shallow(<Footer />)
})

it('check courselist not displayed', () => {
  const wrapper = shallow(<App isLoggedIn  =  {false}/>)
  expect(wrapper.find(CourseList).length).toBe(1);
  expect(wrapper.contains(<CourseList/>)).toBe(true);
})

it('check when login is true', () => {
  const wrapper = shallow(<App isLoggedIn = {true} />)
  expect(wrapper.contains(<CourseList />)).toBe(true)
  expect(wrapper.contains(<Login />)).toBe(false)
})

it('checkes logout fun keys are pressed', () => {
  const logout = jest.fn()
  const wrapper = shallow(<App logout={ logout }/>)
  const inst = wrapper.instance();

  jest.spyOn(window, 'alert').mockImplementation(() => {});
  inst.handleKeyBoardPress({ ctrlKey:true, key: 'h' });

  expect(logout).toHaveBeenCalled()
  expect(window.alert).toHaveBeenCalledWith('Logging you out');
})

it('has default state for displayDrawer false', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().displayDrawer).toEqual(false);
})

it('display true when calling handleDisplayDrawer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().displayDrawer).toEqual(false);

  const instance = wrapper.instance();
  instance.handleDisplayDrawe();

  expect(wrapper.state().displayDrawer).toEqual(true);

})

it('test verify logout fnction is updates state', () => {
  const wrapper = mount(
    <AppContext.Provider value={{ user, logOut }}>
      <App />
    </AppContext.Provider>
  );

  const loggedUser = {
    email: "Larry@hudson.com",
    password: "123456789",
    isLoggedIn: true,
  };

  const instance = wrapper.instance();

  expect(wrapper.state().user).toEqual(user);

  instance.logIn(loggedUser.email, loggedUser.password);

  expect(wrapper.state().user).toEqual(loggedUser);

  instance.logOut();

  expect(wrapper.state().user).toEqual(user);

})

it('return the notifications not equal to id', () => {
  const wrapper = mount(
    <AppContext.Provider 
      value={{user, logOut}}
    >
      <App />

    </AppContext.Provider>
  );

  const instance = wrapper.instance();

  expect(wrapper.state().listNotifications).toEqual(
    listNotifications
  );

  instance.markNotificationAsRead(4);

  expect(wrapper.state().listNotifications).toEqual(
    listNotifications
  );

})

