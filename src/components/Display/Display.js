import React from 'react';

/*
prop-types allow us to document the intended types of properties passed to our components as well as throw warnings 
during development, if the types passed to the component do not match the props contained in the ComponentName.propTypes object.
*/
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ displayValue }) => (
    <div className="display-container">
        <p className="display-value">
            {displayValue}
        </p>
    </div>
);

// PropTypes here will make sure that it is of type 'String'
Display.propTypes = { displayValue: PropTypes.string.isRequired };

export default Display;