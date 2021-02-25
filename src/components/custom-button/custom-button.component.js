import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignin, inverted, ...otherProps }) => {
    return (
        <button className={`${inverted ? 'custom-button--inverted' : ''} ${
                isGoogleSignin ? 'custom-button--google-sign-in' : ''
            } custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;
