import { RiEyeFill, RiEyeOffFill } from "@remixicon/react"
import { useState } from "react"

interface Props {
    placeholder?: string
    error?: string
    type?: string
}

const Input = ({
    placeholder,
    error,
    type
}: Props) => {

    const [showPassword, setShowPassword] = useState(type === 'password' && true)

    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

  return (
    <div
        className="max-w-[300px] flex flex-col justify-center items-center gap-4 relative"
    >
        <input 
            className={`bg-gray-950 border-2 rounded-lg w-full text-slate-50 text-xs px-2 py-2 focus:border-blue-700 focus:outline-none
                            ${error ? 'border-red-500' : 'border-gray-800'}
                        `}
            placeholder={placeholder ? placeholder : 'Input ...'}
            type={showPassword ? 'password' : 'text'}
        />
        {type === 'password' && 
            <button 
                onClick={handleShowPassword}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-400"
            >
                {
                    showPassword 
                    ?
                    <RiEyeFill 
                        className="size-5 shrink-0"
                    />
                    :
                    <RiEyeOffFill 
                        className="size-5 shrink-0"
                    />
                }
            </button>}
        {error && <p className="text-xs text-red-500 mx-2">{error}</p>}
    </div>
  )
}

export default Input