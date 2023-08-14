import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

const wrapper = shallow(<Footer />)

it("renders without crashing", () => {
    shallow(<Footer />)
})

it("render text copyright", () => {
    expect(wrapper.text()).toBe(`Copyright ${getFullYear()} - ${getFooterCopy()}`)
})