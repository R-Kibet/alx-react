import React from "react";
import { shallow } from "enzyme";
import Login from "./Login"

const wrapper = shallow(<Login />);

it("render LOgin without crushhing", () => {
    shallow(<Login/>)
})

it('renders components input and label', () => {
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('input').length).toBe(2);
})