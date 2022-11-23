import PropTypes from 'prop-types';
import React from 'react';

function Button(
    {
        children,
        leftIcon,
        className,
        onClick,
        type = 'button'
    }
) 
{
    return (
        <button type={type} onClick={onClick} className={`w-full flex justify-center py-3 text-base font-semibold rounded-[10px] leading-[26px] ${className}`}>
            {leftIcon && <span className="mr-2.5">{leftIcon}</span>}
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    className: PropTypes.string
}

export default React.memo(Button)
