import "./topbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Eray Sahin</a>
          <div className="itemContainer">
            {/* TODO: ADD LOGO (FONTAWESOME etc.) */}
            <span>+44 444 44 44</span>
          </div>
          <div className="itemContainer">
            {/* TODO: ADD LOGO (FONTAWESOME etc.) */}
            <span>eraysahinmoon@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
