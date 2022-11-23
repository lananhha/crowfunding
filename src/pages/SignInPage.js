import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import LayoutAuthentication from "../layout/LayoutAuthentication";
import Button from "../components/Button";
import InputComponent from "../components/InputComponent";

const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email('This field is email address')
        .required('This field is required'),
    password: Yup.string()
        .min(8, "Password must be 8 character ")
        .max(50, 'Too Long!')
        .required('This field is required'),
});


function SignInPage() {
    const [showError, setShowError] = useState(true)
    return (
        <LayoutAuthentication>
            <div className='lg:w-[556px] w-[327px] h-fit lg:py-12 lg:px-14 py-5 px-[30px] lg:mt-[153px] mt-[84px] bg-white z-[1]'>
                <h3 className='lg:text-[20px] text-lg font-semibold text-center leading-[30px] lg:mb-[10px] mb-[5px] text-text1'>Welcome Back!</h3>
                <p className='lg:text-[14px] text-xs leading-[18px] lg:leading-[22px] font-normal text-text3 text-center lg:mb-[30px] mb-[25px]'>
                    <span>Dont have an account? {' '}</span>
                    <Link to='/signUp' className='text-primary font-medium underline'>Sign up</Link>
                </p>
                <Button className='border border-[#F1F1F3] text-text2 mb-5'>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3055 10.0415L21.5 10.0415L21.5 10L12.5 10L12.5 14L18.1515 14C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z" fill="#FBC02D" />
                        <path d="M3.65332 7.3455L6.93882 9.755C7.82782 7.554 9.98082 6 12.5003 6C14.0298 6 15.4213 6.577 16.4808 7.5195L19.3093 4.691C17.5233 3.0265 15.1343 2 12.5003 2C8.65932 2 5.32832 4.1685 3.65332 7.3455Z" fill="#E53935" />
                        <path d="M12.5002 22C15.0832 22 17.4302 21.0115 19.2047 19.404L16.1097 16.785C15.1057 17.5455 13.8577 18 12.5002 18C9.89916 18 7.69066 16.3415 6.85866 14.027L3.59766 16.5395C5.25266 19.778 8.61366 22 12.5002 22Z" fill="#4CAF50" />
                        <path d="M22.3055 10.0415L22.2975 10L21.5 10L12.5 10L12.5 14L18.1515 14C17.7555 15.1185 17.036 16.083 16.108 16.7855C16.1085 16.785 16.109 16.785 16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z" fill="#1565C0" />
                    </svg>
                    <span className='ml-2.5'>Sign in with google</span>
                </Button>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={SignInSchema}
                    validateOnChange={false}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(() => {
                            console.log(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            resetForm();
                        }, 5000)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        handleBlur,
                        handleChange,
                    }) => {
                        return (
                            <form
                                onSubmit={handleSubmit}
                                autoComplete='off'
                            >
                                <InputComponent
                                    type="text"
                                    name='email'
                                    label='Email *'
                                    placeholder='example@gmail.com'
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                >
                                    {touched.email && errors.email && <span className="text-sm text-red-500 font-medium">{errors.email}</span>}
                                </InputComponent>
                                <InputComponent
                                    name='password'
                                    label='Password *'
                                    placeholder='Enter password'
                                    value={values.password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    icon={true}
                                >
                                    {errors.password && touched.password && <span className="text-sm text-red-500 p-2 font-medium">{errors.password}</span>}
                                </InputComponent>
                                <p className="text-sm text-primary leading-[22px] font-medium float-right mb-5 cursor-pointer">Forgot password</p>
                                <Button type="submit" className='bg-primary text-white text-base leading-[26px] font-semibold'>Sign in</Button>
                            </form>)
                    }}
                </Formik>
            </div>
        </LayoutAuthentication>
    );
}

export default React.memo(SignInPage);