import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span>{error}</span> : false

const jobsFormSecond = props => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" type="email" component={renderField} label="Email" />
            <div>
                <label>Sex</label>
                <div>
                    <label>
                        <Field
                            name="sex"
                            component="input"
                            type="radio"
                            value="male"
                        />{' '}
                        Male
                    </label>
                    <label>
                        <Field
                            name="sex"
                            component="input"
                            type="radio"
                            value="female"
                        />{' '}
                        Female
                    </label>
                    <Field name="sex" component={renderError} />
                </div>
            </div>
            <div>
                <button type="button" className="previous" onClick={previousPage}>
                    Previous
                </button>
                <button type="submit" className="next">
                    Next
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'postJob', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(jobsFormSecond)