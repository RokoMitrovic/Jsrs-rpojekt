import "../App.css"
import ZTablicu from "./ZaTablicu"

function Tablica() {
    let JuiceWrld = {
        born:"December 2. 1998. Chicago, Illinois",
        died:"December 8. 2019. Oak Lawn, Illinois",
        cod:"Acute oxycodone and codeine intoxication",
        genres:"Hip hop, emo rap, trap, SoundCloud rap, alternative rock, pop trap",
        ay:"2015. - 2019.",

    }
  return (
    <div className="Tablica">
      <ZTablicu ZTablicu={JuiceWrld} />
    </div>
  );
}

export default Tablica;