import React from 'react';
import { shallow, mount } from 'enzyme';
import Keypad from './Keypad';
import Keys from '../Keys/Keys';

describe('Keypad', () => {
    let wrapper;
  
    beforeEach(() => {
        wrapper = shallow(
            <Keypad

                /**
                 * Since we are restricted from accessing functions from Calculator component we donot have access to methods.
                 * In place of these methods, we use jest.fn(), a Jest function that creates a mock function.
                 */
                callOperator={jest.fn()}
                numbers={[]}
                operators={[]}
                setOperator={jest.fn()}
                updateDisplay={jest.fn()}
            />
        );
    });
  
    it('should render 4 <div />\'s', () => {
        expect(wrapper.find('div').length).toEqual(4);
    });
  
    it('should render an instance of the Key component for each index of numbers, operators, and the submit Key', () => {
        const numbers = ['0', '1'];
        const operators = ['+', '-'];
        const submit = 1;
        const keyTotal = numbers.length + operators.length + submit;
        wrapper.setProps({ numbers, operators });
        expect(wrapper.find('Keys').length).toEqual(keyTotal);
    });
  });
  
describe('mounted Keypad', () => {
    let wrapper;
  
    beforeEach(() => {
        wrapper = mount(
            <Keypad
                callOperator={jest.fn()}
                numbers={[]}
                operators={[]}
                setOperator={jest.fn()}
                updateDisplay={jest.fn()}
            />
        );
    });

    it('renders the values of numbers to the DOM', () => {
        wrapper.setProps({ numbers: ['0', '1', '2'] })
        expect(wrapper.find('.numbers-container').text()).toEqual('012');
    });

    it('renders the values of operators to the DOM', () => {
        wrapper.setProps({ operators: ['+', '-', '*', '/'] });
        expect(wrapper.find('.operators-container').text()).toEqual('+-*/');
    });

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});