import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => {
    return (
        <button className={`custom-button ${isGoogleSignin ? 'custom-button--google-sign-in' : ''}`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;
