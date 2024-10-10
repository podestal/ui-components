import { RiLoader2Fill } from "@remixicon/react"
import { useEffect, useState } from "react"

interface Props {
    label: string
    loading?: boolean
    disable?: boolean
    color?: keyof typeof colors;
}

const colors = {
    blue: {
        enabled: 'bg-blue-700 hover:bg-blue-600 text-slate-50',
        disabled: 'bg-blue-800 text-slate-400 cursor-not-allowed',
    },
    red: {
        enabled: 'bg-red-700 hover:bg-red-600 text-slate-50',
        disabled: 'bg-red-800 text-slate-400 cursor-not-allowed',
    },
    green: {
        enabled: 'bg-green-600 hover:bg-green-500 text-slate-50',
        disabled: 'bg-green-700 text-slate-400 cursor-not-allowed',
    },
    amber: {
        enabled: 'bg-amber-600 hover:bg-amber-500 text-slate-50',
        disabled: 'bg-amber-700 text-slate-400 cursor-not-allowed',
    }
}

const Button = ({
    label,
    loading=false,
    disable=false,
    color='blue'
}: Props) => {

    const [disabled, setDisabled] = useState(false)
    const pickedColor = colors[color]

    useEffect(() => {
        
        
        disable || loading ? setDisabled(true) : setDisabled(false)        
    }, [disable, loading])

  return (
    <button 
        disabled={disabled}
        className={`
            ${disabled === true ? pickedColor.disabled : pickedColor.enabled}  
            py-2 px-4 text-sm rounded-md  mx-auto text-center mt-6`}>
        {loading 
        ? 
        <div className="flex justify-center items-center gap-2">
            <p>Loading</p> 
            <RiLoader2Fill className="animate-spin"/> 
        </div>
        : 
        <p>{label}</p>
        }
    </button>
  )
}

export default Button