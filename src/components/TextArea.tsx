import React, { Dispatch, SetStateAction, useState, forwardRef, useEffect } from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string
    error?: string
    value?: string | number
    setValue?: Dispatch<SetStateAction<string>>
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(({
    placeholder,
    error,
    value,
    setValue,
    ...props 
}, ref) => {

    const [showError, setShowError] = useState(false)

    useEffect(() => {   
        if (error) {
            setShowError(true)
        }
    }, [error])

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length === 0) {
            setShowError(true)
        } else {
            setShowError(false)
        }
    }

    return (
        <div className="max-w-[300px] flex flex-col justify-center items-center gap-4 relative my-2">
                        {/* <>{console.log('Error:', error)}
            </> */}
            <div className="relative w-full">
                <textarea
                    ref={ref} 
                    className={`bg-gray-950 border-2 rounded-lg w-full text-slate-50 text-xs px-2 py-2 focus:border-blue-700 focus:outline-none
                                ${showError ? 'border-red-500' : 'border-gray-800'}
                            `}
                    placeholder={placeholder ? placeholder : 'Text ...'}
                    value={value}
                    onChange={handleTextAreaChange}
                    {...props} 
                />
            </div>
            {showError && <p className="text-xs text-red-500 mx-2">{error}</p>}
        </div>
    );
});

export default TextArea