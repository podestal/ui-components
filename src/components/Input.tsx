import React, { Dispatch, SetStateAction, useState, forwardRef } from "react";
import { RiEyeFill, RiEyeOffFill } from "@remixicon/react";

// Define the props interface
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    error?: string;
    type?: string;
    value?: string | number;
    setValue?: Dispatch<SetStateAction<string>>;
}

// Use forwardRef to wrap the component
const Input = forwardRef<HTMLInputElement, Props>(({
    placeholder,
    error,
    type = "text", // Default type to "text"
    value,
    setValue,
    ...props // Spread the rest of the props
}, ref) => {
    const [showPassword, setShowPassword] = useState(type === 'password');

    const handleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    const handleCheckForNumbers = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (type === 'number') {
            if (/^\d*(\.\d*)?$/.test(newValue)) {
                setValue && setValue(newValue);
            }
        } else {
            setValue && setValue(newValue);
        }
    };

    return (
        <div className="max-w-[300px] flex flex-col justify-center items-center gap-4 relative">
            <input
                ref={ref} // Attach the forwarded ref here
                className={`bg-gray-950 border-2 rounded-lg w-full text-slate-50 text-xs px-2 py-2 focus:border-blue-700 focus:outline-none
                            ${error ? 'border-red-500' : 'border-gray-800'}
                        `}
                placeholder={placeholder ? placeholder : 'Input ...'}
                type={showPassword && type === 'password' ? 'text' : type} // Use showPassword to toggle visibility
                value={value}
                onChange={handleCheckForNumbers}
                {...props} // Pass other props (e.g., onBlur, onFocus, etc.)
            />
            {type === 'password' && (
                <button
                    onClick={handleShowPassword}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-400"
                >
                    {showPassword ? (
                        <RiEyeFill className="size-5 shrink-0" />
                    ) : (
                        <RiEyeOffFill className="size-5 shrink-0" />
                    )}
                </button>
            )}
            {error && <p className="text-xs text-red-500 mx-2">{error}</p>}
        </div>
    );
});

// Export the Input component
export default Input;
