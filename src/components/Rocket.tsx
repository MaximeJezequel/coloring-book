import { rocketLinePath } from "../data/rocketLinePath"
import { rocketPath } from "../data/rocketPath"

export const Rocket = ({
  fillColors,
  onFill,
}: {
  fillColors: any
  onFill: any
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1400.000000pt"
      height="1400.000000pt"
      viewBox="0 0 1500.000000 1300.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(150.000000,1300.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="black"
        stroke-width="150px"
      >
        {rocketPath.map((path, index) => (
          <path
            key={index}
            onClick={() => onFill(index)}
            fillRule="evenodd"
            fill={fillColors[index]}
            d={path}
          />
        ))}
        {rocketLinePath.map((linePath, index) => (
          <path key={index} d={linePath} />
        ))}
      </g>
    </svg>
  )
}
