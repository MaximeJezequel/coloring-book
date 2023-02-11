import { useState } from "react"
import "./App.css"
import { Esp } from "./components/Esp"
import { Palette } from "./components/Palette"

function App() {
  const [fillColors, setFillColors] = useState(Array(5).fill("white"))
  const [currentColor, setCurrentColor] = useState("blue")
  const colors = ["#C31BE0", "#007DFE", "#2FCE29", "#FCF506", "#F60C0D"]

  const onFillColor = (i: number) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)
  }

  return (
    <div className="App">
      <div className="svgContainer">
        <Esp fillColors={fillColors} onFill={onFillColor} />
      </div>
      <div className="color-swatch-container">
        {colors.map((color) => {
          return (
            <Palette
              key={color}
              currentColor={currentColor}
              changeColor={setCurrentColor}
              color={color}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
