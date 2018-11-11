function validate(values) {

    const errors = {};

    // Validate the inputs from 'values'
    if (!values.company) {
        errors.company = "Enter Company";
    }
    if (!values.position) {
        errors.position = "Enter Position";
    }
    if (!values.location) {
        errors.location = "Enter Location";
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default validate;