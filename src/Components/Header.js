import "../App.css"
import background from "./Header.png";
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div className="Header">
      <p>Roko Mitrović</p>
      <div id="Header" style={{ backgroundImage: `url(${background})`, height: "300px", width: "100vw" }}></div>
            <table className="navbar">
              <center>
                <tr className="nav">
                    <th className="navbtn"><Link to={'/'} className="link">Naslovna</Link></th>
                    <th className="navbtn"><Link to={'/biography'} className="link">Biografija</Link></th>
                    <th className="navbtn"><Link to={'/songs'} className="link">Pjesme</Link></th>
                    <th className="navbtn"><Link to={'/trgovina'} className="link">Trgovina</Link></th>
                </tr> 
              </center>
            </table>
    </div>
  );
}

export default Header;
