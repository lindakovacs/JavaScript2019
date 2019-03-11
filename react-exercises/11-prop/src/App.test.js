import ReactDOM from "react-dom";
import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import IsUserLoggedIn from "./components/IsUserLoggedIn";

Enzyme.configure({ adapter: new Adapter() });
describe("Prop", () => {
  const Users = [
    {
      name: "Matina",
      isUserLoggedIn: false
    },
    {
      name: "Joe",
      isUserLoggedIn: true
    },
    {
      name: "Tom",
      isUserLoggedIn: true
    }
  ];
  const wrapper = shallow(<IsUserLoggedIn Users={Users} />);

  it("component renders the correct amount of users", () => {
    wrapper.setProps({ Users: Users });
    expect(wrapper.find("li").length).equal(6);
  });
  it("renders the correct logged in status for a user", () => {
    const Users = [
      {
        name: "James",
        isUserLoggedIn: false
      }
    ];
    wrapper.setProps({ Users: Users });
    expect(
      wrapper
        .find("li")
        .at(1)
        .text()
    ).equal("Logged Out");
  });
});
