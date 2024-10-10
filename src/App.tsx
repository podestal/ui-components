import { useRef, useState } from "react"
import Input from "./components/Input"
import TextArea from "./components/TextArea"
import Button from "./components/Button"

const App = () => {

  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [errorText, seterrorText] = useState('')

  const [loading, setLoading] = useState(false)
  const [disable, setDisable] = useState(false)

  const textRef = useRef<HTMLTextAreaElement>(null)
  const valueRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const value = valueRef.current?.value
    const text = textRef.current?.value
    
    console.log('text',text);

    if(!value && !text) {
      setError('This value is necessary')
      seterrorText('This text is necessary')
      return
    }

    if(!value) {
      setError('This value is necessary')
      return
    }
    
    if (!text) {
      seterrorText('This text is necessary')
      return
    }    
    setDisable(true)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
    
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
          ref={valueRef}
        />
        <TextArea 
          error={errorText}
          ref={textRef}
        />
        <Button 
          label="Submit"
          loading={loading}
          disable={disable}
        />
      </form>
    </div>
  )
}

export default App
