import { useState } from "react"
import "./App.css"
import { Esp } from "./components/Esp"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://svgshare.com/i/q5k.svg" target="_blank">
          <img
            src="https://svgshare.com/i/q5k.svg"
            className="logo"
            alt="Vite logo"
          />
        </a>
        {/* <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="svgContainer">
        <Esp></Esp>
      </div>
      <div className="paletteContainer">
        <div className="palette"></div>
        <div className="palette"></div>
        <div className="palette"></div>
        <div className="palette"></div>
        <div className="palette"></div>
        <div className="palette"></div>
      </div>
    </div>
  )
}

export default App
