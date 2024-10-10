import { RiLoader2Fill } from "@remixicon/react"
import { useEffect, useState } from "react"

interface Props {
    label: string
    loading?: boolean
    disable?: boolean
}

const Button = ({
    label,
    loading=false,
    disable=false
}: Props) => {

    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        disable || loading ? setDisabled(true) : setDisabled(false)        
    }, [disable, loading])

  return (
    <button 
        disabled={disabled}
        className={`
            ${disabled === true ? 'bg-blue-800 text-slate-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-600 text-slate-50'}  
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