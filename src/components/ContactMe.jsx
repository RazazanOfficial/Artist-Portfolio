'use client';
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '@/styles/contactMe.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = ({
    error1,
    success,
    error2,
    contactMe,
    firstName,
    lastName,
    email,
    subject,
    message,
    submit,
}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        validate();
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setTouched({ ...touched, [name]: true });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.firstName || formData.firstName.length < 3) {
            formErrors.firstName = error1;
        }
        if (!formData.lastName || formData.lastName.length < 3) {
            formErrors.lastName = error1;
        }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = error1;
        }
        if (!formData.subject) {
            formErrors.subject = error1;
        }
        if (!formData.message) {
            formErrors.message = error1;
        }
        setErrors(formErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.keys(errors).length !== 0) {
            return;
        }

        emailjs
            .send(
                'service_f0i2f6r',
                'template_h3a1mc6',
                formData,
                'OD-Y3Ii5iWAYLNo2I'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success(success);
                },
                (error) => {
                    console.log(error.text);
                    toast.error(error2);
                }
            );
    };

    const renderIcon = (field) => {
        if (errors[field] && touched[field]) {
            return <span className="text-danger">❌</span>;
        } else if (!errors[field] && touched[field]) {
            return <span className="text-success">✔️</span>;
        }
        return null;
    };

    return (
        <div className="container mt-5 contact-me p-5 rounded-4 mb-5">
            <h2>{contactMe}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                        {firstName} {renderIcon('firstName')}
                    </label>
                    <input
                        type="text"
                        className={`form-control ${
                            errors.firstName && touched.firstName
                                ? 'is-invalid'
                                : ''
                        }`}
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && touched.firstName && (
                        <div className="invalid-feedback">
                            {errors.firstName}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                        {lastName} {renderIcon('lastName')}
                    </label>
                    <input
                        type="text"
                        className={`form-control ${
                            errors.lastName && touched.lastName
                                ? 'is-invalid'
                                : ''
                        }`}
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && touched.lastName && (
                        <div className="invalid-feedback">
                            {errors.lastName}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        {email} {renderIcon('email')}
                    </label>
                    <input
                        type="email"
                        className={`form-control ${
                            errors.email && touched.email ? 'is-invalid' : ''
                        }`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && touched.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                        {subject} {renderIcon('subject')}
                    </label>
                    <input
                        type="text"
                        className={`form-control ${
                            errors.subject && touched.subject
                                ? 'is-invalid'
                                : ''
                        }`}
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    {errors.subject && touched.subject && (
                        <div className="invalid-feedback">{errors.subject}</div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        {message} {renderIcon('message')}
                    </label>
                    <textarea
                        className={`form-control ${
                            errors.message && touched.message
                                ? 'is-invalid'
                                : ''
                        }`}
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && touched.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                    )}
                </div>
                <button type="submit" className="btn btn-success">
                    {submit}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactMe;
