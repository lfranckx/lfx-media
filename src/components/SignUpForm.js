import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignUpForm = () => {
    const [message, handleMessage] = useState();
    const [btnDisabled, handleBtnDisabled] = useState(false);
    const [btnMessage, handleBtnMessage] = useState('Sign Up')

    const submitForm = async (values) => {
        const { email, name } = values;

        try {
            const payload = {
                id: 'lfxmedia',
                email_address: email,
                name: name
            };

            await axios.post("https://serene-journey-81970.herokuapp.com/", payload);
            handleBtnMessage('Sent');
            handleBtnDisabled(true);
            handleMessage({ name: name, email: email});

        } catch (error) {
            console.log(error.message);
            handleMessage(error.message);
        }
    }

    const SignUpSchema = Yup.object().shape({
        email: Yup.string().email("* Invalid email").required("* Email is Required"),
        name: Yup.string().min(2, '* Name is too short').max(20, "* 20 maximum characters").required('* First Name is Required'),
    });

    return (
        <>
            <Formik
                initialValues={{ email: ''}}
                validationSchema={SignUpSchema}
                onSubmit={submitForm}
            >
                <Form>
                    <div>
                        <label htmlFor='name' id='name'>
                            <Field name='name' placeholder='First Name' />
                        </label>
                    </div>
                    <div>
                        <ErrorMessage component="div" className='error' name='name' />
                    </div>

                    <div>
                        <label htmlFor='email' id='email'>
                            <Field name='email' placeholder='Email' />
                        </label>
                    </div>
                    <div>
                        <ErrorMessage component="div" className='error' name='email' />
                    </div>
                    
                    <button 
                        className='btn' 
                        type='submit'
                        disabled={btnDisabled}
                    >
                            {btnMessage}
                    </button>
                </Form>
            </Formik>
            {message && 
                <div className='message'>
                    <h3>You're all set. Thank you {message.name}!</h3>
                    <p>Your newsletter will be emailed to: <strong className='green'>{message.email}</strong></p>
                    <p>If this is not your email feel free to fill out the form again.</p>
                </div>}
        </>
    )
}


export default SignUpForm;