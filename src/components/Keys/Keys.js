import React from 'react';
import PropTypes from 'prop-types';
import './Keys.css';

/**
 * 
 *  The Keys component is also stateless and it receives the following props:
     -keyAction - the function related to the key type.
     -keyType - a string used to determine which CSS rules the Key will have.
     -keyValue - a string used to determine the value to be passed to the keyAction function.
 */
const Keys = ({ 
    keyAction, 
    keyType, 
    keyValue 
}) => (
    <div className={ `key-container ${keyType}` } onClick={() => keyAction(keyValue)}>
        <p className="key-value">
            {keyValue}
        </p>
    </div>
);

Keys.propTypes = {
  keyAction: PropTypes.func.isRequired,
  keyType: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
}

export default Keys;