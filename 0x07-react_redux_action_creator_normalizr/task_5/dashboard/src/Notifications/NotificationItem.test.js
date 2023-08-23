import React from "react";
import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";

const wrapper = shallow(<NotificationItem />);

describe('<NotificationItem/>', () => {
  it('renders without crashing', () => {
  shallow(<NotificationItem />)
  })


  it('renders type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test'/>);
    expect(wrapper.find('li').length()).toBe(1);
    expect(wrapper.find('li').text()).toEqual('test');
    expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');

  });

  it('renders correct html (for example: html={{ __html: "<u>test</u>" }}', () => {
    wrapper.setProps({html: '<u>test</u>'});
    expect(wrapper.html()).toEqual(('<li><u>test</u></li>'));

  })

});

