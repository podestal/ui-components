import { RiLoader2Fill } from "@remixicon/react"

interface Props {
    label: string
    loading: boolean
}

const Button = ({
    label,
    loading=false,
}: Props) => {
  return (
    <button 
        disabled={loading ? true : false}
        className={`bg-blue-700 text-slate-50 py-2 px-4 text-sm rounded-md hover:bg-blue-600 mx-auto text-center mt-6`}>
        {loading 
        ? 
        <>
            Loading <RiLoader2Fill /> 
        </>
        : label}
    </button>
  )
}

export default Button