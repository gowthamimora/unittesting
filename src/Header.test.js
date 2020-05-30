import React from "react";
import { shallow } from 'enzyme';
import Header from "./Header";

describe('Header', function () {
    it('should render hello world', function () {
        const component = shallow(<Header />);
        const h1 = component.find('h1');

        expect(h1.text()).toContain('Hello Welcome');
    });
});