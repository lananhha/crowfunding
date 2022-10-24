import PropTypes from 'prop-types';
import React from 'react'

function InputComponent({label, placeholder, type='text', name, value, onChange, errorMessage, isError,onBlur}) {

    return ( 
        <div className="mb-5">
            <label className=" inline-block text-sm text-text2 font-medium leading-[22px] mb-2">{label}</label>
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className="w-full border rounded-[10px] border-[#F1F1F3] py-4 px-6 placeholder:text-text4 text-sm text-text1 font-medium outline-none input-password" 
            />
            {isError && <div className='text-sm text-red-500 p-2 font-medium'>{errorMessage}</div>}
        </div>
     );
}

InputComponent.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string
}

export default React.memo(InputComponent);