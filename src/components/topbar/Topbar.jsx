import "./topbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Topbar() {
  return (
    <div className="topbar">
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
        </div>
      </div>
    </div>
  )
}
