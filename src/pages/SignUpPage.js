import { Link } from 'react-router-dom'
import React, { useState } from 'react';

import LayoutAuthentication from "../layout/LayoutAuthentication";
import Button from '../components/Button';
import InputComponent from '../components/InputComponent';
import Checkbox from '../components/Checkbox';

function SignUpPage() {

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    const [acceptTerm, setAcceptTerm] = useState(false)
    const [inputValue, setInputValue] = useState({
        fullName: '',
        email: '',
        password: ''
    })

    const [isErrorFullName, setIsErrorFullName] = useState(false)
    const [isErrorEmail, setIsErrorEmail] = useState(false)
    const [isErrorPassWord, setIsErrorPassWord] = useState(false)
    const [messageErrorEmail, setMessageErrorEmail] = useState('This field is required')
    const [messageErrorPassword, setMessageErrorPassword] = useState('This field is required')

    const handelOnChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
        if (e.target.name === 'fullName') {
            setIsErrorFullName(false)
        } else if (e.target.name === 'email') {
            setIsErrorEmail(false)
        } else {
            setIsErrorPassWord(false)
        }
    }

    const rules = {
        fullName() {
            if (!inputValue.fullName.trim()) {
                setIsErrorFullName(true);
                return false;
            }
            return true;
        },
        email() {
            if (!inputValue.email.trim()) {
                setIsErrorEmail(true)
                return false
            }
            if (!regexEmail.test(inputValue.email) && inputValue.email.trim()) {
                setIsErrorEmail(true)
                setMessageErrorEmail('This field is email address')
                return false
            }
            return true
        },
        password() {
            if (!inputValue.password.trim()) {
                setIsErrorPassWord(true)
                return false
            }
            if (!regexPassword.test(inputValue.password) && inputValue.password.trim()) {
                setIsErrorPassWord(true)
                setMessageErrorPassword('Password must be minimum eight characters, at least one letter and one number')
                return false
            }
            return true
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const rulesFullName = rules.fullName()
        const rulesEmail = rules.email()
        const rulesPassword = rules.password()
        if (rulesFullName && rulesEmail && rulesPassword) console.log("Submit")
        else console.log("No_Submit")
    }

    return (
        <LayoutAuthentication>
        <form onSubmit={handleSubmit} className='lg:w-[556px] w-[327px] h-fit lg:py-12 lg:px-14 py-5 px-[30px] lg:mt-[153px] mt-[84px] bg-white z-[1]'>
            <h3 className='lg:text-[20px] text-lg font-semibold text-center leading-[30px] lg:mb-[10px] mb-[5px] text-text1'>Sign Up</h3>
            <p className='lg:text-[14px] text-xs leading-[18px] lg:leading-[22px] font-normal text-text3 text-center lg:mb-[30px] mb-[25px]'>
                <span>Already have an account? </span>
                <Link to='/signIn' className='text-primary font-medium underline'>Sign in</Link>
            </p>
            <Button className='border border-[#F1F1F3] text-text2 mb-5'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3055 10.0415L21.5 10.0415L21.5 10L12.5 10L12.5 14L18.1515 14C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z" fill="#FBC02D" />
                    <path d="M3.65332 7.3455L6.93882 9.755C7.82782 7.554 9.98082 6 12.5003 6C14.0298 6 15.4213 6.577 16.4808 7.5195L19.3093 4.691C17.5233 3.0265 15.1343 2 12.5003 2C8.65932 2 5.32832 4.1685 3.65332 7.3455Z" fill="#E53935" />
                    <path d="M12.5002 22C15.0832 22 17.4302 21.0115 19.2047 19.404L16.1097 16.785C15.1057 17.5455 13.8577 18 12.5002 18C9.89916 18 7.69066 16.3415 6.85866 14.027L3.59766 16.5395C5.25266 19.778 8.61366 22 12.5002 22Z" fill="#4CAF50" />
                    <path d="M22.3055 10.0415L22.2975 10L21.5 10L12.5 10L12.5 14L18.1515 14C17.7555 15.1185 17.036 16.083 16.108 16.7855C16.1085 16.785 16.109 16.785 16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z" fill="#1565C0" />
                </svg>
                <span className='ml-2.5'>Sign up with google</span>
            </Button>
            <p className='lg:text-sm text-[12px] text-text2 leading-[18px] lg:leading-[22px] font-normal text-center mb-[30px]'>Or sign up with email</p>
            <InputComponent
                name='fullName'
                label='Full Name *'
                placeholder='Jhon Doe'
                value={inputValue.fullName}
                isError={isErrorFullName}
                errorMessage='This field is required'
                onChange={handelOnChange}
                onBlur={() => rules.fullName()}
            />
            <InputComponent
                name='email'
                label='Email *'
                placeholder='example@gmail.com'
                value={inputValue.email}
                isError={isErrorEmail}
                errorMessage={messageErrorEmail}
                onChange={handelOnChange}
                onBlur={() => rules.email()}
            />
            <InputComponent
                name='password'
                label='Password *'
                placeholder='Create a password'
                value={inputValue.password}
                isError={isErrorPassWord}
                errorMessage={messageErrorPassword}
                onChange={handelOnChange}
                onBlur={(e) => {
                    rules.password()}}
                icon={true}
            />
            <div className='flex items-start mb-5'>
                <Checkbox checked={acceptTerm} onClick={() => setAcceptTerm(prev => !prev)} />
                <span className='lg:text-sm text-xs text-text2 leading-[18px] lg:leading-[22px] font-normal flex-1'>
                    I agree to the {' '}
                    <span className='underline text-[#6F49FD] cursor-pointer'>Tearms of Use {' '}</span>
                    and have read and understand the {' '}
                    <span className='underline text-[#6F49FD] cursor-pointer'>Privacy policy.</span>
                </span>
            </div>
            <Button className='bg-primary text-white text-base leading-[26px] font-semibold'>Create my account</Button>
        </form>
    </LayoutAuthentication>
    );
}

export default React.memo(SignUpPage);