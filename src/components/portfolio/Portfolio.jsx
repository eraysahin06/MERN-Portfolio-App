import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li className="active">Web App</li>
        <li className="active">Games</li>
        <li className="active">Design</li>
        <li className="active">Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/weather.jpg" alt="" />
          <h3>Movie App</h3>
        </div>
      </div>
    </div>
  )
}

