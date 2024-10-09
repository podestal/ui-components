import { useRef, useState } from "react"
import Input from "./components/Input"

const App = () => {

  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const valueRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const value = valueRef.current?.value
    
    if(value?.length === 0) {
      setError('This value is necessary')
      return
    }
    console.log('Submitted:',value)
    
    
  }

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center bg-slate-950 gap-12"
    >
      <h2 className="text-slate-50 text-5xl">Components</h2>
      <form 
        onSubmit={handleSubmit}
        className="w-[250px]">
        <Input 
          placeholder="Name"
          type="password"
          error={error}
          // value={value}
          // setValue={setValue}
          ref={valueRef}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
