import { useContext } from "react";
import { FormContext } from "./Form";

const FormInput = ({
    label,
    labelClassName,
    id,
    type = "text",
    placeholder,
    className,
    name,
    children,
}) => {
    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext;

    if (type === "select") {
        return (
            <>
                <label htmlFor={id} className={labelClassName}>
                    {label}
                </label>
                <select
                    id={id}
                    type={type}
                    value={form[name]}
                    name={name}
                    onChange={handleFormChange}
                    className={className}
                    placeholder={placeholder}
                >
                    {<option value="">-- SELECT ONE --</option>}
                    {children}
                </select>
            </>
        );
    }

    return (
        <>
            <label htmlFor={id} className={labelClassName}>
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={form[name]}
                name={name}
                onChange={handleFormChange}
                className={className}
                placeholder={placeholder}
            />
        </>
    );
};

export default FormInput;
