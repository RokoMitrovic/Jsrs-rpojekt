import "../App.css" 
import item1 from "./Items/item (1).jpg"
import item2 from "./Items/item (2).jpg"
import item3 from "./Items/item (3).jpg"
import item4 from "./Items/item (4).jpg"
import item5 from "./Items/item (5).jpg"
import item6 from "./Items/item (6).jpg"
import item7 from "./Items/item (7).jpg"
import item8 from "./Items/item (8).jpg"
import item9 from "./Items/item (9).jpg"
import item10 from "./Items/item (10).jpg"
import item11 from "./Items/item (11).jpg"
import item12 from "./Items/item (12).jpg"
import club999 from "./download (1).png"

function Trgovina() {
  return (
    <div className="Trgovina">
      <div className="wrapper">
        <div><img className="item Cover" src={item1}/></div>
        <div><img className="item Cover" src={item2}/></div>
        <div><img className="item Cover" src={item3}/></div>
        <div><img className="item Cover" src={item4}/></div>
        <div><img className="item Cover" src={item5}/></div>
        <div><img className="item Cover" src={item6}/></div>
        <div><img className="item Cover" src={item7}/></div>
        <div><img className="item Cover" src={item8}/></div>
        <div><img className="item Cover" src={item9}/></div>
        <div><img className="item Cover" src={item10}/></div>
        <div><img className="item Cover" src={item11}/></div>
        <div><img className="item Cover" src={item12}/></div>
        <div><a href="https://999club.com/"><img className="udesno" src={club999}/></a></div>
      </div>
    </div>
  );
}

export default Trgovina;