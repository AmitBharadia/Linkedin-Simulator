//Define component that you want to render
import React from "react";

function renderField(field) {
    const {
        meta: { touched, error },
        type,
        placeholder,
        value
    } = field;
    const className = `form-group form-control-lg ${
        touched && error ? "has-danger" : ""
        }`;
    console.log("className : " + className);
    return (
        <div class="form-group form-control-lg has-danger">
            <label>{field.label}</label>
            <input
                class="form-control form-control-lg border border border-dark"
                type={type}
                placeholder={placeholder}
                value={value}
                {...field.input}
            />
            <div class={{ className }}>{touched ? error : ""}</div>
        </div>
    );
}

export default renderField;