import React, { Dispatch, SetStateAction, useState, forwardRef, useEffect } from "react";
import { RiEyeFill, RiEyeOffFill } from "@remixicon/react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
    error?: string
    type?: string
    value?: string | number
    setValue?: Dispatch<SetStateAction<string>>
}

const Input = forwardRef<HTMLInputElement, Props>(({
    placeholder,
    error,
    type = "text",
    value,
    setValue,
    ...props 
}, ref) => {
    const [showPassword, setShowPassword] = useState(type === 'password');
    const [showError, setShowError] = useState(false)

    useEffect(() => {   
        if (error) {
            setShowError(true)
        }
    }, [error])

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleCheckForNumbers(e)
        if (e.target.value.length === 0) {
            setShowError(true)
        } else {
            setShowError(false)
        }
    }

    return (
        <div className="max-w-[300px] flex flex-col justify-center items-center gap-4 relative my-2">
            <>{console.log('Error:', error)}
            </>
            <>{console.log('show Error:', showError)}
            </>
            <div className="relative w-full">
                <input
                    ref={ref}
                    className={`bg-gray-950 border-2 rounded-lg w-full text-slate-50 text-xs px-2 py-2 focus:border-blue-700 focus:outline-none
                                ${showError ? 'border-red-500' : 'border-gray-800'}
                            `}
                    placeholder={placeholder ? placeholder : 'Input ...'}
                    type={showPassword && type === 'password' ? 'text' : type} // Use showPassword to toggle visibility
                    value={value}
                    onChange={handleInputChange}
                    {...props} 
                />
                {type === 'password' && (
                    <button
                        type="button"
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
            </div>
            {showError && <p className="text-xs text-red-500 mx-2">{error}</p>}
        </div>
    );
});

// Export the Input component
export default Input;
