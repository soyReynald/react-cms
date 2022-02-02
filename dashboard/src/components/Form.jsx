import React, { useState } from "react";

export const FormContext = React.createContext({
    form: {},
});

const Form = ({
    children,
    submit = () => {},
    buttonClassName,
    buttonLabel,
    ...props
}) => {
    // this object is customizable
    const [form, setForm] = useState(props.propsInitialState); // propsState are the initial values of the form

    const handleFormChange = (event) => {
        // Get the name of the field that caused this change event
        // Get the new value of this field
        const { name, value } = event.target;

        // Assign new value to the appropriate form field
        const updatedForm = {
            ...form,
            [name]: value,
        };

        // Update state
        setForm(updatedForm);
    };
    return (
        <form className={props.className}>
            <FormContext.Provider
                value={{
                    form,
                    handleFormChange,
                }}
            >
                {children}
            </FormContext.Provider>

            <button
                className={buttonClassName}
                type="button"
                onClick={() => submit(form)}
            >
                {buttonLabel}
            </button>
        </form>
    );
};

export default Form;
