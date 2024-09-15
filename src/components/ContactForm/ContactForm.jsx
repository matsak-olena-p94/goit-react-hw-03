import { Field, Form, Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import * as Yup from "yup";
import s from './ContactForm.module.css'



export default function ContactForm( {adding} ) {
    const FeedbackOfYup = Yup.object().shape({
        name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required")
    });

    
    const defaultValues = {
        name:'',
        number:'',
        id: ''
    }

    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, options) => {
        values.id = nanoid()
        adding(values)
        options.resetForm();
    }
    return (
        <div className={s.formWraper}>
        <Formik initialValues={defaultValues} onSubmit={handleSubmit} validationSchema={FeedbackOfYup}>
            <Form className={s.form}>
                <label className={s.label} htmlFor={nameFieldId}>
                <span className={s.span}>Name</span>
                <Field name='name' id={nameFieldId}/>
                </label>
                <ErrorMessage className={s.warning} name="name" component="span" />
                <label className={s.label} htmlFor={numberFieldId}>
                    <span className={s.span}>Number</span>
                <Field name='number' id={numberFieldId}/>
                </label>
                <ErrorMessage className={s.warning} name="number" component="span" />
                <button className={s.btn} type="submit">Add contact</button>
            </Form>
        </Formik>
        </div>
    )
}