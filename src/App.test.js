import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';
import Header from "./Header";

describe('App', function () {
  it('should render Button', function () {
    const component = shallow(<App />);
    const header = component.find(Header);

    expect(header.exists()).toBe(true);
  });
});