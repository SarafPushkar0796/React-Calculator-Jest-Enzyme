import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from './components/Calculator';

describe('App component', () => {
  let wrapper;

  /**
   * As the name suggests, any code placed in the beforeEach is executed before each 'it' block. 
   * Placing the 'wrapper' object outside of the beforeEach to make it accessible to tests.
   */
  beforeEach(() => wrapper = shallow(<App />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  });

  /**
   * 'containsMatchingElement', an Enzyme method that returns true or false 
   * based on whether a React element matches an element in the render tree.
   */
  it('should render the Calculator Component', () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});
