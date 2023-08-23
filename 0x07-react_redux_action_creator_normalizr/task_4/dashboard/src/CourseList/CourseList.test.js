import React from 'react'
import { shallow } from 'enzyme';
import CourseList from './CourseList';

const wrapper = shallow(<CourseList />)

describe('CourseList', () => {
    it('renders without crashing', () => {
        shallow(<CourseList />)
    });

    it('renders a list of courses', () => {
          expect(wrapper.find('table').children()).toHaveLength(2)
          expect(wrapper.find('thead').children()).toHaveLength(2)
          expect(wrapper.find('tbody').children()).toHaveLength(3)
        });
})