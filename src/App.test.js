import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';
import Header from "./Header";
import ReactForm from "./ReactForm";

describe('App', function () {
  it('should render App component', function () {
    const component = shallow(<App />);
    const header = component.find(Header);

    expect(header.exists()).toBe(true);
  });
  it('should render App component', function () {
    const component=shallow(<App/>);
    const form=component.find(ReactForm);
    expect(form.exists()).toBe(true);

  });
});