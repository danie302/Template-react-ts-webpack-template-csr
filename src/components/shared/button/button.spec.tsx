// Dependencies
import React from "react";
import { shallow } from "enzyme";

import Button from "./index";
import { ButtonColor } from "./button.const";

describe("<Button />", () => {
    const clickFunc = jest.fn();

    it("renders correctly", () => {
        const result = shallow(<Button>Button</Button>);
        expect(result).toMatchSnapshot();
    });
    it("change color to primary", () => {
        const result = shallow(<Button color={ButtonColor.primary}>Button</Button>);
        const button = result.find("button");
        expect(button.prop("className")).toContain("undefined btn btn--primary");
    });
    it("change color to secondary", () => {
        const result = shallow(<Button color={ButtonColor.secondary}>Button</Button>);
        const button = result.find("button");
        expect(button.prop("className")).toContain("undefined btn btn--secondary");
    });
    it("change color to tertiary", () => {
        const result = shallow(<Button color={ButtonColor.tertiary}>Button</Button>);
        const button = result.find("button");
        expect(button.prop("className")).toContain("undefined btn btn--tertiary");
    });
    it("change color to light", () => {
        const result = shallow(<Button color={ButtonColor.light}>Button</Button>);
        const button = result.find("button");
        expect(button.prop("className")).toContain("undefined btn btn--light");
    });
    it("call function onClick", () => {
        const result = shallow(<Button onClick={clickFunc}>Button</Button>);
        const button = result.find("button");
        button.simulate("click");
        expect(clickFunc).toHaveBeenCalled();
    });
});
