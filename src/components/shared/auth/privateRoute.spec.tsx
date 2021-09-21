import React from "react";
import { shallow } from "enzyme";

import PrivateRoute from "./privateRoute";

describe("<PrivateRoute />", () => {
    it("should render without crashing", () => {
        shallow(<PrivateRoute />);
    });

    it("should render children", () => {
        const wrapper = shallow(
            <PrivateRoute>
                <div className='test' />
            </PrivateRoute>
        );
        expect(wrapper.find(".test").length).toBe(1);
    });
});
