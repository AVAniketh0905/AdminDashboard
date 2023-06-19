"use client"

import FormComponent from "@/components/formUser";
import HeadingComponent from "@/components/heading";
import { Formik } from "formik";
import * as yup from 'yup';

type FormValues = {
    name: string;
    email: string;
    message: string;
}

const initialValues: FormValues = {
    name: '',
    email: '',
    message: ''
}

const validationSchema = yup.object({
    name: yup.string().required('Name is required!'),
    email: yup.string().email('Invalid email format!Please Enter a proper Email.').required('Email is required!'),
    message: yup.string().required('Message is required!!')
})

export default function Contact() {

    const handleSubmit = (values: FormValues, setSubmitting: any) => {
        console.log(values);
        setSubmitting(false);
    }

    return (
        <main>
            <HeadingComponent heading="Contact" subheading="Connect with me for more!" />
            <Formik
                onSubmit={
                    (values, { setSubmitting }) => handleSubmit(values, setSubmitting)
                }
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <FormComponent values={values} touched={touched} errors={errors} isSubmitting={isSubmitting} handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} />
                )}
            </Formik>
        </main>         
    )
}
