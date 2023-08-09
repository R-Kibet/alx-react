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