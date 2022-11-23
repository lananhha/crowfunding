import PropTypes from 'prop-types';
import React, { useState } from 'react'

function InputComponent({ label, type, placeholder, name, value, onChange, errorMessage, isError, onBlur, icon, children }) {

    const EyeIconOpen = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12C3 12 6.27273 5 12 5C17.7273 5 21 12 21 12C21 12 17.7273 19 12 19C6.27273 19 3 12 3 12Z" stroke="#A2A2A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#A2A2A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    const EyeIconClose = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7345 13.855C13.5098 14.1129 13.2388 14.3198 12.9378 14.4632C12.6367 14.6067 12.3116 14.6839 11.9821 14.6901C11.6525 14.6963 11.3251 14.6315 11.0195 14.4994C10.7139 14.3674 10.4362 14.1709 10.2031 13.9216C9.97007 13.6724 9.78632 13.3755 9.66287 13.0486C9.53942 12.7217 9.47879 12.3716 9.48461 12.0192C9.49042 11.6667 9.56256 11.3191 9.69672 10.9971C9.83087 10.6751 10.0243 10.3853 10.2655 10.145M16.86 17.1975C15.4614 18.3376 13.7584 18.9693 12 19C6.27273 19 3 12 3 12C4.01773 9.97167 5.42929 8.19955 7.14 6.80252L16.86 17.1975ZM10.2818 5.21002C10.845 5.06904 11.4216 4.99857 12 5.00002C17.7273 5.00002 21 12 21 12C20.5033 12.9937 19.911 13.9292 19.2327 14.7913L10.2818 5.21002Z" stroke="#A2A2A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 2.5L21 21" stroke="#A2A2A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    const ArrowDownIcon = <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L6 6L11 1" stroke="#A2A2A8" strokeWidth="2" />
    </svg>


    const [openPassword, setOpenPassword] = useState(false)

    const toggleEye = () => {
        setOpenPassword(prev => !prev)
    }

    return (
        <div className='mb-5 relative'>
            <label className=" inline-block text-sm text-text2 font-medium leading-[22px] mb-2">{label}</label>
            <input
                type={type || (openPassword ? 'text' : 'password')}
                name={name}
                placeholder={placeholder}
                value={value}
                autoFocus={openPassword}
                onChange={onChange}
                onBlur={onBlur}
                className="w-full z-10 border rounded-[10px] border-[#F1F1F3] py-4 lg:pr-11 pr-7 pl-6 placeholder:text-text4 text-sm text-text1 font-medium outline-none input-password"
            />
            {isError && <div className='text-sm text-red-500 p-2 font-medium'>{errorMessage}</div>}
            {icon &&
                (<div onClick={toggleEye} className='cursor-pointer'>
                    {openPassword ?
                        (<span className='absolute lg:right-5 lg:top-[48px] right-4 top-12'>{EyeIconOpen}</span>) :
                        (<span>
                            <span className='hidden lg:inline absolute lg:right-5 lg:top-[48px] right-4 top-14 '>{EyeIconClose}</span>
                            <span className='lg:hidden inline absolute right-4 top-14'>{ArrowDownIcon}</span>
                        </span>)}
                </div>)}
            {children}
        </div>
    );
}

InputComponent.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string
}

export default React.memo(InputComponent);