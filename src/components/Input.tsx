interface Props {
    placeholder?: string
    error?: string
}

const Input = ({
    placeholder,
    error
}: Props) => {
  return (
    <div
        className="max-w-[300px] flex flex-col justify-center items-center gap-4"
    >
        <input 
            className={`bg-gray-950 border-2 rounded-lg w-full text-slate-50 text-xs px-2 py-2 focus:border-blue-700 focus:outline-none
                            ${error ? 'border-red-500' : 'border-gray-800'}
                        `}
            placeholder={placeholder ? placeholder : 'Input ...'}
            type="password"
        />
        {error && <p className="text-xs text-red-500 mx-2">{error}</p>}
    </div>
  )
}

export default Input