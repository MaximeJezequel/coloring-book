import coloriage from "../assets/coloriage.png"
import esp from "../assets/esp.svg"
import rocket from "../assets/rocket.svg"

export const Home = ({ setChoice }: { setChoice: any }) => {
  return (
    <div className="home">
      <div className="home-banner">
        <img src={coloriage} alt="Colorbook" />
      </div>
      <div className="home-container">
        <div onClick={() => setChoice(1)} className="home-card">
          <img src={esp} alt="ESP" />
        </div>
        <div onClick={() => setChoice(2)} className="home-card">
          <img src={rocket} alt="Rocket" />
        </div>
      </div>
    </div>
  )
}
