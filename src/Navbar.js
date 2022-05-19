import icon from './icon.png';
import './style.css';


function Navbar() {
  return (
    <nav className="Navbar">
        <img src={icon} className="travelIcon"></img>
        <h5>My travel journal</h5>
    </nav>
  );
}

export default Navbar;
