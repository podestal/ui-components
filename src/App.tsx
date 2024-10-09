import Input from "./components/Input"

const App = () => {

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center bg-slate-950 gap-12"
    >
      <h2 className="text-slate-50 text-5xl">Components</h2>
      <div className="w-[250px]">
        <Input 
          error=""
          type="password"
        />
      </div>
    </div>
  )
}

export default App
