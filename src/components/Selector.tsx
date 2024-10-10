import { useEffect, useState } from "react"

const styles = {
    animation: `
    @keyframes bounce {
      0% {
        transform: translateX(-8%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      25% {
        transform: translateX(8%);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
      50% {
        transform: translateX(-8%);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
      75% {
        transform: translateX(8%);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
      100% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }
  
    .shake {
      animation: bounce 0.4s;
    }
  `
}

interface Item {
    id: number
    name: string
}

interface Props<T extends Item> {
    values: T[] 
    defaultValue?: number 
    setter: (value: number) => void 
    label?: string
    all?: boolean 
    error?: string
}

const Selector = <T extends Item>({ 
    values, 
    defaultValue, 
    setter, 
    label, 
    all ,
    error,
    }: Props<T>) => {
  
    const [showError, setShowError] = useState(false)

    useEffect(() => {   
        error ? setShowError(true) : setShowError(false)
    }, [error])

    const handleSelectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setter(parseInt(e.target.value))
        setShowError(false)
    }

    return (
        <div className={`w-full flex flex-col mx-auto justify-center items-center ${label && 'gap-4'}`}>
            <p className="text-slate-50">{label}</p>
            <style dangerouslySetInnerHTML={{ __html: styles.animation }} />
            <select
                defaultValue={defaultValue} 
                onChange={handleSelectorChange} 
                className={`
                    ${showError ? 'border-red-500 shake' : 'border-gray-800'}
                    bg-gray-950 border-2  rounded-lg w-full text-xs text-slate-50 py-2 px-2`}
            >
                {all 
                ?
                <option value={0}>All</option>
                :
                <>
                { !defaultValue && <option value={0}>Select</option>} 
                </>
                }

                {values.map((value) => (
                    <option key={value.id} value={value.id}>
                        {value.name} 
                    </option>
                ))}
            </select>
            {showError && <p className="text-xs text-red-500 mx-2 mt-4">{error}</p>}
        </div>      
    )
}

export default Selector 