import "../App.css"
import GAGR from './Albumi/G&GR.png';
import DRFL from "./Albumi/DRFL.png";
import LND from "./Albumi/LND.png";
import FD from "./Albumi/FD.jpeg";
import WOD from "./Albumi/WOD.jpg";
import KC from "./Singli/15013247194332876388_mq.jpg"
import F2F from "./Singli/artworks-58215cLrlA6BW2Q5-E7f48A-t500x500.jpg"
import R from "./Singli/Benny_Blanco_and_Juice_Wrld_–_Roses.png"
import G from "./Singli/Benny_Blanco_and_Juice_Wrld_Graduation.png"
import HM from './Singli/Ellie_Goulding_and_Juice_Wrld_-_Hate_Me.png';
import GO from "./Singli/Go_(The_Kid_Laroi_and_Juice_Wrld_song).png"
import IMH from "./Singli/Juice_Wrld_-_In_My_Head.jpg"
import TL from "./Singli/Juice_Wrld_-_The_Light.png"
import RS from "./Singli/Real_Shit_by_Juice_Wrld_and_Benny_Blanco.png"

function Songs() {
  return (
    <div className="Songs">
      <h1>Albumi</h1>
      <div className="wrapper">
        <div className="Album">
          <img className="album Cover" src={GAGR}/>  
        </div>
        <div className="Album">
          <img className="album Cover" src={DRFL}/>
          </div>
        <div className="Album">
          <img className="album Cover" src={LND}/>
        </div>
        <div className="Album">
          <img className="album Cover FD" src={FD}/>
        </div>
        <div className="Album">
          <img className="album Cover" src={WOD}/>
        </div>
      </div>
      <h1>Neki Singli</h1>
      <div className="wrapper">
        <div className="Singl"><img src={KC} className="singl Cover"/></div>
        <div className="Singl"><img src={F2F} className="singl Cover"/></div>
        <div className="Singl"><img src={G} className="singl Cover"/></div>
        <div className="Singl"><img src={R} className="singl Cover"/></div>
        <div className="Singl"><img src={HM} className="singl Cover"/></div>
        <div className="Singl"><img src={GO} className="singl Cover"/></div>
        <div className="Singl"><img src={IMH} className="singl Cover"/></div>
        <div className="Singl"><img src={TL} className="singl Cover"/></div>
        <div className="Singl"><img src={RS} className="singl Cover"/></div>
      </div>
    </div>
  );
}
export default Songs;