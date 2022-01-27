import React from 'react';
import classes from './buttonStyle.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.test_button}>
            {children}
        </button>
    );
};

export default MyButton;