import { useState } from "react"
import "./works.scss"

export default function Works() {

  const [currentSlide, setCurrentSlider] = useState(0);

  const data = [
    {
      id: "1",
      icon: "assets/mobile.png",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi",
      img: "assets/mobile.png",
    },
    {
      id: "2",
      icon: "assets/globe.png",
      title: "Mobile App",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi",
      img: "assets/mobile.png",
    },
    {
      id: "3",
      icon: "assets/writing.png",
      title: "Branding",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi",
      img: "assets/mobile.png",
    },
  ]

  const handleClick = (way) => {
    way === "left" ? setCurrentSlider(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlider(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="image" />
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="/assets/Weather.jpg" alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" alt="left arrow" className="arrow left" onClick={() =>handleClick("left")}/>
      <img src="assets/arrow.png" alt="right arrow" className="arrow right" onClick={() =>handleClick()} />
    </div>
  )
}
