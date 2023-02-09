import { useState } from "react"
import "./App.css"
import { Esp } from "./components/Esp"
import { Palette } from "./components/Palette"

function App() {
  const [fillColors, setFillColors] = useState(Array(5).fill("white"))
  const [currentColor, setCurrentColor] = useState("blue")

  const onFillColor = (i: number) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)
  }

  return (
    <div className="App">
      <div className="svgContainer">
        <Esp fillColors={fillColors} onFill={onFillColor}></Esp>
      </div>
      <Palette
        currentColor={currentColor}
        changeColor={setCurrentColor}
      ></Palette>
    </div>
  )
}

export default App
