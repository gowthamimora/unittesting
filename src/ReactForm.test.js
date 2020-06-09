import React from "react";
import { shallow } from "enzyme";
import ReactForm from "./ReactForm";
import {DropdownButton,Dropdown} from 'react-bootstrap';


describe('ReactForm component tests', function () {
    it('should render ReactForm components ', function () {
        const component = shallow(<ReactForm />);
        const field = component.find("input").at(0);
        expect(field.exists()).toBe(true);
    });
    it('should render ReactForm component', function () {
        const component=shallow(<ReactForm/>);
        const field=component.find("input").at(1);
        expect(field.exists()).toBe(true);

    });
    it('should render ReactForm', function () {
        const component=shallow(<ReactForm/>);
        const dropdown=component.find(Dropdown);
        expect(dropdown.exists()).toBe(true);

        const DropdownToggle=dropdown.find(Dropdown.Toggle);
        expect(DropdownToggle.text()).toBe("Dropdown Button");

        const dropDownMenu=dropdown.find(Dropdown.Menu);
        const DropDownItem=dropDownMenu.find(Dropdown.Item).at(0);
        expect(DropDownItem.text()).toBe("Action");

    });
    it('should render ReactForm component', function () {
        const component=shallow(<ReactForm/>);
        const field=component.find("button").at(0);
        expect(field.text()).toBe("submit");

    });
    it('should render ReactForm components ', function () {
        const component = shallow(<ReactForm />);
        const field = component.find("input").at(0);
        field.simulate('change', {target: {value: 'go'}});
        const span = component.find("span");
        expect(span.text()).toBe("firstName should not be less than 3 characters");
    });
    it('should render reactform component', function () {
        const component=shallow(<ReactForm/>);
        const field=component.find("input").at(1);
        field.simulate('change',{target:{value:"mo"}});
        const span=component.find("span");
        expect(span.text()).toBe("lasttName should not be less than 3 characters");
    });
    it('should find button from reactform component', function () {
        const component=shallow(<ReactForm/>);
        const button=component.find("button");
        button.simulate('click');
        const span1=component.find('span').at(0);
        const span2=component.find('span').at(1);
        expect(span1.text()).toBe("this field is required");
        expect(span2.text()).toBe("this field is required");
    });
    it('should render rectform', function () {
        const component=shallow(<ReactForm/>);
        const field=component.find("input").at(0);
        field.simulate('change',{target:{value:"<hello>"}});
        const span=component.find("span");
        expect(span.text()).toBe("tags not allowed");

    });


});