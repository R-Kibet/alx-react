import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';


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

/*
it('renders App-header', () => {
  expect(wrapper.find('header.App-header').exists()).toEqual(true);
});
it('renders App-body', () => {
  expect(wrapper.find('main.App-body').exists()).toEqual(true);
});
it('renders App-footer', () => {
  expect(wrapper.find('footer.App-footer').exists()).toEqual(true);
});
*/