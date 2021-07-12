import React from 'react';
import PropTypes from 'prop-types';
import './Keypad.css';
import Keys from '../Keys/Keys';

const Keypad = ({ 
    callOperator, 
    numbers, 
    operators, 
    setOperator, 
    updateDisplay
}) => {
    const numberKeys = numbers.map(number => (
        <Keys
            key={number}
            keyAction={updateDisplay}
            keyType="number-key"
            keyValue={number}
        />)   
    );

    const operatorKeys = operators.map(operator => (
        <Keys
            key={operator}
            keyAction={setOperator}
            keyType="operator-key"
            keyValue={operator}
        />)
    );

    return (
        <div className="keypad-container">
            <div className="numbers-container">
                {numberKeys}
            </div>
            <div className="operators-container">
                {operatorKeys}
            </div>
            <div className="submit-container">

                {/*
                    The Keys component is also stateless and it receives the following props:
                    -keyAction - the function related to the key type.
                    -keyType - a string used to determine which CSS rules the Key will have.
                    -keyValue - a string used to determine the value to be passed to the keyAction function. 
                */}   
                <Keys
                    keyAction={callOperator}
                    keyType="submit-key"
                    keyValue="="
                />
            </div>
        </div>
    );
}

Keypad.propTypes = {
    callOperator: PropTypes.func.isRequired,
    numbers: PropTypes.array.isRequired,
    operators: PropTypes.array.isRequired,
    setOperator: PropTypes.func.isRequired,
    updateDisplay: PropTypes.func.isRequired,
}

Keypad.defaultProps = {
    numbers: [],
    operators: [],
};

export default Keypad;