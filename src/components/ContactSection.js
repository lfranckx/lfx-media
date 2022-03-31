import React, { useState } from 'react';
import '../styles/ContactSection.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';
import me from '../images/me.png';

export default function ContactSection() {
    const [messageSuccess, toggleMessageSuccess] = useState(false);
    const [buttonState, handleButtonState] = useState('Send');
    const [buttonDisabled, handleButtonDisabled] = useState(false);
    const [message, handleMessage] = useState('');

    const submitForm = (values) => {
        handleButtonState('Sending');
        const newValues = {
            email: values.email,
            message: values.message,
            name: values.name,
            phone: values.phone,
            reply_to: values.email
        }

        try {
            emailjs.send("service_if54qk7", "template_5f9yjza", newValues, "user_4ZnH44kohKcJmQhnL2VGX")
            .then(res => {
                    toggleMessageSuccess(true);
                    handleButtonState('Sent!');
                    handleButtonDisabled(true);
                }
            )
        } catch (error) {
            handleMessage(error.message);
        }
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const contactFormSchema = Yup.object().shape({
        name: Yup.string().min(2, '* Name is too short').max(20, "* 20 maximum characters").required('* Required'),
        email: Yup.string().email("* Invalid email").required("* Required"),
        phone: Yup.string().matches(phoneRegExp, `* This doesn't look like a phone number`).max(10, '* Phone number is too long').required("* Required"),
        message: Yup.string().min(2, "* Message is too short").max(120, "* 120 maximum characters").required("* Required"),
    })

    return (
        <section id='contact-section' className='flex'>
            <div>
                <img src={me} alt='Myself and the pups' width='250px'/>
            </div>

            <div className='form-wrap'>
                <h2>Run your business while I grow your buiness.</h2>
                <Formik 
                    initialValues={{ name: "", email: "", phone: "", message: ""}} 
                    validationSchema={contactFormSchema}
                    onSubmit={submitForm}
                >
                    <Form>
                        <div className='flex'>
                            <div className='wrap'>
                                <div className="label">
                                    <label htmlFor="name"></label>
                                </div>
                                <div>
                                    <Field
                                        name="name"
                                        placeholder='Your Full Name'
                                    />
                                </div>
                                <div>
                                    <ErrorMessage component="div" className='error' name='name' />
                                </div>

                                <div className="label">
                                    <label htmlFor="email"></label>
                                </div>
                                <div>
                                    <Field
                                        name="email"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div>
                                    <ErrorMessage component="div" className='error' name='email' />
                                </div>

                                <div className="label">
                                    <label htmlFor="phone"></label>
                                </div>
                                <div>
                                    <Field
                                        name="phone"
                                        placeholder='Your Phone Number'
                                    />
                                </div>
                                <div>
                                    <ErrorMessage component="div" className='error' name='phone' />
                                </div>
                            </div>

                            <div className='wrap'>
                                <div className="message-label">
                                    <label htmlFor="message"></label>
                                </div>

                                <div>
                                    <Field
                                        name="message"
                                        as='textarea'
                                        rows='10'
                                        placeholder='Message'
                                    />
                                </div>
                                <div>
                                    <ErrorMessage component="div" className='error' name='message' />
                                </div>
                            </div>
                        </div>

                        <button className="btn" type="submit" disabled={buttonDisabled}>
                            {buttonState}
                        </button> 
                    </Form>  
                </Formik>

                {message && <div className='message'>{message}</div>}
            </div>
        </section>
    );
}