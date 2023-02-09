export const Palette = ({
  currentColor,
  changeColor,
}: {
  currentColor: string
  changeColor: any
}) => {
  const colors = ["red", "green", "blue", "yellow", "darkmagenta"]

  return (
    <div className="color-swatch-container">
      {colors.map((color) => {
        const activeClass = currentColor === color ? "color-swatch-active" : ""
        return (
          <div
            onClick={() => {
              changeColor(color)
            }}
          >
            <div
              className={`color-swatch ${activeClass}`}
              style={{ backgroundColor: color }}
            ></div>
          </div>
        )
      })}
    </div>
  )
}
