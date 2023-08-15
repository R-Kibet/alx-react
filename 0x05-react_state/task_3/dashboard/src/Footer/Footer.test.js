import React from "react";
import { shallow , mount} from "enzyme";
import Footer from "./Footer";
import AppContext from "../App/AppContext";

const wrapper = shallow(<Footer />)

it("renders without crashing", () => {
    shallow(<Footer />)
})

it("render text copyright", () => {
    expect(wrapper.text()).toBe(`Copyright ${getFullYear()} - ${getFooterCopy()}`)
})

it("verify link is displayed when logged in", () => {
    const wrapper = mount(
        <AppContext.Provider
          value={{ 
            user: { 
              ...user,
              isLoggedIn: true},
            logOut
        }}
        >
            <Footer />
        </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).toHaveLength(1);
    expect(wrapper.find('div.footer a').text()).toEqual('Contact us');
});

it('verify link isnt displayed when logged out', () => {
    
    const wrapper = mount ( 
        
        <AppContext.Provider
          value={{ user, logOut}}
        >
        <Footer/>
        </AppContext.Provider>
    )

    expect(wrapper.find('div.footer a')).toHaveLength(0);
})