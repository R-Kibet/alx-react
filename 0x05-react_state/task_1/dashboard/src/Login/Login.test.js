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

it ('verify components of label', () => {
    const wrapper = shallow(<Login />);
    const emailInp = wrapper.find('#email');
    const passinpt = wrapper.find('#password')

    emailInp.simulate('change', {
        target: { name: "email", value: "ass@email.com"}
    });

    let submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput.prop("disabled")).toEqual(true);

    passinpt.simulate("change", {
        target:{ name: "password",value: "abcdefg" },
    });

    submitInput = wrapper.find("form input[type='submit]");
    expect(submitInput.prop('disabled')).toEqual(false);
})