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
    if (!values.files) {
        errors.files = "Please upload your company logo";
    }
    if (!values.type) {
        errors.type = "Enter the type of employment";
    }
    if (!values.Seniority) {
        errors.Seniority = "Enter Seniority";
    }

    // if (!values.experience) {
    //     errors.company = "Enter experience";
    // }
    //
    // if (!values.easyApply) {
    //     errors.company = "Enter easyApply";
    // }

    if (!values.description) {
        errors.description = "Enter description";
    }

    if (!values.industry) {
        errors.industry = "Enter industry";
    }

    if (!values.function) {
        errors.function = "Enter function";
    }




    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default validate;