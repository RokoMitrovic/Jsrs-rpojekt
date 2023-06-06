import "../App.css"
import Tablica from "./Tablica"
import Slika1 from "./Slike/Slika1.jpg";
import Slika2 from "./Slike/Slika2.jpg"

function Naslovna() {
  return (
    <div className="Naslovna">
      <img className="Homeimg s1" src={Slika1}/>
      <h1>Malo o Juice Wrld-u</h1>
      <p>
        Jarad Anthony Higgins (2. prosinca 1998. – 8. prosinca 2019.), profesionalno poznat kao Juice Wrld       (stilizirano Juice WRLD), bio je američki reper, pjevač i tekstopisac. 
        Bio je vodeća figura u emo rap žanrovima i SoundCloud rap žanrovima koji su privukli pozornost mainstreama sredinom i krajem 2010-ih. 
        Njegovo umjetničko ime, za koje je rekao da znači "preuzimanje svijeta", potječe iz kriminalističkog trilera Juice (1992).
      </p>
      <p>
        "Lucid Dreams", koji je zauzeo drugo mjesto na US Billboard Hot 100 ljestvici uvršten je na njegov trostruko platinasti debitantski album Goodbye & Good Riddance (2018.), uz singlove "All Girls Are the Same", "Lean wit Me", "Wasted" i "Armed and Dangerous", koji su svi bili na Hot 100 ljestvici. Zatim je surađivao s Futureom na mixtapeu Wrld on Drugs (2018.), a 2019. je objavio svoj drugi album, Death Race for Love koji je sadržavao hit singl "Robbery" i postao Higginsov prvi broj jedan debi na US Billboard 200.
      </p>
      <img className="Homeimg s2" src={Slika2}/>
      <p>
        Higgins je umro od predoziranja drogom 8. prosinca 2019. Njegov prvi posthumni album, Legends Never Die (2020), izjednačio se s rekordima na ljestvici za najuspješniji posthumni debi i za najviše američkih top deset pkesama s jednog albuma, dok je singl "Come & Go" (s Marshmellom) postala Higginsova druga pjesma koja je dosegla drugo mjesto na Hot 100. Njegov drugi posthumni album, Fighting Demons, objavljen je 2021. uz dokumentarni film "Juice Wrld: Into the Abyss", a sadržavao je singl koji je bio među 20 najboljih u SAD-u.
      </p>
      <Tablica></Tablica>
    </div>
  );
}

export default Naslovna;