import React from "react";
import { shallow } from "enzyme";

import Default from "./index";

it("renders the layout", () => {
    const result = shallow(<Default />);
    expect(result).toMatchSnapshot();
});
