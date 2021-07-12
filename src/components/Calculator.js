import React, { Component } from 'react';
import Display from './Display/Display';
import Keypad from './Keypad/Keypad';
import './Calculator.css';

/**
 * Calculator a Stateful component - these are class-based and allow us to set mutable component state variables that may be passed 
 * as props to child components.
 */
class Calculator extends Component {

  // Initial state variables
  state = {
    
    // value to be displayed in <Display />
    displayValue: '0',

    // values to be displayed in number <Keys />
    numbers: ['1','2','3','4','5','6','7','8','9','.', '0', 'ce'],
    
    // values to be displayed in operator <Keys />
    operators: ['/', 'x', '-', '+'],
    
    // operator selected for math operation
    selectedOperator: '',
    
    // stored value to use for math operation
    storedValue: '',
  }

  // Handles math operation
  callOperator = () => {
    let { displayValue, selectedOperator, storedValue } = this.state;
    
    // temp variable for updating state storedValue
    const updateStoredValue = displayValue;

    // parse strings for operations
    displayValue = parseInt(displayValue, 10);
    storedValue = parseInt(storedValue, 10);

    // performs selected operation
    switch (selectedOperator) {
      case '+':
        displayValue = storedValue + displayValue;
        break;
      case '-':
        displayValue = storedValue - displayValue;
        break;
      case 'x':
        displayValue = storedValue * displayValue;
        break;
      case '/':
        displayValue = storedValue / displayValue;
        break;
      default:
        
      // set displayValue to zero if no case matches
        displayValue = '0';
    }

    // converts displayValue to a string
    displayValue = displayValue.toString();
    // reset selectedOperator
    selectedOperator = '';
    // check for 'NaN' or 'Infinity', if true set displayValue to '0'
    if (displayValue === 'NaN' || displayValue === 'Infinity') displayValue = '0';

    this.setState({ displayValue, selectedOperator, storedValue: updateStoredValue });
  }

  // Saves the chosen operator to the component state object
  setOperator = value => {
    let { displayValue, selectedOperator, storedValue } = this.state;

    // check if a value is already present for selectedOperator
    if (selectedOperator === '') {
      
      // update storedValue to the value of displayValue
      storedValue = displayValue;
      
      // reset the value of displayValue to '0'
      displayValue = '0';
      
      // update the value of selectedOperator to the given value
      selectedOperator = value;
    } else {
      
      // if selectedOperator is not an empty string
      // update the value of selectedOperator to the given value
      selectedOperator = value;
    }

    this.setState({ displayValue, selectedOperator, storedValue });
  }

  // Updates and renders the display value to the DOM
  updateDisplay = value => {
    let { displayValue } = this.state;

    // prevent multiple occurences of '.'
    if (value === '.' && displayValue.includes('.')) value = '';

    if (value === 'ce') {
      
      // deletes last char in displayValue
      displayValue = displayValue.substr(0, displayValue.length - 1);
      
      // set displayValue to '0' if displayValue is empty string
      if (displayValue === '') displayValue = '0';
    } else {
      
      // replace displayValue with value if displayValue equal to '0'
      // else concatenate displayValue and value
      displayValue === '0' ? displayValue = value : displayValue += value;
    }

    this.setState({ displayValue });
  }  

  render = () => {
    // unpack the component state by using Object Destructuring, this gives us access to initial state as:
    // displayValue = 0, numbers = array of numbers, operators = + - * /
    const { displayValue, numbers, operators } = this.state;
    
    return (
      <div className="calculator-container">

        {/* This is a stateless component, which receives a single prop, displayValue. */}
        <Display displayValue={displayValue} />

        {/* 
          This is also a stateless component, which houses all of the keys. 
          It receives the following props: callOperator, numbers, operators, setOperator, updateDisplay
        */}
        <Keypad
          callOperator={this.callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  }
}

export default Calculator;