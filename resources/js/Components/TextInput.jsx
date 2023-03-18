import { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../../css/input.css";

const TextInput = forwardRef(function TextInput(
    {
        type = "text",
        name,
        id,
        value,
        className,
        autoComplete,
        required,
        isFocused,
        handleChange,
        defaultValue,
        variant = "primary",
        placeholder,
        isError,
        step,
        min,
        max,
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                    isError && "input-error"
                } input-${variant} ${className}`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                defaultValue={defaultValue}
                placeholder={placeholder}
                step={step}
                min={min}
                max={max}
            />
        </div>
    );
});

TextInput.propTypes = {
    type: PropTypes.oneOf([
        "text",
        "email",
        "password",
        "number",
        "file",
        "url",
    ]),
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
    step: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
};

export default TextInput;

// export default forwardRef(function TextInput(
//     {
//         type = "text",
//         name,
//         id,
//         value,
//         className,
//         autoComplete,
//         required,
//         isFocused,
//         handleChange,
//         defaultValue,
//         variant = "primary",
//         placeholder,
//         isError,
//     },
//     ref
// ) {
//     const input = ref ? ref : useRef();

//     useEffect(() => {
//         if (isFocused) {
//             input.current.focus();
//         }
//     }, []);

//     return (
//         <div className="flex flex-col items-start">
//             <input
//                 type={type}
//                 name={name}
//                 id={id}
//                 value={value}
//                 className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
//                     isError && "input-error"
//                 } input-${variant} ${className}`}
//                 ref={input}
//                 autoComplete={autoComplete}
//                 required={required}
//                 onChange={(e) => handleChange(e)}
//                 defaultValue={defaultValue}
//                 placeholder={placeholder}
//             />
//         </div>
//     );
// });
